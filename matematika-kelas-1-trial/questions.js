/* Bank soal Matematika Kelas 1 - TRIAL - Developer: portgas75 */
const GAME={"grade":1,"version":"trial","totalLevels":30,"hint":false};
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

const LEVELS=[
{t:"Mengenal Angka 1–10",d:"Menghitung gambar dan membaca angka 1 sampai 10",h:"",gen(){
  if(Math.random()<.8){const [e,n]=pick(BENDA),k=rnd(1,10);return mk('Ada berapa '+n+'?'+vis(e,k),k,near(k,1,10),'Hitung satu per satu. Ada '+k+' '+n+'.')}
  const k=rnd(1,10);return mk('Angka berapa yang dibaca "<b>'+kata(k)+'</b>"?',k,near(k,1,10),kata(k)+' ditulis dengan angka '+k+'.')}},
{t:"Mengenal Angka 11–20",d:"Membaca, menghitung, dan mengurutkan angka 11 sampai 20",h:"",gen(){
  const t=rnd(0,3);
  if(t===0){const n=rnd(11,20);return mk('Angka berapa yang dibaca "<b>'+kata(n)+'</b>"?',n,near(n,10,20),kata(n)+' ditulis '+n+'.')}
  if(t===1){const n=rnd(10,19);return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,near(n+1,9,21),'Setelah '+n+' adalah '+(n+1)+'.')}
  if(t===2){const n=rnd(11,20);return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,near(n-1,9,21),'Sebelum '+n+' adalah '+(n-1)+'.')}
  const [e,nm]=pick(BENDA),k=rnd(11,20);return mk('Ada berapa '+nm+'?'+vis(e,k),k,near(k,10,21),'Hitung dengan teliti. Ada '+k+' '+nm+'.')}},
{t:"Membandingkan Bilangan",d:"Menentukan bilangan terbesar dan terkecil sampai 20",h:"",gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:20},(_,i)=>i+1)).slice(0,4);const c=t===0?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(t===0?'besar':'kecil')+' di antara <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),'Bandingkan semua bilangan. Yang paling '+(t===0?'besar':'kecil')+' adalah '+c+'.')}
  const k=rnd(5,15),c=k+rnd(1,4),w=shuf(Array.from({length:k-1},(_,i)=>i+1)).slice(0,3);
  return mk('Bilangan yang lebih besar dari <b>'+k+'</b> adalah ...',c,w,c+' lebih besar dari '+k+'.')}},
{t:"Mengurutkan Bilangan",d:"Mengurutkan bilangan dan melengkapi urutan",h:"",gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:20},(_,i)=>i+1)).slice(0,3);const s=a.slice().sort((x,y)=>x-y);if(t===1)s.reverse();
    const key=x=>x.join(', ');const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
    return mk('Urutan bilangan dari yang '+(t===0?'terkecil ke terbesar':'terbesar ke terkecil')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan yang benar: '+key(s)+'.')}
  const st=rnd(1,15),h=rnd(1,3),arr=[0,1,2,3,4].map(i=>st+i),c=arr[h];arr[h]='__';
  return mk('Lengkapi urutan: <b>'+arr.join(', ')+'</b>',c,near(c,1,22),'Bilangan bertambah satu setiap langkah, jadi yang hilang adalah '+c+'.')}},
{t:"Penjumlahan sampai 10",d:"Menjumlahkan dua bilangan dengan hasil sampai 10",h:"",gen(){
  const a=rnd(1,9),b=rnd(1,10-a),c=a+b;
  if(Math.random()<.5)return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,0,12),a+' ditambah '+b+' sama dengan '+c+'.',a+'+'+b);
  const [e,n]=pick(BENDA),nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Lalu ia mendapat '+b+' '+n+' lagi. Sekarang ada berapa '+n+'?'+vis(e,a)+'<div class="vis">+</div>'+vis(e,b),c,near(c,0,12),a+' + '+b+' = '+c+'.',a+'+'+b)}},
{t:"Pengurangan sampai 10",d:"Mengurangkan bilangan dengan bilangan awal sampai 10",h:"",gen(){
  const a=rnd(2,10),b=rnd(1,a),c=a-b;
  if(Math.random()<.5)return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,0,10),a+' dikurangi '+b+' sama dengan '+c+'.',a+'-'+b);
  const [e,n]=pick(BENDA),nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Sebanyak '+b+' '+n+' diberikan kepada teman. Sisa '+n+' ada berapa?'+vis(e,a),c,near(c,0,10),a+' − '+b+' = '+c+'.',a+'-'+b)}},
{t:"Penjumlahan sampai 20",d:"Menjumlahkan dua bilangan dengan hasil sampai 20",h:"",gen(){
  let a,b;do{a=rnd(2,18);b=rnd(1,20-a)}while(a+b<=10);const c=a+b;
  if(Math.random()<.6)return mk('<b>'+a+' + '+b+' = ...</b>',c,near(c,5,22),a+' + '+b+' = '+c+'.',a+'+'+b);
  const n=pick(BENDA)[1],nm=pick(NAMA);return mk(nm+' mempunyai '+a+' '+n+'. Ia membeli '+b+' '+n+' lagi. Jumlah '+n+' sekarang ...',c,near(c,5,22),a+' + '+b+' = '+c+'.',a+'+'+b)}},
{t:"Pengurangan sampai 20",d:"Mengurangkan bilangan dengan bilangan awal sampai 20",h:"",gen(){
  const a=rnd(11,20),b=rnd(1,9),c=a-b;
  if(Math.random()<.6)return mk('<b>'+a+' − '+b+' = ...</b>',c,near(c,1,20),a+' − '+b+' = '+c+'.',a+'-'+b);
  const n=pick(BENDA)[1],nm=pick(NAMA);return mk(nm+' punya '+a+' '+n+'. Ia memberikan '+b+' '+n+' kepada adik. Sisa '+n+' ...',c,near(c,1,20),a+' − '+b+' = '+c+'.',a+'-'+b)}},
{t:"Mengenal Bangun Datar",d:"Mengenal lingkaran, segitiga, persegi, dan persegi panjang",h:"",gen(){
  const P=[['jam dinding','lingkaran'],['uang koin','lingkaran'],['piring','lingkaran'],['roda sepeda','lingkaran'],['pizza utuh (dilihat dari atas)','lingkaran'],
   ['potongan pizza','segitiga'],['bendera segitiga','segitiga'],['topi ulang tahun (dilihat dari depan)','segitiga'],['roti sandwich yang dipotong miring','segitiga'],
   ['papan catur','persegi'],['sapu tangan','persegi'],['keramik lantai','persegi'],['stiker kotak','persegi'],['kotak kue kecil (tutupnya)','persegi'],
   ['papan tulis','persegi panjang'],['pintu','persegi panjang'],['buku tulis','persegi panjang'],['layar televisi','persegi panjang'],['kartu ATM','persegi panjang'],['kasur','persegi panjang']];
  const S=['lingkaran','segitiga','persegi','persegi panjang'];
  if(Math.random()<.2){const k=rnd(0,3),ic=['<div class="vis big">🔵</div>','<div class="vis big">🔺</div>','<div class="vis big">🟥</div>','<div class="vis big" style="color:#f59e0b">▬</div>'][k];
    return mk('Gambar ini berbentuk apa?'+ic,S[k],S.filter(x=>x!==S[k]),'Bentuk ini adalah '+S[k]+'.')}
  const p=pick(P);return mk('<b>'+p[0].charAt(0).toUpperCase()+p[0].slice(1)+'</b> berbentuk apa?',p[1],S.filter(x=>x!==p[1]),p[0].charAt(0).toUpperCase()+p[0].slice(1)+' berbentuk '+p[1]+'.')}},
{t:"Pola Bilangan Sederhana",d:"Melanjutkan pola bilangan dan pola gambar sederhana",h:"",gen(){
  const t=rnd(0,3);
  if(t<2){const step=t===0?1:2,st=rnd(1,8),a=[0,1,2,3].map(i=>st+i*step),c=st+4*step;
    return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,1,25),'Setiap langkah bertambah '+step+', jadi selanjutnya '+c+'.')}
  if(t===2){const st=rnd(10,20),a=[0,1,2,3].map(i=>st-i),c=st-4;
    return mk('Lanjutkan pola: <b>'+a.join(', ')+', __</b>',c,near(c,1,25),'Setiap langkah berkurang 1, jadi selanjutnya '+c+'.')}
  const E=shuf(['🍎','🍌','⭐','🐱','🌙','🔴','🐟','🌸']),A=E[0],B=E[1];
  return mk('Gambar apa selanjutnya?<div class="vis">'+A+B+A+B+A+'❓</div>',B,[A,E[2],E[3]],'Polanya bergantian '+A+' '+B+', jadi selanjutnya '+B+'.')}}
];
const PREVIEW=[
{t:"Bilangan sampai 50",d:"Puluhan dan satuan pada bilangan sampai 50"},
{t:"Membandingkan sampai 50",d:"Terbesar, terkecil, dan bilangan di antara dua bilangan"},
{t:"Mengurutkan Bilangan Besar",d:"Mengurutkan 3 sampai 4 bilangan sampai 50"},
{t:"Mencari Bilangan (Penjumlahan)",d:"Melengkapi kalimat penjumlahan yang belum lengkap"},
{t:"Mencari Bilangan (Pengurangan)",d:"Melengkapi kalimat pengurangan yang belum lengkap"},
{t:"Tambah Kurang Campuran",d:"Menghitung dua langkah penjumlahan dan pengurangan"},
{t:"Pola Bilangan Loncat",d:"Pola naik dan turun dengan loncatan 2, 5, dan 10"},
{t:"Sisi dan Sudut Bangun Datar",d:"Banyak sisi dan sudut segitiga, persegi, persegi panjang"},
{t:"Panjang dan Pendek",d:"Membandingkan panjang benda dan ukuran tak baku"},
{t:"Berat dan Ringan",d:"Membandingkan berat benda dan bilangan berat"},
{t:"Soal Cerita Penjumlahan",d:"Cerita sehari-hari dengan penjumlahan sampai 20"},
{t:"Soal Cerita Pengurangan",d:"Cerita sehari-hari dengan pengurangan sampai 20"},
{t:"Bilangan sampai 100",d:"Membaca bilangan dan nilai tempat sampai 100"},
{t:"Penjumlahan Puluhan",d:"Menjumlahkan bilangan puluhan sampai 99"},
{t:"Pengurangan Puluhan",d:"Mengurangkan bilangan puluhan sampai 99"},
{t:"Soal Cerita Dua Langkah",d:"Cerita dengan dua langkah hitung"},
{t:"Pola Gambar dan Bilangan",d:"Pola AAB, ABB, ABC, dan pola bilangan loncat"},
{t:"Hitung Campuran sampai 50",d:"Tambah dan kurang bilangan sampai 50"},
{t:"Penalaran Bilangan",d:"Bentuk sama nilai, tebak bilangan, dan pernyataan benar"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
