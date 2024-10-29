// import the Media class:
const Media = require("./Media")

// create your Music class:

class Music extends Media{
    constructor(title,year,genre,artist,length){
        super(title,year,genre)
        this.artist = artist
        this.length = length
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(songs){
        let min = songs[0]

        for(let i = 0; i<songs.length; i++){
            if(songs[i].length < min.length){
                min = songs[i]
            }
        }
        return min
    }
}

// don't change below
module.exports = Music;
