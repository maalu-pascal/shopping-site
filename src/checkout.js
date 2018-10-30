import {
    selectedToDos
} from './shared.js'
import {
    list
} from './data.js'

const createItem = (item) => {
    const total = (item.price - (item.price)*(item.discount)/100)*item.quantity;
    
    return _.template(`<li class="list-group-item h-auto">
        <div class=" d-flex justify-content-start">
            <span class="ml-5 col-3"><b><%= title %></b></span>
            <div class="d-flex flex-column col-3">
                <span class="small">Company : <%= company %>  </span> 
                <span class="small">Discount : <%= discount %>%  </span> 
                <span class="small">Price : <%= price %>/-  </span> 
                <span class="small">Quantity : <%= quantity %>/-  </span> 
            </div>
            <span class="col-3 col align-self-end offset-md-3"><b>= ${total}/-</b></span>
        </div>
    </li>`)(item);

};


const createItemList = (items) => {
    const $ul = $('<ul />');

    $ul.append(items.map((item) => createItem(item)));
    return $ul;
    
};

const createCheckoutPage = () => {
    const $root = $('#root');
    const $page = $('<div />')
    const selectedToDo = selectedToDos(list);

    const filtered = selectedToDo.flat().flat().filter((items) => {
        if (items.quantity > "0") {
            return items;
        }

    });
    console.log(filtered);
    $root.append('<h2> Checkout </h2>');
    const $ul = createItemList(filtered);
    console.log($ul);
    
    $page.append($ul);
    $root.append($page);
    return {
        onDistroy: () => {
            $('#root').html("");
        }
    }
};

export {
    createCheckoutPage
};