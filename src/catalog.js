class CatelogModel {
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

class Catelog {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new Model(item));
        } else {
            this.data = new CatelogModel(data);
        }
    }
}

const createTodo = (todo) => {
    return _.template(`<div>
            <input type="checkbox" id="<%= id %>" name="<%= title %>" />
            <label for="<%= id %>"><%= title %></label>
        </div>`)(todo);
}

const createTodos = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo['data'].map((todo) => createTodo(todo))
    );

    return $ul;
}

const createTodoPage = (todos) => {
    const $root = $('#to-do-list');
    const $page = $('<div />');
    const $ul = createTodos(todos);
    const onChange = function () {
        const matched = todos['data'].find((model) => {
            if (model.title === this.name) return model;
        });
        if (matched) {
            matched.done = !matched.done;
        }
    }
    $page.append($ul);
    $ul.on('change', 'input', onChange);
    $root.append($page[0]);

    return {
        onDistroy: () => {
            $ul.off('change');
        }
    }
}

export {
    Collection,
    createTodoPage
};