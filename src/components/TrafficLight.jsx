import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");
    const [showPurple, setShowPurple] = useState(false);

    const handleLightClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const handleAddPurple = () => {
        setShowPurple(true);
    };

    return (
        <div className="traffic-light-container">
            <div
                className={`light red ${color === "red" ? "selected" : ""}`}
                onClick={() => handleLightClick("red")}
            ></div>
            <div
                className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                onClick={() => handleLightClick("yellow")}
            ></div>
            <div
                className={`light green ${color === "green" ? "selected" : ""}`}
                onClick={() => handleLightClick("green")}
            ></div>

            {showPurple && (
                <div
                    className={`light purple ${color === "purple" ? "selected" : ""}`}
                    onClick={() => handleLightClick("purple")}
                ></div>
            )}

            <button className="add-purple-button" onClick={handleAddPurple}>
                Add Purple Light
            </button>
        </div>
    );
};

export default TrafficLight;
