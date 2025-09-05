# 🎵 Music Player

A beautiful, responsive web-based music player with carousel album covers and playlist functionality.

## ✨ Features

- **Album Carousel**: Interactive carousel displaying album covers
- **Music Controls**: Play, pause, next, and previous song functionality
- **Progress Bar**: Visual progress indicator with seeking capability
- **Liked Songs**: Heart button to like/unlike songs and build a playlist
- **YouTube Integration**: Click on album covers to open songs on YouTube
- **Responsive Design**: Works on desktop and mobile devices

## 🎧 Demo Songs Included

1. **Symphony** - Clean Bandit ft. Zara Larsson
2. **Pawn It All** - Alicia Keys
3. **Seni Dert Etmeler** - Madrigal
4. **Instant Crush** - Daft Punk ft. Julian Casablancas
5. **As It Was** - Harry Styles
6. **Physical** - Dua Lipa
7. **Delicate** - Taylor Swift

## 📁 Project Structure

```
music-player/
├── index.html          # Main HTML file
├── style.css           # CSS styles (not included in repo)
├── script.js           # JavaScript functionality
├── assets/
│   ├── images/         # Album cover images
│   │   ├── song1.jpg
│   │   ├── song2.jpg
│   │   └── ...
│   └── music/          # Audio files
│       ├── song1.mp3
│       ├── song2.mp3
│       └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for better file handling)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/music-player.git
   cd music-player
   ```

2. **Add your music files**
   - Place your audio files (.mp3 format) in the `assets/music/` directory
   - Add corresponding album cover images (.jpg format) in the `assets/images/` directory

3. **Update the song list**
   - Edit the `songs` array in `script.js` to match your music files
   - Update the file paths, titles, artists, and YouTube links

4. **Run the application**
   - Open `index.html` in your web browser
   - Or serve it using a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## 🎨 Customization

### Adding New Songs

1. Add your audio file to `assets/music/`
2. Add the album cover to `assets/images/`
3. Update the `songs` array in `script.js`:

```javascript
const songs = [
    {
        title: "Your Song Title",
        artist: "Artist Name",
        src: "assets/music/your-song.mp3",
        img: "assets/images/your-cover.jpg",
        youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
    },
    // ... other songs
];
```

### Styling

- The project uses an external CSS file (`style.css`) for styling
- Customize the appearance by modifying the CSS file
- The design is responsive and mobile-friendly

## 🔧 Technical Details

### JavaScript Functionality

- **Audio Management**: Uses HTML5 Audio API for music playback
- **Progress Tracking**: Real-time progress bar updates
- **Playlist Management**: In-memory storage of liked songs
- **Navigation**: Circular navigation through songs

### Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design

## 🎯 Usage

1. **Play/Pause**: Click the play button to start/stop music
2. **Navigate**: Use previous/next buttons to change songs
3. **Seek**: Click on the progress bar to jump to a specific time
4. **Like Songs**: Click the heart button to add songs to your playlist
5. **YouTube**: Click on album covers to open songs on YouTube

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the artists whose music is featured in the demo
- Icons and emojis used for controls
- HTML5 Audio API for audio playback functionality

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

## 🔮 Future Enhancements

- [ ] Volume control
- [ ] Shuffle and repeat modes
- [ ] Playlist import/export
- [ ] Dark/light theme toggle
- [ ] Search functionality
- [ ] Audio visualizer
- [ ] Local storage for liked songs

👉 [**Tap Here**](https://divyasrinallatigala.github.io/Replica/) to view the live site.

**Enjoy your music! 🎵**
