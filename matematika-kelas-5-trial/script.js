/* Engine game Matematika SD - Developer: portgas75 */
(function(){
'use strict';
var PASS=8,PER=10,WA='6285797134274';
var TIER=['Sangat mudah','Mudah','Menengah','Menengah sulit','Sulit','Sangat sulit'];
var TRIAL=GAME.version==='trial';
var KEY='msd_k'+GAME.grade+'_'+GAME.version;
var app=document.querySelector('#app'),toastEl=document.querySelector('#toast');
var S=load(),cur=null,tt=null;

function load(){var d={name:'',best:{},hist:{}};try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&typeof s==='object'){d.name=String(s.name||'').slice(0,20);
  if(s.best&&typeof s.best==='object')Object.keys(s.best).forEach(function(k){var v=+s.best[k];if(v>=0&&v<=PER&&LEVELS[k-1])d.best[k]=Math.floor(v)});
  if(s.hist&&typeof s.hist==='object')Object.keys(s.hist).forEach(function(k){if(Array.isArray(s.hist[k]))d.hist[k]=s.hist[k].slice(-80)})}}catch(e){}return d}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function hash(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return h.toString(36)}
function judge(c){return c>=PASS}
function passed(n){return (S.best[n]||0)>=PASS}
function playable(n){return !!LEVELS[n-1]}
function unlocked(n){return playable(n)&&(!TRIAL||n===1||passed(n-1))}
function recommended(){for(var n=1;n<=LEVELS.length;n++)if(!passed(n))return n;return 0}
function doneCount(){return Object.keys(S.best).filter(function(k){return passed(k)}).length}
function totalScore(){return Object.keys(S.best).reduce(function(a,k){return a+S.best[k]*10},0)}
function pname(){return S.name||'Juara'}
function toast(m){toastEl.textContent=m;toastEl.className='on';clearTimeout(tt);tt=setTimeout(function(){toastEl.className=''},2400)}
function render(h){app.innerHTML=h;window.scrollTo(0,0)}
function waLink(){return 'https://wa.me/'+WA+'?text='+encodeURIComponent('Halo, saya tertarik membeli Full Version Game Matematika Kelas '+GAME.grade+'. Mohon informasi pembeliannya.')}
function offer(mini){if(!TRIAL)return '';
  return '<div class="offer'+(mini?' mini':'')+'"><h3>SUDAH SIAP MENJADI JUARA MATEMATIKA?</h3>'+
  '<p>Ingin membuka semua level dan mendapatkan lebih banyak latihan soal?</p>'+
  (mini?'':'<p>Full Version: <b>30 level</b> dan <b>500+ soal</b> bervariasi.</p>')+
  '<p class="price">Upgrade ke FULL VERSION hanya Rp10.000!</p>'+
  '<p>Hubungi WhatsApp:<br><b>+62 857-9713-4274</b></p>'+
  '<a class="btn orange" href="'+waLink()+'" target="_blank" rel="noopener">BELI FULL VERSION</a></div>'}

function more(){if(TRIAL)return '';
  return '<div class="more"><h3>🎮 Mau game pelajaran lain?</h3><p>Hubungi pengembang di WhatsApp:<br><b>+62 857-9713-4274</b></p>'+
  '<a class="btn more" href="https://wa.me/'+WA+'?text='+encodeURIComponent('Halo, saya sudah memainkan Game Matematika Kelas '+GAME.grade+' Full Version dan tertarik dengan game mata pelajaran lain. Mohon informasinya.')+'" target="_blank" rel="noopener">TANYA GAME PELAJARAN LAINNYA</a></div>'}
