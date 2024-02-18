//------------------------for menu bars------------------

const open = document.getElementById('open');
const close = document.getElementById('close');
const menuBar = document.querySelector('.menu')

open.addEventListener('click', () => {
    menuBar.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
});

close.addEventListener('click', () => {
    menuBar.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
})


//--------------------------for arrow----------------------

const down = document.querySelectorAll('.down');
const toggler = document.querySelectorAll('.rotator')

for(let i=0; i<toggler.length; i++){

    toggler[i].addEventListener('mouseover',()=>{
      down[i].style.transform = "rotate(180deg)";
    });

    toggler[i].addEventListener('mouseout',()=>{
        down[i].style.transform = "rotate(0deg)";
      });
}
