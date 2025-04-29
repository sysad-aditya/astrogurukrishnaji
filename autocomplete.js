// Function to initialize the autocomplete
function initAutocomplete() {
  const input = document.getElementById("pob");
  const suggestionsList = document.getElementById("suggestions-list");

  input.addEventListener("input", async () => {
    const query = input.value.trim();
    if (!query) {
      suggestionsList.innerHTML = "";
      return;
    }

    try {
      const response = await fetch(`https://fragrant-bonus-e8ac.sysad-snu.workers.dev/?input=${encodeURIComponent(query)}`);
      const data = await response.json();

      suggestionsList.innerHTML = "";

      if (data.predictions && Array.isArray(data.predictions)) {
        data.predictions.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.description;
          li.addEventListener("click", () => {
            input.value = item.description;
            suggestionsList.innerHTML = "";
          });
          suggestionsList.appendChild(li);
        });
      } else {
        suggestionsList.innerHTML = "<li>No suggestions found</li>";
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      suggestionsList.innerHTML = "<li>Error loading suggestions</li>";
    }
  });
}


// Call initAutocomplete once the DOM is loaded
window.addEventListener("load", initAutocomplete);

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
// Dynamically load the Google Places API with the callback
();
