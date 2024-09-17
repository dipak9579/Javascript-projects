const productList = document.getElementById("product-list");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const categoryBtn = document.querySelectorAll(".category-btn");

function filterProduct() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active").data.category;

    productItems.forEach((item) => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const category = item.data.category;

        // Check if the search input matches and the active category is selected
        if ((title.includes(searchValue) || searchValue === "") &&
            (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block"; // Show the matching item
        } else {
            item.style.display = "none";  // Hide non-matching items
        }
    });
}

function setCategory(e) {
    // Remove 'active' class from all buttons
    categoryBtn.forEach(btn => btn.classList.remove("active"));
    
    // Add 'active' class to the clicked button
    e.target.classList.add("active");
    
    // Filter the product list based on the new active category
    filterProduct();
}

// Add event listeners for the search button and input field
searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('keyup', filterProduct);

// Add event listeners for category buttons
categoryBtn.forEach((btn) => {
    btn.addEventListener('click', setCategory);
});

// Initial filtering to display all products by default
filterProduct();
