import React from 'react';

export default function StatsCard({ number, label, color, emoji }) {
    return (
        <div 
        className="card-pill" 
        style={{ 
            padding: '1.5rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}
        >
        <div>
            <div className="stat-number" style={{ color }}>{number}</div>
            <div className="stat-label">{label}</div>
        </div>
        <div style={{ fontSize: '3rem' }}>{emoji}</div>
        </div>
    );
}