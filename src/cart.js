import { loadPage, router } from '../index.js'
import { list, todos } from './data.js';

const createCartItems = (todo) => {
    return _.template(`<li class="list-group-item">
            <div class=" d-flex justify-content-between">
                <span class="ml-5 col-3"><%= title %></span>
                <div class="d-flex flex-column col-3">
                    <span class="small">Discount = <%= discount %>%  </span> 
                    <span class="small">Price = <%= price %>/-  </span> 
                </div>
                <div class="col-5">
                    <label for="<%= title %>" > Quantity </label>
                    <input type="number" id="<%= title %>" name="<%= title %>" class="catalog-input " placeholder="Enter Quantity" value= "0" />
                </div>
                </div>
        </li>`)(todo);
}
const createCart = (catalogList) => {

    const $ul = $('<ul class="pl-2"/>');
    $ul.append(`<li class="list-group-item bg-secondary text-light d-flex justify-content-between">
    <label class="h5 "><b> ${catalogList[0]}</b> </label>
    <button class="btn btn-light" id="delete-div" name="${catalogList[0]}">Delete</button>
    </li>`);

    $ul.append(
        Object.values(catalogList[1]).map((todo) => createCartItems(todo))
    );

    const onChange = function () {
        console.log(this);
        console.log(list);

        console.log("catalogList:",catalogList[0]);

        const matched = catalogList[1].filter((catalogModel) => {
            console.log("inside:", catalogModel, this.name);
            console.log(list[catalogList[0]][catalogModel]);

            if (list[catalogModel] === this.name) {
                console.log("success");

                return catalogModel
            };
        });
        console.log(todos);
        console.log(matched);

        // console.log(catalogList[1][matched].quantity);

        // if (matched) {
        //     catalogList[matched].quantity = document.getElementsByName(this.name)[0].value;

        // }
        console.log(list);

    }
    const deleteItem = function () {
        todos.map((item) => {
            if (item.title === this.name) {
                item.done = false;
            }
        });
        $(this).closest("ul").remove();
    }
    $ul.on('change', 'input', onChange);
    $ul.on('click', 'button', deleteItem);

    return $ul;
}
// const selectedItems ='';

const createCartPage = (catalogList) => {
    // console.log(todos);

    // console.log(catalogList);
    // console.log(Object.entries(catalogList));

    let selectedItems = Object.entries(catalogList).filter((item) => {
        // console.log(item);

        let found = (todos.find((name) => {
            if ((name.title == item[0]) && (name.done === true)) return name;
        }));

        if (found) {
            return item;
        }

    });
    // console.log(selectedItems);
    // console.log(Object.entries(catalogList));

    // console.log(catalogList);

    const $root = $('#root');
    const $page = $('<div />');
    let $ul = '';

    $page.append('<div class="mb-3"><span class="h2"><b>Cart</b> </span></div>');
    $page.append('<div class = "mb-3 d-flex justify-content-end"><button id="submit-catalog" class=" btn btn-dark">Proceed</button></div>');
    // const onChange = function () {
    //     console.log(this);
    //     console.log(catalogList);

    //     const matched = catalogList.find((catalogModel) => {
    //         if (catalogModel.title === this.name) return catalogModel;
    //     });

    //     if (matched) {
    //         matched.quantity = document.getElementsByName(this.name)[0].value;

    //     }
    // }
    // Object.entries(catalogList).forEach(element => {
    selectedItems.forEach(element => {
        $ul = createCart(Object.values(element));
        // $ul.on('change', 'input', onChange);
        $page.append($ul);
    });

    $root.append($page[0]);

    return {
        onDistroy: () => {
            $ul.off('change');
            $ul.off('click');

            $('#root').html("");
        }
    }
}

export { createCartPage };