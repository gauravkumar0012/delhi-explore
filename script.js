// Famous places array
const places = [
    { name: "India Gate", famousFor: "War Memorial", image: "images/india-gate.jpg", coords: [28.6129, 77.2295] },
    { name: "Red Fort", famousFor: "Mughal Architecture", image: "images/red-fort.jpg", coords: [28.6562, 77.2410] },
    { name: "Qutub Minar", famousFor: "Tallest brick minaret", image: "images/qutub-minar.jpg", coords: [28.5245, 77.1855] },
    { name: "Lotus Temple", famousFor: "Bahá'í House of Worship", image: "images/lotus-temple.jpg", coords: [28.5535, 77.2588] },
    { name: "Humayun’s Tomb", famousFor: "Mughal-era garden tomb", image: "images/humayuns-tomb.jpg", coords: [28.5933, 77.2507] },
    { name: "Jama Masjid", famousFor: "One of the largest mosques in India", image: "images/jama-masjid.jpg", coords: [28.6567, 77.2334] },
    { name: "Akshardham Temple", famousFor: "Hindu cultural complex", image: "images/akshardham.jpg", coords: [28.6127, 77.2773] },
    { name: "Rashtrapati Bhavan", famousFor: "Official residence of the President", image: "images/rashtrapati-bhavan.jpg", coords: [28.6143, 77.1996] },
    { name: "National Museum", famousFor: "Cultural and historical artifacts", image: "images/national-museum.jpg", coords: [28.6118, 77.2197] },
    { name: "Raj Ghat", famousFor: "Memorial to Mahatma Gandhi", image: "images/raj-ghat.jpg", coords: [28.6400, 77.2495] },
    { name: "Hauz Khas", famousFor: "Historic complex with lake", image: "images/hauz-khas.jpg", coords: [28.5494, 77.2016] },
    { name: "Gurudwara Bangla Sahib", famousFor: "Sikh house of worship", image: "images/bangla-sahib.jpg", coords: [28.6269, 77.2090] },
    { name: "Agrasen Ki Baoli", famousFor: "Historic stepwell", image: "images/agrasen-ki-baoli.jpg", coords: [28.6260, 77.2255] },
    { name: "Feroz Shah Kotla Fort", famousFor: "14th-century fort", image: "images/feroz-shah-kotla-fort.jpg", coords: [28.6371, 77.2437] },
    { name: "Jantar Mantar", famousFor: "Astronomical observatory", image: "images/jantar-mantar.jpg", coords: [28.6271, 77.2167] },
    { name: "Lodhi Garden", famousFor: "Historic park with tombs", image: "images/lodhi-garden.jpg", coords: [28.5933, 77.2197] }
];

// Home coordinates
const homeCoords = [28.725297, 77.279306];

// Red home icon
const redIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Map layers
const normalLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri & contributors'
});

// Initialize map
const map = L.map('map', {
  center: [28.6139, 77.2090],
  zoom: 12,
  layers: [satelliteLayer] // Default to satellite
});

// Layer control (switch between normal & satellite)
L.control.layers({
  "Satellite View": satelliteLayer,
  "Normal View": normalLayer
}).addTo(map);

// Add home marker
const homeMarker = L.marker(homeCoords, { icon: redIcon })
  .addTo(map)
  .bindPopup("<b>My Home</b><br>Phase-4, Shiv Vihar, Karawal Nagar");

// Add place markers
places.forEach(place => {
  L.marker(place.coords).addTo(map)
    .bindPopup(`
      <b>${place.name}</b><br>
      Famous for: ${place.famousFor}<br>
      <img src="${place.image}" alt="${place.name}" width="200" style="margin-top:5px; border-radius:6px;">
    `)
    .on('mouseover', function() { this.openPopup(); })
    .on('mouseout', function() { this.closePopup(); });
});

// Create cards
document.getElementById('places').innerHTML = `
  <div class="card">
    <img src="images/home.jpg" alt="My Home" onerror="this.src='images/placeholder.jpg'">
    <div class="card-content">
      <h3>My Home</h3>
      <p>Home Location</p>
      <button onclick="zoomToHome()">Go to Home</button>
    </div>
  </div>
` + places.map(place => `
  <div class="card">
    <img src="${place.image}" alt="${place.name}" onerror="this.src='images/placeholder.jpg'">
    <div class="card-content">
      <h3>${place.name}</h3>
      <p>Famous for: ${place.famousFor}</p>
      <button onclick="markVisited(this)">Mark as Visited</button>
    </div>
  </div>
`).join('');

// Zoom to home
function zoomToHome() {
  map.setView(homeCoords, 15);
  homeMarker.openPopup();
}

// Mark visited
function markVisited(btn) {
  btn.classList.toggle('visited');
  btn.textContent = btn.classList.contains('visited') ? 'Visited' : 'Mark as Visited';
  // Create map
  const map = L.map('map', {
      center: [28.6139, 77.2090], // Delhi center
      zoom: 12
    });
    
    // Satellite view
    const satelliteLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    
    // Normal view
    const normalLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        });
        
        // Layer control
        L.control.layers({
              "Satellite": satelliteLayer,
              "Normal": normalLayer
            }).addTo(map);
            
            // Example places
            const places = [
                  {
                        name: "India Gate",
                        description: "A famous war memorial in Delhi.",
                        image: "india_gate.jpg",
                        coords: [28.6129, 77.2295]
                      },
                      {
                            name: "Red Fort",
                            description: "Historic fort in Delhi.",
                            image: "red_fort.jpg",
                            coords: [28.6562, 77.2410]
                          }
                        ];
                        
                        // Add markers + cards
                        places.forEach(place => {
                              L.marker(place.coords).addTo(map)
                                .bindPopup(`<b>${place.name}</b><br>${place.description}`);
                            
                              const card = document.createElement("div");
                              card.classList.add("card");
                            
                              card.innerHTML = `
                                <img src="${place.image}" alt="${place.name}">
                                <div class="card-content">
                                  <h3>${place.name}</h3>
                                  <p>${place.description}</p>
                                  <button>Mark Visited</button>
                                </div>
                              `;
                            
                              document.getElementById("places").appendChild(card);
                            });
                            
                        }
