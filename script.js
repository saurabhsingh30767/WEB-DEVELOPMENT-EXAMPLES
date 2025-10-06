// Theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Set initial button text
themeToggle.textContent = "Dark Mode";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  // Update button text dynamically
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// IST Clock in header top-right (bold, no emoji)
function updateISTClock() {
  const clock = document.getElementById("ist-clock");
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 5.5*60*60*1000);
  let hours = istTime.getHours();
  const minutes = istTime.getMinutes().toString().padStart(2,"0");
  const seconds = istTime.getSeconds().toString().padStart(2,"0");
  const ampm = hours>=12 ? "PM":"AM";
  hours = hours%12 || 12;
  clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateISTClock, 1000);
updateISTClock();

// Validate Turnstile before submitting
document.getElementById("contact-form").addEventListener("submit", function(e) {
  const response = document.querySelector("[name='cf-turnstile-response']");
  if (!response || !response.value) {
    e.preventDefault();
    alert("⚠️ Please complete the 'I’m human' check before submitting.");
  }
});
