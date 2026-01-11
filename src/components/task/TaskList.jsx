import React from 'react';
import { Search } from 'lucide-react';
import TaskCard from './TaskCard';
import Input from '../ui/Input';

export default function TaskList({ 
    items, 
    searchTerm, 
    onSearchChange,
    onToggleComplete, 
    onEdit, 
    onDelete 
    }) {
    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div style={{ marginBottom: '1.5rem' }}>
                <Input
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search tasks..."
                icon={<Search size={20} strokeWidth={3} />}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredItems.length === 0 ? (
                <div className="card-pill" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#6b7280', margin: 0 }}>
                    {searchTerm ? 'No tasks found' : 'No tasks yet! Create one to get started'}
                    </p>
                </div>
                ) : (
                filteredItems.map((item) => (
                    <TaskCard
                    key={item.id}
                    task={item}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    />
                ))
                )}
            </div>
        </div>
    );
}