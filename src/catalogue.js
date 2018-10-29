import { loadPage, router } from '../index.js'
import { list } from './data.js';

import { renderTodoPage, selectedToDo } from './to-do.js';

class CatalogueModel {
    constructor(title = '', done = false, quantity = '0') {
        this.done = done;
        this.title = title;
        this.quantity = quantity;
        this.ts = Date.now();
        this.id = `id-${this.ts}`;
    }

    update({ title = '', done = false }) {
        this.done = done;
        this.title = title;
    }
}

class Catalogue {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new CatalogueModel(item));
        } else {
            this.data = new CatalogueModel(data);
        }
    }
}

const createCatalogItems = (todo) => {
    return _.template(`<div>
            <label for="<%= id %>"><%= title %></label>
            <input type="input" id="<%= id %>" name="<%= title %>" class="catalogue-input" placeholder="Enter Quantity" value= "0" />
        </div>`)(todo);
}

const createCatalog = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo['data'].map((todo) => createCatalogItems(todo))
    );

    return $ul;
}

const createCataloguePage = (todos) => {
    const $root = $('#catalogue');
    const $page = $('<div />');
    const $ul = createCatalog(todos);

    const onChange = function () {
        const matched = todos['data'].find((catalogueModel) => {
            if (catalogueModel.title === this.name) return catalogueModel;
        });

        if (matched) {
            matched.quantity = document.getElementsByName(this.name)[0].value;

        }
    }
    $page.append($ul);
    $ul.on('change', 'input', onChange);
    $root.append($page[0]);

    return {
        onDistroy: () => {
            $ul.off('change');
        }
    }
}

let selectedItems;
function renderCatalogue() {
    let items = [];

    Object.keys(list).forEach(element => {
        $('#catalogue').append(`<label><b>${element}</b></label>`);
        const catalogue = new Catalogue(Object.keys(list[element]));
        items.push(catalogue['data']);
        const ulitem2 = createCataloguePage(catalogue);
    });

    const submitCatalogue = () => {
        selectedItems = items.map((category) => {
            return category.filter((model) => {
                if (model.quantity > 0) return model;
            });
        });
        console.log(selectedItems);
        console.log(selectedToDo);

        for( let index in selectedItems)
        {
            console.log(index);
            // console.log(selectedItems[index].length);
            
            if(selectedItems[index].length !== 0) {
                selectedToDo[index].update({title : selectedToDo[index].title, done: true});
                // $(`input[title="${selectedToDo[index].title}"]`).checked = true;
                console.log(selectedToDo[index]);
            } 
        } 

        window.history.pushState('cart', '', '#cart');
        router();
    };
    $('#submit-catalogue').on('click', submitCatalogue);

}

export {
    Catalogue,
    createCataloguePage,
    renderCatalogue,
    selectedItems
};