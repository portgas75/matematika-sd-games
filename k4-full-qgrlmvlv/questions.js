/* Bank soal Matematika Kelas 4 - FULL - Developer: portgas75 */
const GAME={"grade":4,"version":"full","totalLevels":30,"hint":true};
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
const SUP={2:'²',3:'³',4:'⁴',5:'⁵',6:'⁶',7:'⁷'};
function fstr(n){const f=[];let m=n;for(let p=2;p<=m;p++){let e=0;while(m%p===0){m/=p;e++}if(e)f.push(String(p)+(e>1?SUP[e]:''))}return f.join(' × ')}
function fvals(n){const f=[];let m=n;for(let p=2;p<=m;p++)while(m%p===0){m/=p;f.push(p)}return f}
const ltr=e=>{const t=e.split(' ');let v=+t[0];for(let i=1;i<t.length;i+=2){const o=t[i],x=+t[i+1];v=o==='+'?v+x:o==='-'?v-x:o==='*'?v*x:v/x}return v};
const mean=a=>a.reduce((x,y)=>x+y,0)/a.length;
const median=a=>{const s=a.slice().sort((x,y)=>x-y),m=Math.floor(s.length/2);return s.length%2?s[m]:(s[m-1]+s[m])/2};

/* Level Kelas 4 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Bilangan sampai 100.000',d:'Membaca, menulis, dan urutan bilangan sampai seratus ribu',h:'Baca dari kiri: puluh ribuan, ribuan, ratusan, puluhan, satuan. Titik memisahkan setiap tiga angka.',gen(){
  const t=rnd(0,3),n=rnd(10001,99999),w=[1,10,100,1000,10000];
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata5(n)+'</b>"?',fmt(n),dis(n,w,10000,100000).map(fmt),kata5(n)+' ditulis '+fmt(n)+'.');
  if(t===1)return mk('Bilangan <b>'+fmt(n)+'</b> dibaca ...',kata5(n),dis(n,w,10000,100000).map(kata5),fmt(n)+' dibaca '+kata5(n)+'.');
  if(t===2){const m=pick([n,19999,29999,49999,69999,89999,99999,45099]);return mk('Bilangan setelah <b>'+fmt(m)+'</b> adalah ...',fmt(m+1),dis(m+1,w,10000,100000).map(fmt),'Setelah '+fmt(m)+' adalah '+fmt(m+1)+'.')}
  const m=pick([n,20000,30000,50000,70000,90000,100000,45100]);return mk('Bilangan sebelum <b>'+fmt(m)+'</b> adalah ...',fmt(m-1),dis(m-1,w,9999,100000).map(fmt),'Sebelum '+fmt(m)+' adalah '+fmt(m-1)+'.')}},
/*2*/{t:'Nilai Tempat dan Perbandingan',d:'Nilai tempat dan membandingkan bilangan besar',h:'Dari kanan: satuan, puluhan, ratusan, ribuan, puluh ribuan. Bandingkan angka dari yang paling kiri.',gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,5),n=D[0]*10000+D[1]*1000+D[2]*100+D[3]*10+D[4],N=['puluh ribuan','ribuan','ratusan','puluhan','satuan'],V=[10000,1000,100,10,1],t=rnd(0,3);
  if(t===0){const p=rnd(0,4);return mk('Angka <b>'+N[p]+'</b> dari bilangan <b>'+fmt(n)+'</b> adalah ...',D[p],near(D[p],0,9),'Pada '+fmt(n)+', angka '+N[p]+' adalah '+D[p]+'.')}
  if(t===1){const p=rnd(0,4),d=D[p],c=d*V[p];return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+fmt(n)+'</b> adalah ...',fmt(c),uniq(c,V.map(v=>d*v).concat([d*100000])).map(fmt),'Angka '+d+' di tempat '+N[p]+', nilainya '+fmt(c)+'.')}
  if(t===2){let a=rnd(10000,99999),b=Math.random()<.2?a:a+rnd(-900,900);if(b<10000||b===a&&Math.random()<.5)b=a+rnd(1,99);const c=sg(a,b);return mk('Tanda yang tepat: <b>'+fmt(a)+' ... '+fmt(b)+'</b>',c,SIG.filter(x=>x!==c),fmt(a)+(a>b?' lebih besar dari ':a<b?' lebih kecil dari ':' sama dengan ')+fmt(b)+'.')}
  const a=shuf(Array.from({length:80},(_,i)=>10000+i*1117+rnd(0,99))).slice(0,4),big=Math.random()<.5,c=big?Math.max.apply(null,a):Math.min.apply(null,a);
  return mk('Bilangan yang paling '+(big?'besar':'kecil')+' di antara <b>'+a.map(fmt).join(', ')+'</b> adalah ...',fmt(c),a.filter(x=>x!==c).map(fmt),fmt(c)+' paling '+(big?'besar':'kecil')+'.')}},
/*3*/{t:'Tambah Kurang Bilangan Besar',d:'Penjumlahan dan pengurangan sampai ratusan ribu',h:'Susun ke bawah sesuai nilai tempat. Tambah atau kurangkan dari satuan, simpan atau pinjam bila perlu.',gen(){
  const nm=pick(NAMA),it=pick(BENDA)[1];
  if(Math.random()<.5){const a=rnd(12000,60000),b=rnd(5000,Math.min(39999,99999-a)),c=a+b;
    return Math.random()<.6?mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b):mk('Pabrik '+nm+' membuat '+fmt(a)+' '+it+' bulan lalu dan '+fmt(b)+' '+it+' bulan ini. Jumlahnya ...',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}
  const a=rnd(30000,99999),b=rnd(2000,a-1000),c=a-b;
  return Math.random()<.6?mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],0,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b):mk('Gudang '+nm+' menyimpan '+fmt(a)+' '+it+'. Sebanyak '+fmt(b)+' '+it+' dikirim. Sisa ...',fmt(c),dis(c,[10,100,1000,10000],0,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}},
