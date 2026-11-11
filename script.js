(function(){
 var root=document.documentElement,tb=document.getElementById('themeBtn');
 var saved=null;try{saved=localStorage.getItem('tema')}catch(e){}
 if(!saved&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)saved='dark';
 function setTema(t){root.setAttribute('data-theme',t);tb.textContent=t==='dark'?'Modo claro':'Modo escuro';try{localStorage.setItem('tema',t)}catch(e){}}
 setTema(saved||'light');
 tb.addEventListener('click',function(){setTema(root.getAttribute('data-theme')==='dark'?'light':'dark')});

 var side=document.getElementById('sidebar');
 document.getElementById('menuBtn').addEventListener('click',function(){side.classList.toggle('open')});
 side.addEventListener('click',function(e){if(e.target.classList.contains('nav-item'))side.classList.remove('open')});

 var secs=[].slice.call(document.querySelectorAll('.tabela')),
     navs=[].slice.call(document.querySelectorAll('.nav-item')),
     input=document.getElementById('busca'),vazio=document.getElementById('vazio'),cont=document.getElementById('contagem');
 function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
 function limpar(el){[].forEach.call(el.querySelectorAll('mark'),function(m){m.replaceWith(document.createTextNode(m.textContent))});el.normalize()}
 function filtrar(){
  var q=norm(input.value.trim()),vis=0,linhas=0;
  secs.forEach(function(s,i){
   var nome=norm(s.dataset.nome),tabOk=q===''||nome.indexOf(q)>-1,alguma=false;
   var cod=s.querySelector('h3');
   [].forEach.call(s.querySelectorAll('tbody tr'),function(tr){
    limpar(tr);
    var c=tr.querySelector('code'),ok=q===''||tabOk||norm(c.textContent).indexOf(q)>-1;
    tr.classList.toggle('hide',!ok);
    if(ok){alguma=true;linhas++;
     if(q&&norm(c.textContent).indexOf(q)>-1){var t=c.textContent,k=norm(t).indexOf(q);c.innerHTML='';c.append(t.slice(0,k));var m=document.createElement('mark');m.textContent=t.slice(k,k+q.length);c.append(m,t.slice(k+q.length));}}
   });
   var show=q===''||tabOk||alguma;
   s.classList.toggle('hide',!show);navs[i].classList.toggle('hide',!show);if(show)vis++;
  });
  vazio.style.display=vis?'none':'block';
  cont.textContent=q===''?'':vis+' tabela(s) e '+linhas+' coluna(s) encontradas';
 }
 input.addEventListener('input',filtrar);

 var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){navs.forEach(function(n){n.classList.toggle('active',n.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-20% 0px -70% 0px'});
 secs.forEach(function(s){obs.observe(s)});

 var modal=document.getElementById('modal'),stage=document.getElementById('stage'),img=document.getElementById('derImg'),pz=null;
 function fit(){
  if(!pz)return;
  var w=stage.clientWidth,h=stage.clientHeight,iw=img.naturalWidth||1,ih=img.naturalHeight||1,s=Math.min(w/iw,h/ih);
  img.style.width=iw+'px';img.style.height=ih+'px';
  pz.setOptions({startScale:s,minScale:s*0.5,maxScale:s*12});
  pz.zoom(s,{animate:false});pz.pan((w-iw)/2,(h-ih)/2,{animate:false});
 }
 function abrir(){
  modal.classList.add('open');document.body.style.overflow='hidden';
  if(!pz){
   if(typeof Panzoom==='undefined'){alert('Não foi possível carregar a biblioteca Panzoom.');return}
   pz=Panzoom(img,{canvas:true,cursor:'grab',step:0.3,maxScale:20,minScale:0.05});
   stage.addEventListener('wheel',pz.zoomWithWheel);
  }
  if(img.complete&&img.naturalWidth)fit();else img.onload=fit;
 }
 function fechar(){modal.classList.remove('open');document.body.style.overflow=''}
 document.getElementById('abrirDer').addEventListener('click',abrir);
 document.getElementById('fecharDer').addEventListener('click',fechar);
 document.getElementById('zin').addEventListener('click',function(){pz&&pz.zoomIn()});
 document.getElementById('zout').addEventListener('click',function(){pz&&pz.zoomOut()});
 document.getElementById('zreset').addEventListener('click',fit);
 document.addEventListener('keydown',function(e){if(e.key==='Escape')fechar()});
 window.addEventListener('resize',function(){if(modal.classList.contains('open'))fit()});
})();
