document.addEventListener('DOMContentLoaded', () => {
    const artistData = [
        { name: "Falling in Reverse", Image: './img/Artista_FallingInReverse.jpg' },
        { name: "Skillet", Image: './img/Artista_Skillet.jpg' },
        { name: "Panic At The Disco", Image: './img/Artista_PanicAtTheDisco.jpg' },
        { name: "Linkin Park", Image: './img/Artista_LinkinPark.jpg' },
        { name: "Thousand Foot Krutch", Image: './img/Artista_ThousandFootKrutch.jpg' },
        { name: "Fall Out Boy", Image: './img/Artista_FallOutBoy.jpg' },
        { name: "Cat K Low", Image: './img/Artista_CatKLow.jpg' },
    ];

    const albumsData = [
        { name: "Death of a Bachelor", Image: './img/Album_DeathOfABachelor.jpg', artist: "Panic At The Disco" },
        { name: "From Zero", Image: './img/Album_FromZero.jpg', artist: "Linkin Park" },
        { name: "Rise", Image: './img/Album_Rise.jpg', artist: "Skillet" },
        { name: "Save Rock and Roll", Image: './img/Album_SaveRockAndRoll.jpg', artist: "Fall Out Boy" },
        { name: "The end is where we begin", Image: './img/Album_TheEndIsWhereWeBegin.jpg', artist: "Thousand Foot Krutch" },
        { name: "Voices in my head", Image: './img/Album_voicesInMyHead.jpg', artist: "Falling in Reverse" },
        { name: "Miau", Image: './img/Album_Miau.jpg', artist: "Cat K Low" },
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.album-grid');

    artistData.forEach(artist => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("card-artist");

        artistCard.innerHTML = `
            <img src="${artist.Image}" alt="${artist.name}">
            <p> Artista: </p>
            <h3>${artist.name}</h3>
            
            `
        artistGrid.appendChild(artistCard);
    })
    albumsData.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("card-album");

        albumCard.innerHTML = `
            <img src="${album.Image}" alt="${album.name}">
            <h4> ${album.name} </h4>
            <p> ${album.artist} </p>
            `
        albumsGrid.appendChild(albumCard);
    })
})






