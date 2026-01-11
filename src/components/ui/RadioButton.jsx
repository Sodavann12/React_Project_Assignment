import React from 'react';

export default function RadioButton({ label, checked, onChange }) {
    return (
        <div onClick={onChange}  className={`radio-pill ${checked ? 'active' : ''}`} >
            <div className={`radio-circle ${checked ? 'checked' : ''}`}>
                {checked && (
                <div style={{ 
                    width: '10px', 
                    height: '10px', 
                    background: 'white', 
                    borderRadius: '50%' 
                }} />
                )}
            </div>
            <span style={{ fontSize: '0.85rem' }}>{label}</span>
        </div>
    );
}