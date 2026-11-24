/* Bank soal Matematika Kelas 1 - FULL - Developer: portgas75 */
const GAME={"grade":1,"version":"full","totalLevels":30,"hint":false};
/* Helper bank soal - dipakai bersama semua game */
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rnd(0,a.length-1)];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(0,i);[a[i],a[j]]=[a[j],a[i]]}return a};
const mk=(q,c,w,e,ck)=>({q:q,c:String(c),w:w.map(String),e:e,ck:ck});
function near(c,lo,hi,n){n=n||3;const s=new Set();let t=0;
  while(s.size<n&&t<300){t++;const v=c+rnd(1,4)*(Math.random()<.5?-1:1);if(v>=lo&&v<=hi&&v!==c)s.add(v)}
  for(let v=lo;s.size<n&&v<=hi;v++)if(v!==c)s.add(v);
  return Array.from(s)}
const KATA=['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas','dua puluh'];
function kata(n){if(n<=20)return KATA[n];if(n===100)return 'seratus';const t=Math.floor(n/10),u=n%10;return KATA[t]+' puluh'+(u?' '+KATA[u]:'')}
const NAMA=['Budi','Ani','Dina','Rina','Toni','Sari','Andi','Lala','Beni','Wati','Doni','Mira'];
const BENDA=[['🍎','apel'],['🍌','pisang'],['🐟','ikan'],['⭐','bintang'],['🎈','balon'],['⚽','bola'],['🐥','anak ayam'],['🍪','kue'],['🌸','bunga'],['🚗','mobil'],['🐱','kucing'],['📘','buku']];
const vis=(e,n)=>'<div class="vis">'+e.repeat(n)+'</div>';
const two=()=>{const a=pick(NAMA);let b;do b=pick(NAMA);while(b===a);return [a,b]};
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const rp=n=>'Rp'+fmt(n);
const pad2=n=>String(n).padStart(2,'0');
const fr=(a,b)=>'<span class="fr"><b>'+a+'</b><i>'+b+'</i></span>';
function kata3(n){if(n<100)return kata(n);if(n===1000)return 'seribu';const h=Math.floor(n/100),r=n%100;return (h===1?'seratus':KATA[h]+' ratus')+(r?' '+kata(r):'')}
function dis(c,ds,lo,hi){let s=[];shuf(ds).forEach(d=>{[c+d,c-d].forEach(v=>{if(v>=lo&&v<=hi&&v!==c&&s.indexOf(v)<0)s.push(v)})});s=shuf(s);const r=s.slice(0,3);
  if(r.length<3)near(c,lo,hi,6).forEach(v=>{if(r.length<3&&r.indexOf(v)<0)r.push(v)});return r}
