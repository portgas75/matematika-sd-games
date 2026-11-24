/* Bank soal Matematika Kelas 2 - TRIAL - Developer: portgas75 */
const GAME={"grade":2,"version":"trial","totalLevels":30,"hint":false};
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
{t:"Mengenal Bilangan sampai 100",d:"Membaca, urutan, dan bilangan di antara sampai 100",h:"",gen(){
  const t=rnd(0,3);
  if(t===0){const n=rnd(21,99);return mk('Angka berapa yang dibaca "<b>'+kata(n)+'</b>"?',n,near(n,10,100),kata(n)+' ditulis '+n+'.')}
  if(t===1){const n=rnd(20,98);return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,near(n+1,10,100),'Setelah '+n+' adalah '+(n+1)+'.')}
  if(t===2){const n=rnd(21,99);return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,near(n-1,10,100),'Sebelum '+n+' adalah '+(n-1)+'.')}
  const a=rnd(20,97);return mk('Bilangan yang berada di antara <b>'+a+'</b> dan <b>'+(a+2)+'</b> adalah ...',a+1,near(a+1,10,100),'Di antara '+a+' dan '+(a+2)+' adalah '+(a+1)+'.')}},
{t:"Bilangan 100 sampai 500",d:"Membaca dan menulis bilangan ratusan",h:"",gen(){
  const t=rnd(0,3),n=rnd(101,499);
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata3(n)+'</b>"?',n,dis(n,[1,10,100],100,500),kata3(n)+' ditulis '+n+'.');
  if(t===1)return mk('Bilangan <b>'+n+'</b> dibaca ...',kata3(n),dis(n,[1,10,100],100,500).map(kata3),n+' dibaca '+kata3(n)+'.');
  if(t===2)return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,dis(n+1,[1,10,100],100,500),'Setelah '+n+' adalah '+(n+1)+'.');
  return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,dis(n-1,[1,10,100],100,500),'Sebelum '+n+' adalah '+(n-1)+'.')}},
{t:"Nilai Tempat",d:"Ratusan, puluhan, dan satuan pada bilangan sampai 999",h:"",gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,3),n=D[0]*100+D[1]*10+D[2],t=rnd(0,3);
  if(t<3){const w=['ratusan','puluhan','satuan'][t],c=D[t];return mk('Angka <b>'+w+'</b> dari bilangan <b>'+n+'</b> adalah ...',c,near(c,0,9),'Pada '+n+', angka '+w+' adalah '+c+'.')}
  const p=rnd(0,2),d=D[p],c=d*[100,10,1][p];return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+n+'</b> adalah ...',c,[d,d*10,d*100,d*1000].filter(x=>x!==c).slice(0,3),'Angka '+d+' berada di tempat '+['ratusan','puluhan','satuan'][p]+', nilainya '+c+'.')}},
{t:"Membandingkan Bilangan",d:"Terbesar, terkecil, dan di antara dua bilangan",h:"",gen(){
  const t=rnd(0,3);
  if(t<2){const a=shuf(Array.from({length:90},(_,i)=>i*10+105)).slice(0,4).map(x=>x+rnd(0,4)),c=t===0?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(t===0?'besar':'kecil')+' di antara <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),c+' adalah yang paling '+(t===0?'besar':'kecil')+'.')}
  if(t===2){const k=rnd(150,800),c=k+rnd(5,60),w=[k-rnd(1,20),k-rnd(21,50),k-rnd(51,90)];return mk('Bilangan yang lebih besar dari <b>'+k+'</b> adalah ...',c,w,c+' lebih besar dari '+k+'.')}
  const a=rnd(120,800),b=a+rnd(4,9),c=rnd(a+1,b-1);return mk('Bilangan yang ada di antara <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,[a-1,a-2,b+1,b+2].slice(0,3),c+' lebih besar dari '+a+' dan lebih kecil dari '+b+'.')}},
{t:"Mengurutkan Bilangan",d:"Mengurutkan bilangan dan melengkapi urutan",h:"",gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:80},(_,i)=>i*11+110)).slice(0,3),s=a.slice().sort((x,y)=>x-y);if(t===1)s.reverse();const key=x=>x.join(', ');
    const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
    return mk('Urutan dari '+(t===0?'terkecil ke terbesar':'terbesar ke terkecil')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan benar: '+key(s)+'.')}
  const step=pick([10,100,20,50]),st=rnd(1,5)*step+rnd(0,1)*step,h=rnd(1,3),arr=[0,1,2,3,4].map(i=>st+i*step),c=arr[h];arr[h]='__';
  return mk('Lengkapi urutan: <b>'+arr.join(', ')+'</b>',c,dis(c,[step,2*step,1,10],0,1000),'Bilangan bertambah '+step+' setiap langkah, jadi yang hilang adalah '+c+'.')}},
{t:"Penjumlahan Tanpa Menyimpan",d:"Menjumlahkan bilangan dua dan tiga angka",h:"",gen(){
  const dg=()=>{let a,b;do{a=[rnd(0,9),rnd(0,9),rnd(0,9)];b=a.map(x=>rnd(0,9-x))}while(0);return [a,b]};
  let A,B,a,b;do{[A,B]=dg();if(Math.random()<.5){A[0]=0;B[0]=0}a=A[0]*100+A[1]*10+A[2];b=B[0]*100+B[1]*10+B[2]}while(a<11||b<11);const c=a+b;
  if(Math.random()<.65)return mk('<b>'+a+' + '+b+' = ...</b>',c,dis(c,[1,10,100],10,999),a+' + '+b+' = '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Ia mendapat '+b+' '+it+' lagi. Jumlah '+it+' sekarang ...',c,dis(c,[1,10,100],10,999),a+' + '+b+' = '+c+'.',a+'+'+b)}},
{t:"Pengurangan Tanpa Meminjam",d:"Mengurangkan bilangan dua dan tiga angka",h:"",gen(){
  let a,b;do{const A=[rnd(0,9),rnd(0,9),rnd(0,9)],B=A.map(x=>rnd(0,x));if(Math.random()<.5){A[0]=0;B[0]=0}a=A[0]*100+A[1]*10+A[2];b=B[0]*100+B[1]*10+B[2]}while(a<21||b<11||b>=a);const c=a-b;
  if(Math.random()<.65)return mk('<b>'+a+' − '+b+' = ...</b>',c,dis(c,[1,10,100],0,999),a+' − '+b+' = '+c+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada teman. Sisa '+it+' ...',c,dis(c,[1,10,100],0,999),a+' − '+b+' = '+c+'.',a+'-'+b)}},
{t:"Penjumlahan dengan Menyimpan",d:"Penjumlahan bersusun dengan teknik menyimpan",h:"",gen(){
  let a,b;do{a=rnd(15,89);b=rnd(15,89)}while(a%10+b%10<10);const c=a+b;
  if(Math.random()<.65)return mk('<b>'+a+' + '+b+' = ...</b>',c,dis(c,[10,1,2,20],20,200),'Satuan: '+a%10+' + '+b%10+' = '+(a%10+b%10)+', simpan 1 puluhan. Hasilnya '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' mempunyai '+a+' '+it+'. Ia membeli '+b+' '+it+' lagi. Jumlah '+it+' seluruhnya ...',c,dis(c,[10,1,2,20],20,200),a+' + '+b+' = '+c+' (satuan disimpan).',a+'+'+b)}},
{t:"Pengurangan dengan Meminjam",d:"Pengurangan bersusun dengan teknik meminjam",h:"",gen(){
  let a,b;do{a=rnd(31,99);b=rnd(12,a-5)}while(b%10<=a%10||b>=a);const c=a-b;
  if(Math.random()<.65)return mk('<b>'+a+' − '+b+' = ...</b>',c,dis(c,[10,1,2,20],0,99),'Satuan '+a%10+' kurang dari '+b%10+', pinjam 1 puluhan. Hasilnya '+c+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada adik. Sisa '+it+' ...',c,dis(c,[10,1,2,20],0,99),a+' − '+b+' = '+c+' (meminjam puluhan).',a+'-'+b)}},
{t:"Perkalian Dasar",d:"Perkalian 2, 5, dan 10 sebagai penjumlahan berulang",h:"",gen(){
  const a=pick([2,5,10]),b=rnd(1,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2],0,110),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+Array(b).fill(a).join(' + ')+' = ...</b> Sama dengan perkalian ...',a+' × '+b,[b+' × '+b,a+' × '+a,(a+b)+' × '+b].filter(x=>x!==a+' × '+b).slice(0,3),'Ada '+b+' kali bilangan '+a+', jadi '+a+' × '+b+' = '+c+'.');
  const it=pick(BENDA)[1];return mk('Ada '+b+' kantong. Tiap kantong berisi '+a+' '+it+'. Jumlah seluruh '+it+' ...',c,dis(c,[a,b,1,2],0,110),b+' × '+a+' = '+c+'.',a+'*'+b)}}
];
const PREVIEW=[
{t:"Bilangan sampai 1.000",d:"Membaca bilangan ratusan sampai seribu"},
{t:"Bentuk Panjang Bilangan",d:"Menguraikan bilangan menjadi ratusan, puluhan, satuan"},
{t:"Tanda Lebih, Kurang, Sama",d:"Membandingkan bilangan dengan tanda >, <, dan ="},
{t:"Pola Bilangan",d:"Pola naik dan turun dengan berbagai loncatan"},
{t:"Penjumlahan 3 Angka Menyimpan",d:"Penjumlahan bilangan tiga angka dengan menyimpan"},
{t:"Pengurangan 3 Angka Meminjam",d:"Pengurangan bilangan tiga angka dengan meminjam"},
{t:"Soal Cerita Tambah Kurang",d:"Cerita sehari-hari dengan bilangan ratusan"},
{t:"Perkalian 3, 4, dan 5",d:"Tabel perkalian 3, 4, dan 5"},
{t:"Perkalian 6, 7, 8, dan 9",d:"Tabel perkalian 6 sampai 9"},
{t:"Pembagian Dasar",d:"Pembagian sebagai kebalikan perkalian"},
{t:"Soal Cerita Perkalian",d:"Cerita sehari-hari dengan perkalian"},
{t:"Soal Cerita Pembagian",d:"Cerita pembagian rata dan pengelompokan"},
{t:"Mengenal Pecahan",d:"Pecahan dari gambar, pembilang, dan penyebut"},
{t:"Membandingkan Pecahan",d:"Membandingkan pecahan sederhana"},
{t:"Pengukuran Panjang",d:"Satuan cm dan m, konversi, dan penjumlahan panjang"},
{t:"Pengukuran Berat",d:"Satuan kg dan g, konversi, dan soal cerita berat"},
{t:"Waktu: Jam, Hari, dan Bulan",d:"Membaca jam, lama waktu, nama hari dan bulan"},
{t:"Bangun Datar: Sisi dan Sudut",d:"Sifat, sisi, dan sudut bangun datar"},
{t:"Soal Cerita Dua Langkah",d:"Cerita yang memadukan perkalian, penjumlahan, dan pengurangan"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
