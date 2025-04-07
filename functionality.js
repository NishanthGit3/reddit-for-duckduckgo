console.log("loaded");
try {
    // get the search term from duck duck go
    let url_query = new URLSearchParams(window.location.search);
    let search_term = url_query.get("q");
    console.log(search_term)
    let search_term_low = search_term.toLowerCase()

    if (search_term_low.includes("reddit")) {
        // add that search term to google boi
        let google_search = "https://www.google.com/search?q=" + search_term;
        location.replace(google_search);
    }
    else {

    }
}
catch (error) {
    console.log("Error:", error.message);
}