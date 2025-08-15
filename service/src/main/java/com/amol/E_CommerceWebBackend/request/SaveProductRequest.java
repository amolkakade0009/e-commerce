package com.amol.E_CommerceWebBackend.request;

import jakarta.validation.constraints.NotBlank;

public record SaveProductRequest(
       @NotBlank String name,
       @NotBlank String category,
       @NotBlank String subCategory,
       @NotBlank String brandName,
       @NotBlank double price,
       @NotBlank int discount,
       @NotBlank String description
) {
}
