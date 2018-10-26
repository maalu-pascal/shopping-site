// import _ from 'lodash';


class Model {
    constructor(title = '', done = false) {
        this.done = done;
        this.title = title;
        this.ts = Date.now();
        this.id = `id-${this.ts}`;
    }

    update({ title = '', done = false }) {
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

    create({ title = '', ts = Date.now() }) {
        this.title = title;
        this.ts = ts;
    }
    delete() { }
    update() { }
}

// const collection = new Collection(['Soap','Brush']);

const createTodo = (todo) => {    
    return _.template(`<div>
        <input type="checkbox" id="<%= id %>" name="<%= id %>" />
        <label for="<%= id %>"><%= title %></label>
    </div>`)(todo);
}

const createTodos = (todo) => {
    const $ul = $('<ul />');
    
    $ul.append(
        todo['data'].map((todo) => createTodo(todo))
    );
    console.log($ul);
    
    return $ul;
}

const createTodoPage = (todos) => {
    const $root = document.getElementById("to-do-list");
    const $page = $('<div />');
    const $ul = createTodos(todos);
    const onChange = function () {
        const index = 0 // calculate
        const matched = todos[index];

        if (matched) {
            matched.done = !matched.done;
        }
    }

    $page.append($ul);
    console.log($page);
    
    $ul.on('change', 'input', onChange);

    $root.append($page);
    // console.log($root);
    return {
        onDistroy: () => {
            $ul.off('change');
        }
    }
}

// const collection = new Collection(['Soap','Brush']);
// const ulitem = createTodoPage(['Soap','Brush']);
// console.log(ulitem);

const collection = new Collection(['Soap','Brush']);
// console.log(collection);

const ulitem2 = createTodoPage(collection);
// console.log(ulitem2);
// const ullist = new ULList(collection);
