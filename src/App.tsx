import React from "react";
import Textfield from "./Textfield";
import Counter from "./counter";

const App: React.FC = () => {
    return (
        <div>
            <Textfield
                name="Chris"
                age={31}
                alive={true}
                person={{ firstName: "Chris", lastName: "Barber-Riley" }}
            />

            <Counter>
                {(count, setCount) => (
                    <div>
                        {count}{" "}
                        <button onClick={() => setCount(count + 1)}>
                            click me
                        </button>
                    </div>
                )}
            </Counter>
        </div>
    );
};

export default App;
