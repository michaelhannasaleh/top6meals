$(document).ready(function () {

     init();

     $("#searchBtn").on("click", function (){
          event.preventDefault();
          var searchInput = $("#searchInput").val();
          sessionStorage.setItem("search", searchInput);
          window.location = "./searchResult.html";
      });

     function init() {
          var idElement = ["11000", "11001", "11002", "11003", "11004", "11005", "11006", "11007", "11008", "11009"];
          $("#searchDiv").empty();
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
                    var heart = $("<input>");
                    heart.addClass("addFavorite2");
                    heart.attr({"src":"./assets/img/heartPlus.png", "type":"image"});
                    var details = "<b>" + response.drinks[0].strDrink + "</b>" + "<br>"; 
                    details += "<b>Category: </b>" + response.drinks[0].strCategory + "<br>"; 
                    details += "<b>Drink type: </b>" + response.drinks[0].strAlcoholic + "<br>";
                    details += "<b>Instructions: </b>" + response.drinks[0].strInstructions + "<br>";
                    details += "<b>Ingredients: </b>" + "<br>";
                    if (response.drinks[0].strIngredient1 !== null) {
                         details += response.drinks[0].strIngredient1 + " ";
                         if(response.drinks[0].strMeasure1 !== null) {
                              details += response.drinks[0].strMeasure1 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient2 !== null) {
                         details += response.drinks[0].strIngredient2 + " ";
                         if(response.drinks[0].strMeasure2 !== null) {
                              details += response.drinks[0].strMeasure2 + "<br>";
                         }else{details += "<br>"}    
                    };
                    if (response.drinks[0].strIngredient3 !== null) {
                         details += response.drinks[0].strIngredient3 + " ";
                         if(response.drinks[0].strMeasure3 !== null) {
                              details += response.drinks[0].strMeasure3 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient4 !== null) {
                         details += response.drinks[0].strIngredient4 + " ";
                         if(response.drinks[0].strMeasure4 !== null) {
                              details += response.drinks[0].strMeasure4 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient5 !== null) {
                         details += response.drinks[0].strIngredient5 + " ";
                         if(response.drinks[0].strMeasure5 !== null) {
                              details += response.drinks[0].strMeasure5 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient6 !== null) {
                         details += response.drinks[0].strIngredient6 + " ";
                         if(response.drinks[0].strMeasure6 !== null) {
                              details += response.drinks[0].strMeasure6 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient7 !== null) {
                         details += response.drinks[0].strIngredient7 + " ";
                         if(response.drinks[0].strMeasure7 !== null) {
                              details += response.drinks[0].strMeasure7 + "<br>";
                         }else{details += "<br>"}
                    };
                    if (response.drinks[0].strIngredient8 !== null) {
                         details += response.drinks[0].strIngredient8 + " ";
                         if(response.drinks[0].strMeasure8 !== null) {
                              details += response.drinks[0].strMeasure8 + "<br>";
                         }else{details += "<br>"}
                    };

                    d.html(details);

                    console.log(d.text());
                    a.append(b);
                    c.append(heart);
                    c.append(d);
                    a.append(c);
                    $("#searchDiv").append(a);
               });
          };
     };

     $(document).on("click", ".container-drink", displayDrinkInfo);

     function displayDrinkInfo() {
          var selectedDrink = $(this).attr("data-name");
          alert(selectedDrink);
     }
});



