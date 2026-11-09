
const apiKey = "YOUR_API_KEY";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-button");
const searchInput = document.querySelector("#search-input");

async function fetchGifs() {
    const searchTerm = searchInput.value || "funny";

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12&rating=g`;

    try {
        const response = await fetch(endpoint);
        const result = await response.json();

        const images = result.data.map(gif => gif.images.original.url);

        gifContainer.innerHTML = "";

        images.forEach(imageUrl => {
            gifContainer.innerHTML += `
                <img src="${imageUrl}" class="col-3 mb-3" alt="GIF">
            `;
        });

        console.log(images);

    } catch (error) {
        console.error("Error fetching GIFs:", error);
        gifContainer.innerHTML = "Could not load GIFs. Try again.";
    }
}

fetchButton.addEventListener("click", fetchGifs);
