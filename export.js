"use strict";
exports.__esModule = true;
var MyBand = /** @class */ (function () {
    function MyBand(albums_list, total_members) {
        this.albums = albums_list;
        this.members = total_members;
    }
    MyBand.prototype.listAlbums = function () {
        console.log("Meus álbuns favoritos: ");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    };
    return MyBand;
}());
exports.MyBand = MyBand;
