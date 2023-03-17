// import { useEffect, useState } from "react"
// import initializeAuthentication from "../Firebase/firebase.initialize"
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";

// initializeAuthentication();
// const useFirebase = () => {
//     const [user, setUser] = useState({})
//     const [error, setError] = useState("")
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user)
//             } else {

//             }
//         })
//     }, [])

//     const signInUsingGoogle = () => {
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 setUser(result.user);

//             }).catch((error) => {
//                 setError(error.message);
//             });
//     }

//     const signInUsingEmailandPassword = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 setUser(userCredential.user);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 // ..
//             });
//     }

//     const logout = () => {
//         signOut(auth).then(() => {
//             setUser({})
//         })
//     }

//     return {
//         user,
//         error,
//         signInUsingGoogle,
//         logout
//     }
// }

// export default useFirebase;

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //Firebase
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Register user using email & password
    const handleRegisterUser = (email, password, name, history) => {
        console.log("entered")
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                //update user information in firebase
                updateUserInfo(name);
                //save user on Database
                saveUser(email, name, password, "POST");

                setErrorMessage("");
                history("/");
                console.log("user.email")
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Function to update user info in firebase
    const updateUserInfo = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                setErrorMessage("");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    //Login using email and password
    const logIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setErrorMessage("");

                const destination = location?.state?.from || "/";
                history(destination);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Sign in with google
    const googleSignIn = (history, location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setErrorMessage("");

                saveUser(user.email, user.displayName, "", "PUT");
                const destination = location?.state?.from || "/";
                history(destination);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    ///Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setErrorMessage("");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                setUser(user);
                // getIdToken(user).then((idToken) => setToken(idToken));
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unSubscribe;
    }, [auth]);

    //function to save user on database
    const saveUser = (email, name, password, method) => {
        const newUser = { email, displayName: name, password, role: 'user' };

        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    ///check if user is Admin or not
    // useEffect(() => {
    //     fetch(`https://dry-gorge-11173.herokuapp.com/users/${user.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {

    //             setIsAdmin(data.admin);
    //         });
    // }, [user]);

    return {
        user,
        isLoading,
        errorMessage,
        isAdmin,
        handleRegisterUser,
        logOut,
        logIn,
        googleSignIn,
        setErrorMessage,
    };
};

export default useFirebase;