/*4*/{t:'Kali dan Bagi Bilangan Besar',d:'Perkalian dua angka dan pembagian bersusun',h:'Perkalian: kalikan satuan, lalu puluhan (geser satu tempat), lalu jumlahkan. Pembagian: periksa dengan perkalian.',gen(){
  const t=rnd(0,2),nm=pick(NAMA),it=pick(BENDA)[1];
  if(t===0){const a=rnd(12,99),b=rnd(11,60),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,a,b],100,6000).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}
  if(t===1){const b=rnd(11,30),q=rnd(12,99),a=b*q;return mk('<b>'+fmt(a)+' ÷ '+b+' = ...</b>',q,dis(q,[1,10,b,2],5,120),b+' × '+q+' = '+fmt(a)+', jadi '+fmt(a)+' ÷ '+b+' = '+q+'.',a+'/'+b)}
  const a=rnd(12,48),b=rnd(12,40),c=a*b;return mk(nm+' membeli '+a+' dus '+it+'. Tiap dus berisi '+b+' '+it+'. Jumlah '+it+' seluruhnya ...',fmt(c),dis(c,[10,100,a,b],100,2000).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}},
/*5*/{t:'Operasi Hitung Campuran',d:'Urutan pengerjaan: kali dan bagi dulu, lalu tambah dan kurang',h:'Urutan: kerjakan tanda kurung dulu, lalu × dan ÷, terakhir + dan −.',gen(){
  const f=rnd(0,4);let r,w,show;
  if(f===0){const a=rnd(5,60),b=rnd(2,12),c=rnd(2,12);r=a+b*c;w=(a+b)*c;show=a+' + '+b+' × '+c}
  else if(f===1){const a=rnd(2,12),b=rnd(2,12),c=rnd(2,40);if(a*b<=c)return LEVELS[4].gen();r=a*b-c;w=a*(b-c);show=a+' × '+b+' − '+c}
  else if(f===2){const c=rnd(2,9),q=rnd(2,12),b=c*q,a=rnd(b+1,b+60);r=a-q;w=(a-b)/c;show=a+' − '+b+' ÷ '+c}
  else if(f===3){const a=rnd(20,90),b=rnd(2,9),c=rnd(2,9),d=rnd(2,20);r=a+b*c-d;w=(a+b)*c-d;show=a+' + '+b+' × '+c+' − '+d}
  else{const a=rnd(2,15),b=rnd(2,15),c=rnd(2,9);r=(a+b)*c;w=a+b*c;show='('+a+' + '+b+') × '+c}
  const ex={0:()=>'',1:()=>'',2:()=>'',3:()=>'',4:()=>''};
  const ck=['a+b*c','a*b-c','a-b/c','a+b*c-d','(a+b)*c'][f];
  return mk('<b>'+show+' = ...</b>',r,uniq(r,[w,r+1,r-1,r+10,r-10,r*2].filter(x=>Number.isInteger(x)&&x>0)),'Kerjakan perkalian, pembagian, atau tanda kurung lebih dulu. Hasilnya '+r+'.',show.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-'))}},
/*6*/{t:'Faktor Bilangan',d:'Menentukan faktor dan banyak faktor',h:'Faktor adalah bilangan yang habis membagi. Cari pasangan perkalian, misalnya 12 = 1×12 = 2×6 = 3×4.',gen(){
  const t=rnd(0,2);
  if(t===0){let n;do n=rnd(12,60);while(isPrime(n));const d=divs(n),nd=Array.from({length:n},(_,i)=>i+2).filter(x=>n%x!==0&&x<n),c=pick(d.filter(x=>x>1&&x<n));return mk('Manakah yang merupakan <b>faktor</b> dari <b>'+n+'</b>?',c,shuf(nd).slice(0,3),n+' ÷ '+c+' = '+n/c+' (habis dibagi), jadi '+c+' faktor dari '+n+'.',n+'%'+c+'===0')}
  if(t===1){const n=pick([6,8,10,12,14,15,16,18,20,24,28,30,32,36]),c=divs(n).length;return mk('Banyak faktor dari <b>'+n+'</b> adalah ...',c,near(c,2,12),'Faktor dari '+n+': '+divs(n).join(', ')+'. Banyaknya '+c+'.','divs('+n+').length')}
  let n;do n=rnd(12,48);while(divs(n).length<5);const d=divs(n).filter(x=>x>1&&x<n),c=pick(Array.from({length:n-2},(_,i)=>i+2).filter(x=>n%x!==0));return mk('Manakah yang <b>bukan</b> faktor dari <b>'+n+'</b>?',c,shuf(d).slice(0,3),n+' tidak habis dibagi '+c+', jadi bukan faktor.',n+'%'+c+'!==0')}},
/*7*/{t:'Kelipatan Bilangan',d:'Kelipatan dan kelipatan terdekat',h:'Kelipatan diperoleh dengan mengalikan bilangan itu dengan 1, 2, 3, dan seterusnya.',gen(){
  const t=rnd(0,2),k=rnd(3,12);
  if(t===0){const m=rnd(4,12),c=k*m;return mk('Kelipatan <b>'+k+'</b> yang ke-<b>'+m+'</b> adalah ...',c,dis(c,[k,1,2*k],k,150),k+' × '+m+' = '+c+'.',k+'*'+m)}
  if(t===1){const m=rnd(3,12),c=k*m,w=Array.from({length:14},(_,i)=>c+i-7).filter(x=>x%k!==0&&x>1);return mk('Manakah yang merupakan <b>kelipatan '+k+'</b>?',c,shuf(w).slice(0,3),c+' ÷ '+k+' = '+m+', jadi '+c+' kelipatan '+k+'.',c+'%'+k+'===0')}
  const n=rnd(30,90),c=(Math.floor(n/k)+1)*k;return mk('Kelipatan <b>'+k+'</b> pertama yang lebih besar dari <b>'+n+'</b> adalah ...',c,dis(c,[k,2*k,1],k,200),'Kelipatan '+k+' terdekat di atas '+n+' adalah '+c+'.','(Math.floor('+n+'/'+k+')+1)*'+k)}},
/*8*/{t:'Bilangan Prima',d:'Mengenal bilangan prima dan komposit',h:'Bilangan prima hanya punya dua faktor: 1 dan dirinya sendiri. Contoh: 2, 3, 5, 7, 11, 13.',gen(){
  const P=Array.from({length:49},(_,i)=>i+2).filter(isPrime),C=Array.from({length:49},(_,i)=>i+2).filter(x=>!isPrime(x)),t=rnd(0,3);
  if(t===0){const c=pick(P);return mk('Manakah yang merupakan bilangan <b>prima</b>?',c,shuf(C).slice(0,3),c+' hanya habis dibagi 1 dan '+c+'.','isPrime('+c+')')}
  if(t===1){const c=pick(C);return mk('Manakah yang <b>bukan</b> bilangan prima?',c,shuf(P).slice(0,3),c+' punya faktor selain 1 dan '+c+': '+divs(c).join(', ')+'.','!isPrime('+c+')')}
  if(t===2){const N=pick([10,20,30,40,50]),c=P.filter(x=>x<N).length;return mk('Banyak bilangan prima yang kurang dari <b>'+N+'</b> adalah ...',c,near(c,2,16),'Bilangan prima kurang dari '+N+': '+P.filter(x=>x<N).join(', ')+'.','Array.from({length:'+N+'},(_,i)=>i).filter(isPrime).length')}
  return mk('Satu-satunya bilangan prima yang <b>genap</b> adalah ...',2,[4,6,8],'Bilangan genap lain habis dibagi 2, sehingga punya lebih dari dua faktor.','isPrime(2)')}},
/*9*/{t:'FPB',d:'Faktor Persekutuan Terbesar dua bilangan',h:'Tulis faktor kedua bilangan, cari yang sama, lalu ambil yang terbesar.',gen(){
  const g=rnd(2,9);let p,q;do{p=rnd(1,6);q=rnd(1,6)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;
  return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[p,q,lcm(a,b),Math.abs(a-b),g+1,g*2,1]),'Faktor '+a+': '+divs(a).join(', ')+'. Faktor '+b+': '+divs(b).join(', ')+'. FPB = '+g+'.','gcd('+a+','+b+')')}},
/*10*/{t:'KPK',d:'Kelipatan Persekutuan Terkecil dua bilangan',h:'Tulis kelipatan kedua bilangan, cari yang sama pertama kali. Itulah KPK-nya.',gen(){
  let a,b;do{a=rnd(2,12);b=rnd(2,12)}while(a===b);const c=lcm(a,b);
  return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,gcd(a,b),a+b,c*2,c+a,c+b,Math.max(a,b)]).slice(0,3),'Kelipatan '+a+' dan '+b+' pertama yang sama adalah '+c+'.','lcm('+a+','+b+')')}},
