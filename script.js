function openmenu(){
    var menu=document.getElementById('menu-content')
    menu.style.opacity='100%'
    menu.style.top='0'
}

function closemenu(){
    var menu=document.getElementById('menu-content')
    menu.style.opacity='0'
    menu.style.top='-700px'
}

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;

    window.location.href = `selamat.html?name=${encodeURIComponent(name)}`;
});