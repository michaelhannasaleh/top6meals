$(document).ready(function () {

     $("#searchBtn").on("click", function (){
         event.preventDefault();
         var searchInput = $("#searchInput").val();
         sessionStorage.setItem("search", searchInput);
         window.location = "./searchResult.html";
     });

     $("#getRandomBeverage").on("click", function (event) {
          var randomBeverage = $("#randomBeverageCard");
          randomBeverage.addClass("randomSelect");
          $("#getRandomBeverage").text("Try again!");
          var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
          $.ajax({
               url: queryURL,
               method: "GET"
          }).then(function (response) {
               var randomNumber = Math.floor(Math.random() * response.drinks.length);
               var id = response.drinks[randomNumber].idDrink;
               //var containerDetail = document.querySelector(".containerDetail");
               //containerDetail.style.display = "block";
               //containerDetail.style.cssText = "display:block; color:red"; 
               //containerDetail.setAttribute("style", "display:block; color:red");
               $(".containerDetail").attr("style", "display:block");
               var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
               $.ajax({
                    url: queryURL,
                    method: "GET"
               }).then(function (response) {
                    console.log(response);
                    $(".image2").attr("src", response.drinks[0].strDrinkThumb);;
                    $(".drinkName").text(response.drinks[0].strDrink);
                    console.log(response.drinks[0].strDrink);
                    var details = "Drink type: " + response.drinks[0].strAlcoholic + "\n";
                    console.log(details);
                    $(".text2").text(response.drinks[0].strInstructions);
               });             
          });
     });
});


