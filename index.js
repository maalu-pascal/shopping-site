import { list } from './src/data.js';
import { renderTodoPage, selectedToDo } from './src/to-do.js';
import { renderCatalogue } from './src/catalogue.js';
// import { Catalogue, createCataloguePage } from './src/catalogue.js';
import { renderCart } from './src/cart.js' ;


window.onload = function () {
    window.history.pushState('to-do', '', '#to-do');

};



//Load the main body content.
function loadPage(page) {
    let req = new XMLHttpRequest();
    req.open("GET", `./src/${page}.html`, false);
    req.send();
    document.getElementById('main-content').innerHTML = req.responseText;
}

function router() {
    const route = (location.hash).substring(1);

    if (route === 'to-do') {
        loadPage('to-do');
        renderTodoPage();

    } else if (route === 'catalogue') {
        console.log('checked');
        loadPage('catalogue');
        renderCatalogue();
        


    } else if (route === 'cart') {
        loadPage('cart');
        renderCart();

    } else if (route === 'checkout') {
        createBillPage();
    } else {
        console.log('invalid-page');
    }
}

window.addEventListener("hashchange", router(), false);

export { loadPage, router };