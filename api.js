const fetchData = async() => {
    const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

    const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

    console.log(country); // Columbia's data will be logged to the dev console
};

fetchData();
// 2

const fetchCountry = async(alpha3Code) => {
    try {
        const res = await fetch(
            `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        );

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchCountryAndNeigbors = async() => {
    const columbia = await fetchCountry("col");

    const neighbors = await Promise.all(
        columbia.borders.map((border) => fetchCountry(border))
    );

    console.log(neighbors);
};

fetchCountryAndNeigbors();