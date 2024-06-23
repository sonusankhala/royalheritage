package com.royalheritage.travel.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.royalheritage.travel.entity.City;

public interface CityRepository extends JpaRepository<City, Long> {
	
	Page<City> findByplaceNameContaining(@RequestParam("placeName") String placeName, Pageable pageable);
	Page<City> findByCategory(@RequestParam("category") String category, Pageable pageable);

}
