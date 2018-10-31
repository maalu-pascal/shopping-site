import { list } from './data.js';

const createCatalogItems = (todo) => {
    return _.template(`<li class="list-group-item h-auto">
            <div class=" d-flex justify-content-start">
                <span class="ml-5 col-3"><b><%= title %></b></span>
                <div class="d-flex flex-column col-3">
                    <span class="small">Company : <%= company %>  </span> 
                    <span class="small">Discount : <%= discount %>%  </span> 
                    <span class="small">Price : <%= price %>/-  </span> 
                </div>
            </div>
        </li>`)(todo);
}

const createCatalog = (catalogList) => {
    const $ul = $('<ul class="pl-2"/>');
    $ul.append(`<li class="list-group-item bg-dark text-light"><label class="h5 "><b> ${catalogList[0]}</b> </label></li>`);

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

    Object.entries(catalogList).forEach(element => {
        $page.append(createCatalog(Object.values(element)));
    });
    $page.append('<div class = "mb-3 d-flex justify-content-center"><button id="submit-catalog" class=" btn btn-dark">Proceed To Cart</button></div>');

    $root.append($page[0]);

    return {
        onDistroy: () => {
            $('#root').html("");
        }
    }
}

export { createCatalogPage };