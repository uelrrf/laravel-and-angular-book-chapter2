interface Band {
  name: string,
  total_members: number
}

function unknowBand(band : Band) : void {
  console.log("A banda " + band.name + " tem " + band.total_members + " membros.");
}

// create a band object with the same properties from Band interface:
let newband = {
  name: "Black Sabbath",
  total_members: 4
}

console.log( unknowBand( newband));
