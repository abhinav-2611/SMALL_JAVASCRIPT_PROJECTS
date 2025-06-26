document.getElementById("button").addEventListener("click", async () => {
      const artistName = document.getElementById("artistName").value.trim();
      const songName = document.getElementById("songName").value.trim();
      const resultBox = document.getElementById("getSong");

      resultBox.innerHTML = ""; // Clear previous results

      if (artistName === "" || songName === "") {
        resultBox.innerHTML = "⚠️ Please fill in both fields!";
        return;
      }

      resultBox.innerHTML = "🔄 Searching for lyrics... Please wait.";

      let lyrics = await getSong(artistName, songName);

      if (!lyrics) {
        resultBox.innerHTML = "❌ Lyrics not found. Please check the artist or song name.";
      } else {
        resultBox.innerHTML = lyrics.replace(/\n/g, "<br>");
      }
    });

    async function getSong(artist, song) {
      try {
        const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        const res = await axios.get(url);
        if (res.data.lyrics) {
          return `<strong>🎧 Lyrics for "${song}" by ${artist}:</strong><br><br>${res.data.lyrics}`;
        } else {
          return "";
        }
      } catch (error) {
        console.error("Error fetching lyrics:", error);
        return "";
      }
    }