var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyBand = /** @class */ (function () {
    function MyBand(albums_list, total_members) {
        this.albums = albums_list;
        this.members = total_members;
    }
    MyBand.prototype.listAlbums = function () {
        console.log("Meus albuns: ");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    };
    return MyBand;
}());
var meusAlbunsFavoritos = new MyBand(['Iron Maiden', 'Killers', 'Powerslave', 'The Number of The Beast'], 6);
console.log(meusAlbunsFavoritos.listAlbums());
var MySinger = /** @class */ (function (_super) {
    __extends(MySinger, _super);
    function MySinger(albums_list, total_members) {
        return _super.call(this, albums_list, total_members) || this;
    }
    MySinger.prototype.listAlbums = function () {
        console.log("Albuns cantor: ");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    };
    return MySinger;
}(MyBand));
var meuCantorFavoritos = new MySinger(['Bon Jovi', 'Crush', 'Bounce', 'What About Now', 'These Days'], 1);
console.log(meuCantorFavoritos.listAlbums());