/* ---------- Layar ---------- */
function home(){render('<div class="card hero"><div class="emo">🏆</div><h1>Petualangan Menjadi Juara Matematika</h1><p><b>Matematika Kelas '+GAME.grade+' SD</b></p>'+
  '<p class="mut">Selesaikan level demi level. Lulus jika benar minimal 8 dari 10 soal!</p>'+
  '<input type="text" id="nm" maxlength="20" placeholder="Tulis namamu" value="'+esc(S.name)+'" autocomplete="off">'+
  '<button data-a="start">'+(doneCount()||Object.keys(S.best).length?'LANJUTKAN':'MULAI BERMAIN')+'</button></div>'+
  '<p class="center mut">Developer: <b>portgas75</b></p>')}
function menu(){map()}
function attempted(){return Object.keys(S.best).length>0}
function map(){var h='<div class="card"><div class="hello"><h2>Halo, '+esc(pname())+'! 👋</h2><button class="gray sm" data-a="rename">✏️ Ganti nama</button></div><div class="stat"><span>Level selesai</span><b>'+doneCount()+' / '+GAME.totalLevels+'</b></div><div class="stat"><span>Total skor</span><b>'+totalScore()+'</b></div></div><h2 class="center">🗺️ Pilih Level untuk Bermain</h2>';
  for(var n=1;n<=GAME.totalLevels;n++){
    if((n-1)%5===0)h+='<div class="tier">Level '+n+'–'+(n+4)+' • '+TIER[(n-1)/5]+'</div>';
    var L=LEVELS[n-1]||PREVIEW[n-11],cls='lv',st='',ic=n;
    if(!playable(n)){cls+=' lock prem';st='🔒 Full';ic='🔒'}
    else if(passed(n)){cls+=' done';st='⭐ '+S.best[n]*10}
    else if(!unlocked(n)){cls+=' lock';st='🔒';ic='🔒'}
    else if(!TRIAL&&n===recommended()){cls+=' rec';st='⭐ Disarankan'}
    else st='▶ Main';
    h+='<button class="'+cls+'" data-a="lv" data-n="'+n+'"><span class="n">'+ic+'</span><span class="tx"><b>'+esc(L.t)+'</b><small>Level '+n+' • '+esc(L.d)+'</small></span><span class="s">'+st+'</span></button>'}
  h+=(attempted()?offer(true):'')+more()+'<div class="row2 foot"><button class="gray sm" data-a="progress">📊 Progres</button><button class="gray sm" data-a="about">ℹ️ Tentang</button><button class="gray sm" data-a="reset">🗑️ Reset</button></div>';
  render(h)}
function preview(n){var L=PREVIEW[n-11];render('<div class="card center"><div class="vis big">🔒</div><h2>Level '+n+': '+esc(L.t)+'</h2><p>'+esc(L.d)+'</p><p class="mut">Level ini tersedia di <b>Full Version</b>.</p></div>'+offer(false)+'<button class="gray" data-a="map">⬅ Peta Level</button>')}
function progress(){var h='<div class="card"><h2>📊 Progres '+esc(pname())+'</h2><div class="stat"><span>Level selesai</span><b>'+doneCount()+' / '+GAME.totalLevels+'</b></div><div class="stat"><span>Total skor</span><b>'+totalScore()+'</b></div></div><div class="card"><h3>Hasil terbaik per level</h3>';
  for(var n=1;n<=LEVELS.length;n++)h+='<div class="stat"><span>Level '+n+' – '+esc(LEVELS[n-1].t)+'</span><b>'+(S.best[n]!==undefined?(S.best[n]*10)+(passed(n)?' ✅':' ❌'):'-')+'</b></div>';
  render(h+'</div><button class="gray" data-a="menu">⬅ Peta Level</button>')}
function about(){render('<div class="card"><h2>Tentang Game</h2><p><b>Matematika Kelas '+GAME.grade+' SD</b> – '+(TRIAL?'TRIAL VERSION':'FULL VERSION')+'</p>'+
  '<p>Setiap level berisi 10 soal. Kamu <b>LULUS</b> jika menjawab benar minimal <b>8 dari 10</b>. Level berikutnya terbuka setelah level sebelumnya lulus.</p>'+
  '<p>Progres tersimpan otomatis di perangkat ini (tanpa akun, tanpa internet).</p><p>Level tersedia: <b>'+LEVELS.length+'</b> dari '+GAME.totalLevels+'.</p>'+
  '<p>Developer: <b>portgas75</b></p></div>'+more()+'<button class="gray" data-a="menu">⬅ Peta Level</button>')}

