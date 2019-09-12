import React, { useState, useRef } from "react";

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
    // It is automatically defered as default, but we can be explicit in allowing more types
    const [age, setAge] = useState<number | null | string>(31);

    // setAge(null); // works as we've declared it (although infinite loop)
    // setAge(undefined); // we haven't declare undefined so it fails

    // const [name, setName] = useState<{ name: string }>(31); // fails
    const [name, setName] = useState<{ name: string }>({ name: "Chris" }); // passes
    // setName({ name: "chris" }); // passes

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} />
        </div>
    );
};

export default Textfield;
