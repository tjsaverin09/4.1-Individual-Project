// const albumRef = document.querySelector(".album")

// async function filterAlbum() {
//     const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=album.search&album=moon&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json');
//     const data = await response .json()
//     console.log(data);
//     albumRef.innerHTML = data.album
// }

// filterAlbum()

// async function main() {
//   const albums = await fetch(
//     "https://ws.audioscrobbler.com/2.0/?method=album.search&album=moon&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json"
//   );
//   const albumData = await albums.json();
//   const musicListEl = document.querySelector(".music__list");
//   console.log(albumData);

//   musicListEl.innerHTML = albumData.results.albummatches.album.map(
//     (album) => `<div class="music__card">
//      <figure class="album-cover--wrapper">
//      <img
//         src="${album.image[3]['#text']}"
//         alt=""
//         class="album-cover"
//      />
//      </figure>
//      <div class="album__title">
//       Album: <span class="album">${album.name}</span></div>
//      <div class="artist__name">
//       Artist: <span class="artist">${album.artist}</span>
//      </div>
//     </div>`
//   );
// }

// main();

async function main() {
  try {
    const albums = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=album.search&album=moon&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json"
    );
    const albumData = await albums.json();
    const musicListEl = document.querySelector(".music__list");
    console.log("Album Data Structure:", albumData);

    // Check if we have albums to display
    if (
      albumData.results &&
      albumData.results.albummatches &&
      albumData.results.albummatches.album &&
      albumData.results.albummatches.album.length > 0
    ) {
      // Clear existing content
      musicListEl.innerHTML = "";

      // Create HTML for each album
      albumData.results.albummatches.album.forEach((album) => {
        // Verify image array exists and has elements
        const imageUrl =
          album.image && album.image.length > 2
            ? album.image[2]["#text"] // Medium size image (index 2)
            : "https://lastfm.freetls.fastly.net/i/u/174s/c6f59c1e5e7240a4c0d427abd71f3dbb.png"; // Default image
        const albumCard = document.createElement("div");
        albumCard.className = "music__card";
        albumCard.innerHTML = `
          <figure class="music__img--wrapper">
            <img
              src="${imageUrl}"
              alt="${album.name} by ${album.artist}"
              class="album__cover"
            />
          </figure>
          <div class="album__title">Album: <span class="album">${album.name}</span></div>
          <div class="artist__name">
            Artist: <span class="artist">${album.artist}</span>
          </div>
        `;
        musicListEl.appendChild(albumCard);
      });

      // console.logAdded ${albumData.results.albummatches.album.length} album cards to the page);
    } else {
      musicListEl.innerHTML = '<div class="no-results">No albums found</div>';

      console.log("No album matches found in the API response");
    }
  } catch (error) {
    console.error("Error fetching or displaying albums:", error);

    document.querySelector(".music__list").innerHTML =
      '<div class="error-message">Failed to load albums. Please try again later.</div>';
  }
}

main();

async function getResults() {
const id = document.getElementById("searchId").value;

const res = await fetch('https://ws.audioscrobbler.com/2.0/?method=album.search&album=&api_key=01a9bc49bbc9abed2dd1966234ac875e&format=json')

}
