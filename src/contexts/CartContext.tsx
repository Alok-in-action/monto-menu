
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import type { Dish, CartItemType } from '@/types';
import { useToast } from "@/hooks/use-toast";

const CART_STORAGE_KEY = 'monto-restaurant-cart';

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

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      // If parsing fails, start with an empty cart
      setCartItems([]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
        // We only want to save if the cart is not in its initial empty state from mount
        // This prevents overwriting a stored cart with an empty one on the initial render cycle
      if (cartItems.length > 0 || localStorage.getItem(CART_STORAGE_KEY)) {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      }
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

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
  }, []);

  const removeItemFromCart = useCallback((dishId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== dishId));
  }, []);

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
  }, []);

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
