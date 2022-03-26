import "../component/navbar.js"
import "../component/meal-list.js";
import "../component/search-bar.js";
import "../component/footer.js";
import DataSource from "../data/data-source.js";

const baseUrl = "https://themealdb.com/api/json/v1/1";

const main = () => {
    const searchMeal = document.querySelector('search-bar');
    searchMeal.setAttribute('id', 'index-banner');
    searchMeal.classList.add('section', 'no-pad-bot')

    const mealListElement = document.querySelector('meal-list');
    mealListElement.classList.add('row');
    mealListElement.addEventListener('click', getDetails);

    const mealDetailsElement = document.querySelector('#meal-details')
    const mealListArea = document.querySelector('#listAllArea');
    mealListArea.addEventListener('click', getDetails);

    const mealListCategory = document.querySelector('#listAllCategory');
    mealListCategory.addEventListener('click', getDetails);

    const mealListShow = document.querySelector('#mealListShow');
    mealListShow.classList.add('row');


    function getDetails(e) {
        e.preventDefault();
        if (e.target.classList.contains('details-btn')) {
            let mealItem = e.target.parentElement.parentElement.parentElement;
            fetch(`${baseUrl}/lookup.php?i=${mealItem.dataset.id}`)
                .then((response) => {
                    return response.json()
                })
                .then(responseJson =>
                    popUpModal(responseJson.meals)
                )
        } else if (e.target.classList.contains('details-btn-area')) {
            let mealItem = e.target.parentElement.parentElement.parentElement;
            fetch(`${baseUrl}/filter.php?a=${mealItem.dataset.id}`)
                .then((response) => {
                    return response.json()
                })
                .then(responseJson =>
                    showArea(responseJson.meals)
                )
        } else if (e.target.classList.contains('sub-details')) {
            let mealItem = e.target.parentElement.parentElement;
            fetch(`${baseUrl}/lookup.php?i=${mealItem.dataset.id}`)
                .then((response) => {
                    return response.json()
                })
                .then(responseJson =>
                    popUpModal(responseJson.meals)
                )
        } else if (e.target.classList.contains('details-btn-category')) {
            let mealItem = e.target.parentElement.parentElement.parentElement;
            fetch(`${baseUrl}/filter.php?c=${mealItem.dataset.id}`)
                .then((response) => {
                    return response.json()
                })
                .then(responseJson =>
                    showCategory(responseJson.meals)
                )
        }
    }

    function popUpModal(meal) {
        meal = meal[0];
        let fillHtml = `
        <div id="popup" class="show popup-modal z-depth-3">
        <div class="modal-content">
            <div><a href="#" id="closeModal"><i id="close" class="material-icons right">close</i></a></div>
            <br>
            <h2 class="header center text white" style="margin-top:-2rem; padding: 1rem;"><img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="center card-icon" ></h2>
            <h4 class="title white-text teal">Meal Name : ${meal.strMeal}</h4>
            <hr>
            <h4 class="title white-text teal">Category :  ${meal.strCategory}</h4>
            <hr>
            <h4 class="title white-text teal">Area : ${meal.strArea}</h4>
            <h4 class="sub-title white">Ingridient</h4>
            <p id="ingridient" class="text-desc white">
                ${meal.strIngredient1 ? meal.strIngredient1 : ""}
                ${meal.strIngredient2 ? `, ${meal.strIngredient2}` : ""}
                ${meal.strIngredient3 ? `, ${meal.strIngredient3}` : ""}
                ${meal.strIngredient4 ? `, ${meal.strIngredient4}` : ""}
                ${meal.strIngredient5 ? `, ${meal.strIngredient5}` : ""}
                ${meal.strIngredient6 ? `, ${meal.strIngredient6}` : ""}
                ${meal.strIngredient7 ? `, ${meal.strIngredient7}` : ""}
                ${meal.strIngredient8 ? `, ${meal.strIngredient8}` : ""}
                ${meal.strIngredient9 ? `, ${meal.strIngredient9}` : ""}
                ${meal.strIngredient10 ? `, ${meal.strIngredient10}` : ""}
                ${meal.strIngredient11 ? `, ${meal.strIngredient11}` : ""}
                ${meal.strIngredient12 ? `, ${meal.strIngredient12}` : ""}
                ${meal.strIngredient13 ? `, ${meal.strIngredient13}` : ""}
                ${meal.strIngredient14 ? `, ${meal.strIngredient14}` : ""}
                ${meal.strIngredient15 ? `, ${meal.strIngredient15}` : ""}
                ${meal.strIngredient16 ? `, ${meal.strIngredient16}` : ""}
                ${meal.strIngredient17 ? `, ${meal.strIngredient17}` : ""}
                ${meal.strIngredient18 ? `, ${meal.strIngredient18}` : ""}
                ${meal.strIngredient19 ? `, ${meal.strIngredient19}` : ""}
                ${meal.strIngredient20 ? `, ${meal.strIngredient20}` : ""}.
            </p>
            <p class="instruction white">Instructions</p>
            <p class="text-desc white"> ${meal.strInstructions}</p>
            <p><a href="${meal.strYoutube}" class="btn" target="_blank"><i class="material-icons left">video_library</i>Play Video</a></p>
            
        </div>
        </div>
        `;
        mealDetailsElement.innerHTML = fillHtml;
        const closeModal = document.querySelector('#closeModal');
        const popup = document.querySelector('#popup');
        closeModal.addEventListener('click', () => {
            popup.remove()
        })

        function keyPress(e) {
            if (e.key == "Escape") {
                popup.remove();
            }
        }

        document.addEventListener('keyup', keyPress);
    }

    function showCategory(meals) {
        const modal = document.createElement('div');
        modal.setAttribute('id', 'popup-details')
        modal.classList.add('show', 'popup-modal', 'z-depth-3');
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.marginTop = "2rem";
        const closeModal = document.createElement('a');
        closeModal.setAttribute('href', '#');
        closeModal.setAttribute('id', 'closeModal')
        const iconClose = document.createElement('i');
        iconClose.setAttribute('id', 'close');
        iconClose.classList.add('material-icons', 'left');
        iconClose.style.position = "absolute";
        iconClose.style.marginTop = "-2rem";
        iconClose.style.right = "20px";
        iconClose.style.zIndex = "99";
        iconClose.style.fontSize = "2rem";
        iconClose.innerText = 'close';

        closeModal.append(iconClose);
        modalContent.append(closeModal)
        meals.forEach((meal) => {
            modalContent.innerHTML += `
            <div class="card col s12 m6 l4" data-id="${meal.idMeal}">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="card-action teal">
                    <span class="card-title activator grey-text text-lighten-4">${meal.strMeal}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p class="card-title">Meal Name : ${meal.strMeal}</p>
                    <a href="#" class="btn orange sub-details"><i class="material-icons left">fullscreen</i>Details</a>
                </div>
            </div>
            `;
        })

        modal.append(modalContent);
        mealListShow.append(modal);

        const closeModalBtn = document.querySelector('#closeModal');
        const popupDetails = document.querySelector('#popup-details');
        popupDetails.style.zIndex = "10";
        popupDetails.addEventListener('click', getDetails);
        closeModalBtn.addEventListener('click', () => {
            popupDetails.remove();
        })



        function keyPress(e) {
            if (e.key == "Escape") {
                popupDetails.remove();
            }
        }

        document.addEventListener('keyup', keyPress);
    }

    function showArea(meals) {
        const modal = document.createElement('div');
        modal.setAttribute('id', 'popup-details')
        modal.classList.add('show', 'popup-modal', 'z-depth-3');
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.marginTop = "2rem";
        const closeModal = document.createElement('a');
        closeModal.setAttribute('href', '#');
        closeModal.setAttribute('id', 'closeModal')
        const iconClose = document.createElement('i');
        iconClose.setAttribute('id', 'close');
        iconClose.classList.add('material-icons', 'left');
        iconClose.style.position = "absolute";
        iconClose.style.marginTop = "-2rem";
        iconClose.style.right = "20px";
        iconClose.style.zIndex = "99";
        iconClose.style.fontSize = "2rem";
        iconClose.innerText = 'close';

        closeModal.append(iconClose);
        modalContent.append(closeModal)
        meals.forEach((meal) => {
            modalContent.innerHTML += `
            <div class="card col s12 m6 l4" data-id="${meal.idMeal}">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="card-action teal">
                    <span class="card-title activator grey-text text-lighten-4">${meal.strMeal}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p class="card-title">Meal Name : ${meal.strMeal}</p>
                    <a href="#" class="btn orange sub-details"><i class="material-icons left">fullscreen</i>Details</a>
                </div>
            </div>
            `;
        })

        modal.append(modalContent);
        mealListShow.append(modal);

        const closeModalBtn = document.querySelector('#closeModal');
        const popupDetails = document.querySelector('#popup-details');
        popupDetails.style.zIndex = "10";
        popupDetails.addEventListener('click', getDetails);
        closeModalBtn.addEventListener('click', () => {
            popupDetails.remove();
        })



        function keyPress(e) {
            if (e.key == "Escape") {
                popupDetails.remove();
            }
        }

        document.addEventListener('keyup', keyPress);
    }

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchMeal.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    const renderResult = result => {
        mealListElement.meals = result;
    }

    const fallbackResult = message => {
        mealListElement.renderError(message);
    }

    const getArea = async () => {
        try {
            const response = await fetch(`${baseUrl}/list.php?a=list`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllArea(responseJson.meals);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }
    const getCategory = async () => {
        try {
            const response = await fetch(`${baseUrl}/list.php?c=list`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllCategory(responseJson.meals);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }

    const renderAllArea = (meals) => {
        const listAllArea = document.querySelector('#listAllArea');
        listAllArea.classList.add('row');
        listAllArea.innerHTML = "";
        listAllArea.innerHTML += `
        <h2 class='center grey-text'>Filter by Area</h2>
        `;
        meals.forEach(meal => {
            listAllArea.innerHTML += `
            <div class="col s12 m6 l4" data-id="${meal.strArea}">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="">
                    </div>
                    <div class="card-action teal">
                    <span class="card-title activator grey-text text-lighten-4">${meal.strArea}<i class="material-icons right">more_vert</i></span>
                    
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <a href="#" class="btn orange details-btn-area"><i class="material-icons left">fullscreen</i>Details</a>
                    </div>
                </div>
            </div>
            `;
        });
    }
    const renderAllCategory = (meals) => {
        const listAllCategory = document.querySelector('#listAllCategory');
        listAllCategory.classList.add('row');
        listAllCategory.innerHTML = "";
        listAllCategory.innerHTML += `
        <h2 class='center grey-text'>Filter by Category</h2>
        `;
        meals.forEach(meal => {
            listAllCategory.innerHTML += `
            <div class="col s12 m6 l4" data-id="${meal.strCategory}">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="">
                    </div>
                    <div class="card-action teal">
                    <span class="card-title activator grey-text text-lighten-4">${meal.strCategory}<i class="material-icons right">more_vert</i></span>
                    
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <a href="#" class="btn orange details-btn-category"><i class="material-icons left">fullscreen</i>Details</a>
                    </div>
                </div>
            </div>
            `;
        });
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    }
    function sidenav() {
        const elem = document.querySelector('.sidenav');
        const instance = new M.Sidenav(elem);
    }
    
    sidenav();
    getArea();
    getCategory();
    searchMeal.clickEvent = onButtonSearchClicked;
}

export default main;