package com.hoangb0410.service;

import com.hoangb0410.model.Cart;
import com.hoangb0410.model.CartItem;
import com.hoangb0410.request.AddCartItemRequest;

public interface CartService {
    public CartItem addCartItem(AddCartItemRequest req, String jwt) throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    public  long caculatCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;

}
