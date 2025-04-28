import { ShoppingCart } from "lucide-react";
import React from "react";

const CartAction = () => {
  return (
    <button className="text-gray-700 hover:text-gray-900 transition-colors">
      <ShoppingCart className="h-5 w-5" />
    </button>
  );
};

export default CartAction;
