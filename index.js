// const albumRef = document.querySelector(".album")

// async function filterAlbum() {
//     const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=album.search&album=moon&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json');
//     const data = await response .json()
//     console.log(data);
//     albumRef.innerHTML = data.album
// }

// filterAlbum()

async function main() {
  const albums = await fetch(
    "https://ws.audioscrobbler.com/2.0/?method=album.search&album=moon&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json"
  );
  const albumData = await albums.json();
  const musicListEl = document.querySelector(".music__list");
  console.log(albumData);

  musicListEl.innerHTML = albumData.results.albummatches.album.map(
    (album) => `<div class="music__card">
     <figure class="album-cover--wrapper">
     <img
        src="${album.image[3]['#text']}"
        alt=""
        class="album-cover"
     />
     </figure>
     <div class="album__title">
      Album: <span class="album">${album.name}</span></div>
     <div class="artist__name">
      Artist: <span class="artist">${album.artist}</span>
     </div>
    </div>`
  );
}

main();
