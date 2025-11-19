import React, { useEffect, useState } from "react";
import "./editTask.css";

export default function EditTask({ isOpen, onClose, task, save }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="editTask">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label
            htmlFor="title"
            style={{ fontSize: "23px", fontWeight: "500" }}
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              height: "30px",
              width: "180px",
              paddingLeft: "8px",
              marginBottom: "5px",
            }}
          />
          <label
            htmlFor="description"
            style={{ fontSize: "23px", fontWeight: "500" }}
          >
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              height: "30px",
              width: "180px",
              paddingLeft: "8px",
              marginBottom: "5px",
            }}
          />
          <label
            htmlFor="title"
            style={{ fontSize: "23px", fontWeight: "500" }}
          >
            Status
          </label>
          <select
            name="status"
            style={{ height: "30px", width: "105px", cursor: "pointer" }}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div
          style={{
            marginTop: "20px",
            width: "170px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{ backgroundColor: "#7edb67c9" }}
            onClick={() => save({ title, description, status })}
          >
            Save
          </button>
          <button style={{ backgroundColor: "#ff4c4c" }} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
