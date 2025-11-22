import React from "react";

interface CheckIconProps {
    size?: number;
    color?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ size = 20, color = "var(--color-success)" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
    >
        <path
            d="M20 6L9 17L4 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
