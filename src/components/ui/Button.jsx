import React from 'react';

export default function Button({ 
    children, 
    onClick, 
    variant = 'gray', 
    icon, 
    fullWidth = false,
    style = {},
    ...props 
    }) {
    const variantClass = `btn-${variant}`;
    
    return (
        <button
            onClick={onClick}
            className={`btn-pill ${variantClass}`}
            style={{
                width: fullWidth ? '100%' : 'auto',
                ...style
            }}
            {...props}
            >
            {icon && icon}
            {children}
        </button>
    );
}