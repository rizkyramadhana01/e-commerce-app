import React from 'react';
import IMAGE3 from '../Image/2tak-logo.png';

const DesignPoppular3 = () => {
    return (
        <div class="col mb-5">
        <div class="card shadow p-2 bg-body rounded">
            <img class="card-img-top" src={ IMAGE3 } alt="" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">2TAK LOVERS</h5>
                    $40.00 - $80.00
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    </div>
    );
}

export default DesignPoppular3;