const todos = [{
    id: '123',
    done: true,
    quantity: '1',
    title: 'Cake'
}, {
    id: '124',
    done: true,
    quantity: '20',
    title: 'Sweets'
},{
    id: '125',
    done: false,
    quantity: '3',
    title: 'Balloons'
}, {
    id: '126',
    done: false,
    quantity: '3',
    title: 'Snow-spray'
},{
    id: '127',
    done: false,
    quantity: '3',
    title: 'Popper'
},{
    id: '128',
    done: false,
    quantity: '4',
    title: 'Paper-plate'
},{
    id: '129',
    done: false,
    quantity: '4',
    title: 'Cup'
}];


const list = {
    'Cake': [
        {
            'title': 'Chocolate-cake',
            'price': '550',
            'discount': '10',
            'quantity': '1',
            'stock': '5',
            'company': 'company-name1'
        },{
            'title': 'Truffle-cake',
            'price': '600',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name2'
        },
        {
            'title': 'Blue-berry-cake',
            'price': '600',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name3'
        },
    ],
    'Sweets': [
        {
            'title': 'Toffee',
            'price': '2',
            'discount': '0',
            'quantity': '4',
            'stock': '5',
            'company': 'company-name4'
        },
        {
            'title': 'Cadbury',
            'price': '20',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name5'
        }
    ],
    'Balloons': [
        {
            'title': 'Balloons-small',
            'price': '70',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name'
        },
        {
            'title': 'Balloons-medium',
            'price': '150',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name6'
        },
        {
            'title': 'Balloons-large',
            'price': '250',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name7'
        }
    ],
    'Snow-spray': [
        {
            'title': 'Snow-spray-small',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name8'
        },
        {
            'title': 'Snow-spray-large',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name9'
        }
    ], 
    'Popper':[
        {
            'title': 'Popper-small',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name10'
        },
        {
            'title': 'Popper-large',
            'price': '150',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name11'
        }
    ],
    'Paper-plate':[
        {
            'title': 'Paper-plates-small',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name12'
        },
        {
            'title': 'Paper-plates-medium',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name13'
        },
        {
            'title': 'Paper-plates-large',
            'price': '300',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name14'
        }
    ],
    'Cup': [
        {
            'title': 'Paper-cups',
            'price': '250',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name15'
        },
        {
            'title': 'Plastic-cups',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'stock': '5',
            'company': 'company-name16'
        }
    ]
}; 

export {list, todos};