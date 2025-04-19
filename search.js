document.addEventListener("DOMContentLoaded", function () {
    // Search Button and Input
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("searchResults");
    const resultsList = document.getElementById("resultsList");

    // Handle the search button click
    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase();
        if (query !== "") {
            showSearchResults(query);
        } else {
            alert("Please enter something to search.");
        }
    });

    // Function to display search results
    function showSearchResults(query) {
        const navbarLinks = document.querySelectorAll('.navbar a, .dropdown-content a');
        const matchingResults = [];

        navbarLinks.forEach(link => {
            if (link.textContent.toLowerCase().includes(query)) {
                matchingResults.push({
                    text: link.textContent,
                    href: link.getAttribute("href")
                });
            }
        });

        // Clear previous results
        resultsList.innerHTML = "";

        if (matchingResults.length > 0) {
            // Display results
            resultsContainer.style.display = "block";
            matchingResults.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result.text;
                listItem.addEventListener('click', function () {
                    window.location.href = result.href;
                });
                resultsList.appendChild(listItem);
            });
        } else {
            // No results found message
            resultsList.innerHTML = "<li>No results found</li>";
        }
    }
});
