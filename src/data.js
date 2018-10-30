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
            'title': 'Chocolate',
            'price': '550',
            'discount': '0',
            'quantity': '0'
        },{
            'title': 'Truffle',
            'price': '600',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Blue-berry',
            'price': '600',
            'discount': '0',
            'quantity': '0'
        },
    ],
    'Sweets': [
        {
            'title': 'Toffee',
            'price': '2',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Cadbury',
            'price': '20',
            'discount': '0',
            'quantity': '0'
        }
    ],
    'Balloons': [
        {
            'title': 'Balloons-small',
            'price': '70',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Balloons-medium',
            'price': '150',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Balloons-large',
            'price': '250',
            'discount': '0',
            'quantity': '0'
        }
    ],
    'Snow-spray': [
        {
            'title': 'Snow-spray-small',
            'price': '200',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Snow-spray-large',
            'price': '200',
            'discount': '0',
            'quantity': '0'
        }
    ], 
    'Popper':[
        {
            'title': 'Popper-small',
            'price': '100',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Popper-large',
            'price': '150',
            'discount': '0',
            'quantity': '0'
        }
    ],
    'Paper-plate':[
        {
            'title': 'Paper-plates-small',
            'price': '100',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Paper-plates-medium',
            'price': '200',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Paper-plates-large',
            'price': '300',
            'discount': '0',
            'quantity': '0'
        }
    ],
    'Cup': [
        {
            'title': 'Paper-cups',
            'price': '250',
            'discount': '0',
            'quantity': '0'
        },
        {
            'title': 'Plastic-cups',
            'price': '100',
            'discount': '0',
            'quantity': '0'
        }
    ]
}; 

export {list, todos};