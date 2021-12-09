package com.geekbrains.spring.web.repositories;

import com.geekbrains.spring.web.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // @Query("select s from Product s where s.score between ?1 and ?2")
    List<Product> findProductsByPriceBetween(Integer min, Integer max);

    // @Query("select s from Product s where s.name = :name")
    Optional<Product> findByName(String name);

    @Query("select s from Product s where s.score < 20")
    List<Product> findLowRatingProducts();

    @Query("select s.score from Product s where s.name = ?1")
    Integer hqlGetScoreByName(String name);

    @Query(value = "select score from products where name = :name", nativeQuery = true)
    Integer nativeSqlGetScoreByName(String name);

    // Если бы у студентов был List<Book>, то не ленивая загрузка книг:
    // @Query("select s from Product s join fetch s.books where s.id = :id")
    // Optional<Product> findByIdWithBooks(String name);
}
