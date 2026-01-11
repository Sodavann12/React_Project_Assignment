import React from "react";
import { Pencil, Trash2, Calendar } from "lucide-react";
import Checkbox from "../ui/Checkbox";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function TaskCard({ task, onToggleComplete, onEdit, onDelete }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Work":
        return "bg-blue-100 border-blue-400";
      case "Personal":
        return "bg-pink-100 border-pink-400";
      case "Study":
        return "bg-purple-100 border-purple-400";
      case "Health":
        return "bg-green-100 border-green-400";
      default:
        return "bg-gray-100 border-gray-400";
    }
  };

  const getPriorityEmoji = (priority) => {
    switch (priority) {
      case "high":
        return "🔥";
      case "medium":
        return "⭐";
      case "low":
        return "💚";
      default:
        return "📌";
    }
  };

  return (
    <div className="card-pill" style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <Checkbox
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                className={`task-title ${
                  task.completed ? "strikethrough" : ""
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p
                  className={`task-desc ${
                    task.completed ? "strikethrough" : ""
                  }`}
                >
                  {task.description}
                </p>
              )}
            </div>
            <Badge color="#FFD93D">{getPriorityEmoji(task.priority)}</Badge>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <Badge className={getCategoryColor(task.category)}>
              {task.category}
            </Badge>
            {task.date && (
              <Badge color="#FFF" style={{ border: "2.5px solid #E8ECEF" }}>
                <Calendar size={14} strokeWidth={3} />
                {new Date(task.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </Badge>
            )}
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button
              onClick={() => onEdit(task)}
              variant="purple"
              icon={<Pencil size={16} strokeWidth={3} />}
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
            >
              Edit
            </Button>
            <Button
              onClick={() => onDelete(task.id)}
              variant="red"
              icon={<Trash2 size={16} strokeWidth={3} />}
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
