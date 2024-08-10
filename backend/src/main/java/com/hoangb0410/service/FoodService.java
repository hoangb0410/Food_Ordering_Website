package com.hoangb0410.service;

import com.hoangb0410.model.Category;
import com.hoangb0410.model.Food;
import com.hoangb0410.model.Restaurant;
import com.hoangb0410.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);
    void deleteFood(Long foodId) throws Exception;

    public List<Food> getAllRestaurantsFood(Long restaurantId,
                                            boolean isVegetarian,
                                            boolean isNonveg,
                                            boolean isSeasonal,
                                            String foodCategory );

    public List<Food> searchFood(String keyword);
    public Food findFoodById(Long id) throws Exception;
    public Food updateAvailabilityStatus(Long foodId) throws Exception;

}
