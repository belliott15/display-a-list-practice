export function renderSong(songObj){
    const songsEl = document.createElement('div');
    const songName = document.createElement('h2');
    const bandName = document.createElement('h4');
    const songLength = document.createElement('p');
    const bandMembers = document.createElement('p');
    const otherSongsList = document.createElement('ul');

    songsEl.classList.add('songs');

    songName.textContent = songObj.name;
    bandName.textContent = songObj.bandName;
    songLength.textContent = songObj.length;
    
    for (let bandMember of songObj.bandMembers){
        const bandMemberEl = document.createElement('p');
        bandMemberEl.textContent = ` 
        ${bandMember.name}: 
        ${bandMember.position}. Birthday: 
        ${bandMember.birthday}.`;
        otherSongsList.append(bandMemberEl);
    }

    for (let otherSong of songObj.otherSongs){
        const otherSongEl = document.createElement('li');
        otherSongEl.textContent = otherSong;
        otherSongsList.append(otherSongEl);
    }

    songsEl.append(songName, bandName, songLength, bandMembers, otherSongsList);

    return songsEl;
}