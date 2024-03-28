import React from "react";

const LazyEvents = () => {
    const handleClick = () => {
        import("./onclick");
    };
    return (
        <div>
            LazyEvents
            <button onClick={handleClick}>submeter</button>
        </div>
    );
};

export default LazyEvents;
