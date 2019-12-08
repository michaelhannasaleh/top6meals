$(document).ready(function () {

     init();

     function init() {
          var idElement = ["11000", "11001", "11002", "11003", "11004", "11005", "11006", "11007", "11008", "11009"];
          var elementObj = [];
          for (var i = 0; i < idElement.length; i++) {
               var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idElement[i]}`;
               $.ajax({
                    url: queryURL,
                    method: "GET"
               }).then(function (response) {
                    var a = $("<div>");
                    a.addClass("container-drink d-inline-block");
                    a.attr("data-name", response.drinks[0].idDrink);
                    var b = $("<img>");
                    b.addClass("image");
                    b.attr("src", response.drinks[0].strDrinkThumb);
                    var c = $("<div>");
                    c.addClass("overlay");
                    var d = $("<div>");
                    d.addClass("text");
                    d.text(response.drinks[0].strDrink);
                    console.log(d.text());
                    a.append(b);
                    c.append(d);
                    a.append(c);
                    $("#searchDiv").append(a);
                    elementObj.push(response);
               });
          };
     };

     $(document).on("click", ".container-drink", displayDrinkInfo);

     function displayDrinkInfo() {
          var selectedDrink = $(this).attr("data-name");
          alert(selectedDrink);
     }
});



