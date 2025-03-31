document.getElementById("button")
.addEventListener("click", async () => {
    // Get input values
    let artistName = document.getElementById("artistName").value.trim();
    let songName = document.getElementById("songName").value.trim();

    if (artistName === "" || songName === "") {
        document.getElementById("getSong").innerHTML = "⚠️ Please fill in both fields!";
        return;
    }

    // Fetch lyrics
    let lyrics = await getSong(artistName, songName);
    document.getElementById("getSong").innerHTML = lyrics.replace(/\n/g, "<br>") || "Lyrics not found!";
});

// Fetch lyrics using async function
async function getSong(artist, song) {
try {
    let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    let res = await axios.get(url);
    if (res.data.lyrics) {
        return `<strong>🎧 Lyrics for "${song}" by ${artist}:</strong><br><br>` + res.data.lyrics;
    } else {
        return "❌ No lyrics found. Please try a different song.";
    }
} catch (error) {
    return "❌ Unable to fetch data. Please try again.";
}
}