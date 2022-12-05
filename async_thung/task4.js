const fetchCountry = async(alpha3code) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${alpha3code}`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }

}
const fetchCountryAndNeighbours = async() => {
    const Peru = await fetchCountry("col");
    console.log(Peru);

    const Neighbors = await Promise.all(peru.borders.map((border) => fetchCountry(border)));
    console.log(Neighbors)
}
fetchCountryAndNeighbours();