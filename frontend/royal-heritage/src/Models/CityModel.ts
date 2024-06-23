class CityModel {
    id: number;
    cityName?: string;
    placeName?: string;
    description?: string;
    imgLoc?: string;
    category?: string;
    img?: string;

    constructor (id: number, cityName: string, placeName: string, description: string, 
        imgLoc: string, category: string, img: string) {
            this.id = id;
            this.cityName =cityName;
            this.placeName = placeName;
            this.description = description;
            this.imgLoc = imgLoc;
            this.category = category;
            this.img = img;
    }
}
export default CityModel;