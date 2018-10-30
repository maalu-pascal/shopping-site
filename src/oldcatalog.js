import { loadPage, router } from '../index.js'
import { list } from './data.js';

import { renderTodoPage, selectedToDo } from './to-do.js';

class CatalogModel {
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

class Catalog {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new CatalogModel(item));
        } else {
            this.data = new CatalogModel(data);
        }
    }
}

const createCatalogItems = (todo) => {
    return _.template(`<div>
            <label for="<%= title %>"><%= title %></label>
            <input type="input" id="<%= title %>" name="<%= title %>" class="catalog-input" placeholder="Enter Quantity" value= "0" />
        </div>`)(todo);
}

const createCatalog = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo.map((todo) => createCatalogItems(todo))
    );

    return $ul;
}

const createCatalogPage = (todos) => {
    const $root = $('#catalog');
    const $page = $('<div />');
    const $ul = createCatalog(todos);

    const onChange = function () {
        const matched = todos.find((catalogModel) => {
            if (catalogModel.title === this.name) return catalogModel;
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
            $('#root').html("");
            console.log("destroy");
            
        }
    }
}

let selectedItems;
function renderCatalog(todos) {
    let items = [];
    console.log(list);
    console.log(Object.entries(list));
    
    let c = Object.keys(list).filter((item) => {
        console.log(item);
        if(todos.f)
        return item;
    });


    Object.entries(list).forEach(element => {
        // $('#catalog').append(`<label><b>${element}</b></label>`);
        // const catalog = new Catalog(Object.keys(list[element]));
        // items.push(catalog);
        console.log(element);

        // const ulitem2 = createCatalogPage(catalog);
        const ulitem2 = createCatalogPage(element);
    });

    const submitCatalog = () => {
        selectedItems = items.map((category) => {
            return category.filter((model) => {
                if (model.quantity > 0) return model;
            });
        });
        console.log(selectedItems);
        console.log(selectedToDo);

        for (let index in selectedItems) {
            console.log(index);
            // console.log(selectedItems[index].length);

            if (selectedItems[index].length !== 0) {
                selectedToDo[index].update({ title: selectedToDo[index].title, done: true });
                // $(`input[title="${selectedToDo[index].title}"]`).checked = true;
                console.log(selectedToDo[index]);
            }
        }

        window.history.pushState('cart', '', '#cart');
        router();
    };
    $('#submit-catalog').on('click', submitCatalog);

}

export {
    Catalog,
    createCatalogPage,
    renderCatalog,
    selectedItems
};