import React from 'react';
import { Check } from 'lucide-react';

export default function Checkbox({ checked, onChange }) {
    return (
        <div
            onClick={onChange}
            className={`checkbox-pill ${checked ? 'checked' : ''}`}
            style={{ marginTop: '0.25rem' }}
            >
            {checked && <Check size={18} color="white" strokeWidth={3} />}
        </div>
    );
}