class MyBand {
  albums : Array<string>;
  members : number;

  constructor(albums_list: Array<string>, total_members : number) {
    this.albums = albums_list;
    this.members = total_members;
  }

  listAlbums () : void {
    console.log("Meus albuns: ");
    for(let i = 0; i < this.albums.length; i++) {
      console.log(this.albums[i]);
    }

  }
}

let meusAlbunsFavoritos = new MyBand(['Iron Maiden', 'Killers', 'Powerslave', 'The Number of The Beast'], 6);

console.log(meusAlbunsFavoritos.listAlbums());

class MySinger extends MyBand {

  constructor(albums_list: Array<string>, total_members : number) {
    super(albums_list, total_members);
  }

  listAlbums() : void  {
    console.log("Albuns cantor: ");
    for(let i = 0; i < this.albums.length; i++) {
      console.log(this.albums[i]);
    }
  }

}

let meuCantorFavoritos = new MySinger(['Bon Jovi', 'Crush', 'Bounce', 'What About Now', 'These Days'], 1);

console.log(meuCantorFavoritos.listAlbums());
