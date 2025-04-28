// Function to initialize the autocomplete
function initAutocomplete() {
    var input = document.getElementById('pob');
    var options = {
        types: ['(cities)'],
        componentRestrictions: { country: "in" }
    };
    new google.maps.places.Autocomplete(input, options);
}

// Dynamically load the Google Places API with the callback
(function() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB2hg0RyNus67nSlEElXgkg6qRO-48MDj0&libraries=places&callback=initAutocomplete';
    script.async = true;   // Load the script asynchronously
    script.defer = true;   // Ensure the script is executed after parsing the document
    document.head.appendChild(script);
})();
