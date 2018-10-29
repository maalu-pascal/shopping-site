import { Collection, createTodoPage, selectedToDo } from './to-do.js';
import { Catalogue, createCataloguePage, selectedItems } from './catalogue.js';
import { list } from './data.js';

function renderCart() {
    const collection = new Collection(Object.keys(list));

    const ulitem1 = createTodoPage(collection);
    console.log(selectedToDo.map((item) => {
        if (item.done === true) {
            $(`input[title="${item.title}"]`).prop('checked',true);
        }

    }));

    // $(`input[title="${selectedToDo[index].title}"]`).checked = true;


    Object.keys(list).forEach(element => {
        $('#catalogue').append(`<label><b>${element}</b></label>`);
        const catalogue = new Catalogue(Object.keys(list[element]));
        const ulitem2 = createCataloguePage(catalogue);
    });
}


export { renderCart };