/* ---------- Permainan ---------- */
function qkey(q){return hash(q.q+'|'+q.c)}
function pick10(n){var L=LEVELS[n-1],H=new Set(S.hist[n]||[]),got=[],keys=new Set(),t=0;
  while(got.length<PER&&t<800){t++;var q=L.gen();if(!q||!q.c||!q.w||!q.w.length)continue;var k=qkey(q);if(keys.has(k))continue;if(H.has(k)&&t<500)continue;
    var ops=[q.c].concat(q.w.filter(function(x){return x!==q.c}));ops=Array.from(new Set(ops));if(ops.length<2)continue;
    keys.add(k);q.o=shuf(ops);got.push(q)}
  S.hist[n]=((S.hist[n]||[]).concat(Array.from(keys))).slice(-80);save();return got}
function start(n){if(!playable(n))return;if(!unlocked(n)){toast('Selesaikan level '+(n-1)+' dulu (minimal 8/10).');return}
  cur={n:n,qs:pick10(n),i:0,ok:0,ans:[],done:false,fin:false};showQ()}
function showQ(){cur.sel=-1;var q=cur.qs[cur.i],h='<div class="top"><button class="gray sm" data-a="quit">⬅ Peta</button><span>Level '+cur.n+' • Soal '+(cur.i+1)+'/'+PER+'</span><span>Benar: '+cur.ok+'</span></div><div class="bar"><i style="width:'+(cur.i/PER*100)+'%"></i></div><div class="card"><div class="q">'+q.q+'</div></div>'+(GAME.hint&&LEVELS[cur.n-1].h?'<button class="gray sm hintbtn" data-a="hint">💡 Petunjuk</button><div id="hint"></div>':'')+'<div id="opts">';
  q.o.forEach(function(o,i){h+='<button class="opt" data-a="ans" data-i="'+i+'">'+o+'</button>'});
  render(h+'</div><button class="green" id="chk" data-a="check" disabled>✔ PERIKSA JAWABAN</button><div id="fb"></div>')}
function select(i){if(!cur||cur.done||cur.fin)return;var q=cur.qs[cur.i];if(i<0||i>=q.o.length)return;cur.sel=i;document.querySelectorAll('#opts .opt').forEach(function(b,k){b.classList.toggle('sel',k===i)});var c=document.querySelector('#chk');if(c)c.disabled=false}
function check(){if(!cur||cur.done||cur.fin||cur.sel===undefined||cur.sel<0)return;var i=cur.sel,q=cur.qs[cur.i];cur.done=true;var chk=document.querySelector('#chk');if(chk)chk.style.display='none';var hb=document.querySelector('.hintbtn');if(hb)hb.style.display='none';var hx=document.querySelector('#hint');if(hx)hx.innerHTML='';var good=q.o[i]===q.c;
  if(good)cur.ok++;cur.ans.push({q:q,pick:q.o[i],good:good});
  var bs=document.querySelectorAll('#opts .opt');bs.forEach(function(b,k){b.disabled=true;b.classList.remove('sel');if(q.o[k]===q.c)b.classList.add('right');else if(k===i)b.classList.add('wrong')});
  var last=cur.i===PER-1;
  document.querySelector('#fb').innerHTML='<div class="fb '+(good?'ok':'no')+'"><b>'+(good?'✅ Benar! Hebat!':'❌ Belum tepat.')+'</b><br>'+(good?'':'Jawaban benar: <b>'+q.c+'</b>.<br>')+'Pembahasan: '+q.e+'</div><button data-a="next">'+(last?'LIHAT HASIL':'LANJUT ➡')+'</button>'}
