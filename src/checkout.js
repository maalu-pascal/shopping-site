import {
    selectedToDos
} from './shared.js'
import {
    list
} from './data.js'

const createItem = (item) => {

    return _.template(`<li class="d-block mb-4 p-2 h-auto border-bottom">
        <div class=" d-flex justify-content-start">
            <div class="d-flex flex-column col-6">
                <span class="h5"><b><%= title %></b></span>
                <span class="small text-secondary"><b><%= company %> </b> </span> 
                <span class="small">Price : Rs.<%= price %>/-  </span> 
                <span class="small">Discount : <%= discount %>%  </span> 
                <span class="small">Quantity : <%= quantity %>/-  </span> 
            </div>
            <span class="col-3 col align-self-end offset-md-3"><b>: Rs.${itemTotal(item)}/-</b></span>
        </div>
    </li>`)(item);

};


const createItemList = (items) => {
    const $ul = $('<ul class="pl-0" />');

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

const itemTotal = (item) => { return (item.price - (item.price) * (item.discount) / 100) * item.quantity; }


const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);


const createCheckoutPage = () => {
    const $root = $('#root');
    const $page = $('<div class = "border"/>')
    const selectedToDo = selectedToDos(list);

    const filtered = selectedToDo.flat().flat().filter((items) => {

        if (items.quantity > "0") {
            return items;
        }

    });
    const $ul = createItemList(filtered);

    $page.append('<div class="mb-3 p-2 border-bottom"><span class="h2"><b>Checkout</span></div>');
    $page.append($ul);

    const itemsTotal = filtered.map((item) => { return itemTotal(item); });
    const total = itemsTotal.reduce(reducer);    
    const tax = "10";
    const grandTotal = Math.floor((total/100)*tax + total);

    $page.append(`<div class = "p-2 d-flex justify-content-end" >
    <div class="col-4 d-flex flex-column">
    <span class="small">Cart Total : Rs.${total}/-</span>
    <span class="small">Estimated Tax : Rs.${grandTotal-total}/- </span>
    <span><b> Total Payable : Rs.${grandTotal}</b></span>
    </div>
    </div>`)
    $root.html($page);

    return {
        onDistroy: () => {
            return null;
        }
    }

};

export {
    createCheckoutPage
};