console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  // Create new object with parameters
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  // Add new object to the end of the collection array
  collection.push(newAlbum);
  // Return new object
  return newAlbum;
}
// Use and test addCollection function
addToCollection(myCollection, "New Blue Sun", "Andre 3000", 2023);
addToCollection(myCollection, "SZA", "SOS", 2023);
addToCollection(myCollection, "Renaissance", "Beyonce", 2022 );
addToCollection(myCollection,"Un Verano Sin Ti", "Bad Bunny", 2022 );
addToCollection(myCollection,"Call Me If You Get Lost", "Tyler, the Creator", 2021 );
addToCollection(myCollection, "Sour", "Olivia Rodrigo", 2021);

// Testing addCollection
console.log('myCollection array:', myCollection); 

function showCollection(collection) {
  for (let i=0; i<collection.length; i++){
    let album = collection[i];
    console.log(album.title + " by " + album.artist + " publihed in " + album.yearPublished);
  }
  
}

function findByArtist(collection, artist){
let matchingResults = [];
for (let i=0; i<collection.length; i++){
  if(collection[i].artist === artist){
    matchingResults.push(collection[i]);
  }
}
return matchingResults;
}




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
