import React from 'react';

export default function Input({ 
    label, 
    value, 
    onChange, 
    placeholder, 
    type = 'text',
    icon,
    rows = 3,
    autoFocus = false
    }) {
    const isTextarea = type === 'textarea';
    
    return (
        <div>
            {label && (
                <label style={{ 
                display: 'block', 
                fontWeight: '700', 
                fontSize: '0.875rem', 
                marginBottom: '0.5rem', 
                color: '#1a1a1a' 
                }}>
                {label}
                </label>
            )}
        
            <div className={icon ? 'search-container' : ''}>
                {icon && <div className="search-icon">{icon}</div>}
                
                {isTextarea ? (
                <textarea
                    className={`input-pill ${icon ? 'input-with-icon' : ''}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    style={{ resize: 'none' }}
                    autoFocus={autoFocus}
                />
                ) : (
                <input
                    type={type}
                    className={`input-pill ${icon ? 'input-with-icon' : ''}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                />
                )}
            </div>
        </div>
    );
}