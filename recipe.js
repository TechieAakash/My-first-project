let name = document.querySelector(".name");
let ingre = document.querySelector(".ingre");
let about = document.querySelector(".about");
let proce = document.querySelector(".procedure");
let photo = document.querySelector(".dishphoto");
let btn = document.querySelector(".btn");
let search = document.querySelector("input");
let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let URL1  ="https://www.themealdb.com/api/json/v1/1/filter.php?i=toor dal";


async function findrecipe(dish){
    let response = await fetch(URL + dish);
    let data = await response.json();
    console.log(data);
    if(data.meals){ 
        let meal = data.meals[0];
        document.querySelector(".name").innerHTML = data.meals[0].strMeal;
        proce.innerHTML = data.meals[0].strInstructions;
        about.innerHTML = data.meals[0].strCategory;
        photo.style.backgroundImage = `url(${meal.strMealThumb})`;
        let ingredients ="";
        for(let i= 1 ; i<=20 ; i++){
            let ingredient = meal["strIngredient" + i];
            let measure = meal["strMeasure" + i];
            if (ingredient && ingredient.trim() !== "") {
                ingredients += `<li>${measure} ${ingredient}</li>`;
            }
            ingre.innerHTML = "<strong>Ingredients:</strong><ul>" + ingredients + "</ul>";
        }
    }else{
        name.innerHTML = "No recipe found!";
        proce.innerHTML = "";
        about.innerHTML = "";
        ingre.innerHTML = "";
        photo.src = "";
    }
}
btn.addEventListener("click",(e)=>{
    findrecipe(search.value);
    e.preventDefault;
});
findrecipe();
