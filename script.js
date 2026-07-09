const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn?.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>navMenu.classList.remove('active')));
const observer = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
function openVideo(link){
  document.getElementById("videoFrame").src = link;
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo(){
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoFrame").src = "";
}