const HARI=['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
const BULAN=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
function kata4(n){if(n<1000)return kata3(n);if(n===10000)return 'sepuluh ribu';const th=Math.floor(n/1000),r=n%1000;return (th===1?'seribu':KATA[th]+' ribu')+(r?' '+kata3(r):'')}
const PER={3:'pertiga',4:'perempat',5:'perlima',6:'perenam',7:'pertujuh',8:'perdelapan'};
function baca(a,d){if(d===2)return 'setengah';return a===1?'se'+PER[d]:KATA[a]+' '+PER[d]}
const t2s=m=>pad2(Math.floor(m/60))+'.'+pad2(m%60);
const gcd=(a,b)=>b?gcd(b,a%b):a;
const lcm=(a,b)=>a/gcd(a,b)*b;
const uniq=(c,a,n)=>Array.from(new Set(a.map(String))).filter(x=>x!==String(c)).slice(0,n||3);
const dec=x=>String(Math.round(x*10000)/10000).replace('.',',');
const mx=(w,a,b)=>'<span class="mx">'+w+'</span>'+fr(a,b);
const frs=(n,d)=>{const g=gcd(n,d);n/=g;d/=g;if(d===1)return String(n);const w=Math.floor(n/d),r=n%d;return w===0?fr(r,d):mx(w,r,d)};
const isPrime=n=>{if(n<2)return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true};
const divs=n=>{const r=[];for(let i=1;i<=n;i++)if(n%i===0)r.push(i);return r};
const ng=n=>n<0?'−'+(-n):String(n);
const sg=(x,y)=>x>y?'&gt;':x<y?'&lt;':'=';
const SIG=['&gt;','&lt;','='];
function kata5(n){if(n<1000)return kata3(n);const th=Math.floor(n/1000),r=n%1000;return (th===1?'seribu':kata3(th)+' ribu')+(r?' '+kata3(r):'')}
const SUP={2:'²',3:'³',4:'⁴',5:'⁵'};
function fstr(n){const f=[];let m=n;for(let p=2;p<=m;p++){let e=0;while(m%p===0){m/=p;e++}if(e)f.push(p+(e>1?SUP[e]:''))}return f.join(' × ')}
function fvals(n){const f=[];let m=n;for(let p=2;p<=m;p++)while(m%p===0){m/=p;f.push(p)}return f}
const ltr=e=>{const t=e.split(' ');let v=+t[0];for(let i=1;i<t.length;i+=2){const o=t[i],x=+t[i+1];v=o==='+'?v+x:o==='-'?v-x:o==='*'?v*x:v/x}return v};
const mean=a=>a.reduce((x,y)=>x+y,0)/a.length;
const median=a=>{const s=a.slice().sort((x,y)=>x-y),m=Math.floor(s.length/2);return s.length%2?s[m]:(s[m-1]+s[m])/2};

/* Level Kelas 1 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Mengenal Angka 1–10',d:'Menghitung gambar dan membaca angka 1 sampai 10',gen(){
  if(Math.random()<.8){const [e,n]=pick(BENDA),k=rnd(1,10);return mk('Ada berapa '+n+'?'+vis(e,k),k,near(k,1,10),'Hitung satu per satu. Ada '+k+' '+n+'.')}
  const k=rnd(1,10);return mk('Angka berapa yang dibaca "<b>'+kata(k)+'</b>"?',k,near(k,1,10),kata(k)+' ditulis dengan angka '+k+'.')}},
/*2*/{t:'Mengenal Angka 11–20',d:'Membaca, menghitung, dan mengurutkan angka 11 sampai 20',gen(){
  const t=rnd(0,3);
  if(t===0){const n=rnd(11,20);return mk('Angka berapa yang dibaca "<b>'+kata(n)+'</b>"?',n,near(n,10,20),kata(n)+' ditulis '+n+'.')}
  if(t===1){const n=rnd(10,19);return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,near(n+1,9,21),'Setelah '+n+' adalah '+(n+1)+'.')}
  if(t===2){const n=rnd(11,20);return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,near(n-1,9,21),'Sebelum '+n+' adalah '+(n-1)+'.')}
  const [e,nm]=pick(BENDA),k=rnd(11,20);return mk('Ada berapa '+nm+'?'+vis(e,k),k,near(k,10,21),'Hitung dengan teliti. Ada '+k+' '+nm+'.')}},
/*3*/{t:'Membandingkan Bilangan',d:'Menentukan bilangan terbesar dan terkecil sampai 20',gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:20},(_,i)=>i+1)).slice(0,4);const c=t===0?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(t===0?'besar':'kecil')+' di antara <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),'Bandingkan semua bilangan. Yang paling '+(t===0?'besar':'kecil')+' adalah '+c+'.')}
  const k=rnd(5,15),c=k+rnd(1,4),w=shuf(Array.from({length:k-1},(_,i)=>i+1)).slice(0,3);
  return mk('Bilangan yang lebih besar dari <b>'+k+'</b> adalah ...',c,w,c+' lebih besar dari '+k+'.')}},
/*4*/{t:'Mengurutkan Bilangan',d:'Mengurutkan bilangan dan melengkapi urutan',gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:20},(_,i)=>i+1)).slice(0,3);const s=a.slice().sort((x,y)=>x-y);if(t===1)s.reverse();
    const key=x=>x.join(', ');const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
    return mk('Urutan bilangan dari yang '+(t===0?'terkecil ke terbesar':'terbesar ke terkecil')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan yang benar: '+key(s)+'.')}
  const st=rnd(1,15),h=rnd(1,3),arr=[0,1,2,3,4].map(i=>st+i),c=arr[h];arr[h]='__';
  return mk('Lengkapi urutan: <b>'+arr.join(', ')+'</b>',c,near(c,1,22),'Bilangan bertambah satu setiap langkah, jadi yang hilang adalah '+c+'.')}},
