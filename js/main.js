
window.addEventListener('scroll',()=>{
 const n=document.querySelector('.navbar');
 n.style.boxShadow=window.scrollY>30?'0 10px 30px rgba(0,0,0,.08)':'none';
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.onclick=e=>{
  const t=document.querySelector(a.getAttribute('href'));
  if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
 };
});
console.log('Sentama loaded');
