(function(){
 var b=document.querySelector('.burger'),m=document.getElementById('menu');
 function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰';}
 b.addEventListener('click',function(){set(!m.classList.contains('open'));});
 m.addEventListener('click',function(e){if(e.target.tagName==='A')set(false);});
 document.getElementById('ano').textContent=new Date().getFullYear();
})();
