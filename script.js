const classRoom = document.querySelectorAll('.soccer-ball, .bookshelf, .plants, .board, .ourstory, .soveu');
const popOver = document.querySelectorAll('.popover');

classRoom.forEach(function(hotspot) {
    const popOver = hotspot.querySelector('.popover');
    hotspot.addEventListener('click', function() {
    popOver.classList.toggle('visible');
});
});