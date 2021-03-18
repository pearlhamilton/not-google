const form = document.querySelectorAll('form');
const randomBtn = document.querySelector('[name="random"]');
const searchPage = document.getElementById("search-page")
const resultsPage = document.getElementById("results-page")
const resultSection = document.getElementById('results');
const nav = document.querySelector('nav');

const url = "http://localhost:3000/"

resultsPage.style.display = "none";
searchPage.style.display = "block";

form.forEach(form => {addEventListener('submit', presentResults)});
randomBtn.addEventListener('click', presentRandomResult)

function presentResults(e) {
    e.preventDefault();

    const searchText = e.target.querySelector('[type="text"]').value;
    const routeURL =  searchText ? `search?q=${searchText}` : `results`;
    
    const fetchURL =  url + routeURL;
    
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(results => showResults(results))

    togglePage();
}


function presentRandomResult(e) {
    e.preventDefault();

    let fetchURL = url + `results/random`;

    fetch(fetchURL)
        .then(resp => resp.json())
        .then(result => window.open(result.url))
}

function togglePage(){
    if(resultsPage.style.display === "none"){
        resultsPage.style.display = "block";
        searchPage.style.display = "none";
    }
}

function showResults(results){
    while(resultSection.firstChild){
        resultSection.removeChild(resultSection.firstChild);
    }

    if(results.length === 0){
        const noResultElement = document.createElement('p');
        noResultElement.textContent = 'No results, sorry!';
        resultSection.appendChild(noResultElement);
    }
    else {
        // Only show first 10 results 
        results = results.slice(0, 10);
        results.forEach(result => createResultElement(result));
    }
}


function createResultElement(result){

    const resultSection = document.getElementById('results');
    // Create new elements
    const resultElement = document.createElement("div");
    const headingElement = document.createElement("h2")
    const urlElement = document.createElement("h4")
    const descElement = document.createElement("p")
    const linkElement = document.createElement("a");
    // Add retrieved result content to elements
    headingElement.textContent = result.heading;
    urlElement.textContent= result.url;
    descElement.textContent = result.desc;
    // Add URL to heading
    linkElement.setAttribute("href", result.url);
    // Construct result HTML
    linkElement.appendChild(headingElement)
    resultElement.appendChild(urlElement);
    resultElement.appendChild(linkElement);
    resultElement.appendChild(descElement);

    resultElement.className = "search-result"
    
    resultSection.appendChild(resultElement);
}