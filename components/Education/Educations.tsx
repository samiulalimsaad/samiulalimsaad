const Educations = () => {
    return (
        <div>
            <ul className="p-4 steps steps-vertical lg:steps-horizontal">
                <li data-content="2021" className="step step-error">
                    <div className="mt-8 space-y-2 text-xl">
                        <h3 className="text-warning">
                            Computer Science & Engineering (CSE)
                        </h3>
                        <h4 className="text-success">Bachelor of Science</h4>
                        <h5 className="text-info">
                            North Bengal International University
                        </h5>
                    </div>
                </li>
                <li data-content="2016" className="step step-warning">
                    <div className="mt-8 space-y-2 text-xl">
                        <h3 className="text-warning">
                            Higher School Certificate (HSC)
                        </h3>
                        <h4 className="text-success">Science</h4>
                        <h5 className="text-info">
                            Rajshahi University School & College
                        </h5>
                    </div>
                </li>
                <li data-content="2014" className="step step-success">
                    <div className="mt-8 space-y-2 text-xl">
                        <h3 className="text-warning">
                            Secondary School Certificate (SSC)
                        </h3>
                        <h4 className="text-success">Science</h4>
                        <h5 className="text-info">
                            Rajshahi Adarsha High School
                        </h5>
                    </div>
                </li>
                <li data-content="2011" className="step step-secondary">
                    <div className="mt-8 space-y-2 text-xl">
                        <h3 className="text-warning">
                            Junior School Certificate (JSC)
                        </h3>
                        <h4 className="text-success"> </h4>
                        <h5 className="text-info">
                            Rajshahi Adarsha High School
                        </h5>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Educations;
