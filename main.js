const nav = document.querySelector('.main-nav-links');
const Open = document.querySelector('.opennav');
const Close = document.querySelector('.close');

Close.onclick = function(){
    nav.style.left = '-100%'
};
Open.onclick = function(){
    nav.style.left = '0px';
}
