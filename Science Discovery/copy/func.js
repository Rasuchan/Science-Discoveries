
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    
    toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});


const newsHeadlines = [
    "University Research Fund opens applications.",
    "New AI course starting next semester.",
    "Faculty meeting scheduled for next Friday.",
    "Summer internships available - apply now!",
];

document.getElementById("news-headlines").innerText = newsHeadlines.join(' | ');


const yearSelect = document.getElementById("year-select");
const currentYear = new Date().getFullYear();

for (let i = currentYear; i <= currentYear + 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}


const calendarGrid = document.getElementById("calendar-grid");
const monthSelect = document.getElementById("month-select");


const defaultEvents = [
    { day: 5, name: "Team Meeting" },
    { day: 15, name: "Project Submission" },
    { day: 22, name: "Presentation Day" }
];

function generateCalendar(year, month) {
    calendarGrid.innerHTML = ''; 
    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        dayDiv.classList.add("calendar-day");
        dayDiv.onclick = () => openEventModal(i);
        calendarGrid.appendChild(dayDiv);
    }

    
    displayDefaultEvents();
}


function openEventModal(day) {
    const modal = document.getElementById("event-modal");
    modal.style.display = "flex";
    const saveButton = document.getElementById("save-event-btn");
    const eventNameInput = document.getElementById("event-name");

    saveButton.onclick = () => {
        const eventName = eventNameInput.value;
        addEvent(day, eventName);
        eventNameInput.value = '';
        modal.style.display = "none";
    };

    
    const closeModal = document.querySelector(".modal .close");
    closeModal.onclick = () => {
        modal.style.display = "none";
    };
}


function addEvent(day, name) {
    const eventList = document.getElementById("event-list");
    const eventItem = document.createElement("div");
    eventItem.classList.add("event-item");
    eventItem.textContent = `${day}: ${name}`;
    eventList.appendChild(eventItem);
}


function displayDefaultEvents() {
    const eventList = document.getElementById("event-list");
    defaultEvents.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");
        eventItem.textContent = `${event.day}: ${event.name}`;
        eventList.appendChild(eventItem);
    });
}


monthSelect.addEventListener("change", () => {
    generateCalendar(currentYear, monthSelect.value);
});


generateCalendar(currentYear, monthSelect.value);
