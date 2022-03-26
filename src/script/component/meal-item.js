class MealItem extends HTMLElement{
  
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${this._meal.strMealThumb}">
          </div>
          <div class="card-action teal">
            <span class="card-title activator grey-text text-lighten-4">${this._meal.strMeal}<i class="material-icons right">more_vert</i></span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
            <p class="card-title">${this._meal.strMeal}</p>
            <a href="#" class="btn orange details-btn"><i class="material-icons left">fullscreen</i>Details</a>
          </div>
        </div>
        `;
    }
};

customElements.define('meal-item', MealItem);