function next(){if(!cur||!cur.done)return;cur.done=false;if(cur.i<PER-1){cur.i++;showQ()}else result()}
function result(){cur.fin=true;var n=cur.n,c=cur.ok,ok=judge(c),nilai=c*10;
  if(S.best[n]===undefined||c>S.best[n]){S.best[n]=c}save();
  var h='<div class="card res"><div class="big">'+(ok?'🎉':'💪')+'</div><h2 class="'+(ok?'pass':'fail')+'">'+(ok?'SELAMAT!':'YUK, COBA LAGI!')+'</h2><p>'+(ok?'Kamu berhasil menyelesaikan level ini!':'Ayo belajar lagi dan taklukkan level ini!')+'</p>'+
   '<div class="stat"><span>Jawaban benar</span><b>'+c+'/10</b></div><div class="stat"><span>Nilai</span><b>'+nilai+'</b></div><div class="stat"><span>STATUS</span><b class="'+(ok?'pass':'fail')+'">'+(ok?'LULUS':'BELUM LULUS')+'</b></div></div>';
  var wr=cur.ans.filter(function(a){return !a.good});
  if(wr.length){h+='<div class="card"><h3>Rangkuman: yang perlu dipelajari</h3>';wr.forEach(function(a){h+='<div class="rev">'+a.q.q+'<br>Jawabanmu: '+a.pick+' • Benar: <b>'+a.q.c+'</b><br><i>'+a.q.e+'</i></div>'});h+='</div>'}
  else h+='<div class="card center"><b>Sempurna! Semua jawabanmu benar. ⭐</b></div>';
  if(ok&&n<LEVELS.length)h+='<button class="green" data-a="lv" data-n="'+(n+1)+'">LEVEL BERIKUTNYA ➡</button>';
  if(ok&&TRIAL&&n===LEVELS.length)h+='<div class="card center"><h3>🎊 Kamu menamatkan semua level Trial!</h3></div>';
  h+='<button class="orange" data-a="lv" data-n="'+n+'">🔄 ULANGI LEVEL</button><button class="gray" data-a="map">🗺️ Peta Level</button>';
  if(TRIAL&&ok)h+=offer(n!==LEVELS.length);
  if(!TRIAL&&ok&&n===LEVELS.length)h+='<div class="card center"><h3>🏆 Hebat! Level terakhir selesai!</h3></div>'+more();
  render(h)}

/* ---------- Aksi ---------- */
function act(a,d){switch(a){
 case 'start':var el=document.querySelector('#nm');if(el){S.name=el.value.replace(/[<>]/g,'').trim().slice(0,20);save()}map();break;
 case 'home':home();break;case 'menu':menu();break;case 'map':map();break;case 'progress':progress();break;case 'about':about();break;
 case 'lv':var n=+d.n;if(!playable(n)){if(PREVIEW[n-11])preview(n);return}start(n);break;
 case 'hint':var hn=document.querySelector('#hint');if(hn&&cur&&!cur.done)hn.innerHTML=hn.innerHTML?'':'<div class="fb tip">💡 '+LEVELS[cur.n-1].h+'</div>';break;
 case 'rename':var v=window.prompt('Tulis namamu:',S.name);if(v!==null){S.name=v.replace(/[<>]/g,'').trim().slice(0,20);save();map()}break;
 case 'quit':if(cur&&!cur.fin&&!window.confirm('Keluar dari level ini? Jawaban level ini tidak disimpan.'))return;cur=null;map();break;
 case 'ans':select(+d.i);break;case 'check':check();break;case 'next':next();break;
 case 'reset':if(window.confirm('Hapus semua progres? Tindakan ini tidak dapat dibatalkan.')){S.best={};S.hist={};save();toast('Progres direset.');menu()}break}}
app.onclick=function(e){var b=e.target.closest('[data-a]');if(b)act(b.dataset.a,b.dataset)};
window.MSD={PASS:PASS,PER:PER,judge:judge,act:act,cur:function(){return cur},state:function(){return S},app:app,unlocked:unlocked};
home();
})();
