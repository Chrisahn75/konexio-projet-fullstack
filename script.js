$("#btnShowData").click(function getAllCountries() {
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        success: function (data) {
            data.forEach((country) => {
                $("#list").append(`<h3>${country.name.common}</h3>`);
                $("#list").append(`<li> Capitale : ${country.capital}</li>`);
                $("#list").append(`<li> Continent: ${country.continents}</li>`);
                for(currency in country.currencies)  {
                    $("#list").append(`<li> Monnaie : ${country.currencies[currency].name}</li>`);
                }
                for(language in country.languages)  {
                    $("#list").append(`<li> Langue : ${country.languages[language]}</li>`);
                }
            })   
        }
    })
});

getAllCountries();