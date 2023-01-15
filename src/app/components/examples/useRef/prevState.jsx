import React, { useRef, useState, useEffect } from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevRender = useRef("");
    const [currentRender, setCurrentRender] = useState("false");

    const toogleCount = () => {
        setCurrentRender((prev) => (prev === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevRender.current = currentRender;
    }, [currentRender]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />

            <p>prevRender: {prevRender.current}</p>
            <p>currentRender: {currentRender}</p>
            <button className="btn btn-primary" onClick={toogleCount}>
                Run
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
