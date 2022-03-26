class SearchBar extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchMeal').value;
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <br><br><br><br>
        
            <div class="row center">
            <h1 class="header center orange-text">ENHA RECIPES</h1>
            <h5 class="header col s12 light">Explore much more recipes meal here</h5>
            </div>
            <div class="row center">
                <input type="search" class="col s12 validate" placeholder="Search here by ingredient" id="searchMeal">

                <button type="submit" class="waves-effect waves-light btn" id="searchButtonMeals"><i class="material-icons left" >search</i>Search</button>
            </div>
        </div>
        `;

        this.querySelector("#searchButtonMeals").addEventListener('click', this._clickEvent);
    }
};

customElements.define('search-bar', SearchBar);