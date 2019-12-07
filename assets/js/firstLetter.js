$(document).ready(function () {

     var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

     for (var i = 0; i < letters.length; i++) {
          var letterBtn = $("<button>");
          letterBtn.addClass("letter-button letter letter-button-color");
          letterBtn.attr("data-letter", letters[i]);
          letterBtn.text(letters[i]);
          $("#buttons").append(letterBtn);
     }

     $(".letter-button").on("click", function () {
          var selectedLetter = $(this).attr("data-letter");
          console.log(selectedLetter);
          var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selectedLetter}`;
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
     });

     $("#searchBtn").on("click", function () {
          event.preventDefault();
          var searchInput = $("#searchInput").val();
          sessionStorage.setItem("search", searchInput);
          window.location = "./searchResult.html";
     });

     $(document).on("click", ".container-drink", displayDrinkInfo);

     function displayDrinkInfo() {
          var selectedDrink = $(this).attr("data-name");
          alert(selectedDrink);
     }
});