document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const suggestionsBox = document.getElementById("suggestions");
    const resultsBox = document.getElementById("results");
    const searchBox = document.querySelector(".search-box"); 
    const searchInput = document.getElementById("searchInput");
const storeLocatorr = document.getElementById(".store-locatorr");

if (searchInput && storeLocatorr) {
    searchInput.addEventListener("focus", () => {
        storeLocatorr.style.display = "none";
    });
}


    const items = [
        "Home", "About us", "History", "Mission & Vision", "Team",
        "Medicine", "Category 1", "Category 2", "Category 3",
        "Blog", "Blog Post 1", "Blog Post 2", "Contact us"
    ];

    const itemLinks = {
        "Home": "index.html",
        "About us": "about.html",
        "History": "history.html",
        "Mission & Vision": "mission-vision.html",
        "Team": "team.html",
        "Medicine": "medicine.html",
        "Category 1": "category1.html",
        "Category 2": "category2.html",
        "Category 3": "category3.html",
        "Blog": "blog.html",
        "Blog Post 1": "blog-post1.html",
        "Blog Post 2": "blog-post2.html",
        "Contact us": "contact.html"
    };

    function filterSuggestions(event) {
        const query = event.target.value.toLowerCase();
        suggestionsBox.innerHTML = "";

        const matches = items.filter(item => item.toLowerCase().includes(query));

        if (query === "" || matches.length === 0) {
            suggestionsBox.style.display = "none";
            return;
        }

        
        matches.forEach(match => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = itemLinks[match] || "#";
            a.textContent = match;
            li.appendChild(a);
            suggestionsBox.appendChild(li);
        });

        suggestionsBox.style.display = "block";
        searchBox.classList.add("expanded"); 
    }

    function showSearchResults() {
        const query = searchInput.value.toLowerCase();
        const matches = items.filter(item => item.toLowerCase().includes(query));
        resultsBox.innerHTML = "";

        if (matches.length === 0) {
            resultsBox.innerHTML = "<div>No results found.</div>";
        } else {
            matches.forEach(match => {
                const div = document.createElement("div");
                const a = document.createElement("a");
                a.href = itemLinks[match] || "#";
                a.textContent = match;
                div.appendChild(a);
                resultsBox.appendChild(div);
            });
        }

        suggestionsBox.style.display = "none";
        searchBox.classList.add("expanded"); 
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterSuggestions);
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                showSearchResults();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            if (searchInput.value.trim() === "") {
                alert("Please enter something to search.");
                return;
            }
            showSearchResults();
        });
    }

   
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = "none";
            resultsBox.innerHTML = "";
            searchBox.classList.remove("expanded");
        }
    });


    
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("open");
            hamburger.classList.toggle("open");

            
        });
    }

  
    const dropdownButtons = document.querySelectorAll(".dropbtn");
    dropdownButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;

            if (dropdownContent) {
                dropdownContent.classList.toggle("show");

                document.querySelectorAll(".dropdown-content").forEach((content) => {
                    if (content !== dropdownContent) {
                        content.classList.remove("show");
                    }
                });
            }
        });
    });
    
document.addEventListener("click", function (event) {
    const isDropdownBtn = event.target.matches(".dropbtn");
    const isInsideDropdown = event.target.closest(".dropdown-content");

    if (!isDropdownBtn && !isInsideDropdown) {
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.classList.remove("show");
        });
    }
});
document.addEventListener("click", function (event) {
    const isClickInsideSearch = searchInput.contains(event.target) || suggestionsBox.contains(event.target);
    const isDropdownBtn = event.target.matches(".dropbtn");
    const isInsideDropdown = event.target.closest(".dropdown-content");

  
    if (!isClickInsideSearch) {
        suggestionsBox.style.display = "none";
    }

   
    if (!isDropdownBtn && !isInsideDropdown) {
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.classList.remove("show");
        });
    }
});

});