/*5*/{t:'Penjumlahan sampai 10',d:'Menjumlahkan dua bilangan dengan hasil sampai 10',gen(){
  const a=rnd(1,9),b=rnd(1,10-a),c=a+b;
  if(Math.random()<.5)return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,0,12),a+' ditambah '+b+' sama dengan '+c+'.',a+'+'+b);
  const [e,n]=pick(BENDA),nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Lalu ia mendapat '+b+' '+n+' lagi. Sekarang ada berapa '+n+'?'+vis(e,a)+'<div class="vis">+</div>'+vis(e,b),c,near(c,0,12),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*6*/{t:'Pengurangan sampai 10',d:'Mengurangkan bilangan dengan bilangan awal sampai 10',gen(){
  const a=rnd(2,10),b=rnd(1,a),c=a-b;
  if(Math.random()<.5)return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,0,10),a+' dikurangi '+b+' sama dengan '+c+'.',a+'-'+b);
  const [e,n]=pick(BENDA),nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Sebanyak '+b+' '+n+' diberikan kepada teman. Sisa '+n+' ada berapa?'+vis(e,a),c,near(c,0,10),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*7*/{t:'Penjumlahan sampai 20',d:'Menjumlahkan dua bilangan dengan hasil sampai 20',gen(){
  let a,b;do{a=rnd(2,18);b=rnd(1,20-a)}while(a+b<=10);const c=a+b;
  if(Math.random()<.6)return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,5,22),a+' + '+b+' = '+c+'.',a+'+'+b);
  const n=pick(BENDA)[1],nm=pick(NAMA);return mk(nm+' mempunyai '+a+' '+n+'. Ia membeli '+b+' '+n+' lagi. Jumlah '+n+' sekarang ...',c,near(c,5,22),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*8*/{t:'Pengurangan sampai 20',d:'Mengurangkan bilangan dengan bilangan awal sampai 20',gen(){
  const a=rnd(11,20),b=rnd(1,9),c=a-b;
  if(Math.random()<.6)return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,1,20),a+' − '+b+' = '+c+'.',a+'-'+b);
  const n=pick(BENDA)[1],nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Ia memberikan '+b+' '+n+' kepada adik. Sisa '+n+' ...',c,near(c,1,20),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*9*/{t:'Mengenal Bangun Datar',d:'Mengenal lingkaran, segitiga, persegi, dan persegi panjang',gen(){
  const P=[['jam dinding','lingkaran'],['uang koin','lingkaran'],['piring','lingkaran'],['roda sepeda','lingkaran'],['pizza utuh (dilihat dari atas)','lingkaran'],
   ['potongan pizza','segitiga'],['bendera segitiga','segitiga'],['topi ulang tahun (dilihat dari depan)','segitiga'],['roti sandwich yang dipotong miring','segitiga'],
   ['papan catur','persegi'],['sapu tangan','persegi'],['keramik lantai','persegi'],['stiker kotak','persegi'],['kotak kue kecil (tutupnya)','persegi'],
   ['papan tulis','persegi panjang'],['pintu','persegi panjang'],['buku tulis','persegi panjang'],['layar televisi','persegi panjang'],['kartu ATM','persegi panjang'],['kasur','persegi panjang']];
  const S=['lingkaran','segitiga','persegi','persegi panjang'];
  if(Math.random()<.2){const k=rnd(0,3),ic=['<div class="vis big">🔵</div>','<div class="vis big">🔺</div>','<div class="vis big">🟥</div>','<div class="vis big" style="color:#f59e0b">▬</div>'][k];
    return mk('Gambar ini berbentuk apa?'+ic,S[k],S.filter(x=>x!==S[k]),'Bentuk ini adalah '+S[k]+'.')}
  const p=pick(P);return mk('<b>'+p[0].charAt(0).toUpperCase()+p[0].slice(1)+'</b> berbentuk apa?',p[1],S.filter(x=>x!==p[1]),p[0].charAt(0).toUpperCase()+p[0].slice(1)+' berbentuk '+p[1]+'.')}},
