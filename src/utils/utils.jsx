import React from "react";

export const Button = ({
    id,
    className,
    onClick,
    children,
    type = "button",
}) => {
    return (
        <button
            id={id}
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};