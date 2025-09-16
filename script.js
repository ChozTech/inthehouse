
// Starfield background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w, h, stars = [];
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = Array.from({length: Math.min(220, Math.floor(w*h/6000))}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    z: Math.random()*1.2 + 0.3,
    a: Math.random()*0.6 + 0.2
  }));
}
function tick(){
  ctx.clearRect(0,0,w,h);
  for(const s of stars){
    ctx.fillStyle = `rgba(255,255,255,${s.a})`;
    ctx.fillRect(s.x, s.y, s.z, s.z);
    s.y += s.z * 0.15;
    if(s.y > h){ s.y = -2; s.x = Math.random()*w; }
  }
  requestAnimationFrame(tick);
}
window.addEventListener('resize', resize);
resize(); tick();