/*11*/{t:'Faktorisasi Prima',d:'Pohon faktor dan bentuk perkalian prima',h:'Bagi terus dengan bilangan prima terkecil sampai hasilnya 1. Faktor yang sama ditulis dengan pangkat.',gen(){
  if(Math.random()<.6){const n=pick([12,18,20,24,28,30,36,40,42,45,48,50,54,60,63,72,75,80,84,90,96,100]),c=fstr(n),w=Array.from({length:30},(_,i)=>n-15+i).filter(x=>x>3&&x!==n&&!isPrime(x)).map(fstr);
    return mk('Faktorisasi prima dari <b>'+n+'</b> adalah ...',c,uniq(c,shuf(w)),n+' = '+c+'.','fvals('+n+').reduce((a,b)=>a*b,1)===('+n+')')}
  const f=[];const k=rnd(2,4);for(let i=0;i<k;i++)f.push(pick([2,3,5]));f.sort();const n=f.reduce((a,b)=>a*b,1);
  return mk('<b>'+fstr(n)+' = ...</b>',n,dis(n,[1,2,3,5,10],4,500),f.join(' × ')+' = '+n+'.',f.join('*'))}},
/*12*/{t:'FPB dengan Faktorisasi',d:'FPB dua dan tiga bilangan yang lebih besar',h:'Ambil faktor prima yang sama dengan pangkat terkecil, lalu kalikan.',gen(){
  if(Math.random()<.65){const g=rnd(2,12);let p,q;do{p=rnd(2,6);q=rnd(2,6)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[g+1,g*2,p,q,lcm(a,b),1,g-1]),a+' = '+fstr(a)+' dan '+b+' = '+fstr(b)+'. FPB = '+g+'.','gcd('+a+','+b+')')}
  const g=rnd(2,6),T=[[2,3,5],[2,3,4],[3,4,5],[2,5,3],[3,5,4]],t=pick(T),a=g*t[0],b=g*t[1],c=g*t[2],r=gcd(gcd(a,b),c);
  return mk('FPB dari <b>'+a+', '+b+', dan '+c+'</b> adalah ...',r,uniq(r,[r+1,r*2,r+2,1,g+1,2,3]),'FPB ketiga bilangan = '+r+'.','gcd(gcd('+a+','+b+'),'+c+')')}},
