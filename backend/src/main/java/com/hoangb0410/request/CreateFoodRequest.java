package com.hoangb0410.request;

import com.hoangb0410.model.Category;
import com.hoangb0410.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;


    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarian;
    private boolean seasonal;

    private List<IngredientsItem> ingredients;
}
