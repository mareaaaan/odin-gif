const img = document.querySelector("img");
const search = document.querySelector(".search");

const API_KEY = "d6SSC6oW7giniXQVL39GsbgYHBuXKl2u";

async function fetchGif() {
	if (search.value) {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search.value}`,
			{
				mode: "cors",
			},
		);
		const parsedResponse = await response.json();

		img.src = parsedResponse.data.images.original.url;
	}
}

search.addEventListener("change", fetchGif);
