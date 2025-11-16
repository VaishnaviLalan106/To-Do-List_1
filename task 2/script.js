const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <span class="text">${taskText}</span>
    <div class="buttons">
      <button class="done">✔</button>
      <button class="delete">X</button>
    </div>
  `;

  // Mark as Done ✔
  li.querySelector(".done").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
}

// Add button
addBtn.addEventListener("click", addTask);

// Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
