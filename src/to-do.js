import { list, todos } from './data.js';

const createTodo = (todo) => {
    const checked = (todo.done === true) ? 'checked' : '';
    const labelTxt = (todo.done === true) ? '<s><%= title %></s>' : '<%= title %>';
  
    return _.template(`<li class="list-group-item">
        <div class="form-group form-check">
            <input type="checkbox" id="<%= id %>" name="<%= title %>" ${checked} class="form-check-input">
            <label class="form-check-label" for="<%= id %>">${labelTxt}</label>
        </div>
    </li>`)(todo);
}

const createTodos = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo.map((todo) => createTodo(todo))
    );

    return $ul;
}
const createTodoPage = (todos) => {
    const $root = $('#root');
    const $page = $('<div id="to-do-list"/>');
    const $ul = createTodos(todos);

    const onChange = function () {
        const matched = todos.find((model) => { if (model.title === this.name) return model; });
        if (matched) {
            matched.done = !matched.done;
        }
    }
    $page.append($ul);
    $page.append('<div class = "mb-3 d-flex justify-content-center"><button id="submit-to-do" class=" btn btn-dark">Proceed</button></div>');
    $ul.on('change', 'input', onChange);
    $root.append('<div class="mb-3"><span class="h2"><b>To-Do</b> </span></div>');
    $root.append($page[0]);

    return {
        onDistroy: () => {

            $ul.off('change');
            $('#root').html("");

        }
    }
}

export { createTodoPage};
