export class MyBand {

    albums: Array<string>;
    members: number;

    constructor (albums_list: Array<string>, total_members: number) {
        this.albums = albums_list;
        this.members = total_members;
    }

    listAlbums(): void {
        console.log("Meus álbuns favoritos: ");
        for(let i = 0; i < this.albums.length; i++)  {
            console.log(this.albums[i]);
        }
    }

}
