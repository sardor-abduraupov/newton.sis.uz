const searchInput = document.getElementById("search");
const gallerySections = document.getElementById("gallerySections");
const sortButtons = document.querySelectorAll(".seg-btn");

let currentSort = "newest";

// Example gallery items (you will add more)
const galleryItems = [
  {
    title: "Teachers’ Day 2025",
    desc: "Celebrating our amazing teachers",
    date: "2025-09-30",
    img: "images/class-image.png"
  },
  {
    title: "Science Fair",
    desc: "Creative science projects",
    date: "2025-03-12",
    img: "images/logo.jpg"
  }
];

// Render gallery
function renderGallery() {
  const query = searchInput.value.toLowerCase();

  // Filter
  let filtered = galleryItems.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.desc.toLowerCase().includes(query)
  );

  // Sort
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return currentSort === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Group by Year/Month
  const groups = {};
  filtered.forEach(item => {
    const d = new Date(item.date);
    const year = d.getFullYear();
    const month = d.toLocaleString("default", { month: "long" });
    const key = `${year} – ${month}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  // Render
  gallerySections.innerHTML = "";
  for (const group in groups) {
    const section = document.createElement("div");
    section.classList.add("gallery-section");

    const header = document.createElement("h2");
    header.classList.add("section-header");
    header.textContent = group;

    const grid = document.createElement("div");
    grid.classList.add("gallery-grid");

    groups[group].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("gallery-card");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="gallery-info">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span class="date">${new Date(item.date).toDateString()}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);
    gallerySections.appendChild(section);
  }
}

// Sorting buttons
sortButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sortButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSort = btn.dataset.sort;
    renderGallery();
  });
});

// Search
searchInput.addEventListener("input", renderGallery);

// Init
renderGallery();
