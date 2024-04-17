import React from 'react';
import "./Tip.css";

interface TipProps {
    text: string;
}

const Tip: React.FC<TipProps> = ({ text }) => {
    return (
        <div className="tip-component">
            <p>{text}</p>
        </div>
    );
};

export default Tip;