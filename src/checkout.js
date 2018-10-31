import {
    selectedToDos
} from './shared.js'
import {
    list
} from './data.js'

const createItem = (item) => {

    return _.template(`<li class="list-group-item h-auto">
        <div class=" d-flex justify-content-start">
            <span class="ml-5 col-3"><b><%= title %></b></span>
            <div class="d-flex flex-column col-3">
                <span class="small">Company : <%= company %>  </span> 
                <span class="small">Discount : <%= discount %>%  </span> 
                <span class="small">Price : <%= price %>/-  </span> 
                <span class="small">Quantity : <%= quantity %>/-  </span> 
            </div>
            <span class="col-3 col align-self-end offset-md-3"><b>= ${total(item)}/-</b></span>
        </div>
    </li>`)(item);

};


const createItemList = (items) => {
    const $ul = $('<ul />');

    $ul.append(items.map((item) => createItem(item)));
    return $ul;

};

Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth - 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});

const total = (item) => { return (item.price - (item.price) * (item.discount) / 100) * item.quantity; }


const reducer = (accumulator, currentValue) => accumulator + currentValue ;


const createCheckoutPage = () => {
    const $root = $('#root');
    const $page = $('<div />')
    const selectedToDo = selectedToDos(list);

    const filtered = selectedToDo.flat().flat().filter((items) => {

        if (items.quantity > "0") {
            return items;
        }

    });
    const $ul = createItemList(filtered);

    $root.append('<h2> Checkout </h2>');
    $page.append($ul);
    const itemTotal = filtered.map((item) => { return total(item); });
    const grandTotal = itemTotal.reduce(reducer);
    

    $root.append($page);
    $root.append(`<div class = "p-2  d-flex justify-content-end" ><span><b> Total = ${grandTotal}</b></span></div>`)    

    return {
        onDistroy: () => {
            $('#root').html("");
        }
    }

};

export {
    createCheckoutPage
};