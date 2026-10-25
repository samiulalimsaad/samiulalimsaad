export type Certification = {
    id: string;
    name: string;
    issuer: string;
    completed: string;
    completedAt: string;
    verifyUrl: string;
    focus: string;
};

export const certifications: Certification[] = [
    {
        id: "AHFC2TE116Q9",
        name: "Secure Software Design",
        issuer: "University of Colorado System",
        completed: "Oct 2026",
        completedAt: "2026-10-07",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/AHFC2TE116Q9",
        focus: "Threat modeling, secure design, and application security.",
    },
    {
        id: "5WJRDTHTWM6Y",
        name: "Microservices Architecture: Design Patterns & Principles",
        issuer: "Packt",
        completed: "Sep 2026",
        completedAt: "2026-09-29",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/5WJRDTHTWM6Y",
        focus: "Service communication, CQRS, deployment, and reliability patterns.",
    },
    {
        id: "BO99VNOUHZET",
        name: "Google Cybersecurity",
        issuer: "Google",
        completed: "Sep 2026",
        completedAt: "2026-09-22",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/BO99VNOUHZET",
        focus: "Security operations, Linux, SQL, and incident response.",
    },
    {
        id: "DL6JR2J3UX1T",
        name: "IBM DevOps and Software Engineering",
        issuer: "IBM",
        completed: "Sep 2026",
        completedAt: "2026-09-21",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/DL6JR2J3UX1T",
        focus: "CI/CD, containers, microservices, and observability.",
    },
    {
        id: "99KHSLKGQ6HV",
        name: "Software Design and Architecture",
        issuer: "University of Alberta",
        completed: "Sep 2026",
        completedAt: "2026-09-20",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/99KHSLKGQ6HV",
        focus: "Object-oriented design, design patterns, and service-oriented architecture.",
    },
    {
        id: "D54YK8WMTMBU",
        name: "AWS Cloud Solutions Architect",
        issuer: "Amazon Web Services",
        completed: "Sep 2026",
        completedAt: "2026-09-17",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/D54YK8WMTMBU",
        focus: "Cloud architecture, data lakes, IAM, and AWS solution design.",
    },
];
