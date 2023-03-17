
import React from "react";
import bannerImage from '../../Image/img-try.svg';
import './TestSummary.css';
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const TestSummary = (props) => {
    const { user } = useAuth();
    const { _id, bandScore } = props.test;

    return (
        <div className="card product-detail mb-3 text-start" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={bannerImage}
                        className="img-fluid my-order-img rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body manage-order-card">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <div>
                                <h6>
                                    <small className="text-gray">Examinee: </small> {user.name}{" "}
                                </h6>
                                <h6>band Score: {bandScore}</h6>
                                <Link to={`/redo-exam/${_id}`}>
                                    <button
                                        // onClick={() => props.handleDelete(_id)}
                                        className="customized-btn2"
                                    >
                                        Redo Exam
                                    </button>
                                </Link>

                                <Link to={`/test-details/${_id}`}>
                                    <button
                                        // onClick={() => props.handleDelete(_id)}
                                        className="customized-btn2"
                                    >
                                        Show Details
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <h6>
                                    <i className="fas fa-map-marker-alt"></i> Test Type: Academic
                                </h6>
                                <h6>
                                    <i className="fas fa-mobile"></i> Date: 3/17/2021
                                </h6>
                                <h6>
                                    Overall Result: Passed
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestSummary;


// import React from 'react';
// import bannerImage from '../../Image/img-try.svg';
// import './TestSummary.css';

// const TestSummary = () => {
//     return (
//         <div className="card test-summary-card">
//             <div className="row g-0">
//                 <div className="col-md-3 d-flex align-items-center justify-content-center px-5">
//                     <img src={bannerImage} alt="Test icon" className="test-icon" />
//                 </div>
//                 <div className="col-md-9">
//                     <div className="card-body d-flex justify-content-center">
//                         <div className="test-details d-flex flex-column align-items-start">
//                             <h5 className="card-title">Test Summary</h5>
//                             <p className="card-text"><strong>Band Score:</strong> 7.5</p>
//                             <p className="card-text"><strong>Test Type:</strong> Academic</p>
//                             <p className="card-text"><strong>Test Date:</strong> 10/05/2022</p>
//                             <p className="card-text"><strong>Overall Result:</strong> Passed</p>
//                         </div>
//                         {/* <button className="btn show-details-btn">Show Details</button> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestSummary;
