$(document).ready(function () {
   
     init();
    
     function init(){
          //event.preventDefault();
          var idElement = ['11000', '11001', '11002', '11003', '11004', '11005', '11006', '11007', '11008', '11009'];
     
          for (var i = 0; i < idElement.length; i++) {
               var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idElement[i]}`;
               console.log(queryURL);
               $.ajax({
                    url: queryURL,
                    method: "GET"
               }).then(function (response) {
                    console.log(response);
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
               });
          };
     };

     $(document).on("click", ".container-drink", displayDrinkInfo);


     $("#getRandomBeverage").on("click", function(event){
          var random = $("#randomBeverageCard");
          random.addClass("randomSelect");
     });
     
     function displayDrinkInfo(){
          var selectedDrink = $(this).attr("data-name");
          alert(selectedDrink);
     }
});
  
     

