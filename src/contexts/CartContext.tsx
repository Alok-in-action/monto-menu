
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useCallback, useMemo } from 'react';
import type { Dish, CartItemType } from '@/types';
import { useToast } from "@/hooks/use-toast";

interface CartContextType {
  cartItems: CartItemType[];
  addItemToCart: (dish: Dish, quantity?: number) => void;
  removeItemFromCart: (dishId: string) => void;
  updateItemQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  isItemInCart: (dishId: string) => boolean;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { toast } = useToast();

  const addItemToCart = useCallback((dish: Dish, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...dish, quantity }];
    });
    toast({
      title: `${dish.nameEn} added to cart!`,
      description: `${quantity} item(s) added.`,
      variant: "default",
    });
  }, [toast]);

  const removeItemFromCart = useCallback((dishId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== dishId));
     toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      variant: "destructive",
    });
  }, [toast]);

  const updateItemQuantity = useCallback((dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItemFromCart(dishId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === dishId ? { ...item, quantity } : item
      )
    );
  }, [removeItemFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  }, [toast]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const isItemInCart = useCallback((dishId: string) => {
    return cartItems.some(item => item.id === dishId);
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    isItemInCart,
  }), [cartItems, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart, getCartTotal, getCartItemCount, isItemInCart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
