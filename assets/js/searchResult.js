$(document).ready(function () {
    

     init();

     $("#searchBtn").on("click", function (){
          event.preventDefault();
          var searchInput = $("#searchInput").val();
          sessionStorage.setItem("search", searchInput);
          init();
      });
     
     function init(){
          //event.preventDefault();
          var searchInput = sessionStorage.getItem("search");
          console.log(searchInput);
          var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
          console.log(queryURL);
          $.ajax({
               url: queryURL,
               method: "GET"
          }).then(function (response) {
               console.log(response);
               $("#searchDiv").empty();
               for (var i = 0; i < response.drinks.length; i++) {
                    var a = $("<div>");
                    a.addClass("container-drink d-inline-block");
                    a.attr("data-name", response.drinks[i].idDrink);
                    var b = $("<img>");
                    b.addClass("image");
                    b.attr("src", response.drinks[i].strDrinkThumb);
                    var c = $("<div>");
                    c.addClass("overlay");
                    var d = $("<div>");
                    d.addClass("text");
                    d.text(response.drinks[i].strDrink);
                    a.append(b);
                    c.append(d);
                    a.append(c);
                    $("#searchDiv").append(a);
               }
          });
     };  
     
     $(document).on("click", ".container-drink", displayDrinkInfo);

     function displayDrinkInfo(){
          var selectedDrink = $(this).attr("data-name");
          alert(selectedDrink);
        //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
     //    $.ajax({
     //      url: queryURL,
     //      method: "GET"
     //    }).then(function(response) {
     //    });
     }
});
    
     // var settings = {
     //      "async": true,
     //      "crossDomain": true,
     //      "url": `https://the-cocktail-db.p.rapidapi.com/filter.php?d=${drinkType}`,
     //      "method": "GET",
     //      "headers": {
     //           "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
     //           "x-rapidapi-key": "2563001422mshaecc366f7d59829p1adc11jsnaec1a3f33965"
     //      }
     // }

     // $.ajax(settings).done(function (response) {
     //      console.log(response);
     // });

    

     //https://www.thecocktaildb.com/drink.php?c=12758

