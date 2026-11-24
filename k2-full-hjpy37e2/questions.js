/* Bank soal Matematika Kelas 2 - FULL - Developer: portgas75 */
const GAME={"grade":2,"version":"full","totalLevels":30,"hint":false};
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

/* Level Kelas 2 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Mengenal Bilangan sampai 100',d:'Membaca, urutan, dan bilangan di antara sampai 100',gen(){
  const t=rnd(0,3);
  if(t===0){const n=rnd(21,99);return mk('Angka berapa yang dibaca "<b>'+kata(n)+'</b>"?',n,near(n,10,100),kata(n)+' ditulis '+n+'.')}
  if(t===1){const n=rnd(20,98);return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,near(n+1,10,100),'Setelah '+n+' adalah '+(n+1)+'.')}
  if(t===2){const n=rnd(21,99);return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,near(n-1,10,100),'Sebelum '+n+' adalah '+(n-1)+'.')}
  const a=rnd(20,97);return mk('Bilangan yang berada di antara <b>'+a+'</b> dan <b>'+(a+2)+'</b> adalah ...',a+1,near(a+1,10,100),'Di antara '+a+' dan '+(a+2)+' adalah '+(a+1)+'.')}},
/*2*/{t:'Bilangan 100 sampai 500',d:'Membaca dan menulis bilangan ratusan',gen(){
  const t=rnd(0,3),n=rnd(101,499);
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata3(n)+'</b>"?',n,dis(n,[1,10,100],100,500),kata3(n)+' ditulis '+n+'.');
  if(t===1)return mk('Bilangan <b>'+n+'</b> dibaca ...',kata3(n),dis(n,[1,10,100],100,500).map(kata3),n+' dibaca '+kata3(n)+'.');
  if(t===2)return mk('Bilangan setelah <b>'+n+'</b> adalah ...',n+1,dis(n+1,[1,10,100],100,500),'Setelah '+n+' adalah '+(n+1)+'.');
  return mk('Bilangan sebelum <b>'+n+'</b> adalah ...',n-1,dis(n-1,[1,10,100],100,500),'Sebelum '+n+' adalah '+(n-1)+'.')}},
/*3*/{t:'Nilai Tempat',d:'Ratusan, puluhan, dan satuan pada bilangan sampai 999',gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,3),n=D[0]*100+D[1]*10+D[2],t=rnd(0,3);
  if(t<3){const w=['ratusan','puluhan','satuan'][t],c=D[t];return mk('Angka <b>'+w+'</b> dari bilangan <b>'+n+'</b> adalah ...',c,near(c,0,9),'Pada '+n+', angka '+w+' adalah '+c+'.')}
  const p=rnd(0,2),d=D[p],c=d*[100,10,1][p];return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+n+'</b> adalah ...',c,[d,d*10,d*100,d*1000].filter(x=>x!==c).slice(0,3),'Angka '+d+' berada di tempat '+['ratusan','puluhan','satuan'][p]+', nilainya '+c+'.')}},
