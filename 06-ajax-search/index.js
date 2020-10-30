const endpoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector(".search");
const list = document.querySelector(".suggestions");

let results = [];
initializeApp().then(searchCity);

async function initializeApp() {
	results = await fetchData();
}

async function fetchData() {
	try {
		const results = await fetch(endpoint);
		const jsonResults = await results.json();
		return jsonResults;
	} catch (error) {
		console.log(error);
	}
}

function searchCity() {
	input.addEventListener("keyup", displayResults);
}

function displayResults(e) {
	const query = e.target.value;
	const filteredResults = filterResultsArray(query);
	const formatedResults = formatResultsArray(filteredResults);
	fillResultsList(formatedResults, query);
}

function filterResultsArray(query) {
	return results.filter((city) => city.city.toLowerCase().includes(query) || city.state.toLowerCase().includes(query));
}

function formatResultsArray(results) {
	return results.map((city) => ({
        name: city.city,
        state: city.state,
		population: city.population,
	}));
}

function fillResultsList(results, query) {
	list.innerHTML = "";
	if (results.length && query.length) {
		const htmlList = results
			.map((city) => {
                return (`
                    <li>
                        <span class="name">
                            ${city.name.toLowerCase().replace(query, `<span class="hl">${query}</span>`)}, 
                            ${city.state.toLowerCase().replace(query, `<span class="hl">${query}</span>`)}
                        </span>
                        <span class="population hl">${city.population}</span>
                    </li>
                `);
			}).join("");
		list.innerHTML = htmlList;
	} else {
		list.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
	}
}
