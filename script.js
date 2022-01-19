$("#btnShowData").click(function getAllCountries() {
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        success: function (data) {
            data.forEach((country) => {
                $("#country").html(`<p>${country.name.common}</p>`);
                $("#capital").html(`<p>${country.capital}</p>`);
                $("#continent").html(`<p>${country.continents}</p>`);
                for(currency in country.currencies)  {
                    $("#monnaie").html(`<p>${country.currencies[currency].name}</p>`);
                }
                for(language in country.languages)  {
                    $("#languages").html(`<p>${country.languages[language]}</p>`);
                }
    
    
            })
           
        }
    })
});

getAllCountries()