/*10*/{t:'Pola Bilangan Sederhana',d:'Melanjutkan pola bilangan dan pola gambar sederhana',gen(){
  const t=rnd(0,3);
  if(t<2){const step=t===0?1:2,st=rnd(1,8),a=[0,1,2,3].map(i=>st+i*step),c=st+4*step;
    return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,1,25),'Setiap langkah bertambah '+step+', jadi selanjutnya '+c+'.')}
  if(t===2){const st=rnd(10,20),a=[0,1,2,3].map(i=>st-i),c=st-4;
    return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,1,25),'Setiap langkah berkurang 1, jadi selanjutnya '+c+'.')}
  const E=shuf(['🍎','🍌','⭐','🐱','🌙','🔴','🐟','🌸']),A=E[0],B=E[1];
  return mk('Gambar apa selanjutnya?<div class="vis">'+A+B+A+B+A+'❓</div>',B,[A,E[2],E[3]],'Polanya bergantian '+A+' '+B+', jadi selanjutnya '+B+'.')}},
/*11*/{t:'Bilangan sampai 50',d:'Puluhan dan satuan pada bilangan sampai 50',gen(){
  const t=rnd(0,3),n=rnd(11,50),a=Math.floor(n/10),u=n%10;
  if(t===0){const f=(x,y)=>x+' puluhan dan '+y+' satuan',c=f(a,u);const cand=shuf([f(u,a),f(a+1,u),f(a,(u+1)%10),f(a-1,u),f(a,u+2)].filter(x=>x!==c&&!/^-/.test(x)));
    return mk('Bilangan <b>'+n+'</b> terdiri dari ...',c,Array.from(new Set(cand)).slice(0,3),n+' = '+c+'.')}
  if(t===1)return mk('Angka satuan dari <b>'+n+'</b> adalah ...',u,near(u,0,9),'Angka paling kanan adalah satuan, yaitu '+u+'.');
  if(t===2)return mk('Angka puluhan dari <b>'+n+'</b> adalah ...',a,near(a,0,9),'Angka sebelah kiri adalah puluhan, yaitu '+a+'.');
  return mk('<b>'+a+' puluhan + '+u+' satuan = ...</b>',n,near(n,10,59),a+' puluhan = '+a*10+', ditambah '+u+' = '+n+'.')}},
