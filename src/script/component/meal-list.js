import "./meal-item.js";
import alert from '../../images/alert.png';

class MealList extends HTMLElement{
    set meals(meals){
        this._meals = meals;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this.innerHTML = "<h2 class='center grey-text'>Search Result</h2>";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement('meal-item');
            mealItemElement.classList.add('col', 's12', 'm6', 'l4');
            mealItemElement.setAttribute('data-id', `${meal.idMeal}`);
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        });
    }

    renderError(message){
        this.innerHTML = "";
        this.innerHTML += `
        <h2 class="header center red-text">${message}</h2>
        <h2 class="header center text"><img src="${alert}" class="center card-icon" ></h2>
        `;
        
    }
}

customElements.define('meal-list', MealList);