import React from 'react';
import bannerImage from '../../Image/img-try.svg';
import './TestSummary.css';

const TestSummary = () => {
    return (
        <div className="card test-summary-card">
            <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center px-5">
                    <img src={bannerImage} alt="Test icon" className="test-icon" />
                </div>
                <div className="col-md-9">
                    <div className="card-body d-flex justify-content-center">
                        <div className="test-details d-flex flex-column align-items-start">
                            <h5 className="card-title">Test Summary</h5>
                            <p className="card-text"><strong>Band Score:</strong> 7.5</p>
                            <p className="card-text"><strong>Test Type:</strong> Academic</p>
                            <p className="card-text"><strong>Test Date:</strong> 10/05/2022</p>
                            <p className="card-text"><strong>Overall Result:</strong> Passed</p>
                        </div>
                        {/* <button className="btn show-details-btn">Show Details</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestSummary;
