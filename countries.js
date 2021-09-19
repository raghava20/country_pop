const countryName = fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())
  .then((data) => {
    for (let i = 0; i <= 250; i++) {
      if(data[i].population > 200000000)
      console.log(data[i].name)
    }
  }).catch(data => data);

console.log(countryName);
