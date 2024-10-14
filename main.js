window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width= "100px";
    document.getElementById("header").style.backgroundColor = "black";
  } else {
    document.getElementById("logo").style.width= "130px";
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}
function openmenu() {
    const menuicon = document.querySelector('.navtoggle');
    const menu = document.querySelector('.navlist');

    menuicon.addEventListener('click', () => {
        menu.classList.toggle ("openmenu");
    })
}

openmenu();



