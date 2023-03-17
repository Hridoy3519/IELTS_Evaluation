import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Test from './Pages/Test/Test/Test';
import SignUpPage from './Pages/Sigmup&Login/SignupPage/SignupPage';
import LoginPage from './Pages/Sigmup&Login/LoginPage/LoginPage';
import initializeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import TestList from './Pages/MyTest/TestList/TestList';
import RedoExam from './Pages/Test/RedoExam/RedoExam';
import TestDetails from './Pages/Test/TestDetails/TestDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/TestList" element={<TestList />} />
            <Route path="/redo-exam/:id" element={<RedoExam />} />
            <Route path="/test-details/:id" element={<TestDetails />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
