// FORM PART
$("#btnShowData").click(function () {
    let country = $("input").val();
    let search = $("input[id=search]:checked", "#searchPart").val()

    if (country) {
        if (search === 1 || !search) {
            $.ajax({
                url: `https://restcountries.com/v3.1/name/${country}`,
                success: function (data) {
                    data.forEach((country) => {
                        $("#list").append(`<li> Country: ${country.name.common}</li>`);
                        $("#list").append(`<li> Capital: ${country.capital}</li>`);
                        $("#list").append(`<li> Continent: ${country.continents}</li>`);

                        for(currency in country.currencies)  {
                            $("#list").append(`<li> Monnaie : ${country.currencies[currency].name}</li>`);
                        }

                        for(language in country.languages)  {
                            $("#list").append(`<li> Langue : ${country.languages[language]}</li>`);
                        }
                    })
                },
             });
        } else {
            $.ajax({
                url: `https://restcountries.com/v3.1/capital/${country}`,
                success: function (data) {
                    data.forEach((country) => {
                        $("#list").append(`<li> Country: ${country.name.common}</li>`);
                        $("#list").append(`<li> Capital: ${country.capital}</li>`);
                        $("#list").append(`<li> Continent: ${country.continents}</li>`);

                        for(currency in country.currencies)  {
                            $("#list").append(`<li> Monnaie : ${country.currencies[currency].name}</li>`);
                        }

                        for(language in country.languages)  {
                            $("#list").append(`<li> Langue : ${country.languages[language]}</li>`);
                        }
                    })
                },
            });
        };
    } else {
        getAllCountries();
    }
});


// LIST OF ALL 
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