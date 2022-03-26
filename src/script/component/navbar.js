import logo from '../../images/favicon.png';
class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="teal lighten-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="${logo}" style="width:3rem; margin-top:0.5rem"></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#index-banner">
                Home</a></li>
                <li><a href="#listAllCategory">
                Categories</a></li>
                <li><a href="#listAllArea">
                Areas</a></li>
                <li><a href="#about">
                About</a></li>
                <li><a href="#contact">
                Contact</a></li>
                
            </ul>

            <ul id="nav-mobile" class="sidenav">
                <li><a href="#index-banner">
                Home</a></li>
                <li><a href="#listAllCategory">
                Categories</a></li>
                <li><a href="#listAllArea">
                Areas</a></li>
                <li><a href="#about">
                About</a></li>
                <li><a href="#contact">
                Contact</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </nav>
        `;

    }
};

customElements.define('navigation-bar', NavBar);
