import { list } from './data.js';
import { loadPage, router } from '../index.js'

class Model {
    constructor(title = '', done = false) {
        this.done = done;
        this.title = title;
        this.ts = Date.now();
        this.id = `id-${this.ts}`;

    }

    update({
        title = '',
        done = false
    }) {
        this.done = done;
        this.title = title;
    }
}

class Collection {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new Model(item));
        } else {
            this.data = new Model(data);
        }
    }
}

const createTodo = (todo) => {
    const checked = (todo.done === true) ? 'checked' : '';
    const labelTxt = (todo.done === true) ? '<s><%= title %></s>' : '<%= title %>';
    console.log(todo.done);
    

    return _.template(`<li class="list-group-item">
        <div class="form-group form-check">
            <input type="checkbox" id="<%= id %>" ${checked} class="form-check-input">
            <label class="form-check-label" for="<%= id %>">${labelTxt}</label>
        </div>
    </li>`)(todo);

    // return _.template(`<div>
    //     <input type="checkbox" id="<%= id %>" name="<%= title %>"disabled/>
    //     <label for="<%= id %>"><%= title %></label>
    // </div>`)(todo);
}

const createTodos = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo['data'].map((todo) => createTodo(todo))
    );

    return $ul;
}
const createTodoPage = (todos) => {
    const root = document.getElementById('to-do-list');
    const $page = $('<div />');
    const $ul = createTodos(todos);

    const onChange = function () {
        const matched = todos['data'].find((model) => { if (model.title === this.name) return model; });
        if (matched) {
            matched.done = !matched.done;
        }
    }
    $page.append($ul);
    $ul.on('change', 'input', onChange);
    root.append($page[0]);

    return {
        onDistroy: () => {
            $ul.off('change');
        }
    }
}
let selectedToDo = '';
const renderTodoPage = () => {

    const collection = new Collection(Object.keys(list));
    const ulitem1 = createTodoPage(collection);

    const submitToDo = () => {
        selectedToDo = collection['data'];


        window.history.pushState('catalogue', '', '#catalogue');
        router();
    };
    $('#submit-to-do').on('click', submitToDo);
}

export { renderTodoPage, selectedToDo, Collection, createTodoPage };
