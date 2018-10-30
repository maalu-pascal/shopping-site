import { router } from '../index.js'
import { list } from './data.js';

const createCatalogItems = (todo) => {
    return _.template(`<li class="list-group-item">
            <div>
                <span class="ml-5"><%= title %> - <%= price %></span>
            </div>
        </li>`)(todo);
}

const createCatalog = (catalogList) => {
    const $ul = $('<ul class="pl-2"/>');
    $ul.append(`<li class="list-group-item bg-secondary text-light"><label class="h5 "><b> ${catalogList[0]}</b> </label></li>`);

    $ul.append(
        Object.values(catalogList[1]).map((todo) => createCatalogItems(todo))
    );

    return $ul;
}

const createCatalogPage = (catalogList) => {
    console.log(catalogList);
    
    const $root = $('#root');
    const $page = $('<div />');

    $page.append('<div class="mb-3"><span class="h2"><b> Catalog</b> </span></div>');
    $page.append('<div class = "mb-3 d-flex justify-content-end"><button id="submit-catalog" class=" btn btn-dark">Proceed</button></div>');

    Object.entries(catalogList).forEach(element => {
        $page.append(createCatalog(Object.values(element)));
    });
    $root.append($page[0]);

    return {
        onDistroy: () => {
            $('#root').html("");
        }
    }
}

export { createCatalogPage };