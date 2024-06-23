package com.royalheritage.travel.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "cities")
@Data
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "city_name")
	private String cityName;

	@Column(name = "place_name")
	private String placeName;

	@Column(name = "description")
	private String description;

	@Column(name = "img_loc")
	private String imgLoc;

	@Column(name = "category")
	private String category;

	@Column(name = "img")
	private String img;

	/*
	 * public City() { }
	 * 
	 * public City(Long id, String cityName, String placeName, String description,
	 * String imgLoc, String category, String img) { this.id = id; this.cityName =
	 * cityName; this.placeName = placeName; this.description = description;
	 * this.imgLoc = imgLoc; this.category = category; this.img = img; }
	 * 
	 * public Long getId() { return id; }
	 * 
	 * public void setId(Long id) { this.id = id; }
	 * 
	 * public String getCityName() { return cityName; }
	 * 
	 * public void setCityName(String cityName) { this.cityName = cityName; }
	 * 
	 * public String getPlaceName() { return placeName; }
	 * 
	 * public void setPlaceName(String placeName) { this.placeName = placeName; }
	 * 
	 * public String getDescription() { return description; }
	 * 
	 * public void setDescription(String description) { this.description =
	 * description; }
	 * 
	 * public String getImgLoc() { return imgLoc; }
	 * 
	 * public void setImgLoc(String imgLoc) { this.imgLoc = imgLoc; }
	 * 
	 * public String getCategory() { return category; }
	 * 
	 * public void setCategory(String category) { this.category = category; }
	 * 
	 * public String getImg() { return img; }
	 * 
	 * public void setImg(String img) { this.img = img; }
	 * 
	 * @Override public String toString() { return "Cities [id=" + id +
	 * ", cityName=" + cityName + ", placeName=" + placeName + ", description=" +
	 * description + ", imgLoc=" + imgLoc + ", category=" + category + ", img=" +
	 * img + "]"; }
	 */

}
