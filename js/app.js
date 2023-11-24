const img = document.querySelector("img");
const search = document.querySelector(".search");

const API_KEY = "d6SSC6oW7giniXQVL39GsbgYHBuXKl2u";

function fetchGif() {
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search.value}`,
		{
			mode: "cors",
		},
	)
		.then((response) => response.json())
		.then((response) => {
			img.src = response.data.images.original.url;
		});
}

search.addEventListener("change", fetchGif);
