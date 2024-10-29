// create your Media class:
class Media {
    static totalMediaCount =0;
    constructor(title,year,genre){
        this.title = title;
        this.genre = genre;
        this.year = year;
        Media.totalMediaCount += 1;
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}

module.exports = Media;
