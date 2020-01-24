
const searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-btn")
        button.addEventListener("click", () => {
            const input = document.getElementById("search-criteria")
            const searchCriteria = input.value
            const searchResultPromise = apiManager.searchBusStops(searchCriteria)
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults)
            })
        })
    },

    addSearchEnterEventListener() {
        const input = document.getElementById('search-criteria')
        const results = document.getElementById('search-results')
        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                
                const searchCriteria = input.value
                const searchResultPromise = apiManager.searchBusStops(searchCriteria)
                searchResultPromise.then(searchResults => {
                    searchResultsDomManager.renderSearchResults(searchResults)
                   
                    // My attempt to make a conditional return of no results
                   
                    // if (searchResults === []) {
                    //     results.innerHTML = "No bus stops with that criteria. Keep Searching! :)"
                    // }
                    // console.log(searchResults)
                })
            };
        
        })
    }
}