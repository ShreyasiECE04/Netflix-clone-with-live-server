// api key fromTmBD
const api = "api_key=b43ed1b356b6e46b5b1de09582278535";
// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";

// requests for movies data
const requests = {


    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMoviesf: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
// used to truncate the string 

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())



    .then((data) => {
        console.log(data.results);
        // every refresh the movie will change 


        const setMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];


        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");


        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });
// movies row 
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");


        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {


            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Trending
fetch(requests.fetchPopular)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("popularrow");


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Trending now";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {


            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//top ratings 
fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Action MOvies 
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
//Comedy MOvies
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
// Horror movies 
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
//Romantic movies 
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
//Documentary movies
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";


        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentary Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    }); 