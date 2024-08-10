package com.hoangb0410.repository;

import com.hoangb0410.model.Cart;
import com.hoangb0410.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


}
