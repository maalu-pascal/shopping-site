import { loadPage, router } from '../index.js';
import { list, todos } from './data.js';
import { selectedToDos } from './shared.js';

const createCartItems = (todo) => {
    return _.template(`<li class="list-group-item">
            <div class=" d-flex justify-content-between">
                <span class="ml-5 col-3"><b><%= title %></b></span>
                <div class="col-5">
                    <label for="<%= title %>" > Quantity </label>
                    <input type="number" id="<%= title %>" name="<%= title %>" class="cart-input" placeholder="Enter Quantity" value= "<%= quantity %>" />
                </div>
                </div>
        </li>`)(todo);
}
const createCart = (catalogList) => {

    const $ul = $('<ul class="pl-2"/>');
    $ul.append(`<li class="list-group-item bg-dark text-light d-flex justify-content-between">
    <label class="h5 "><b> ${catalogList[0]}</b> </label>
    <button class="btn btn-light" id="delete-div" name="${catalogList[0]}">Delete</button>
    </li>`);

    $ul.append(
        Object.values(catalogList[1]).map((todo) => createCartItems(todo))
    );

    const onChange = function () {
        const matched = list[catalogList[0]].findIndex((catalogItem) => {
            if (catalogItem.title === this.name) {
                return catalogItem
            };
        });
        
        if (matched >= 0) {
            list[catalogList[0]][matched].quantity = document.getElementsByName(this.name)[0].value;
        }
    }
    $ul.on('change', 'input', onChange);

    const deleteItem = function () {
        todos.map((item) => {
            if (item.title === this.name) {
                item.done = false;
            }
        });
        $(this).closest("ul").remove();
    }
    $ul.on('click', 'button', deleteItem);

    return $ul;
}

const createCartPage = (catalogList) => {

    const $root = $('#root');
    const $page = $('<div />');
    let $ul = '';

    $page.append('<div class="mb-3"><span class="h2"><b>Cart</b> </span></div>');

    let selectedItems = selectedToDos(catalogList);
    selectedItems.forEach(element => {
        $ul = createCart(Object.values(element));
        $page.append($ul);
    });
    
    $page.append('<div class = "mb-3 d-flex justify-content-end"><button id="submit-cart" class=" btn btn-dark">Checkout</button></div>');
    $root.append($page[0]);

    return {
        onDistroy: () => {
            $ul.off('change');
            $ul.off('click');
            $('#root').html("");
        }
    }
}

export {
    createCartPage
};