/*12*/{t:'Membandingkan sampai 50',d:'Terbesar, terkecil, dan bilangan di antara dua bilangan',gen(){
  const t=rnd(0,3);
  if(t<2){const a=shuf(Array.from({length:41},(_,i)=>i+10)).slice(0,4),c=t===0?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(t===0?'besar':'kecil')+' di antara <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),c+' adalah yang paling '+(t===0?'besar':'kecil')+'.')}
  if(t===2){const a=rnd(10,40),b=a+rnd(3,7),c=rnd(a+1,b-1),w=shuf([a-3,a-2,a-1,b+1,b+2,b+3].filter(x=>x>=5)).slice(0,3);
    return mk('Bilangan yang ada di antara <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,w,c+' lebih besar dari '+a+' dan lebih kecil dari '+b+'.')}
  const k=rnd(15,40),c=k+rnd(1,6),w=shuf([k-1,k-2,k-3,k-4,k-5]).slice(0,3);
  return mk('Bilangan yang lebih besar dari <b>'+k+'</b> adalah ...',c,w,c+' lebih besar dari '+k+'.')}},
/*13*/{t:'Mengurutkan Bilangan Besar',d:'Mengurutkan 3 sampai 4 bilangan sampai 50',gen(){
  const t=rnd(0,2),pool=Array.from({length:41},(_,i)=>i+10);
  if(t<2){const a=shuf(pool).slice(0,3),s=a.slice().sort((x,y)=>x-y);if(t===1)s.reverse();const key=x=>x.join(', ');
    const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
    return mk('Urutan dari '+(t===0?'terkecil ke terbesar':'terbesar ke terkecil')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan benar: '+key(s)+'.')}
  const a=shuf(pool).slice(0,4),s=a.slice().sort((x,y)=>y-x),c=s[1];
  return mk('Bilangan terbesar <b>kedua</b> dari <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),'Dari yang terbesar: '+s.join(', ')+'. Yang kedua adalah '+c+'.')}},
/*14*/{t:'Mencari Bilangan (Penjumlahan)',d:'Melengkapi kalimat penjumlahan yang belum lengkap',gen(){
  const a=rnd(2,15),b=rnd(2,Math.min(12,20-a)),s=a+b;
  return Math.random()<.5?mk('<b>'+a+' + __ = '+s+'</b>',b,near(b,0,20),a+' + '+b+' = '+s+'.',a+'+'+b+'==='+s):mk('<b>__ + '+b+' = '+s+'</b>',a,near(a,0,20),a+' + '+b+' = '+s+'.',a+'+'+b+'==='+s)}},
/*15*/{t:'Mencari Bilangan (Pengurangan)',d:'Melengkapi kalimat pengurangan yang belum lengkap',gen(){
  const a=rnd(8,20),b=rnd(2,a-1),r=a-b;
  return Math.random()<.5?mk('<b>'+a+' − __ = '+r+'</b>',b,near(b,0,20),a+' − '+b+' = '+r+'.',a+'-'+b+'==='+r):mk('<b>__ − '+b+' = '+r+'</b>',a,near(a,0,22),a+' − '+b+' = '+r+'.',a+'-'+b+'==='+r)}},
/*16*/{t:'Tambah Kurang Campuran',d:'Menghitung dua langkah penjumlahan dan pengurangan',gen(){
  if(Math.random()<.5){const a=rnd(3,12),b=rnd(2,20-a),c=rnd(1,a+b),r=a+b-c;return mk('<b>'+a+' + '+b+' − '+c+' = ...</b>',r,near(r,0,22),a+' + '+b+' = '+(a+b)+', lalu dikurangi '+c+' = '+r+'.',a+'+'+b+'-'+c)}
  const a=rnd(5,20),b=rnd(1,a),c=rnd(1,20-(a-b)),r=a-b+c;return mk('<b>'+a+' − '+b+' + '+c+' = ...</b>',r,near(r,0,22),a+' − '+b+' = '+(a-b)+', lalu ditambah '+c+' = '+r+'.',a+'-'+b+'+'+c)}},
/*17*/{t:'Pola Bilangan Loncat',d:'Pola naik dan turun dengan loncatan 2, 5, dan 10',gen(){
  const step=pick([2,5,10]),down=Math.random()<.4;let st;
  if(!down)st=step===2?rnd(2,12):step===5?rnd(5,20):rnd(10,30);else st=step===2?rnd(20,30):step===5?rnd(50,70):rnd(80,100);
  const d=down?-step:step,a=[0,1,2,3].map(i=>st+i*d),c=st+4*d;
  return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,0,110),'Setiap langkah '+(down?'berkurang ':'bertambah ')+step+', jadi selanjutnya '+c+'.')}},
/*18*/{t:'Sisi dan Sudut Bangun Datar',d:'Banyak sisi dan sudut segitiga, persegi, persegi panjang',gen(){
  const t=rnd(0,2),S=[['segitiga',3],['persegi',4],['persegi panjang',4]];
  if(t===0){const F=[['Bangun datar yang memiliki <b>3 sisi</b> adalah ...','segitiga'],['Bangun datar yang <b>tidak memiliki sudut</b> adalah ...','lingkaran'],['Bangun datar yang memiliki <b>4 sisi sama panjang</b> adalah ...','persegi'],['Bangun datar yang memiliki <b>3 sudut</b> adalah ...','segitiga'],['Bangun datar yang memiliki <b>4 sudut</b> dan 2 sisi panjang serta 2 sisi pendek adalah ...','persegi panjang']];
    const f=pick(F),all=['lingkaran','segitiga','persegi','persegi panjang'];return mk(f[0],f[1],all.filter(x=>x!==f[1]),'Jawabannya: '+f[1]+'.')}
  if(t===1){const s=pick(S),w=pick(['sisi','sudut']),c=s[1];return mk('Berapa banyak '+w+' pada <b>'+s[0]+'</b>?',c,near(c,0,6),s[0].charAt(0).toUpperCase()+s[0].slice(1)+' punya '+c+' '+w+'.')}
  const i=rnd(0,2);let j;do j=rnd(0,2);while(j===i);const A=S[i],B=S[j],a=rnd(1,4),b=rnd(1,4),w=pick(['sisi','sudut']),c=a*A[1]+b*B[1];
  return mk('Ada '+a+' '+A[0]+' dan '+b+' '+B[0]+'. Berapa jumlah semua '+w+'nya?',c,near(c,3,36),a+'×'+A[1]+' = '+a*A[1]+', '+b+'×'+B[1]+' = '+b*B[1]+'. Jumlahnya '+c+'.')}},
/*19*/{t:'Panjang dan Pendek',d:'Membandingkan panjang benda dan ukuran tak baku',gen(){
  const R=[['semut',1],['kuku',2],['pensil',3],['tongkat',5],['sepeda',6],['mobil',7],['bus',8]];
  if(Math.random()<.55){const a=shuf(R).slice(0,4),lg=Math.random()<.5,s=a.slice().sort((x,y)=>x[1]-y[1]),c=lg?s[3][0]:s[0][0];
    return mk('Manakah yang paling <b>'+(lg?'panjang':'pendek')+'</b>?',c,a.map(x=>x[0]).filter(x=>x!==c),(lg?'Yang paling panjang':'Yang paling pendek')+' adalah '+c+'.')}
  const [n1,n2]=two(),a=rnd(3,12);let b;do b=rnd(3,12);while(b===a);const u=pick(['klip','jengkal','langkah','balok']),tl=pick(['Tali','Pita','Tongkat']),lg=Math.random()<.5;
  const c=(lg?a>b:a<b)?n1:n2;return mk(tl+' '+n1+' panjangnya '+a+' '+u+'. '+tl+' '+n2+' panjangnya '+b+' '+u+'. Milik siapa yang lebih <b>'+(lg?'panjang':'pendek')+'</b>?',c,[c===n1?n2:n1],'Bandingkan '+a+' dan '+b+'. Jadi milik '+c+'.')}},
/*20*/{t:'Berat dan Ringan',d:'Membandingkan berat benda dan bilangan berat',gen(){
  const R=[['semut',1],['kapas',2],['apel',3],['kucing',4],['sapi',6],['gajah',7],['truk',8]];
  if(Math.random()<.6){const a=shuf(R).slice(0,4),hv=Math.random()<.5,s=a.slice().sort((x,y)=>x[1]-y[1]),c=hv?s[3][0]:s[0][0];
    return mk('Manakah yang paling <b>'+(hv?'berat':'ringan')+'</b>?',c,a.map(x=>x[0]).filter(x=>x!==c),(hv?'Yang paling berat':'Yang paling ringan')+' adalah '+c+'.')}
  const a=rnd(1,9);let b;do b=rnd(1,9);while(b===a);const P=[['beras','gula'],['jeruk','mangga'],['tepung','garam'],['kentang','wortel']],p=pick(P),hv=Math.random()<.5,c=(hv?a>b:a<b)?p[0]:p[1];
  return mk('Ibu membeli '+p[0]+' '+a+' kg dan '+p[1]+' '+b+' kg. Mana yang lebih <b>'+(hv?'berat':'ringan')+'</b>?',c,[c===p[0]?p[1]:p[0]],'Bandingkan '+a+' kg dan '+b+' kg. Jadi '+c+'.')}},
/*21*/{t:'Soal Cerita Penjumlahan',d:'Cerita sehari-hari dengan penjumlahan sampai 20',gen(){
  const [n1,n2]=two(),it=pick(BENDA)[1],a=rnd(3,12),b=rnd(2,20-a),c=a+b,t=rnd(0,2);
  const q=t===0?n1+' punya '+a+' '+it+'. '+n2+' punya '+b+' '+it+'. Berapa jumlah '+it+' mereka berdua?':t===1?'Di keranjang ada '+a+' '+it+'. '+n1+' menambahkan '+b+' '+it+'. Sekarang ada berapa '+it+'?':n1+' membeli '+a+' '+it+' pagi hari dan '+b+' '+it+' sore hari. Berapa '+it+' yang dibeli '+n1+'?';
  return mk(q,c,near(c,3,22),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*22*/{t:'Soal Cerita Pengurangan',d:'Cerita sehari-hari dengan pengurangan sampai 20',gen(){
  const [n1,n2]=two(),it=pick(BENDA)[1],a=rnd(8,20),b=rnd(2,a-1),c=a-b,t=rnd(0,2);
  const q=t===0?n1+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada '+n2+'. Sisa '+it+' '+n1+' ada ...':t===1?'Di meja ada '+a+' '+it+'. '+b+' '+it+' dimakan. Sisa '+it+' ada ...':n1+' punya '+a+' '+it+', sedangkan '+n2+' punya '+b+' '+it+'. Berapa selisih '+it+' mereka?';
  return mk(q,c,near(c,0,20),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*23*/{t:'Bilangan sampai 100',d:'Membaca bilangan dan nilai tempat sampai 100',gen(){
  const t=rnd(0,3),n=rnd(51,99);
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata(n)+'</b>"?',n,near(n,40,100),kata(n)+' ditulis '+n+'.');
  if(t===1){const m=rnd(50,99);return mk('Bilangan setelah <b>'+m+'</b> adalah ...',m+1,near(m+1,45,101),'Setelah '+m+' adalah '+(m+1)+'.')}
  if(t===2)return mk('Angka puluhan dari <b>'+n+'</b> adalah ...',Math.floor(n/10),near(Math.floor(n/10),0,9),'Angka puluhan dari '+n+' adalah '+Math.floor(n/10)+'.');
  const sw=(n%10)*10+Math.floor(n/10),cand=[n+1,n-1,sw,n+10<100?n+10:n-10,n-2,n+2].filter(x=>x!==n&&x>=10&&x<=100),ws=Array.from(new Set(cand)).slice(0,3);
  return mk('Bilangan <b>'+n+'</b> dibaca ...',kata(n),ws.map(kata),'Dibaca '+kata(n)+'.')}},
/*24*/{t:'Penjumlahan Puluhan',d:'Menjumlahkan bilangan puluhan sampai 99',gen(){
  let a,b;do{a=rnd(10,70);b=rnd(1,89-a<1?1:Math.min(60,99-a))}while(a%10+b%10>9||a+b>99);const c=a+b;
  if(Math.random()<.6)return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,10,99),a+' + '+b+' = '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Ia mendapat '+b+' '+it+' lagi. Jumlah '+it+' sekarang ...',c,near(c,10,99),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*25*/{t:'Pengurangan Puluhan',d:'Mengurangkan bilangan puluhan sampai 99',gen(){
  let a,b;do{a=rnd(30,99);b=rnd(1,a-1)}while(b%10>a%10||a-b<1);const c=a-b;
  if(Math.random()<.6)return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,1,99),a+' − '+b+' = '+c+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' dijual. Sisa '+it+' ...',c,near(c,1,99),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*26*/{t:'Soal Cerita Dua Langkah',d:'Cerita dengan dua langkah hitung',gen(){
  const nm=pick(NAMA),it=pick(BENDA)[1];
  if(Math.random()<.5){const a=rnd(3,12),b=rnd(2,20-a),c=rnd(1,a+b-1),r=a+b-c;
    return mk(nm+' punya '+a+' '+it+'. Ia diberi '+b+' lagi, lalu memberikan '+c+' kepada adiknya. Sisa '+it+' '+nm+' ...',r,near(r,0,22),a+' + '+b+' = '+(a+b)+', lalu − '+c+' = '+r+'.',a+'+'+b+'-'+c)}
  const a=rnd(8,18),b=rnd(1,a-1),c=rnd(1,20-(a-b)),r=a-b+c;
  return mk('Ada '+a+' '+it+' di meja. '+b+' '+it+' diambil, lalu ditambah '+c+' '+it+'. Sekarang ada ...',r,near(r,0,22),a+' − '+b+' = '+(a-b)+', lalu + '+c+' = '+r+'.',a+'-'+b+'+'+c)}},
/*27*/{t:'Pola Gambar dan Bilangan',d:'Pola AAB, ABB, ABC, dan pola bilangan loncat',gen(){
  const t=rnd(0,3);
  if(t<3){const E=shuf(['🍎','🍌','🍇','🍊','🐶','🐱','⭐','🌙','🔴','🟢','🔵']),A=E[0],B=E[1],C=E[2],D=E[3];
    const P=[[[A,A,B,A,A,B,A,A],B],[[A,B,B,A,B,B,A,B],B],[[A,B,C,A,B,C,A,B],C]][t];
    return mk('Gambar apa selanjutnya?<div class="vis">'+P[0].join('')+'❓</div>',P[1],shuf([A,B,C,D].filter(x=>x!==P[1])).slice(0,3),'Pola berulang, jadi selanjutnya '+P[1]+'.')}
  const up=Math.random()<.5,step=pick([3,4]),st=up?rnd(1,10):rnd(25,40),d=up?step:-step,a=[0,1,2,3].map(i=>st+i*d),c=st+4*d;
  return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,0,60),'Setiap langkah '+(up?'bertambah ':'berkurang ')+step+', jadi '+c+'.')}},
/*28*/{t:'Hitung Campuran sampai 50',d:'Tambah dan kurang bilangan sampai 50',gen(){
  if(Math.random()<.5){let a,b;do{a=rnd(11,39);b=rnd(1,Math.min(20,49-a))}while(a%10+b%10>9);const c=a+b;return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,10,50),a+' + '+b+' = '+c+'.',a+'+'+b)}
  let a,b;do{a=rnd(20,49);b=rnd(1,a-1)}while(b%10>a%10||b>20);const c=a-b;return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,1,49),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*29*/{t:'Penalaran Bilangan',d:'Bentuk sama nilai, tebak bilangan, dan pernyataan benar',gen(){
  const t=rnd(0,2);
  if(t===0){const s=rnd(8,20),a=rnd(2,s-2),c=a+'+'+(s-a),w=new Set();let g=0;while(w.size<3&&g<200){g++;const x=rnd(2,14),y=rnd(2,14);if(x+y!==s)w.add(x+'+'+y)}
    return mk('Manakah yang hasilnya sama dengan <b>'+s+'</b>?',c.replace('+',' + '),Array.from(w).map(x=>x.replace('+',' + ')),c.replace('+',' + ')+' = '+s+'.',a+'+'+(s-a)+'==='+s)}
  if(t===1){const b=rnd(2,10),r=rnd(3,20-b),c=r+b;return mk('Aku sebuah bilangan. Jika aku dikurangi <b>'+b+'</b>, hasilnya <b>'+r+'</b>. Aku adalah ...',c,near(c,3,22),c+' − '+b+' = '+r+'.',c+'-'+b+'==='+r)}
  const a=rnd(3,12),b=rnd(3,12),c=a+b,w=shuf([c-3,c-2,c-1,c+1,c+2,c+3]).slice(0,3),st=(x,y,z)=>x+' + '+y+' = '+z;
  const wa=[],ws=new Set([a+'+'+b]);w.forEach(z=>{let x,y,g=0;do{x=rnd(2,12);y=rnd(2,12);g++}while((ws.has(x+'+'+y)||x+y===z)&&g<100);ws.add(x+'+'+y);wa.push(st(x,y,z))});
  const bad=wa.some(s=>{const m=s.match(/(\d+) \+ (\d+) = (\d+)/);return +m[1]+ +m[2]===+m[3]});
  return bad?LEVELS[28].gen():mk('Pernyataan yang <b>benar</b> adalah ...',st(a,b,c),wa,st(a,b,c)+' benar.')}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',gen(){return LEVELS[rnd(13,28)].gen()}}
];

const PREVIEW=[];
