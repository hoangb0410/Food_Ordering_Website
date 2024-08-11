package com.hoangb0410.service;

import com.hoangb0410.model.Order;
import com.hoangb0410.response.PaymentResponse;
import com.stripe.exception.StripeException;
import lombok.Data;

public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