/*13*/{t:'KPK Bilangan Lebih Besar',d:'KPK dua dan tiga bilangan',h:'Ambil semua faktor prima dengan pangkat terbesar, lalu kalikan. Atau tulis kelipatan sampai bertemu.',gen(){
  if(Math.random()<.65){let a,b;do{a=rnd(4,18);b=rnd(4,18)}while(a===b);const c=lcm(a,b);return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,gcd(a,b),c*2,c+a,c-a,c+b,a+b]),a+' = '+fstr(a)+' dan '+b+' = '+fstr(b)+'. KPK = '+c+'.','lcm('+a+','+b+')')}
  const T=[[2,3,4],[2,3,5],[3,4,6],[2,4,6],[3,5,6],[4,5,6],[2,3,6],[3,4,5]],t=pick(T),c=lcm(lcm(t[0],t[1]),t[2]);
  return mk('KPK dari <b>'+t.join(', ')+'</b> adalah ...',c,uniq(c,[t[0]*t[1]*t[2],c*2,c/2,c+t[0],c+t[2],c-t[1]]).filter(x=>+x>0).slice(0,3),'KPK dari '+t.join(', ')+' adalah '+c+'.','lcm(lcm('+t[0]+','+t[1]+'),'+t[2]+')')}},
/*14*/{t:'Soal Cerita FPB dan KPK',d:'Cerita pembagian kelompok dan jadwal bersamaan',h:'Dibagi sama banyak ke beberapa kelompok → FPB. Terjadi bersamaan lagi → KPK.',gen(){
  const nm=pick(NAMA),t=rnd(0,2);
  if(t===0){const g=rnd(3,12);let p,q;do{p=rnd(2,6);q=rnd(2,6)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk(nm+' punya '+a+' pensil dan '+b+' penghapus. Semuanya dimasukkan ke kantong dengan isi sama banyak, tanpa sisa. Banyak kantong paling banyak ...',g,uniq(g,[g+1,g*2,p,q,1]),'Paling banyak kantong = FPB('+a+', '+b+') = '+g+'.','gcd('+a+','+b+')')}
  let a,b;do{a=rnd(3,12);b=rnd(3,12)}while(a===b);const c=lcm(a,b);
  if(t===1)return mk('Lampu merah menyala setiap '+a+' menit dan lampu biru setiap '+b+' menit. Jika menyala bersama sekarang, keduanya menyala bersama lagi setelah ... menit',c,uniq(c,[a*b,a+b,c*2,c+a,gcd(a,b)]),'Menyala bersama lagi setelah KPK('+a+', '+b+') = '+c+' menit.','lcm('+a+','+b+')');
  return mk('Bus A berangkat setiap '+a+' hari dan bus B setiap '+b+' hari. Jika berangkat bersama hari ini, berangkat bersama lagi ... hari kemudian',c,uniq(c,[a*b,a+b,c*2,c+b,gcd(a,b)]),'Berangkat bersama lagi setelah KPK('+a+', '+b+') = '+c+' hari.','lcm('+a+','+b+')')}},
/*15*/{t:'Pecahan Senilai',d:'Pecahan yang nilainya sama',h:'Kalikan atau bagi pembilang dan penyebut dengan bilangan yang sama. Nilai pecahan tidak berubah.',gen(){
  const D=pick([2,3,4,5,6]),a=rnd(1,D-1),k=rnd(2,6),t=rnd(0,2);
  if(t===0)return mk('<b>'+fr(a,D)+' = '+fr('__',D*k)+'</b>',a*k,near(a*k,1,36),'Penyebut dikali '+k+', jadi pembilang juga dikali '+k+': '+a*k+'.',a+'*'+k);
  if(t===1)return mk('<b>'+fr(a,D)+' = '+fr(a*k,'__')+'</b>',D*k,near(D*k,2,40),'Pembilang dikali '+k+', jadi penyebut juga: '+D*k+'.',D+'*'+k);
  const c=fr(a*k,D*k);return mk('Pecahan yang senilai dengan '+fr(a,D)+' adalah ...',c,uniq(c,[fr(a*k,D*k+1),fr(a+k,D+k),fr(a*k,D),fr(a,D*k),fr(a*k+1,D*k)]),fr(a,D)+' = '+c+'.',a+'/'+D+'===('+a*k+')/('+D*k+')')}},
/*16*/{t:'Menyederhanakan Pecahan',d:'Pecahan paling sederhana',h:'Bagi pembilang dan penyebut dengan FPB-nya sampai tidak bisa dibagi lagi.',gen(){
  const g=rnd(2,9);let p,q;do{p=rnd(1,8);q=rnd(2,9)}while(p>=q||gcd(p,q)!==1);const a=g*p,b=g*q;
  return mk('Bentuk paling sederhana dari '+fr(a,b)+' adalah ...',fr(p,q),uniq(fr(p,q),[fr(q,p),fr(p,q+1),fr(p+1,q),(g%2===0&&g>2?fr(a/2,b/2):g%3===0&&g>3?fr(a/3,b/3):fr(p,q+2)),fr(p,q-1>p?q-1:q+2)]),'FPB '+a+' dan '+b+' adalah '+g+'. '+a+' ÷ '+g+' = '+p+', '+b+' ÷ '+g+' = '+q+'.',a+'/'+b)}},
/*17*/{t:'Penjumlahan Pecahan',d:'Menjumlahkan pecahan berpenyebut sama dan berbeda',h:'Penyebut sama: jumlahkan pembilangnya. Penyebut beda: samakan penyebutnya dulu dengan KPK.',gen(){
  const same=Math.random()<.5,b=pick([3,4,5,6,8,10]);let a=rnd(1,b-1),d,c;
  if(same){d=b;c=rnd(1,b-1)}else{const k=pick([2,3]);d=b*k;c=rnd(1,d-1);if(b===10||d>12)return LEVELS[16].gen()}
  const L=lcm(b,d),n=a*L/b+c*L/d,r=frs(n,L);
  return mk('<b>'+fr(a,b)+' + '+fr(c,d)+' = ...</b>',r,uniq(r,[[a+c,b+d],[a+c,b],[n+1,L],[Math.max(n-1,1),L],[n,L*2],[a+c,L+1],[n+2,L]].filter(q=>q[0]*L!==n*q[1]).map(q=>fr(q[0],q[1]))),'Samakan penyebut menjadi '+L+': '+fr(a*L/b,L)+' + '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'+'+c+'/'+d)}},
/*18*/{t:'Pengurangan Pecahan',d:'Mengurangkan pecahan berpenyebut sama dan berbeda',h:'Samakan penyebut lebih dulu, lalu kurangkan pembilangnya. Sederhanakan hasilnya.',gen(){
  const same=Math.random()<.5,b=pick([3,4,5,6,8]);let a,d,c;
  if(same){d=b;a=rnd(2,b-1);c=rnd(1,a-1)}else{const k=pick([2,3]);d=b*k;if(d>12)return LEVELS[17].gen();a=rnd(1,b-1);c=rnd(1,d-1)}
  const L=lcm(b,d),n=a*L/b-c*L/d;if(n<=0)return LEVELS[17].gen();const r=frs(n,L);
  return mk('<b>'+fr(a,b)+' − '+fr(c,d)+' = ...</b>',r,uniq(r,[[Math.abs(a-c),Math.abs(b-d)||b+1],[a-c>0?a-c:1,b],[n+1,L],[n,L*2],[a+c,L],[n+2,L]].filter(q=>q[0]*L!==n*q[1]).map(q=>fr(q[0],q[1]))),'Samakan penyebut menjadi '+L+': '+fr(a*L/b,L)+' − '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'-'+c+'/'+d)}},
/*19*/{t:'Pecahan Campuran',d:'Mengubah pecahan campuran dan pecahan biasa',h:'Campuran → biasa: (bilangan bulat × penyebut + pembilang) per penyebut. Biasa → campuran: bagi pembilang dengan penyebut.',gen(){
  const D=pick([2,3,4,5,6,8]),w=rnd(1,6),a=rnd(1,D-1),n=w*D+a;
  if(Math.random()<.5)return mk('Ubahlah ke pecahan biasa: <b>'+mx(w,a,D)+'</b>',fr(n,D),uniq(fr(n,D),[fr(w+a,D),fr(w*a+D,D),fr(n+1,D),fr(n,D+1),fr(n-1,D)]),w+' × '+D+' + '+a+' = '+n+', jadi '+fr(n,D)+'.',w+'+'+a+'/'+D);
  const c=mx(w,a,D);return mk('Ubahlah ke pecahan campuran: <b>'+fr(n,D)+'</b>',c,uniq(c,[mx(w+1,a,D),mx(w,D-a,D),mx(a,w,D),mx(w-1<1?w+2:w-1,a,D),mx(w,a+1<D?a+1:a-1||1,D)]),n+' ÷ '+D+' = '+w+' sisa '+a+', jadi '+c+'.',n+'/'+D)}},
/*20*/{t:'Bilangan Desimal',d:'Nilai tempat, perbandingan, dan hubungan dengan pecahan',h:'Angka di kanan koma: persepuluhan, perseratusan. 0,5 = 5/10 = 1/2; 0,25 = 25/100 = 1/4.',gen(){
  const t=rnd(0,3);
  if(t===0){const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,4),n=D[0]*10+D[1]+D[2]/10+D[3]/100,p=rnd(0,1);return mk('Pada bilangan <b>'+dec(n)+'</b>, angka <b>'+(p?'perseratusan':'persepuluhan')+'</b> adalah ...',D[2+p],near(D[2+p],0,9),'Angka pertama setelah koma adalah persepuluhan, angka kedua perseratusan.')}
  if(t===1){let a=rnd(1,99)/10,b=Math.random()<.25?a:a+rnd(-9,9)/10;if(b<=0)b=a+.3;const c=sg(Math.round(a*10),Math.round(b*10));return mk('Tanda yang tepat: <b>'+dec(a)+' ... '+dec(b)+'</b>',c,SIG.filter(x=>x!==c),'Bandingkan bagian bulat dulu, lalu angka di belakang koma.')}
  const P=[[1,2,'0,5'],[1,4,'0,25'],[3,4,'0,75'],[1,5,'0,2'],[2,5,'0,4'],[3,5,'0,6'],[4,5,'0,8'],[1,10,'0,1'],[3,10,'0,3'],[7,10,'0,7'],[9,10,'0,9']],p=pick(P);
  if(t===2)return mk('Pecahan '+fr(p[0],p[1])+' sama dengan desimal ...',p[2],uniq(p[2],P.map(x=>x[2])),fr(p[0],p[1])+' = '+p[2]+'.',p[0]+'/'+p[1]);
  return mk('Desimal <b>'+p[2]+'</b> sama dengan pecahan ...',fr(p[0],p[1]),uniq(fr(p[0],p[1]),shuf(P).map(x=>fr(x[0],x[1]))),p[2]+' = '+fr(p[0],p[1])+'.',p[0]+'/'+p[1])}},
