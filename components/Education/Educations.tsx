const educations = [
    {
        degree: "Master's of Science",
        subject: "Computer Science & Engineering (CSE)",
        institute: "Rajshahi University",
        year: "2023",
        className: "step-success",
        animation: "fade-down",
    },
    {
        degree: "Bachelor of Science",
        subject: "Computer Science & Engineering (CSE)",
        institute: "North Bengal International University",
        year: "2021",
        className: "step-error",
        animation: "fade-up",
    },
    {
        degree: "Higher School Certificate (HSC)",
        subject: "Science",
        institute: "Rajshahi University School & College",
        year: "2016",
        className: "step-warning",
        animation: "fade-down",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        subject: "Science",
        institute: "Rajshahi Adarsha High School",
        year: "2014",
        className: "step-success",
        animation: "fade-up",
    },
    {
        degree: "Junior School Certificate (JSC)",
        subject: "",
        institute: "Rajshahi Adarsha High School",
        year: "2011",
        className: "step-secondary",
        animation: "fade-down",
    },
];

const Educations = () => {
    return (
        <div>
            <ul className="p-4 steps steps-vertical lg:steps-horizontal">
                {educations.map((v) => (
                    <li
                        key={v.degree}
                        data-content={v.year}
                        className={`step ${v.className}`}
                        data-aos={v.animation}
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                    >
                        <div className="mt-8 space-x-4 space-y-2 text-xl">
                            <h3 className="text-warning">{v.subject}</h3>
                            <h4 className="text-success">{v?.degree}</h4>
                            <h5 className="text-info">{v.institute}</h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Educations;
