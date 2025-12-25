// src/data/menu.ts

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Pizza" | "Burger" | "Drinks";
  isVeg: boolean;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic cheese pizza with fresh basil",
    price: 299,
    category: "Pizza",
    isVeg: true,
    image: "/pizza.jpg",
  },
  {
    id: "2",
    name: "Farmhouse Pizza",
    description: "Loaded with fresh vegetables and cheese",
    price: 349,
    category: "Pizza",
    isVeg: true,
    image: "/pizza.jpg",
  },
  {
    id: "3",
    name: "Veg Burger",
    description: "Crispy veg patty with lettuce and mayo",
    price: 149,
    category: "Burger",
    isVeg: true,
    image: "/burger.jpg",
  },
  {
    id: "4",
    name: "Chicken Burger",
    description: "Juicy chicken patty with special sauce",
    price: 199,
    category: "Burger",
    isVeg: false,
    image: "/burger.jpg",
  },
  {
    id: "5",
    name: "Cold Coffee",
    description: "Chilled coffee with milk and ice",
    price: 129,
    category: "Drinks",
    isVeg: true,
    image: "/drink.jpg",
  },
];
