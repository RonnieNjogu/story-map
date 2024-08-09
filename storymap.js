// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Load and display the Google Maps satellite tile layer
L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Map data ©2024 Google'
}).addTo(map);

// Custom icon for markers
var customIcon = L.divIcon({
    className: 'custom-icon',
    html: '★',  // You can use a Unicode character or an image here
    iconSize: [30, 30]
});

// Data for the story map (landmarks)
var landmarks = [
    {
        name: "Eiffel Tower",
        location: [48.8584, 2.2945],
        content: "<h3>Eiffel Tower</h3><p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.</p>"
    },
    {
        name: "Great Wall of China",
        location: [40.4319, 116.5704],
        content: "<h3>Great Wall of China</h3><p>The Great Wall of China is a series of fortifications that were built across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of various nomadic groups.</p>"
    },
    {
        name: "Pyramids of Giza",
        location: [29.9792, 31.1342],
        content: "<h3>Pyramids of Giza</h3><p>The Pyramids of Giza are ancient pyramid structures located in the Giza pyramid complex in Egypt. They are some of the most famous and recognizable structures in the world.</p>"
    },
    {
        name: "Statue of Liberty",
        location: [40.6892, -74.0445],
        content: "<h3>Statue of Liberty</h3><p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in the United States. The statue is a gift from the people of France to the United States.</p>"
    }
];

// Function to create markers and bind popups
landmarks.forEach(function(landmark) {
    var marker = L.marker(landmark.location, { icon: customIcon }).addTo(map);
    marker.bindPopup(landmark.content, { className: 'custom-popup' });
    
    // Event listener for marker click
    marker.on('click', function() {
        document.getElementById('story').innerHTML = landmark.content;
    });
});
