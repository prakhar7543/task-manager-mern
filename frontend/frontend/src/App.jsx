import { useEffect, useState } from "react";
import "./App.css";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskServices";
import EditTask from "./components/editTask";

function App() {
  let [task, setTask] = useState([]);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("todo");
  let [showEdit, setShowEdit] = useState(false);
  let [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    loadTask();
  }, []);

  let loadTask = async () => {
    try {
      let data = await getTasks();
      setTask(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  let handleClick = async () => {
    if (!title || !description || !status) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createTask({ title, description, status });
      setTitle("");
      setDescription("");
      setStatus("todo");
      loadTask();
    } catch (error) {
      console.error("Error Adding Task", error);
    }
  };

  let handleEdit = async (item) => {
    setCurrentTask(item);
    setShowEdit(true);
  };

  let handleDelete = async (item) => {
    try {
      await deleteTask(item._id);
      loadTask();
    } catch (error) {
      console.error("Something Went Wrong", error);
    }
  };

  let handleSave = async (updatedData) => {
    try {
      await updateTask(currentTask._id, updatedData);
      setShowEdit(false);
      loadTask();
    } catch (error) {
      console.error("Error in Updating Task", error);
    }
  };

  return (
    <main style={{ height: "100%", overflowY: "hidden" }}>
      <nav style={{ backgroundColor: "grey", width: "100vw", height: "70px" }}>
        <h1 style={{ margin: "unset", color: "white" }}>Task Manager</h1>
      </nav>

      <section
        className="hero"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          backgroundColor: "whiteSmoke",
          height: "100%",
        }}
      >
        <section
          className="taskList"
          style={{ borderRight: "1px solid black" }}
        >
          <h2 style={{ marginBottom: "50px" }}>Task List</h2>
          {task &&
            task.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid #80808036",
                  width: "620px",
                  borderRadius: "20px",
                  alignItems: "center",
                  margin: "auto",
                  marginBottom: "20px",
                  padding: "8px",
                  backgroundColor: "white",
                }}
              >
                <div className="description" style={{ paddingLeft: "30px" }}>
                  <p>Tilte: {item.title}</p>
                  <p>Description: {item.description}</p>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <span>
                      Status: <span>{item.status}</span>
                    </span>
                  </div>
                </div>
                <div style={{ paddingRight: "20px" }}>
                  <button
                    style={{
                      backgroundColor: "#7edb67c9",
                      marginRight: "10px",
                    }}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    style={{ backgroundColor: "#ff4c4c" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </section>
        <section className="addTask">
          <h2>Add Task</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "40px auto 15px auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <label
                htmlFor="title"
                style={{
                  // marginBottom: "10px",
                  fontSize: "23px",
                  fontWeight: "500",
                }}
              >
                Title:{" "}
              </label>
              <input
                type="text"
                style={{ height: "30px", width: "280px", paddingLeft: "8px" }}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <label
                htmlFor="description"
                style={{
                  // marginBottom: "10px",
                  fontSize: "23px",
                  fontWeight: "500",
                }}
              >
                Description:{" "}
              </label>

              <input
                type="text"
                style={{ height: "30px", width: "280px", paddingLeft: "8px" }}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
                paddingRight: "109px",
              }}
            >
              <label
                htmlFor="title"
                style={{
                  // marginBottom: "10px",
                  fontSize: "23px",
                  fontWeight: "500",
                }}
              >
                Status:{" "}
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
              </label>
            </div>
          </div>
          <button
            style={{ backgroundColor: "#03a9f4", color: "white" }}
            onClick={handleClick}
          >
            Add Task
          </button>
        </section>
      </section>
      <EditTask
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        save={handleSave}
        task={currentTask}
      />
    </main>
  );
}

export default App;
