let currentAudio = null;
        let currentButton = null;

        function playAudio(audioId) {
            var audio = document.getElementById(audioId);
            if (currentAudio) {
                currentAudio.pause();
                if (currentButton) {
                    currentButton.innerText = 'Play/Pause';
                }
            }
            if (audio.paused) {
                audio.play();
                var btn = document.getElementById('playPauseBtn' + audioId.replace('audio', ''));
                btn.innerText = 'Pause';
            } else {
                audio.pause();
                btn.innerText = 'Play/Pause';
            }
            currentAudio = audio;
            currentButton = btn;
        }

    document.addEventListener('DOMContentLoaded', function() {  
    var audioPlayer = document.getElementById('audioPlayer');  
    var songLists = document.querySelectorAll('.songList');    
    document.querySelectorAll('.songListToggle').forEach(function(toggle) {  
        toggle.addEventListener('click', function(event) {  
            event.preventDefault();  
            var songList = this.parentNode;  
            var songs = songList.querySelector('.songs');  
            songs.style.display = songs.style.display === 'none' ? 'block' : 'none';  
        });  
    });    
    document.querySelectorAll('.playSong').forEach(function(playLink) {  
        playLink.addEventListener('click', function(event) {  
            event.preventDefault();  
            var songUrl = this.getAttribute('data-song-url');  
            if (songUrl) {  
                audioPlayer.src = songUrl;  
                audioPlayer.play();  
            }  
        });  
    });  
});

function toggleLike(icon) {
    const li = icon.parentNode;
    const likedList = document.getElementById('likedList');
    const initialList = document.getElementById('initialList');
    if (icon.classList.contains('liked')) {
      icon.classList.remove('liked');
      const likedItem = likedList.querySelector('li[data-index="' + Array.from(initialList.children).indexOf(li) + '"]');
      if (likedItem) {
        likedList.removeChild(likedItem);
      }
    } else {
      icon.classList.add('liked');
      const clonedItem = li.cloneNode(true);
      clonedItem.setAttribute('data-index', Array.from(initialList.children).indexOf(li));
      likedList.appendChild(clonedItem);
    }
  }