/*4*/{t:'Membandingkan Bilangan',d:'Terbesar, terkecil, dan di antara dua bilangan',gen(){
  const t=rnd(0,3);
  if(t<2){const a=shuf(Array.from({length:90},(_,i)=>i*10+105)).slice(0,4).map(x=>x+rnd(0,4)),c=t===0?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(t===0?'besar':'kecil')+' di antara <b>'+a.join(', ')+'</b> adalah ...',c,a.filter(x=>x!==c),c+' adalah yang paling '+(t===0?'besar':'kecil')+'.')}
  if(t===2){const k=rnd(150,800),c=k+rnd(5,60),w=[k-rnd(1,20),k-rnd(21,50),k-rnd(51,90)];return mk('Bilangan yang lebih besar dari <b>'+k+'</b> adalah ...',c,w,c+' lebih besar dari '+k+'.')}
  const a=rnd(120,800),b=a+rnd(4,9),c=rnd(a+1,b-1);return mk('Bilangan yang ada di antara <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,[a-1,a-2,b+1,b+2].slice(0,3),c+' lebih besar dari '+a+' dan lebih kecil dari '+b+'.')}},
/*5*/{t:'Mengurutkan Bilangan',d:'Mengurutkan bilangan dan melengkapi urutan',gen(){
  const t=rnd(0,2);
  if(t<2){const a=shuf(Array.from({length:80},(_,i)=>i*11+110)).slice(0,3),s=a.slice().sort((x,y)=>x-y);if(t===1)s.reverse();const key=x=>x.join(', ');
    const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
    return mk('Urutan dari '+(t===0?'terkecil ke terbesar':'terbesar ke terkecil')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan benar: '+key(s)+'.')}
  const step=pick([10,100,20,50]),st=rnd(1,5)*step+rnd(0,1)*step,h=rnd(1,3),arr=[0,1,2,3,4].map(i=>st+i*step),c=arr[h];arr[h]='__';
  return mk('Lengkapi urutan: <b>'+arr.join(', ')+'</b>',c,dis(c,[step,2*step,1,10],0,1000),'Bilangan bertambah '+step+' setiap langkah, jadi yang hilang adalah '+c+'.')}},
/*6*/{t:'Penjumlahan Tanpa Menyimpan',d:'Menjumlahkan bilangan dua dan tiga angka',gen(){
  const dg=()=>{let a,b;do{a=[rnd(0,9),rnd(0,9),rnd(0,9)];b=a.map(x=>rnd(0,9-x))}while(0);return [a,b]};
  let A,B,a,b;do{[A,B]=dg();if(Math.random()<.5){A[0]=0;B[0]=0}a=A[0]*100+A[1]*10+A[2];b=B[0]*100+B[1]*10+B[2]}while(a<11||b<11);const c=a+b;
  if(Math.random()<.65)return mk('<b>'+a+' + '+b+' = ...</b>',c,dis(c,[1,10,100],10,999),a+' + '+b+' = '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Ia mendapat '+b+' '+it+' lagi. Jumlah '+it+' sekarang ...',c,dis(c,[1,10,100],10,999),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*7*/{t:'Pengurangan Tanpa Meminjam',d:'Mengurangkan bilangan dua dan tiga angka',gen(){
  let a,b;do{const A=[rnd(0,9),rnd(0,9),rnd(0,9)],B=A.map(x=>rnd(0,x));if(Math.random()<.5){A[0]=0;B[0]=0}a=A[0]*100+A[1]*10+A[2];b=B[0]*100+B[1]*10+B[2]}while(a<21||b<11||b>=a);const c=a-b;
  if(Math.random()<.65)return mk('<b>'+a+' − '+b+' = ...</b>',c,dis(c,[1,10,100],0,999),a+' − '+b+' = '+c+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada teman. Sisa '+it+' ...',c,dis(c,[1,10,100],0,999),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*8*/{t:'Penjumlahan dengan Menyimpan',d:'Penjumlahan bersusun dengan teknik menyimpan',gen(){
  let a,b;do{a=rnd(15,89);b=rnd(15,89)}while(a%10+b%10<10);const c=a+b;
  if(Math.random()<.65)return mk('<b>'+a+' + '+b+' = ...</b>',c,dis(c,[10,1,2,20],20,200),'Satuan: '+a%10+' + '+b%10+' = '+(a%10+b%10)+', simpan 1 puluhan. Hasilnya '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' mempunyai '+a+' '+it+'. Ia membeli '+b+' '+it+' lagi. Jumlah '+it+' seluruhnya ...',c,dis(c,[10,1,2,20],20,200),a+' + '+b+' = '+c+' (satuan disimpan).',a+'+'+b)}},
/*9*/{t:'Pengurangan dengan Meminjam',d:'Pengurangan bersusun dengan teknik meminjam',gen(){
  let a,b;do{a=rnd(31,99);b=rnd(12,a-5)}while(b%10<=a%10||b>=a);const c=a-b;
  if(Math.random()<.65)return mk('<b>'+a+' − '+b+' = ...</b>',c,dis(c,[10,1,2,20],0,99),'Satuan '+a%10+' kurang dari '+b%10+', pinjam 1 puluhan. Hasilnya '+c+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada adik. Sisa '+it+' ...',c,dis(c,[10,1,2,20],0,99),a+' − '+b+' = '+c+' (meminjam puluhan).',a+'-'+b)}},
/*10*/{t:'Perkalian Dasar',d:'Perkalian 2, 5, dan 10 sebagai penjumlahan berulang',gen(){
  const a=pick([2,5,10]),b=rnd(1,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2],0,110),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+Array(b).fill(a).join(' + ')+' = ...</b> Sama dengan perkalian ...',a+' × '+b,[b+' × '+b,a+' × '+a,(a+b)+' × '+b].filter(x=>x!==a+' × '+b).slice(0,3),'Ada '+b+' kali bilangan '+a+', jadi '+a+' × '+b+' = '+c+'.');
  const it=pick(BENDA)[1];return mk('Ada '+b+' kantong. Tiap kantong berisi '+a+' '+it+'. Jumlah seluruh '+it+' ...',c,dis(c,[a,b,1,2],0,110),b+' × '+a+' = '+c+'.',a+'*'+b)}},
/*11*/{t:'Bilangan sampai 1.000',d:'Membaca bilangan ratusan sampai seribu',gen(){
  const t=rnd(0,3);
  if(t===0){const n=rnd(501,999);return mk('Angka berapa yang dibaca "<b>'+kata3(n)+'</b>"?',n,dis(n,[1,10,100],500,1000),kata3(n)+' ditulis '+n+'.')}
  if(t===1){const n=rnd(501,999);return mk('Bilangan <b>'+n+'</b> dibaca ...',kata3(n),dis(n,[1,10,100],500,999).map(kata3),n+' dibaca '+kata3(n)+'.')}
  if(t===2){const n=pick([199,299,399,499,599,699,799,899,999,990,900]);const c=n+1;return mk('Bilangan setelah <b>'+n+'</b> adalah ...',fmt(c),dis(c,[1,10,100],100,1000).map(fmt),'Setelah '+n+' adalah '+fmt(c)+'.')}
  const n=pick([200,300,400,500,600,700,800,900,1000]);return mk('Bilangan sebelum <b>'+fmt(n)+'</b> adalah ...',fmt(n-1),dis(n-1,[1,10,100],100,1000).map(fmt),'Sebelum '+fmt(n)+' adalah '+fmt(n-1)+'.')}},
/*12*/{t:'Bentuk Panjang Bilangan',d:'Menguraikan bilangan menjadi ratusan, puluhan, satuan',gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,3),h=D[0],t=D[1],u=D[2],n=h*100+t*10+u,f=(x,y,z)=>x*100+' + '+y*10+' + '+z;
  if(Math.random()<.5)return mk('<b>'+f(h,t,u)+' = ...</b>',n,dis(n,[9,90,99,10,100],100,999),f(h,t,u)+' = '+n+'.',(h*100)+'+'+(t*10)+'+'+u);
  const c=f(h,t,u),w=[f(t,h,u),f(h,u,t),f(u,t,h),f(t,u,h),f(u,h,t)].filter(x=>x!==c);
  return mk('Bilangan <b>'+n+'</b> jika diuraikan menjadi ...',c,shuf(w).slice(0,3),n+' = '+c+'.')}},
/*13*/{t:'Tanda Lebih, Kurang, Sama',d:'Membandingkan bilangan dengan tanda >, <, dan =',gen(){
  let a=rnd(100,999),b=Math.random()<.25?a:rnd(100,999);if(Math.random()<.4&&b!==a)b=a+rnd(-9,9)||a+1;if(b<100)b=a+3;
  const c=a>b?'&gt;':a<b?'&lt;':'=',nm=a>b?a+' lebih besar dari '+b:a<b?a+' lebih kecil dari '+b:a+' sama dengan '+b;
  return mk('Tanda yang tepat: <b>'+a+' ... '+b+'</b>',c,['&gt;','&lt;','='].filter(x=>x!==c),nm+', jadi tandanya '+c+'.')}},
/*14*/{t:'Pola Bilangan',d:'Pola naik dan turun dengan berbagai loncatan',gen(){
  const step=pick([2,3,5,10,20,25,50,100]),down=Math.random()<.35,hide=Math.random()<.4;let st=down?step*rnd(6,12):rnd(1,6)*step+rnd(0,1)*(step%10===0?0:1);
  if(down&&st<5*step)st=6*step;const d=down?-step:step,arr=[0,1,2,3,4].map(i=>st+i*d);
  if(hide){const h=rnd(1,3),c=arr[h];arr[h]='__';return mk('Lengkapi pola: <b>'+arr.join(', ')+'</b>',c,dis(c,[step,2*step,1],0,1000),'Setiap langkah '+(down?'berkurang ':'bertambah ')+step+', jadi yang hilang '+c+'.')}
  const c=arr[4];return mk('Lanjutkan pola: <b>'+arr.slice(0,4).join(', ')+', __</b>',c,dis(c,[step,2*step,1],0,1000),'Setiap langkah '+(down?'berkurang ':'bertambah ')+step+', jadi selanjutnya '+c+'.')}},
/*15*/{t:'Penjumlahan 3 Angka Menyimpan',d:'Penjumlahan bilangan tiga angka dengan menyimpan',gen(){
  let a,b;do{a=rnd(105,899);b=rnd(105,899)}while(a+b>999||(a%10+b%10<10&&(Math.floor(a/10)%10+Math.floor(b/10)%10<10)));const c=a+b;
  if(Math.random()<.6)return mk('<b>'+a+' + '+b+' = ...</b>',c,dis(c,[10,100,1,2],100,999),a+' + '+b+' = '+c+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Toko '+nm+' menjual '+a+' '+it+' pada hari pertama dan '+b+' '+it+' pada hari kedua. Berapa jumlah '+it+' yang terjual?',c,dis(c,[10,100,1,2],100,999),a+' + '+b+' = '+c+'.',a+'+'+b)}},
/*16*/{t:'Pengurangan 3 Angka Meminjam',d:'Pengurangan bilangan tiga angka dengan meminjam',gen(){
  let a,b;do{a=rnd(205,999);b=rnd(105,a-20)}while(!(b%10>a%10||Math.floor(b/10)%10>Math.floor(a/10)%10));const c=a-b;
  if(Math.random()<.6)return mk('<b>'+a+' − '+b+' = ...</b>',c,dis(c,[10,100,1,2],0,999),a+' − '+b+' = '+c+' (dengan meminjam).',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Toko '+nm+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' terjual. Sisa '+it+' ...',c,dis(c,[10,100,1,2],0,999),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*17*/{t:'Soal Cerita Tambah Kurang',d:'Cerita sehari-hari dengan bilangan ratusan',gen(){
  const [n1,n2]=two(),it=pick(BENDA)[1],t=rnd(0,3);
  if(t<2){const a=rnd(120,560),b=rnd(120,400),c=a+b,q=t===0?n1+' punya '+a+' '+it+'. '+n2+' punya '+b+' '+it+'. Berapa jumlah '+it+' mereka?':'Di gudang ada '+a+' '+it+'. Datang lagi '+b+' '+it+'. Sekarang ada ... '+it;return mk(q,c,dis(c,[10,100,1,20],50,999),a+' + '+b+' = '+c+'.',a+'+'+b)}
  const a=rnd(300,900),b=rnd(110,a-60),c=a-b,q=t===2?n1+' punya '+a+' '+it+'. Sebanyak '+b+' '+it+' diberikan kepada '+n2+'. Sisa '+it+' '+n1+' ...':n1+' punya '+a+' '+it+', sedangkan '+n2+' punya '+b+' '+it+'. Selisih '+it+' mereka ...';return mk(q,c,dis(c,[10,100,1,20],0,999),a+' − '+b+' = '+c+'.',a+'-'+b)}},
/*18*/{t:'Perkalian 3, 4, dan 5',d:'Tabel perkalian 3, 4, dan 5',gen(){
  const a=pick([3,4,5]),b=rnd(1,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2],0,60),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+a+' × __ = '+c+'</b>',b,near(b,0,12),a+' × '+b+' = '+c+'.',a+'*'+b+'==='+c);
  const it=pick(BENDA)[1];return mk('Setiap anak mendapat '+a+' '+it+'. Ada '+b+' anak. Jumlah '+it+' yang dibagikan ...',c,dis(c,[a,b,1,2],0,60),b+' × '+a+' = '+c+'.',a+'*'+b)}},
/*19*/{t:'Perkalian 6, 7, 8, dan 9',d:'Tabel perkalian 6 sampai 9',gen(){
  const a=pick([6,7,8,9]),b=rnd(2,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2,10],0,100),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+b+' × '+a+' = ...</b>',c,dis(c,[a,b,1,2,10],0,100),b+' × '+a+' = '+a+' × '+b+' = '+c+'.',a+'*'+b);
  return mk('<b>'+a+' × __ = '+c+'</b>',b,near(b,0,12),a+' × '+b+' = '+c+'.',a+'*'+b+'==='+c)}},
/*20*/{t:'Pembagian Dasar',d:'Pembagian sebagai kebalikan perkalian',gen(){
  const b=rnd(2,10),c=rnd(1,10),a=b*c,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' ÷ '+b+' = ...</b>',c,dis(c,[1,2,b],0,12),b+' × '+c+' = '+a+', jadi '+a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  if(t===1)return mk('<b>'+a+' ÷ __ = '+c+'</b>',b,near(b,1,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b+'==='+c);
  const it=pick(BENDA)[1];return mk(a+' '+it+' dibagi sama banyak kepada '+b+' anak. Tiap anak mendapat ... '+it,c,dis(c,[1,2,b],0,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
/*21*/{t:'Soal Cerita Perkalian',d:'Cerita sehari-hari dengan perkalian',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),t=rnd(0,2);
  if(t===0){const a=rnd(2,9),b=rnd(2,9),c=a*b;return mk('Ada '+a+' kotak. Setiap kotak berisi '+b+' '+it+'. Berapa jumlah seluruh '+it+'?',c,dis(c,[a,b,1,2],0,100),a+' × '+b+' = '+c+'.',a+'*'+b)}
  if(t===1){const k=rnd(2,9),c=k*7;return mk('Satu minggu ada 7 hari. Berapa hari dalam '+k+' minggu?',c,dis(c,[7,k,1,2],0,70),k+' × 7 = '+c+'.',k+'*7')}
  const a=rnd(2,6),p=pick([500,1000,1500,2000]),c=a*p;return mk(nm+' membeli '+a+' permen. Harga satu permen '+rp(p)+'. Berapa uang yang harus dibayar?',rp(c),Array.from(new Set([c+p,c-p,c+500,c-500,c+1000,c-1000,c+1500])).filter(x=>x>0&&x!==c).slice(0,3).map(rp),a+' × '+rp(p)+' = '+rp(c)+'.',a+'*'+p)}},
/*22*/{t:'Soal Cerita Pembagian',d:'Cerita pembagian rata dan pengelompokan',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),b=rnd(2,9),c=rnd(2,9),a=b*c,t=rnd(0,2);
  if(t===0)return mk(nm+' membagi '+a+' '+it+' sama banyak kepada '+b+' temannya. Tiap teman mendapat ... '+it,c,dis(c,[1,2,b],0,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  if(t===1)return mk(a+' '+it+' dimasukkan ke dalam kantong. Tiap kantong berisi '+b+' '+it+'. Banyak kantong yang dibutuhkan ...',c,dis(c,[1,2,b],0,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  return mk('Ada '+a+' murid yang dibagi menjadi kelompok. Tiap kelompok '+b+' murid. Banyak kelompok ...',c,dis(c,[1,2,b],0,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
/*23*/{t:'Mengenal Pecahan',d:'Pecahan dari gambar, pembilang, dan penyebut',gen(){
  const D=pick([2,3,4,5,6,8]),a=rnd(1,D-1),t=rnd(0,2);
  if(t<2){const c=fr(a,D),w=shuf([fr(D-a,D),fr(a,D+1),fr(a+1<D?a+1:a-1||2,D),fr(D,a),fr(a,D-1>a?D-1:D+2)].filter(x=>x!==c));
    return mk('Bagian <b>biru</b> adalah ... dari seluruhnya.<div class="vis">'+'🟦'.repeat(a)+'⬜'.repeat(D-a)+'</div>',c,Array.from(new Set(w)).slice(0,3),'Ada '+D+' bagian sama besar, '+a+' bagian berwarna biru. Jadi '+a+'/'+D+'.')}
  const w=pick(['pembilang','penyebut']),c=w==='pembilang'?a:D;return mk('Pada pecahan '+fr(a,D)+', <b>'+w+'</b>nya adalah ...',c,near(c,1,10),'Pada pecahan '+a+'/'+D+', angka atas adalah pembilang ('+a+') dan angka bawah adalah penyebut ('+D+').')}},
/*24*/{t:'Membandingkan Pecahan',d:'Membandingkan pecahan sederhana',gen(){
  const t=rnd(0,2);
  if(t===0){const D=pick([4,5,6,8,10]),a=rnd(1,D-1);let b;do b=rnd(1,D-1);while(b===a);const big=Math.random()<.5,c=fr((big?a>b:a<b)?a:b,D);
    return mk('Pecahan yang lebih <b>'+(big?'besar':'kecil')+'</b> adalah ...',c,[fr(c===fr(a,D)?b:a,D)],'Penyebut sama ('+D+'), bandingkan pembilangnya: '+a+' dan '+b+'.')}
  if(t===1){const D=pick([5,6,8,10]),a=shuf(Array.from({length:D-1},(_,i)=>i+1)).slice(0,3),big=Math.random()<.5,m=big?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Pecahan yang paling <b>'+(big?'besar':'kecil')+'</b> adalah ...',fr(m,D),a.filter(x=>x!==m).map(x=>fr(x,D)),'Penyebut sama ('+D+'), pembilang '+(big?'terbesar':'terkecil')+' adalah '+m+'.')}
  const ds=shuf([2,3,4,5,6,8,10]).slice(0,3),big=Math.random()<.5,m=big?Math.min.apply(null,ds):Math.max.apply(null,ds);
  return mk('Pecahan yang paling <b>'+(big?'besar':'kecil')+'</b> adalah ...',fr(1,m),ds.filter(x=>x!==m).map(x=>fr(1,x)),'Pembilang sama (1). Semakin '+(big?'kecil':'besar')+' penyebut, pecahan semakin '+(big?'besar':'kecil')+'. Jadi 1/'+m+'.')}},
/*25*/{t:'Pengukuran Panjang',d:'Satuan cm dan m, konversi, dan penjumlahan panjang',gen(){
  const t=rnd(0,4);
  if(t===0){const k=rnd(1,9),c=k*100;return mk('<b>'+k+' m = ... cm</b>',c,[c/10,c*10,c+10,c-10<1?c+20:c-10].filter(x=>x!==c).slice(0,3),'1 m = 100 cm, jadi '+k+' m = '+c+' cm.',k+'*100')}
  if(t===1){const k=rnd(1,9),c=k;return mk('<b>'+k*100+' cm = ... m</b>',c,near(c,1,12),'100 cm = 1 m, jadi '+k*100+' cm = '+k+' m.')}
  if(t===2){const a=rnd(1,9),b=rnd(1,9)*10+rnd(1,5)*5;let m=a,cm=b;const big=Math.random()<.5,A=m+' m',B=b+' cm';const c=(big?(m*100>b):(m*100<b))?A:B;
    return mk('Manakah yang lebih <b>'+(big?'panjang':'pendek')+'</b>: '+A+' atau '+B+'?',c,[c===A?B:A],'Ubah ke cm: '+A+' = '+m*100+' cm. Bandingkan dengan '+B+'.')}
  if(t===3){const a=rnd(12,60),b=rnd(12,70),c=a+b;return mk('Tali merah panjangnya '+a+' cm. Tali biru panjangnya '+b+' cm. Jika disambung, panjangnya ... cm',c,dis(c,[10,1,2,20],0,200),a+' + '+b+' = '+c+'.',a+'+'+b)}
  const P=[['panjang meja','penggaris atau meteran'],['panjang lapangan','meteran'],['panjang pensil','penggaris']];return mk('Satuan yang tepat untuk mengukur '+pick(['panjang pensil','tinggi buku','panjang kuku'])+' adalah ...','cm',['m','kg','km'],'Benda kecil diukur dengan sentimeter (cm).')}},
/*26*/{t:'Pengukuran Berat',d:'Satuan kg dan g, konversi, dan soal cerita berat',gen(){
  const t=rnd(0,3);
  if(t===0){const k=rnd(1,9),c=k*1000;return mk('<b>'+k+' kg = ... g</b>',fmt(c),[c/10,c*10,c+100,c-100].filter(x=>x>0&&x!==c).slice(0,3).map(fmt),'1 kg = 1.000 g, jadi '+k+' kg = '+fmt(c)+' g.')}
  if(t===1){const P=[['seekor gajah','kg'],['sebutir permen','g'],['seekor kucing','kg'],['sekarung beras','kg'],['sebuah koin','g'],['seekor semut','g'],['sebuah apel','g'],['seorang anak','kg']],p=pick(P),c=p[1];
    return mk('Satuan yang tepat untuk berat <b>'+p[0]+'</b> adalah ...',c,['kg','g','cm','m'].filter(x=>x!==c),p[0].charAt(0).toUpperCase()+p[0].slice(1)+' lebih tepat dalam satuan '+c+'.')}
  if(t===2){const a=rnd(2,9),b=rnd(2,9),c=a+b,nm=pick(NAMA);return mk('Ibu membeli '+a+' kg gula dan '+b+' kg beras. Berat belanjaan seluruhnya ... kg',c,dis(c,[1,2,3],1,25),a+' + '+b+' = '+c+' kg.',a+'+'+b)}
  const a=rnd(8,20),b=rnd(2,a-2),c=a-b;return mk('Sekarung jeruk beratnya '+a+' kg. Sebanyak '+b+' kg sudah terjual. Sisa jeruk ... kg',c,dis(c,[1,2,3],0,25),a+' − '+b+' = '+c+' kg.',a+'-'+b)}},
/*27*/{t:'Waktu: Jam, Hari, dan Bulan',d:'Membaca jam, lama waktu, nama hari dan bulan',gen(){
  const t=rnd(0,4);
  if(t===0){const h=rnd(5,17),d=rnd(1,5),c=d;return mk('Ani belajar dari pukul <b>'+pad2(h)+'.00</b> sampai pukul <b>'+pad2(h+d)+'.00</b>. Lama belajar Ani ... jam',c,near(c,1,8),'Dari '+h+' sampai '+(h+d)+' ada '+d+' jam.')}
  if(t===1){const h=rnd(5,14),d=rnd(1,6),c=pad2(h+d)+'.00';return mk('Sekarang pukul '+pad2(h)+'.00. '+d+' jam lagi pukul ...',c,[pad2(h+d+1)+'.00',pad2(h+d-1)+'.00',pad2(h+d+2)+'.00'],pad2(h)+'.00 ditambah '+d+' jam menjadi '+c+'.')}
  if(t===2){const k=rnd(1,6),w=pick(['minggu','hari']);if(w==='minggu'){const c=k*7;return mk('Dalam '+k+' minggu ada ... hari',c,dis(c,[7,1,2],0,60),k+' × 7 = '+c+'.',k+'*7')}
    const c=k*7;return mk(c+' hari sama dengan ... minggu',k,near(k,1,10),c+' ÷ 7 = '+k+'.')}
  if(t===3){const i=rnd(0,6),s=rnd(1,2),sb=Math.random()<.5,j=(i+(sb?-s:s)+14)%7,c=HARI[j];return mk('<b>'+s+' hari '+(sb?'sebelum':'setelah')+' hari '+HARI[i]+'</b> adalah hari ...',c,shuf(HARI.filter(x=>x!==c)).slice(0,3),s+' hari '+(sb?'sebelum ':'setelah ')+HARI[i]+' adalah '+c+'.')}
  const i=rnd(0,11),s=rnd(1,3),sb=Math.random()<.5,j=(i+(sb?-s:s)+24)%12,c=BULAN[j];return mk('<b>'+s+' bulan '+(sb?'sebelum':'setelah')+' bulan '+BULAN[i]+'</b> adalah bulan ...',c,shuf(BULAN.filter(x=>x!==c)).slice(0,3),s+' bulan '+(sb?'sebelum ':'setelah ')+BULAN[i]+' adalah '+c+'.')}},
/*28*/{t:'Bangun Datar: Sisi dan Sudut',d:'Sifat, sisi, dan sudut bangun datar',gen(){
  const S=[['segitiga',3],['persegi',4],['persegi panjang',4]],t=rnd(0,2);
  if(t===0){const F=[['Bangun datar yang memiliki <b>3 sisi</b> dan <b>3 sudut</b> adalah ...','segitiga'],['Bangun datar yang <b>tidak memiliki sudut</b> adalah ...','lingkaran'],['Bangun datar dengan <b>4 sisi sama panjang</b> adalah ...','persegi'],['Bangun datar dengan 4 sisi, <b>2 sisi panjang dan 2 sisi pendek</b>, adalah ...','persegi panjang'],['Bangun datar yang <b>punya sisi paling sedikit</b> (bukan lingkaran) adalah ...','segitiga'],['Bangun datar yang <b>memiliki 4 sudut siku-siku</b> dan semua sisinya sama panjang adalah ...','persegi']],
      f=pick(F),all=['lingkaran','segitiga','persegi','persegi panjang'];return mk(f[0],f[1],all.filter(x=>x!==f[1]),'Jawabannya: '+f[1]+'.')}
  if(t===1){const s=pick(S),w=pick(['sisi','sudut']),a=rnd(2,7),c=s[1]*a;return mk('Ada '+a+' '+s[0]+'. Berapa jumlah semua '+w+'nya?',c,dis(c,[s[1],a,1,2],0,40),a+' × '+s[1]+' = '+c+'.',a+'*'+s[1])}
  const i=rnd(0,2);let j;do j=rnd(0,2);while(j===i);const A=S[i],B=S[j],a=rnd(1,5),b=rnd(1,5),w=pick(['sisi','sudut']),c=a*A[1]+b*B[1];
  return mk('Ada '+a+' '+A[0]+' dan '+b+' '+B[0]+'. Berapa jumlah semua '+w+'nya?',c,dis(c,[A[1],B[1],1,2],3,40),a+' × '+A[1]+' = '+a*A[1]+', '+b+' × '+B[1]+' = '+b*B[1]+'. Jumlahnya '+c+'.',a+'*'+A[1]+'+'+b+'*'+B[1])}},
/*29*/{t:'Soal Cerita Dua Langkah',d:'Cerita yang memadukan perkalian, penjumlahan, dan pengurangan',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const a=rnd(2,6),b=rnd(2,9),c=rnd(2,15),r=a*b+c;return mk('Ada '+a+' kotak berisi '+b+' '+it+' tiap kotak. '+nm+' menambahkan '+c+' '+it+'. Jumlah '+it+' sekarang ...',r,dis(r,[a,b,c,1],0,100),a+' × '+b+' = '+a*b+', lalu + '+c+' = '+r+'.',a+'*'+b+'+'+c)}
  if(t===1){const a=rnd(2,6),b=rnd(3,9),p=a*b,c=rnd(1,p-1),r=p-c;return mk(nm+' punya '+a+' kantong berisi '+b+' '+it+' tiap kantong. Sebanyak '+c+' '+it+' diberikan kepada adik. Sisa '+it+' ...',r,dis(r,[a,b,c,1],0,100),a+' × '+b+' = '+p+', lalu − '+c+' = '+r+'.',a+'*'+b+'-'+c)}
  if(t===2){const b=rnd(2,6),q=rnd(2,8),c=rnd(2,12),a=b*q,r=q+c;return mk(a+' '+it+' dibagi sama banyak kepada '+b+' anak. Kemudian tiap anak diberi tambahan '+c+' '+it+'. Tiap anak sekarang punya ... '+it,r,dis(r,[b,c,1,2],0,40),a+' ÷ '+b+' = '+q+', lalu + '+c+' = '+r+'.',a+'/'+b+'+'+c)}
  const a=rnd(2,5),p=pick([500,1000,1500]),pay=pick([5000,10000]);if(a*p>=pay)return LEVELS[28].gen();const c=pay-a*p;
  return mk(nm+' membeli '+a+' buah kue. Harga satu kue '+rp(p)+'. Ia membayar dengan uang '+rp(pay)+'. Uang kembaliannya ...',rp(c),Array.from(new Set([c+p,c-p,c+500,c-500,c+1000,c-1000,c+1500])).filter(x=>x>0&&x!==c).slice(0,3).map(rp),a+' × '+rp(p)+' = '+rp(a*p)+'. Kembalian '+rp(pay)+' − '+rp(a*p)+' = '+rp(c)+'.',pay+'-'+a+'*'+p)}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',gen(){return LEVELS[rnd(14,28)].gen()}}
];

const PREVIEW=[];
