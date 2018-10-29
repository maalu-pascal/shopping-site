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
    return _.template(`<div>
        <input type="checkbox" id="<%= id %>" name="<%= title %>" />
        <label for="<%= id %>"><%= title %></label>
    </div>`)(todo);
}

const createTodoPage = (todos) => {
    const $root = $('#to-do-list');
    const $page = $('<div />');
    // const $ul = createTodos(todos);
    const $ul = $('<ul />');

    $ul.append(
        todos['data'].map((todo) => createTodo(todo))
    );
    const onChange = function () {
        const matched = todos['data'].find( (model) => {if(model.title === this.name) return model;});
        if (matched) {
            matched.done = !matched.done;
        }
    }
    $page.append($ul);
    $ul.on('change', 'input', onChange);
    document.getElementById('to-do-list').append($page[0]);
    // $root.append($page[0]);
    // console.log($root);

    return {
        onDistroy: () => {
            $ul.off('change');
        }
    }
}

export {Collection, createTodoPage};