/*21*/{t:'Operasi Bilangan Desimal',d:'Menjumlahkan dan mengurangkan desimal',h:'Sejajarkan tanda koma, lalu tambah atau kurangkan seperti bilangan bulat.',gen(){
  const A=rnd(11,99),B=rnd(11,99),nm=pick(NAMA);
  if(Math.random()<.5){const C=A+B;return Math.random()<.6?mk('<b>'+dec(A/10)+' + '+dec(B/10)+' = ...</b>',dec(C/10),dis(C,[1,10,5],20,200).map(x=>dec(x/10)),dec(A/10)+' + '+dec(B/10)+' = '+dec(C/10)+'.',A+'/10+'+B+'/10'):mk(nm+' berlari '+dec(A/10)+' km pagi hari dan '+dec(B/10)+' km sore hari. Jarak larinya ... km',dec(C/10),dis(C,[1,10,5],20,200).map(x=>dec(x/10)),dec(A/10)+' + '+dec(B/10)+' = '+dec(C/10)+' km.',A+'/10+'+B+'/10')}
  const hi=Math.max(A,B),lo=Math.min(A,B)===hi?hi-3:Math.min(A,B),C=hi-lo;return Math.random()<.6?mk('<b>'+dec(hi/10)+' − '+dec(lo/10)+' = ...</b>',dec(C/10),dis(C,[1,10,5],1,100).map(x=>dec(x/10)),dec(hi/10)+' − '+dec(lo/10)+' = '+dec(C/10)+'.',hi+'/10-'+lo+'/10'):mk(nm+' punya pita '+dec(hi/10)+' m. Dipakai '+dec(lo/10)+' m. Sisa pita ... m',dec(C/10),dis(C,[1,10,5],1,100).map(x=>dec(x/10)),dec(hi/10)+' − '+dec(lo/10)+' = '+dec(C/10)+' m.',hi+'/10-'+lo+'/10')}},
