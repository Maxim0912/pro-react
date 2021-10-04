import React, { useEffect } from "react";

export default function Child({ updateOne, updateTwo, computed }) {
    useEffect(() => {
        updateOne();
    }, [updateOne]);

    useEffect(() => {
        updateTwo();
    }, [updateTwo]);

    return (
        <>
            <div>{computed}</div>
            <div>Child</div>
        </>
    );
}
