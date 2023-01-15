import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    console.log("run factorial");
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(0);
    const [otherState, setOtherState] = useState(true);

    useEffect(() => {
        console.log("render");
    });

    const fact = useMemo(() => {
        factorial(value);
    }, [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>значение: {value}</p>
                <p>текущее: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Увелчить
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    Уменьшить
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={
                        "btn mx-2 btn-" + (otherState ? "primary" : "secondary")
                    }
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    Изменить цвет
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
