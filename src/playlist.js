import React from 'react'
import './App.css';
import './aside.css' ;

const Playlist = () => {
    return (
        <div className="playlist-container">
            {}
              <div className="playlist-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                      </svg>
                   <a href="">Create a Playlist</a>
              </div>
              <div className="liked-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>

                  <a href="">Liked songs</a>
              </div>
              {/* created playlists */}
              <div className="created-playlist">
                
              </div>
        </div>
    )
}

export default Playlist
