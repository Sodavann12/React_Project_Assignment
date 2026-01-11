import React from 'react';
import { Check, X } from 'lucide-react';
import Input from '../ui/Input';
import RadioButton from '../ui/RadioButton';
import Button from '../ui/Button';

export default function TaskForm({ formData, editingId, onSubmit, onCancel, onChange }) {
    const handleInputChange = (field, value) => {
        onChange({ ...formData, [field]: value });
    };

    return (
        <div className="card-pill" style={{ padding: '1.5rem' }}>
        <h2 style={{ 
            fontSize: '1.35rem', 
            fontWeight: '800', 
            marginBottom: '1.25rem', 
            letterSpacing: '-0.02em' 
        }}>
            {editingId ? '✏️ Edit Task' : '➕ New Task'}
        </h2>
        
        <div style={{ marginBottom: '1rem' }}>
            <Input
            label="Task Title"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="What needs to be done?"
            autoFocus
            />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
            <Input
            label="Description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Add details..."
            type="textarea"
            rows={3}
            />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input
            label="Due Date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            type="date"
            />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
            display: 'block', 
            fontWeight: '700', 
            fontSize: '0.875rem', 
            marginBottom: '0.75rem', 
            color: '#1a1a1a' 
            }}>
            Category
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {['Personal', 'Work', 'Study', 'Health'].map((cat) => (
                <RadioButton
                key={cat}
                label={cat}
                checked={formData.category === cat}
                onChange={() => handleInputChange('category', cat)}
                />
            ))}
            </div>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ 
            display: 'block', 
            fontWeight: '700', 
            fontSize: '0.875rem', 
            marginBottom: '0.5rem', 
            color: '#1a1a1a' 
            }}>
            Priority
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['low', 'medium', 'high'].map((priority) => (
                <button
                key={priority}
                onClick={() => handleInputChange('priority', priority)}
                className="btn-pill"
                style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: formData.priority === priority ? '#C9B4F5' : 'white',
                    fontSize: '0.85rem'
                }}
                >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </button>
            ))}
            </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button
            onClick={onSubmit}
            variant="green"
            icon={<Check size={18} strokeWidth={3} />}
            style={{ flex: 1 }}
            >
            {editingId ? 'Update' : 'Add'}
            </Button>
            <Button
            onClick={onCancel}
            variant="gray"
            icon={<X size={18} strokeWidth={3} />}
            style={{ flex: 1 }}
            >
            Cancel
            </Button>
        </div>
        </div>
    );
}