import {selectedToDos} from './shared.js'
import { list } from './data.js'
const createCheckoutPage = (selectedToDos) => {
    const $root = $('#root');
    $root.append('<h2> Checkout </h2>');
    console.log(selectedToDos(list));

    return {
        onDistroy: () => {
            $('#root').html("");
        }
    }}

export {createCheckoutPage};