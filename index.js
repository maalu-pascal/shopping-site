import {
    list
} from './src/data.js';
import {
    Collection,
    createTodoPage
} from './src/to-do.js';

//Load the main body content.
function loadPage (page) {
        let req = new XMLHttpRequest();
        req.open("GET", `./src/${page}.html`, false);
        req.send();
        document.getElementById('main-content').innerHTML = req.responseText;
}
loadPage('to-do');

const collection = new Collection(Object.keys(list));
const ulitem2 = createTodoPage(collection);

const submit = () => {
    const checked = collection['data'].filter((model) => {if (model.done === true) return model;});
    console.log(checked.map( (item) => item.title));
    loadPage('catalog');
};
$('#submit-to-do').on('click', submit);



