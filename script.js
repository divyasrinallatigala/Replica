// Array of song objects, each containing title, artist, file path, album image, and YouTube link
const songs = [
    { title: "Symphony", artist: "Clean Bandit ft. Zara Larsson", src: "assets/music/song1.mp3", img: "assets/images/song1.jpg", youtube: "https://www.youtube.com/watch?v=aatr_2MstrI" },
    { title: "Pawn It All", artist: "Alicia Keys", src: "assets/music/song2.mp3", img: "assets/images/song2.jpg", youtube: "https://www.youtube.com/watch?v=qEnfeG8uBRY" },
    { title: "Seni Dert Etmeler", artist: "Madrigal", src: "assets/music/song3.mp3", img: "assets/images/song3.jpg", youtube: "https://www.youtube.com/watch?v=h5oHhGlWKf0" },
    { title: "Instant Crush", artist: "Daft Punk ft. Julian Casablancas", src: "assets/music/song4.mp3", img: "assets/images/song3.jpg", youtube: "https://www.youtube.com/watch?v=a5uQMwRMHcs" },
    { title: "As It Was", artist: "Harry Styles", src: "assets/music/song5.mp3", img: "assets/images/song5.jpg", youtube: "https://www.youtube.com/watch?v=H5v3kku4y6Q" },
    { title: "Physical", artist: "Dua Lipa", src: "assets/music/song6.mp3", img: "assets/images/song6.jpg", youtube: "https://www.youtube.com/watch?v=9HDEHj2yzew" },
    { title: "Delicate", artist: "Taylor Swift", src: "assets/music/song7.mp3", img: "assets/images/song7.jpg", youtube: "https://www.youtube.com/watch?v=tCXGJQYZ9JA" },
];

// Track the currently playing song
let currentSong = 0;

// Get references to the HTML elements
const audio = new Audio(songs[currentSong].src); // Load audio player with the first song
const title = document.getElementById("song-title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const albumContainer = document.querySelector(".carousel"); // Reference to the album carousel

// Function to load a song based on the index
function loadSong(index) {
    title.innerText = songs[index].title; // Update song title
    artist.innerText = songs[index].artist; // Update artist name
    audio.src = songs[index].src; // Update audio source
    currentSong = index; // Update current song index

    // Remove "active" class from all albums and highlight the current one
    document.querySelectorAll(".album").forEach((album) => album.classList.remove("active"));
    document.querySelectorAll(".album")[index].classList.add("active");
}

// Play or pause the song when the button is clicked
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸️"; // Change icon to pause
    } else {
        audio.pause();
        playBtn.innerHTML = "▶️"; // Change icon to play
    }
});

// Play the previous song when the previous button is clicked
prevBtn.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length; // Go to the previous song
    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML = "⏸️"; // Ensure play button shows pause when playing
});

// Play the next song when the next button is clicked
nextBtn.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length; // Go to the next song
    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML = "⏸️";
});

// Update the progress bar as the song plays
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100; // Update progress bar value
});

// Allow users to seek a specific part of the song using the progress bar
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration; // Adjust song position based on user input
});

// Function to dynamically create album covers in the carousel
function createAlbums() {
    albumContainer.innerHTML = ""; // Clear existing album elements

    songs.forEach((song, index) => {
        const albumDiv = document.createElement("div"); // Create a new div for the album
        albumDiv.classList.add("album");
        if (index === currentSong) albumDiv.classList.add("active"); // Highlight the current album

        const img = document.createElement("img"); // Create an img element for album cover
        img.src = song.img; // Set album cover image
        img.alt = song.title; // Add alternative text

        // Open YouTube link when the album image is clicked
        img.addEventListener("click", () => {
            window.open(song.youtube, "_blank");
        });

        albumDiv.appendChild(img); // Add image to the album div
        albumContainer.appendChild(albumDiv); // Add album div to the carousel
    });
}
let likedSongs = [];

function toggleLike() {
    let songTitle = document.getElementById("song-title").innerText;
    let artistName = document.getElementById("artist-name").innerText;
    let likeBtn = document.getElementById("like-btn");

    let song = { title: songTitle, artist: artistName };

    // Check if the song is already liked
    let index = likedSongs.findIndex(s => s.title === song.title);

    if (index === -1) {
        // Add to liked songs
        likedSongs.push(song);
        likeBtn.innerHTML = "❤️ Liked"; // Change button text
    } else {
        // Remove from liked songs
        likedSongs.splice(index, 1);
        likeBtn.innerHTML = "❤️"; // Reset button text
    }

    updatePlaylist();
}

// Function to update the liked songs playlist
function updatePlaylist() {
    let playlistContainer = document.getElementById("playlist");
    playlistContainer.innerHTML = ""; // Clear previous content

    likedSongs.forEach(song => {
        let listItem = document.createElement("li");
        listItem.innerText = `${song.title} - ${song.artist}`;
        playlistContainer.appendChild(listItem);
    });
}

// Initialize the music player
createAlbums(); // Generate album covers
loadSong(currentSong); // Load the first song