/*22*/{t:'Pengukuran Panjang dan Berat',d:'Konversi satuan panjang dan berat',h:'1 km = 1.000 m; 1 m = 100 cm; 1 kg = 1.000 g; 1 kuintal = 100 kg; 1 ton = 1.000 kg.',gen(){
  const t=rnd(0,5);
  if(t===0){const k=rnd(2,9),m=rnd(1,9)*100,c=k*1000+m;return mk('<b>'+k+' km '+m+' m = ... m</b>',fmt(c),dis(c,[100,1000,10,m],100,20000).map(fmt),k+' km = '+fmt(k*1000)+' m, ditambah '+m+' m = '+fmt(c)+' m.',k+'*1000+'+m)}
  if(t===1){const k=rnd(2,9),g=rnd(1,9)*100,c=k*1000+g;return mk('<b>'+k+' kg '+g+' g = ... g</b>',fmt(c),dis(c,[100,1000,10,g],100,20000).map(fmt),k+' kg = '+fmt(k*1000)+' g, ditambah '+g+' g = '+fmt(c)+' g.',k+'*1000+'+g)}
  if(t===2){const k=rnd(2,9),c=k*100;return mk('<b>'+k+' kuintal = ... kg</b>',c,uniq(c,[c*10,c/10,c+100,c-100,k*1000]),'1 kuintal = 100 kg, jadi '+k+' kuintal = '+c+' kg.',k+'*100')}
  if(t===3){const k=rnd(2,9),c=k*10;return mk('<b>'+k+' kg = ... ons</b>',c,uniq(c,[k*100,k,c+10,c-10<1?c+20:c-10]),'1 kg = 10 ons, jadi '+k+' kg = '+c+' ons.',k+'*10')}
  if(t===4){const k=rnd(2,9),m=rnd(1,9)*10,c=k*100+m;return mk('<b>'+k+' m '+m+' cm = ... cm</b>',c,dis(c,[10,100,m],10,1500),k+' m = '+k*100+' cm, ditambah '+m+' cm = '+c+' cm.',k+'*100+'+m)}
  const k=rnd(2,9),c=k*1000;return mk('<b>'+k+' ton = ... kg</b>',fmt(c),uniq(fmt(c),[fmt(c*10),fmt(c/10),fmt(c+100),fmt(c-100)]),'1 ton = 1.000 kg, jadi '+k+' ton = '+fmt(c)+' kg.',k+'*1000')}},
/*23*/{t:'Pengukuran Waktu',d:'Satuan waktu dan menghitung lama kegiatan',h:'1 jam = 60 menit; 1 menit = 60 detik. Hitung dari jam mulai sampai jam selesai.',gen(){
  const t=rnd(0,3);
  if(t===0){const h=rnd(1,5),m=pick([10,15,20,30,45]),c=h*60+m;return mk('<b>'+h+' jam '+m+' menit = ... menit</b>',c,dis(c,[10,60,m,30],30,400),h+' × 60 = '+h*60+', ditambah '+m+' = '+c+' menit.',h+'*60+'+m)}
  if(t===1){const h=rnd(1,4),m=pick([10,15,20,30,40,45,50]),c=h*60+m,ans=h+' jam '+m+' menit',w=[(h+1)+' jam '+m+' menit',h+' jam '+(m+10)+' menit',m+' jam '+h+' menit',(h-1<1?h+2:h-1)+' jam '+m+' menit'];return mk('<b>'+c+' menit = ...</b>',ans,uniq(ans,w),c+' ÷ 60 = '+h+' sisa '+m+', jadi '+ans+'.',h+'*60+'+m+'==='+c)}
  if(t===2){const s=rnd(6,15)*60+pick([0,15,30,45]),d=rnd(45,200),e=s+d;return mk('Kegiatan dimulai pukul <b>'+t2s(s)+'</b> dan selesai pukul <b>'+t2s(e)+'</b>. Lamanya ... menit',d,dis(d,[10,15,30,60],20,300),'Dari '+t2s(s)+' sampai '+t2s(e)+' = '+d+' menit.',(Math.floor(e/60)*60+e%60)+'-'+(Math.floor(s/60)*60+s%60))}
  const m=rnd(2,9),c=m*60;return mk('<b>'+m+' menit = ... detik</b>',c,dis(c,[10,60,30],30,600),'1 menit = 60 detik, jadi '+m+' menit = '+c+' detik.',m+'*60')}},
