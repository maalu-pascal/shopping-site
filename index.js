import { list, todos } from './src/data.js';
import { createTodoPage } from './src/to-do.js';
import { createCatalogPage } from './src/catalog.js';
import {  createCartPage } from './src/cart.js';


window.onload = function () {
    //     window.history.pushState({}, 'to-do', '#to-do');
    router();
};

//Load the main body content.
function loadPage(page) {
    let req = new XMLHttpRequest();
    req.open("GET", `./src/${page}.html`, false);
    req.send();
    document.getElementById('root').innerHTML = req.responseText;
}
let ref = null;

const router = () => {
    const route = (location.hash).substring(1);

    if (ref) {
        ref.onDistroy();
    }
    if (route == '') {
        window.history.pushState({}, 'to-do', '#to-do');
        router();

    } else if (route === 'to-do') {
        ref = createTodoPage(todos);
        $('#submit-to-do').on('click', onCatalogButtonClick);

    } else if (route === 'catalog') {
        ref = createCatalogPage(list);
        $('#submit-catalog').on('click', onCartButtonClick);

    } else if (route === 'cart') {
        ref = createCartPage(list);

    } else if (route === 'checkout') {
        createBillPage();
    } else {
        console.log('invalid-page');
    }
}

const onToDoButtonClick = () => {
    window.history.pushState({}, 'Todo', '#to-do');
    router();
};
const onCatalogButtonClick = () => {
    window.history.pushState({}, 'Catalog', '#catalog');
    router();
};
const onCartButtonClick = () => {
    window.history.pushState({}, 'Cart', '#cart');
    router();
};
window.addEventListener("hashchange", router(), false);
window.onhashchange = router;

export { loadPage, router, onToDoButtonClick };