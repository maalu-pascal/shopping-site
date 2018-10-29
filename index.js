import {
    list
} from './src/data.js';
import {
    Collection,
    createTodoPage
} from './src/to-do.js';
import {
    Catelogue,
    createCateloguePage
} from './src/catalog.js';


window.onload = function () {
    window.history.pushState('to-do', '', '#to-do');
};

// window.onhashchange = router;
window.addEventListener("hashchange", router(), false);

//Load the main body content.
function loadPage(page) {
    let req = new XMLHttpRequest();
    req.open("GET", `./src/${page}.html`, false);
    req.send();
    document.getElementById('main-content').innerHTML = req.responseText;
}

function router() {
    const link = (location.hash).substring(1);
    if (link === 'to-do') {
        loadPage('to-do');

        const collection = new Collection(Object.keys(list));
        const ulitem1 = createTodoPage(collection);

        const submit = () => {
            const checked = collection['data'].filter((model) => {
                if (model.done === true) return model;
            });
            let selectedItems = checked.map((item) => item.title);
            window.history.pushState('catalogue', '', '#catalogue');

            loadPage('catalog');
            selectedItems.forEach(element => {
                const catelogue = new Catelogue(Object.keys(list[element]));
                const ulitem2 = createCateloguePage(catelogue);
                                    
            });
        };
        $('#submit-to-do').on('click', submit);

        // } else if (link === 'catalogue') {
        // console.log('checked');

        // const catelogue = new Catelogue(Object.keys(list));
        // const ulitem2 = createCateloguePage(catelogue);
        // console.log(ulitem2);

        // createCataloguePage();
    } else if (link === 'Cart') {
        createCartPage();
    } else if (link === 'Bill') {
        createBillPage();
    } else {
        console.log('invalid-page');
    }
}

// loadPage('to-do');

// const collection = new Collection(Object.keys(list));
// const ulitem1 = createTodoPage(collection);

// const submit = () => {
//     const checked = collection['data'].filter((model) => {if (model.done === true) return model;});
//     console.log(checked.map( (item) => item.title));

//     loadPage('catalog');
// };
// $('#submit-to-do').on('click', submit);

// let newCatelog = checked
// const catelog = new catelog(Object.keys(list));
// const ulitem2 = createCatelogPage(catelog);