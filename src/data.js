const todos = [{
    id: '123',
    done: true,
    title: 'Cake'
}, {
    id: '124',
    done: true,
    title: 'Sweets'
},{
    id: '125',
    done: false,
    title: 'Balloons'
}, {
    id: '126',
    done: false,
    title: 'Snow-spray'
},{
    id: '127',
    done: false,
    title: 'Popper'
},{
    id: '128',
    done: false,
    title: 'Paper-plate'
},{
    id: '129',
    done: false,
    title: 'Cup'
}];


const list = {
    'Cake': [
        {
            'title': 'Chocolate-cake',
            'price': '550',
            'discount': '10',
            'quantity': '1',
            'company': 'company-name'
        },{
            'title': 'Truffle-cake',
            'price': '600',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Blue-berry-cake',
            'price': '600',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
    ],
    'Sweets': [
        {
            'title': 'Toffee',
            'price': '2',
            'discount': '0',
            'quantity': '4',
            'company': 'company-name'
        },
        {
            'title': 'Cadbury',
            'price': '20',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ],
    'Balloons': [
        {
            'title': 'Balloons-small',
            'price': '70',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Balloons-medium',
            'price': '150',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Balloons-large',
            'price': '250',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ],
    'Snow-spray': [
        {
            'title': 'Snow-spray-small',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Snow-spray-large',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ], 
    'Popper':[
        {
            'title': 'Popper-small',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Popper-large',
            'price': '150',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ],
    'Paper-plate':[
        {
            'title': 'Paper-plates-small',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Paper-plates-medium',
            'price': '200',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Paper-plates-large',
            'price': '300',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ],
    'Cup': [
        {
            'title': 'Paper-cups',
            'price': '250',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        },
        {
            'title': 'Plastic-cups',
            'price': '100',
            'discount': '0',
            'quantity': '0',
            'company': 'company-name'
        }
    ]
}; 

export {list, todos};