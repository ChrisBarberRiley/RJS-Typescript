import React from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    name: string;
    age: number;
    alive: boolean;
    fn?: (name: string) => string;
    person: Person;
}

const Textfield: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    );
};

export default Textfield;
