export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  serves: string;
  image: string;
  bestseller?: boolean;
  spicy?: boolean;
  zomatoLink?: string;
}

export const menu: MenuItem[] = [

  // =========================
  // PIZZAS
  // =========================

  {
    id: 1,
    category: "Pizza",
    name: "Paneer Tikka Pizza",
    description:
      "Paneer tikka pizza is a delicious Indo-Italian fusion pizza that combines smoky paneer tikka flavors with cheesy pizza goodness.",
    price: 299,
    serves: "Serves 1-2",
    image: "/images/menu/Paneer Tikka Pizza.jpg",
    bestseller: true,
  },

  {
    id: 2,
    category: "Pizza",
    name: "Veg Cheese Pizza",
    description:
      "A veg cheese pizza topped with onion, capsicum, corn and tomato loaded with melted cheese.",
    price: 199,
    originalPrice: 299,
    serves: "Serves 1-2",
    image: "/images/menu/Veg Cheese Pizza.jpg",
  },

  {
    id: 3,
    category: "Pizza",
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza made with tomato sauce, mozzarella cheese and fresh basil.",
    price: 199,
    originalPrice: 329,
    serves: "Serves 1-2",
    image: "/images/menu/Margherita Pizza.jpg",
  },

  // =========================
// SANDWICHES
// =========================

{
  id: 4,
  category: "Sandwich",
  name: "Veg Sandwich",
  description:
    "Fresh cucumber, onion, tomato, capsicum, butter, homemade green chutney and chaat masala on jumbo bread.",
  price: 95,
  serves: "Serves 1",
  image: "/images/menu/Veg Sandwich.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/jqv73t3g"
},

{
  id: 5,
  category: "Sandwich",
  name: "Paneer Tikka Grilled Sandwich",
  description:
    "Smoky paneer tikka with crunchy onion and capsicum grilled until crispy.",
  price: 189,
  serves: "Serves 1-2",
  image: "/images/menu/Paneer Tikka Grilled Sandwich.jpg",
  bestseller: true,
  
  zomatoLink: "https://zomato.onelink.me/xqzv/69aptgvd"
},

{
  id: 6,
  category: "Sandwich",
  name: "Aloo Slice Cheese Sandwich",
  description:
    "Butter, homemade green chutney, potato slice and cheese on jumbo bread.",
  price: 89,
  serves: "Serves 1",
  image: "/images/menu/Aloo Slice Cheese Sandwich.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/j557vrw3"
},

{
  id: 7,
  category: "Sandwich",
  name: "Veg Paneer Grilled Sandwich",
  description:
    "Soft paneer with fresh vegetables grilled until golden brown.",
  price: 169,
  serves: "Serves 1-2",
  image: "/images/menu/Veg Paneer Grilled Sandwich.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/ibsv1dga"
},

{
  id: 8,
  category: "Sandwich",
  name: "Veg Cheese Corn Grilled Sandwich",
  description:
    "Sweet corn, vegetables, mayo and cheese grilled to perfection.",
  price: 169,
  serves: "Serves 1-2",
  image: "/images/menu/Veg Cheese Corn Grilled Sandwich.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/7kxglhfv"
},

{
  id: 9,
  category: "Sandwich",
  name: "Veg Cheese Sandwich",
  description:
    "Fresh vegetables with cheese slice, butter and homemade chutney.",
  price: 105,
  serves: "Serves 1-2",
  image: "/images/menu/Veg Cheese Sandwich.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/5qydhtuo"
},

{
  id: 10,
  category: "Sandwich",
  name: "Veg Grilled Sandwich",
  description:
    "Golden grilled bread layered with butter, homemade chutney and fresh vegetables.",
  price: 129,
  serves: "Serves 1-2",
  image: "/images/menu/Veg Grilled Sandwich.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/g30ea5ps"
},

{
  id: 11,
  category: "Sandwich",
  name: "Veg Cheese Grilled Sandwich",
  description:
    "Grilled bread with fresh vegetables, homemade chutney and cheese.",
  price: 169,
  serves: "Serves 1-2",
  image: "/images/menu/Veg Cheese Grilled Sandwich.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/k1nl72f1"
},

// =========================
// MAGGI, SNACKS & BREADS
// =========================

{
  id: 12,
  category: "Snacks",
  name: "Plain Maggi",
  description: "Classic masala Maggi noodles.",
  price: 99,
  serves: "500 ml • Serves 1-2",
  image: "/images/menu/Plain Maggi.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/y8scjakn"
},

{
  id: 13,
  category: "Snacks",
  name: "Vegetable Cheese Maggi",
  description:
    "Classic Maggi tossed with onion, tomato, capsicum, carrots, sweet corn and cheese.",
  price: 129,
  originalPrice: 179,
  serves: "500 ml • Serves 1-2",
  image: "/images/menu/Vegitable Cheese Maggi.jpg",
  bestseller: true,

  zomatoLink: "https://zomato.onelink.me/xqzv/gzbdrzuy"
},

{
  id: 14,
  category: "Snacks",
  name: "Vegetable Maggi",
  description:
    "Classic Maggi with fresh garden vegetables.",
  price: 109,
  originalPrice: 149,
  serves: "500 ml • Serves 1-2",
  image: "/images/menu/Vegitable Maggi.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/ldrrtrot"
},

{
  id: 15,
  category: "Snacks",
  name: "Vegetable Cheese Garlic Bread",
  description:
    "Garlic butter bread topped with vegetables and melted cheese.",
  price: 179,
  serves: "Serves 1-2",
  image: "/images/menu/Vegitable Cheese Garlic Bread.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/9o9bs5g6"
},

{
  id: 16,
  category: "Snacks",
  name: "Cheese Garlic Bread",
  description:
    "Garlic butter bread topped with melted cheese.",
  price: 129,
  originalPrice: 159,
  serves: "Serves 1-2",
  image: "/images/menu/Cheese Garlic Bread.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/104pdpav"
},

{
  id: 17,
  category: "Snacks",
  name: "Cheese Chilli Toast",
  description:
    "Open toast loaded with cheese, herbs and green chillies.",
  price: 149,
  serves: "Serves 1-2",
  image: "/images/menu/Cheese Chilli Toast.jpg",
  spicy: true,

 zomatoLink: "https://zomato.onelink.me/xqzv/67i63yr7"
},

{
  id: 18,
  category: "Snacks",
  name: "Masala Corn Chaat",
  description:
    "Warm buttery sweet corn with onion, tomato, coriander, lemon and signature masala.",
  price: 119,
  originalPrice: 159,
  serves: "Serves 1",
  image: "/images/menu/Masala Corn Chat.jpg",
  
  zomatoLink: "https://zomato.onelink.me/xqzv/aqycwnd0"
},

{
  id: 19,
  category: "Snacks",
  name: "Butter Sweet Corn",
  description:
    "Steamed sweet corn kernels mixed with butter and salt.",
  price: 99,
  originalPrice: 129,
  serves: "Serves 1-2",
  image: "/images/menu/Butter Sweet Corn.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/05w75mv6"
},

{
  id: 20,
  category: "Paratha",
  name: "Aloo Paratha",
  description:
    "Whole wheat flatbread stuffed with spicy potato filling. Served with curd and pickle.",
  price: 109,
  originalPrice: 149,
  serves: "Serves 1-2",
  image: "/images/menu/Aloo Paratha.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/u92x22bq"
},

// =========================
// DRINKS
// =========================

{
  id: 21,
  category: "Drinks",
  name: "Buttermilk",
  description:
    "Traditional blend of curd, water, roasted cumin and black salt.",
  price: 89,
  serves: "350 ml • Serves 1-2",
  image: "/images/menu/Buttermilk.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/kvpzwaje"
},

{
  id: 22,
  category: "Drinks",
  name: "Sweet Lassi",
  description:
    "Thick homemade creamy yogurt lassi sweetened perfectly with cardamom.",
  price: 99,
  originalPrice: 119,
  serves: "350 ml • Serves 1-2",
  image: "/images/menu/Sweet Lassi.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/49ljhtip"
},

{
  id: 23,
  category: "Drinks",
  name: "KitKat Milkshake",
  description:
    "Creamy chocolate milkshake blended with crushed KitKat bars.",
  price: 159,
  originalPrice: 189,
  serves: "350 ml • Serves 1-2",
  image: "/images/menu/KitKat Milkshake.jpg",
  bestseller: true,

  zomatoLink: "https://zomato.onelink.me/xqzv/ugafmtg3"
},

{
  id: 24,
  category: "Drinks",
  name: "Oreo Milkshake",
  description:
    "Chocolate ice cream blended with chilled milk and Oreo cookies.",
  price: 159,
  originalPrice: 179,
  serves: "350 ml • Serves 1-2",
  image: "/images/menu/Oreo Milkshake.jpg",

   zomatoLink: "https://zomato.onelink.me/xqzv/o1ixjp5a"
},

{
  id: 25,
  category: "Drinks",
  name: "Cold Coffee",
  description:
    "Rich espresso blended with chilled milk and served frothy.",
  price: 159,
  originalPrice: 219,
  serves: "Serves 1",
  image: "/images/menu/Cold Coffee.jpg",

  zomatoLink: "https://zomato.onelink.me/xqzv/ytp4vid6"
},

// =========================
// COMBOS
// =========================

{
  id: 26,
  category: "Combo",
  name: "2 Aloo Paratha + Pickle + Curd + Buttermilk",
  description:
    "Two stuffed aloo parathas served with curd, pickle, homemade green chutney and one refreshing buttermilk.",
  price: 199,
  originalPrice: 299,
  serves: "Serves 2",
  image: "/images/menu/2 Aloo Paratha + Pickle + Curd + Buttermilk.jpg",
  bestseller: true,

  zomatoLink: "https://zomato.onelink.me/xqzv/uiffbs0r"
},

];