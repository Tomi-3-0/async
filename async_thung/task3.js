const fetchData = async() => {
    const res = await fetch('https://restcountries.com/v3.1/name/peru')
    const country = await res.json();
    console.log(country);
}
fetchData();