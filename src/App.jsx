import React, { useState } from 'react';
import './style/global.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import TaskList from './components/task/TaskList';

export default function App() {
  const [items, setItems] = useState([
    { 
      id: 1, 
      title: 'Buy groceries', 
      description: 'Milk, eggs, bread', 
      priority: 'high', 
      completed: false, 
      category: 'Personal', 
      date: '2026-01-15' 
    },
    { 
      id: 2, 
      title: 'Finish project', 
      description: 'Complete the CRUD app', 
      priority: 'medium', 
      completed: false, 
      category: 'Work', 
      date: '2026-01-20' 
    },
    { 
      id: 3, 
      title: 'Review pull requests', 
      description: 'Check team code reviews', 
      priority: 'high', 
      completed: true, 
      category: 'Work', 
      date: '2026-01-12' 
    },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    priority: 'medium', 
    category: 'Personal', 
    date: '' 
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    if (!formData.title.trim()) return;

    if (editingId) {
      setItems(items.map(item => 
        item.id === editingId 
          ? { ...item, ...formData }
          : item
      ));
      setEditingId(null);
    } else {
      setItems([...items, { 
        id: Date.now(), 
        ...formData, 
        completed: false 
      }]);
    }
    
    setFormData({ 
      title: '', 
      description: '', 
      priority: 'medium', 
      category: 'Personal', 
      date: '' 
    });
    setIsAdding(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({ 
      title: item.title, 
      description: item.description, 
      priority: item.priority, 
      category: item.category, 
      date: item.date 
    });
    setIsAdding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ 
      title: '', 
      description: '', 
      priority: 'medium', 
      category: 'Personal', 
      date: '' 
    });
  };

  const handleStartAdd = () => {
    setIsAdding(true);
    setEditingId(null);
  };

  return (
    <div className="web-container">
      <Header />
      
      <div className="grid-layout">
        <Sidebar
          items={items}
          isAdding={isAdding}
          editingId={editingId}
          formData={formData}
          onStartAdd={handleStartAdd}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          onFormChange={setFormData}
        />
        
        <TaskList
          items={items}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleComplete={toggleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}