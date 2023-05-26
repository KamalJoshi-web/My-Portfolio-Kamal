// NavBar Script 
const menuBtn =document.getElementById('menu-btn');
const links =document.querySelector('.links');

menuBtn.addEventListener('click',()=>{
    links.classList.toggle('links-active');
    if(links.classList.contains('links-active')){
        menuBtn.classList.add('menu-btn-cross');
    }
    else{
        menuBtn.classList.remove('menu-btn-cross');
    }
})

// Cursor Effects Script
const cursor = document.querySelector('.cursor-effects');
var timeout;
document.addEventListener('mousemove',(e)=>{
    let xCordinates = e.pageX;
    let yCordinates = e.pageY;
    cursor.style.top = yCordinates + "px";
    cursor.style.left = xCordinates + "px";
    cursor.style.display = "block";


    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 10);
})

document.addEventListener('mouseout', ()=>{
    cursor.style.display = "none";
})

// Preloader Script

let loader = document.getElementById('preloader');

window.addEventListener('load', ()=>{
    loader.style.display ="none";
})

// Mobile Styling

const mobileDesign = document.querySelectorAll('.mobile-design');
const info = document.querySelector('.info-background');
const pic = document.querySelector('.pictures');
const profileImg = document.getElementById('profile-me');
profileImg.addEventListener('click',()=>{
    info.classList.toggle('info-background-new');
    pic.classList.add('pointer-none');
    mobileDesign.forEach((e)=>{
        e.style.display ='none';
        
    })
})
document.addEventListener('click',(e)=>{
    
    if (e.target != profileImg) {
        info.classList.remove('info-background-new');
        pic.classList.remove('pointer-none');
        mobileDesign.forEach((e)=>{
            e.style.display ='block';   
        })
       }
}
)

