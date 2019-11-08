var bands;
(function (bands) {
    bands[bands["Skank"] = 0] = "Skank";
    bands[bands["JotaQuest"] = 1] = "JotaQuest";
    bands[bands["Eva"] = 2] = "Eva";
})(bands || (bands = {}));
;
console.log(bands);
var minhasBandasFavoritas = bands.JotaQuest;
console.log(minhasBandasFavoritas);