/*24*/{t:'Sudut dan Garis',d:'Jenis sudut, penyiku, pelurus, dan hubungan garis',h:'Lancip kurang dari 90°, siku-siku tepat 90°, tumpul antara 90° dan 180°, lurus 180°. Penyiku: 90° − x; pelurus: 180° − x.',gen(){
  const t=rnd(0,3);
  if(t===0){const a=pick([rnd(5,85),90,rnd(95,175),180]),c=a<90?'lancip':a===90?'siku-siku':a<180?'tumpul':'lurus';return mk('Sudut sebesar <b>'+a+'°</b> termasuk sudut ...',c,['lancip','siku-siku','tumpul','lurus'].filter(x=>x!==c),a+'° tergolong sudut '+c+'.')}
  if(t===1){const a=rnd(10,80),c=90-a;return mk('Penyiku dari sudut <b>'+a+'°</b> adalah ...',c+'°',uniq(c+'°',[(180-a)+'°',(a)+'°',(c+10)+'°',(c-5)+'°']),'Penyiku = 90° − '+a+'° = '+c+'°.')}
  if(t===2){const a=rnd(20,160),c=180-a;return mk('Pelurus dari sudut <b>'+a+'°</b> adalah ...',c+'°',uniq(c+'°',[(90-a>0?90-a:a+10)+'°',(c+10)+'°',(c-10)+'°',(360-a)+'°']),'Pelurus = 180° − '+a+'° = '+c+'°.')}
  const F=[['Dua garis yang <b>tidak pernah berpotongan</b> walaupun diperpanjang disebut garis ...','sejajar'],['Dua garis yang berpotongan membentuk sudut <b>90°</b> disebut garis ...','tegak lurus'],['Dua garis yang bertemu di satu titik disebut garis ...','berpotongan'],['Rel kereta api memberi contoh garis ...','sejajar'],['Sisi-sisi yang berdekatan pada persegi merupakan garis ...','tegak lurus']],f=pick(F);
  return mk(f[0],f[1],['sejajar','tegak lurus','berpotongan','berhimpit'].filter(x=>x!==f[1]),'Jawabannya: garis '+f[1]+'.')}},
/*25*/{t:'Keliling Bangun Datar',d:'Keliling persegi, persegi panjang, segitiga, dan mencari sisi',h:'Persegi: 4 × sisi. Persegi panjang: 2 × (p + l). Segitiga: jumlah tiga sisi. Jika keliling diketahui, balik rumusnya.',gen(){
  const t=rnd(0,3);
  if(t===0){const s=rnd(5,60),c=4*s;return mk('Keliling persegi dengan sisi <b>'+s+' cm</b> adalah ... cm',c,uniq(c,[s*s,s*2,c+s,c-4,s+4]),'4 × '+s+' = '+c+' cm.','4*'+s)}
  if(t===1){let p=rnd(8,60),l;do l=rnd(3,p-1);while(l===p);const c=2*(p+l);return mk('Persegi panjang berukuran <b>'+p+' cm × '+l+' cm</b>. Kelilingnya ... cm',c,uniq(c,[p*l,p+l,2*p+l,p+2*l,c+2]),'2 × ('+p+' + '+l+') = '+c+' cm.','2*('+p+'+'+l+')')}
  if(t===2){const a=rnd(5,40),b=rnd(5,40),d=rnd(5,40),k=a+b+d;return mk('Keliling segitiga dengan sisi <b>'+a+' cm, '+b+' cm, '+d+' cm</b> adalah ... cm',k,dis(k,[1,2,5,10],10,130),a+' + '+b+' + '+d+' = '+k+' cm.',a+'+'+b+'+'+d)}
  const p=rnd(12,40),l=rnd(5,p-2),k=2*(p+l);return mk('Keliling persegi panjang <b>'+k+' cm</b>, panjangnya <b>'+p+' cm</b>. Lebarnya ... cm',l,uniq(l,[k/2,k-p,p-l,l+2,l-1]).filter(x=>+x>0).slice(0,3),k+' ÷ 2 = '+k/2+', lalu '+k/2+' − '+p+' = '+l+' cm.',k+'/2-'+p)}},
/*26*/{t:'Luas Persegi dan Persegi Panjang',d:'Menghitung luas dan mencari ukuran',h:'Luas persegi = sisi × sisi. Luas persegi panjang = panjang × lebar. Satuan luas dalam kuadrat, misalnya cm².',gen(){
  const t=rnd(0,3);
  if(t===0){const s=rnd(3,30),c=s*s;return mk('Luas persegi dengan sisi <b>'+s+' cm</b> adalah ... cm²',c,uniq(c,[4*s,s*2,c+s,c-s]),s+' × '+s+' = '+c+' cm².',s+'*'+s)}
  if(t===1){let p=rnd(6,40),l;do l=rnd(3,p-1);while(l===p);const c=p*l;return mk('Luas persegi panjang <b>'+p+' m × '+l+' m</b> adalah ... m²',c,uniq(c,[2*(p+l),p+l,c+p,c-l,2*p*l]),p+' × '+l+' = '+c+' m².',p+'*'+l)}
  if(t===2){const p=rnd(4,20),l=rnd(3,p),L=p*l;return mk('Luas persegi panjang <b>'+L+' cm²</b> dan panjangnya <b>'+p+' cm</b>. Lebarnya ... cm',l,uniq(l,[L-p,p+l,l+2,l-1,L/2]).filter(x=>+x>0).slice(0,3),L+' ÷ '+p+' = '+l+' cm.',L+'/'+p)}
  const s=rnd(4,20),L=s*s,nm=pick(NAMA);return mk('Taman '+nm+' berbentuk persegi dengan sisi '+s+' m. Luas taman ... m²',L,uniq(L,[4*s,2*s,L+s,L-s]),s+' × '+s+' = '+L+' m².',s+'*'+s)}},
