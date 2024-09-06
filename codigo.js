let p = document.querySelector('.paleta');
let ball = document.querySelector('.ball');
let en = document.querySelector('.enemigo');
let bloques = document.querySelector('.bloques');

let pro = {
 x:innerWidth/2-40,
 xv:0,
 y:innerHeight-100
}

let pb = {
 x:200,
 xv:2,
 y:600,
 yv:-5
};

let enemy = {
 x:innerWidth/2-75,
 xv:0,
 y:0,
 yv:0
}



function animation() {
 window.requestAnimationFrame(animation);
 pro.x += pro.xv;
 pb.x += pb.xv;
 pb.y += pb.yv;
 enemy.x += enemy.xv;
 enemy.y += enemy.yv;
 
 p.style.transform = `translatex(${pro.x}px) `+`translatey(${pro.y}px)`;
 
 ball.style.transform = `translatex(${pb.x}px) `+`translatey(${pb.y}px)`;
 
  en.style.transform = `translatex(${enemy.x}px)`+`translatey(${enemy.y}px)`;
 
 en.style.border = 'none';
 en.style.borderRadius = 'none'
 
 colisionDePared();
 chocarPaleta();
 ballYpaleta();
 matarEnemigo();
 romperBloques()
 
};
animation();


let btn = document.querySelectorAll(".btn")

btn[0].addEventListener('touchstart',()=>{
 pro.xv = -3;
});

btn[1].addEventListener('touchstart',()=>{
 pro.xv = 3;
});


function chocarPaleta() {
 if(pro.x + 80 > innerWidth ||
    pro.x < 0) {
    pro.xv = 0;
 }
}

function colisionDePared() {

 if(pb.x + 20 > innerWidth || pb.x < 0) {
    pb.xv = -pb.xv;
 }
 if(pb.y + 20 > innerHeight || pb.y < 0) {
    pb.yv = -pb.yv;
 }
}

function ballYpaleta() {
 if(pb.y + 20 > pro.y && 
    pb.y < pro.y + 20 && 
    pb.x + 20 > pro.x && 
    pb.x < pro.x + 80) {
    pb.yv = -pb.yv;
    //pb.xv = -pb.xv;
 }
}

function matarEnemigo() {
  if(pb.y < enemy.y + 150 && 
     pb.y + 150 > enemy.y && 
     pb.x + 20 > enemy.x && 
     pb.x < enemy.x + 150) {
     pb.yv = -pb.yv;
     pb.xv =  -pb.xv;
     en.style.border = 'solid 1px red';
     en.style.borderRadius = '50%'
  }
}

function crerBloques() { 
 for(let i = 0; i < 9; i++){
 for(let ii = 0; ii < 7; ii++){
 let n = document.createElement('div');
 bloques.appendChild(n);
 n.classList.add('block');
 n.style.top = i*21+'px';
 n.style.left = ii*51+'px'
 }; 
 };
};
crerBloques();

function romperBloques() {
 let uno = document.querySelectorAll('.block');
 uno.forEach((e,i)=>{
  let x = e.getBoundingClientRect().x;
  let y = e.getBoundingClientRect().y;
  if(pb.y < y + 20 && 
     pb.y + 20 > y && 
     pb.x + 20 > x && 
     pb.x < x + 50) {
     pb.yv = -pb.yv;    
     e.remove();
  }
 });
}
















