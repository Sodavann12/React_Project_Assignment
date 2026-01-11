import React from 'react';

export default function Badge({ children, color, className = '', style = {} }) {
    return (
        <span 
        className={`badge-pill ${className}`}
        style={{ 
            background: color || 'transparent',
            ...style
        }}
        >
        {children}
        </span>
    );
}