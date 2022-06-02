import Image from "next/image";
import React from "react";
import SamiulAlim from "../images/samiul-alim.svg";
const Hero = () => {
    return (
        <div
            className="hero min-h-screen bg-base-200"
            style={{ background: `url(hero-space.png)` }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={SamiulAlim}
                    alt="Hero"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
