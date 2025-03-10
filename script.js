document.getElementById("submit").addEventListener("click", getCountry);

async function getCountry() { //a funtion to fetch the country info

    const countryName = document.getElementById("country").value; 

    const countryInfo = document.getElementById("country-info");
    const borderingCountries = document.getElementById("boredring-countries").value.trim();

    const url = "https://restcountries.com/";
    try {
        const response = await fetch(url+"v3.1/name/${countryName}"); //fetches country name form API
        if (!response.ok) {
        throw new Error("Country not found!");
        }

        const json = await response.json();

        const country = json[0];

        countryInfo.innerHTML = `
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>Population: ${country.population}</p>
        `;

        }   catch (error) {
            console.error(error.message);
          }
        
}
    
