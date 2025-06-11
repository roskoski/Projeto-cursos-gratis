// This is placeholder -  it doesn't actually play music
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title')
const artist = document.getElementById('artist')
const playlistItems = document.querySelectorAll('.playlist li');


playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        songTitle.textContent = item.textContent;
        artist.textContent = "Artist Name"; // Replace with actual artist data
    });
});