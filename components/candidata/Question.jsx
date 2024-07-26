"use client"

import React from "react";

export const Question = ({ data, onChangeRange }) => {
    const { id, phase, order, question, calificacion } = data;

    return (
        <div className="flex items-center justify-between space-x-10 border-2 border-bluebeauty px-3 py-2 rounded-md">
            <div>
                <p>
                    {order}. {question}
                </p>
            </div>
            <div className="flex space-x-5">
                <input
                    type="range"
                    min={1}
                    max={10}
                    value={calificacion}
                    className="accent-goldbeauty"
                    onChange={e => onChangeRange(
                        id,
                        phase,
                        order,
                        e.target.value,
                    )}
                />
                <label htmlFor="">
                    {calificacion}
                </label>
            </div>
        </div>
    );
};