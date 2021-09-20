import React, { Fragment } from "react";
import classes from './HomeSection.module.css';

const HomeSection = () => {

    return <Fragment>
        <section className="home" id="home">
            <div className="maxWidth">
                <div className="homeContent">
                    <div className='text1'>Hello, my name is</div>
                    <div className="text2">Bizimungu Pascal</div>
                    <div className="text3">And I'm <span>Trainer</span></div>

                </div>

            </div>
        </section>
    </Fragment>

}
export default HomeSection;