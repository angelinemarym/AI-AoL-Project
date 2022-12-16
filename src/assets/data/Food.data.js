const popularFood = [
  {
    id: 1,
    name: 'Fried Chicken Devil',
    price: 699.0,
    rating: 4.8,
    image: require('../images/fried-chicken-devil.png'),
    restaurantName: 'The Curry Leaf',
    description: 'Crispy Fried Chicken with honey sauce.',
  },
  {
    id: 2,
    name: 'Steak Frites',
    price: 1999.0,
    rating: 4.9,
    image: require('../images/steak-frites.png'),
    restaurantName: 'Graze Kitchen',
    description: 'Healthy tender beef steak with vegetables.',
  },
  {
    id: 3,
    name: 'Chicken Pasta',
    price: 999.0,
    rating: 4.5,
    image: require('../images/chicken-pasta.png'),
    restaurantName: 'Graze Kitchen',
    description: 'Pasta with chicken and bolognese sauce.',
  },
];

const fastFoodOffers = [
  {
    id: 4,
    name: 'Beef Burger',
    price: 599.0,
    rating: 4.9,
    image: require('../images/beef-burger.png'),
    discount: '25%',
    restaurantName: 'The Curry Leaf',
    description: 'Burger with beef patty, cheese slice and vegetables.',
  },
  {
    id: 5,
    name: 'Italian Pasta',
    price: 799.0,
    rating: 4.6,
    image: require('../images/italian-pasta.png'),
    discount: '30%',
    restaurantName: 'Graze Kitchen',
    description: 'Pasta with carbonara sauce and slices of meat.',
  },
  {
    id: 6,
    name: 'Crispy Chicken',
    price: 399.0,
    rating: 4.6,
    image: require('../images/crispy-chicken.png'),
    discount: '20%',
    restaurantName: 'The Curry Leaf',
    description: 'Crispy fried chicken with french fries.',
  },
];

export {popularFood, fastFoodOffers};
