function Artist(name, genre) {
        this.name = name;
        this.genre = genre;
      }

      Artist.prototype.user = function() {
        this.name = prompt("Which artist do you want to hear: ");
        console.log(`${this.name}, You've chosen a great artist.`);
        this.genre = prompt("Of which genre do you want to hear: ").toLowerCase();
        console.log(`Playing ${this.genre} songs for you!`);
        var happy_list = ["Let's Go Crazy by Prince", "Good as Hell", "Lovely Day"];
        var sad_list = ["Hurt", "Teardrop", "The Boxer", "No Name"];
        var lofi_list = ["Take Me. Miso. Miso", "Falling for U", "Fool. Cavetown"];
        var person = prompt("Do you want to shuffle the playlist: ").toLowerCase();
        if (this.genre === "happy" && person === "yes") {
          var songs = happy_list[Math.floor(Math.random() * happy_list.length)];
          console.log(songs);
        } else if (this.genre === "sad" && person === "yes") {
          var songs = sad_list[Math.floor(Math.random() * sad_list.length)];
          console.log(songs);
        } else if (this.genre === "lofi" && person === "yes") {
          var songs = lofi_list[Math.floor(Math.random() * lofi_list.length)];
          console.log(songs);
        }
      };

      var obj = new Artist("name", "genre");
      obj.user();
