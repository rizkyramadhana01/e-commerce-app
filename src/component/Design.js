import React from 'react';
import Nav from './Nav';
import DesignPoppular from './DesignPoppular';
import DesignPoppular2 from './DesignPoppular2';
import DesignPoppular4 from './DesignPoppular4';
import Footer from './Footer';

const Design = () => {
    return (
        <>
            <Nav />
            <section className="py-2">
                <div className="container my-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xxl-4">
                        <DesignPoppular />
                        <DesignPoppular2 />
                        <DesignPoppular4 />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Design;