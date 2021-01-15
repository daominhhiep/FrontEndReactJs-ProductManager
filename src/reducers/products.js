let initialState = [
    {
        id: '1',
        name: 'Iphone 6',
        price: 400,
        status: false
    },
    {
        id: '2',
        name: 'Iphone 12',
        price: 1000,
        status: true
    },
    {
        id: '3',
        name: 'Iphone 11',
        price: 800,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;
