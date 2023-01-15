import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleRef = () => {
        inputRef.current.focus();
        console.log(inputRef.current);
    };

    const handleInputWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                id="email"
                type="text"
                className="form-control"
            />

            <button className="btn btn-primary" onClick={handleRef}>
                Фокус на ипнут
            </button>
            <button className="btn btn-secondary" onClick={handleInputWidth}>
                Уменшить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
