let anchor = document.querySelector('#anchor');
document.querySelector('#menu-btn').onclick = () =>{
    anchor.classList.toggle('active');
}

let click = document.querySelector('#icons');
document.querySelector('#click-me').onclick = () =>{
    click.classList.toggle('active');
}