export class Movie {
    id;
    title;
    releaseDate;
    genre;
    price;
    constructor(title, releaseDate, genre, price) {
        this.id = 0;
        this.title = title;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.price = price;
    }
}