import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="container px-2 mx-auto sm:px-0">{children}</div>;
};

export default Container;
