class CatelogueModel {
    constructor(title = '', done = false, quantity = '0') {
        this.done = done;
        this.title = title;
        this.quantity = quantity;
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

class Catelogue {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new CatelogueModel(item));
        } else {
            this.data = new CatelogueModel(data);
        }
    }
}

const createCatalogItems = (todo) => {
    return _.template(`<div>
            <label for="<%= id %>"><%= title %></label>
            <input type="input" id="<%= id %>" name="<%= title %>" placeholder="Enter Quantity" value= "0" />
        </div>`)(todo);
}

const createCatalog = (todo) => {
    const $ul = $('<ul />');

    $ul.append(
        todo['data'].map((todo) => createCatalogItems(todo))
    );

    return $ul;
}

const createCateloguePage = (todos) => {
    const $root = $('#catalogue');
    const $page = $('<div />');
    const $ul = createCatalog(todos);
    const onChange = function () {
        const matched = todos['data'].find((catelogueModel) => {
            if (catelogueModel.title === this.name) return catelogueModel;
        });
        
        if (matched) {
            matched.quantity = document.getElementsByName(this.name)[0].value;
            
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
    Catelogue,
    createCateloguePage
};