/*27*/{t:'Luas dan Keliling Bersama',d:'Mencari keliling dari luas dan sebaliknya',h:'Luas persegi diketahui → cari sisinya dulu (akar), baru hitung keliling. Cari sisi lain dengan membagi.',gen(){
  const t=rnd(0,2);
  if(t===0){const s=rnd(3,25),L=s*s,c=4*s;return mk('Luas sebuah persegi <b>'+L+' cm²</b>. Kelilingnya ... cm',c,uniq(c,[L,2*s,s+4,c+4,L/2]),'Sisi = '+s+' (karena '+s+' × '+s+' = '+L+'). Keliling = 4 × '+s+' = '+c+' cm.',(4*s)+'')}
  if(t===1){const s=rnd(3,25),K=4*s,c=s*s;return mk('Keliling sebuah persegi <b>'+K+' cm</b>. Luasnya ... cm²',c,uniq(c,[K,s*2,c+s,c-s,K*2]),'Sisi = '+K+' ÷ 4 = '+s+'. Luas = '+s+' × '+s+' = '+c+' cm².',s+'*'+s)}
  const p=rnd(8,30),l=rnd(3,p-1),K=2*(p+l),c=p*l;return mk('Keliling persegi panjang <b>'+K+' cm</b> dan panjangnya <b>'+p+' cm</b>. Luasnya ... cm²',c,uniq(c,[K,p+l,c+p,c-l,p*p]),'Lebar = '+K+' ÷ 2 − '+p+' = '+l+'. Luas = '+p+' × '+l+' = '+c+' cm².',p+'*'+l)}},
/*28*/{t:'Soal Cerita Campuran',d:'Cerita dengan beberapa langkah hitung',h:'Tuliskan yang diketahui dan ditanya, lalu pilih operasi tiap langkah. Periksa kembali hasilnya.',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const a=rnd(12,40),b=rnd(12,30),c=rnd(100,500),r=a*b+c;return mk(nm+' memiliki '+a+' dus berisi '+b+' '+it+' tiap dus. Ia menerima '+c+' '+it+' lagi. Jumlah '+it+' sekarang ...',fmt(r),dis(r,[10,100,a,b],100,3000).map(fmt),a+' × '+b+' = '+a*b+', lalu + '+c+' = '+fmt(r)+'.',a+'*'+b+'+'+c)}
  if(t===1){const a=rnd(12,30),b=rnd(12,30),c=rnd(10,100),r=a*b-c;return mk(nm+' membuat '+a+' kotak berisi '+b+' '+it+'. Sebanyak '+c+' '+it+' rusak. Yang masih baik ...',fmt(r),dis(r,[10,100,a,b],100,1500).map(fmt),a+' × '+b+' = '+a*b+', lalu − '+c+' = '+fmt(r)+'.',a+'*'+b+'-'+c)}
  if(t===2){const b=rnd(12,25),q=rnd(15,40),c=rnd(10,60),a=b*q,r=q+c;return mk(fmt(a)+' '+it+' dibagi sama banyak ke '+b+' kotak. Tiap kotak lalu ditambah '+c+' '+it+'. Isi tiap kotak sekarang ...',r,dis(r,[b,c,10,1],10,150),a+' ÷ '+b+' = '+q+', lalu + '+c+' = '+r+'.',a+'/'+b+'+'+c)}
  const a=rnd(3,9),p=pick([2500,3500,4500,6000,7500]),pay=pick([50000,100000]);if(a*p>=pay)return LEVELS[27].gen();const c=pay-a*p;
  return mk(nm+' membeli '+a+' buku seharga '+rp(p)+' per buah. Ia membayar '+rp(pay)+'. Kembaliannya ...',rp(c),uniq(rp(c),[c+p,c-p,c+1000,c-1000,c+5000].filter(x=>x>0).map(rp)),a+' × '+rp(p)+' = '+rp(a*p)+'. Kembalian = '+rp(pay)+' − '+rp(a*p)+' = '+rp(c)+'.',pay+'-'+a+'*'+p)}},
/*29*/{t:'Penalaran dan Pemecahan Masalah',d:'Soal gabungan pecahan, desimal, luas, dan keliling',h:'Baca soal dengan tenang, tentukan konsep yang dipakai (pecahan, luas, keliling, dst.), lalu hitung bertahap.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const D=pick([2,3,4,5]),a=D===2?1:rnd(1,D-1),k=rnd(3,9),n=D*k,c=n-a*k;return mk(nm+' memiliki pita '+n+' m. Sebanyak '+fr(a,D)+' bagian dipakai untuk hadiah. Sisa pita ... m',c,dis(c,[k,a,1,2],1,70),fr(a,D)+' × '+n+' = '+a*k+'. Sisa = '+n+' − '+a*k+' = '+c+' m.',n+'-'+n+'/'+D+'*'+a)}
  if(t===1){const A=rnd(15,60)*100,B=rnd(15,60)*100,C=rnd(15,60)*100,r=A+B+C;return mk(nm+' membeli tiga barang seharga '+rp(A)+', '+rp(B)+', dan '+rp(C)+'. Total belanjanya ...',rp(r),uniq(rp(r),[r+100,r-100,r+500,r-500,r+1000].map(rp)),rp(A)+' + '+rp(B)+' + '+rp(C)+' = '+rp(r)+'.',A+'+'+B+'+'+C)}
  if(t===2){const p=rnd(10,40),l=rnd(5,p-2),K=2*(p+l),L=p*l;return mk('Kebun '+nm+' berbentuk persegi panjang '+p+' m × '+l+' m. Keliling kebun ... m dan luasnya ... m². Jumlah keliling dan luas adalah ...',K+L,dis(K+L,[10,p,l,2],10,2500),'Keliling = '+K+', luas = '+L+'. Jumlah = '+(K+L)+'.','2*('+p+'+'+l+')+'+p+'*'+l)}
  const g=rnd(3,12);let p,q;do{p=rnd(2,6);q=rnd(2,6)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('Pita '+a+' cm dan '+b+' cm dipotong menjadi potongan sama panjang, selebar mungkin, tanpa sisa. Panjang tiap potongan ... cm',g,uniq(g,[g+1,g*2,p,q,1]),'Panjang terbesar = FPB('+a+', '+b+') = '+g+' cm.','gcd('+a+','+b+')')}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',h:'Baca soal dengan tenang, kenali jenis soalnya, lalu kerjakan langkah demi langkah.',gen(){return LEVELS[rnd(13,28)].gen()}}
];

const PREVIEW=[];
