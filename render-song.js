export function renderSong(songObj){
    const songsEl = document.createElement('div');
    const songName = document.createElement('h2');
    const songLength = document.createElement('p');
    const bandName = document.createElement('h4');
    const bandMembers = document.createElement('p');
    const otherSongs = document.createElement('ul');

    songsEl.classList.add('songs');

    songName.textContent = songObj.name;
    songLength.textContent = songObj.length;
    bandName.textContent = songObj.bandName;
    bandMembers.textContent = `${songObj.bandMembers.name}: 
    ${songObj.bandMembers.position}. Birthday: 
    ${songObj.bandMembers.birthday}.`;

    for (let otherSong of otherSongs){
        const otherSongList = document.createElement('li');
        otherSongList.textContent = otherSong;
        otherSongs.append(otherSongList);
    }

    return songsEl;
}