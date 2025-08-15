package com.amol.E_CommerceWebBackend.repository;

import com.amol.E_CommerceWebBackend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long > {
    @Override
    Page<Product> findAll(Pageable pageable);
}
