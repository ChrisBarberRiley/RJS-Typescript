import React from "react";
import Textfield from "./Textfield";

const App: React.FC = () => {
    return (
        <div>
            <Textfield
                name="Chris"
                age={31}
                alive={true}
                person={{ firstName: "Chris", lastName: "Barber-Riley" }}
            />
        </div>
    );
};

export default App;
