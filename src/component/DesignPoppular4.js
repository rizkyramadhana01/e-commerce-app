import React from 'react';
import IMAGE3 from '../Image/oto-logo.png';

const DesignPoppular = () => {
    return (
        <div className="">
            <div className="card shadow p-2 bg-body rounded">
            <div className="mt-2 mx-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="py-2 px-3 border bg-light rounded">
                                <span className="fw-bold text-muted">New</span>
                            </div>
                        </div>
                        <div>
                            <h3>
                                <i className="bi bi-list-ul me-2 text-muted"></i>
                                <i className="bi bi-heart text-muted"></i>
                            </h3>
                        </div>
                    </div>
                </div>
                <img className="card-img-top" src={IMAGE3} alt="" />
                <div className="card-body p-1">
                    <div className="text-center">
                        <h5 className="fw-bolder pb-4">OTO HOME</h5>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="star me-3 mb-2 align-items-center">
                            <h4>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                            </h4>
                        </div>
                        <div className="pt-2 pe-5 ps-1 border rounded-start">
                            <span className="fw-bolder text-muted">$70.00</span>
                        </div>
                        <div className="pt-2 px-2 border rounded-end">
                            <a className="text-muted"><h5><i className="bi bi-cart-plus-fill"></i></h5></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DesignPoppular;