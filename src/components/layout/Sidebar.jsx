import React from 'react';
import { Plus } from 'lucide-react';
import StatsCard from '../stats/StatsCard';
import TaskForm from '../task/TaskForm';
import Button from '../ui/Button';

export default function Sidebar({ 
    items, 
    isAdding, 
    editingId,
    formData,
    onStartAdd, 
    onSubmit, 
    onCancel,
    onFormChange 
    }) {
    const totalTasks = items.length;
    const completedTasks = items.filter(i => i.completed).length;
    const pendingTasks = items.filter(i => !i.completed).length;

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <StatsCard 
                number={totalTasks}
                label="Total Tasks"
                color="#C9B4F5"
                emoji="📋"
                />
                <StatsCard 
                number={completedTasks}
                label="Completed"
                color="#6BCF7F"
                emoji="✅"
                />
                <StatsCard 
                number={pendingTasks}
                label="Pending"
                color="#FFD93D"
                emoji="⏳"
                />
            </div>

            {!isAdding && (
                <Button
                onClick={onStartAdd}
                variant="yellow"
                fullWidth
                icon={<Plus size={20} strokeWidth={3} />}
                style={{ padding: '1.25rem' }}
                >
                Create New Task
                </Button>
            )}

            {isAdding && (
                <TaskForm
                formData={formData}
                editingId={editingId}
                onSubmit={onSubmit}
                onCancel={onCancel}
                onChange={onFormChange}
                />
            )}
        </div>
    );
}