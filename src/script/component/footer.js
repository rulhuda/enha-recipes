import myProfile from "../../images/huda.jpg"
class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <footer class="page-footer orange">
        <div class="container">
          <div class="row">
            <div id="about" class="col l12 s12 center teal">
              <h2 class="white-text">About</h2>
              <h5>
              The ENHA RECIPES site is a site that provides content for various recipes and how to cook them. Various food recipes are served not only local but international recipes. How to find recipes on this site is quite easy. Can search by ingredients, category, and area.
              <p>Happy Cooking!</p>
              </h5>
            </div>
            <div id="contact" class="col l12 s12 center">
              <h3 class="white-text">Developer Profile</h3>
              <p><img src="${myProfile}" alt="huda" style="width: 20rem; border-radius: 50%;"></p>
              <h5 class="white-text">Nurul Huda</h5>
              <h5 class="white-text">Jombang, East Java</h5>
              <h5 class="white-text">Universitas Hasyim Asy'ari</h5>
              <br>
              <h4 class="white-text">Contact</h4>
                <a class="white-text" href="mailto:nurulhuda.unhasy@gmai.com"><h5 class="btn">Email</h5></a>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <div class="center">SIB Batch 2 | Dicoding | Belajar Fundamental Front-End Web Development</div>
            <div class="center">&copy; 2022 Nurul Huda</div>
          </div>
        </div>
      </footer>
        `;

    }
};

customElements.define('footer-page', Footer);