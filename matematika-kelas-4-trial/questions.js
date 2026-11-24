/* Bank soal Matematika Kelas 4 - TRIAL - Developer: portgas75 */
const GAME={"grade":4,"version":"trial","totalLevels":30,"hint":true};
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

const LEVELS=[
{t:"Bilangan sampai 100.000",d:"Membaca, menulis, dan urutan bilangan sampai seratus ribu",h:"Baca dari kiri: puluh ribuan, ribuan, ratusan, puluhan, satuan. Titik memisahkan setiap tiga angka.",gen(){
  const t=rnd(0,3),n=rnd(10001,99999),w=[1,10,100,1000,10000];
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata5(n)+'</b>"?',fmt(n),dis(n,w,10000,100000).map(fmt),kata5(n)+' ditulis '+fmt(n)+'.');
  if(t===1)return mk('Bilangan <b>'+fmt(n)+'</b> dibaca ...',kata5(n),dis(n,w,10000,100000).map(kata5),fmt(n)+' dibaca '+kata5(n)+'.');
  if(t===2){const m=pick([n,19999,29999,49999,69999,89999,99999,45099]);return mk('Bilangan setelah <b>'+fmt(m)+'</b> adalah ...',fmt(m+1),dis(m+1,w,10000,100000).map(fmt),'Setelah '+fmt(m)+' adalah '+fmt(m+1)+'.')}
  const m=pick([n,20000,30000,50000,70000,90000,100000,45100]);return mk('Bilangan sebelum <b>'+fmt(m)+'</b> adalah ...',fmt(m-1),dis(m-1,w,9999,100000).map(fmt),'Sebelum '+fmt(m)+' adalah '+fmt(m-1)+'.')}},
{t:"Nilai Tempat dan Perbandingan",d:"Nilai tempat dan membandingkan bilangan besar",h:"Dari kanan: satuan, puluhan, ratusan, ribuan, puluh ribuan. Bandingkan angka dari yang paling kiri.",gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,5),n=D[0]*10000+D[1]*1000+D[2]*100+D[3]*10+D[4],N=['puluh ribuan','ribuan','ratusan','puluhan','satuan'],V=[10000,1000,100,10,1],t=rnd(0,3);
  if(t===0){const p=rnd(0,4);return mk('Angka <b>'+N[p]+'</b> dari bilangan <b>'+fmt(n)+'</b> adalah ...',D[p],near(D[p],0,9),'Pada '+fmt(n)+', angka '+N[p]+' adalah '+D[p]+'.')}
  if(t===1){const p=rnd(0,4),d=D[p],c=d*V[p];return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+fmt(n)+'</b> adalah ...',fmt(c),uniq(c,V.map(v=>d*v).concat([d*100000])).map(fmt),'Angka '+d+' di tempat '+N[p]+', nilainya '+fmt(c)+'.')}
  if(t===2){let a=rnd(10000,99999),b=Math.random()<.2?a:a+rnd(-900,900);if(b<10000||b===a&&Math.random()<.5)b=a+rnd(1,99);const c=sg(a,b);return mk('Tanda yang tepat: <b>'+fmt(a)+' ... '+fmt(b)+'</b>',c,SIG.filter(x=>x!==c),fmt(a)+(a>b?' lebih besar dari ':a<b?' lebih kecil dari ':' sama dengan ')+fmt(b)+'.')}
  const a=shuf(Array.from({length:80},(_,i)=>10000+i*1117+rnd(0,99))).slice(0,4),big=Math.random()<.5,c=big?Math.max.apply(null,a):Math.min.apply(null,a);
  return mk('Bilangan yang paling '+(big?'besar':'kecil')+' di antara <b>'+a.map(fmt).join(', ')+'</b> adalah ...',fmt(c),a.filter(x=>x!==c).map(fmt),fmt(c)+' paling '+(big?'besar':'kecil')+'.')}},
{t:"Tambah Kurang Bilangan Besar",d:"Penjumlahan dan pengurangan sampai ratusan ribu",h:"Susun ke bawah sesuai nilai tempat. Tambah atau kurangkan dari satuan, simpan atau pinjam bila perlu.",gen(){
  const nm=pick(NAMA),it=pick(BENDA)[1];
  if(Math.random()<.5){const a=rnd(12000,60000),b=rnd(5000,Math.min(39999,99999-a)),c=a+b;
    return Math.random()<.6?mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b):mk('Pabrik '+nm+' membuat '+fmt(a)+' '+it+' bulan lalu dan '+fmt(b)+' '+it+' bulan ini. Jumlahnya ...',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}
  const a=rnd(30000,99999),b=rnd(2000,a-1000),c=a-b;
  return Math.random()<.6?mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],0,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b):mk('Gudang '+nm+' menyimpan '+fmt(a)+' '+it+'. Sebanyak '+fmt(b)+' '+it+' dikirim. Sisa ...',fmt(c),dis(c,[10,100,1000,10000],0,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}},
{t:"Kali dan Bagi Bilangan Besar",d:"Perkalian dua angka dan pembagian bersusun",h:"Perkalian: kalikan satuan, lalu puluhan (geser satu tempat), lalu jumlahkan. Pembagian: periksa dengan perkalian.",gen(){
  const t=rnd(0,2),nm=pick(NAMA),it=pick(BENDA)[1];
  if(t===0){const a=rnd(12,99),b=rnd(11,60),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,a,b],100,6000).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}
  if(t===1){const b=rnd(11,30),q=rnd(12,99),a=b*q;return mk('<b>'+fmt(a)+' ÷ '+b+' = ...</b>',q,dis(q,[1,10,b,2],5,120),b+' × '+q+' = '+fmt(a)+', jadi '+fmt(a)+' ÷ '+b+' = '+q+'.',a+'/'+b)}
  const a=rnd(12,48),b=rnd(12,40),c=a*b;return mk(nm+' membeli '+a+' dus '+it+'. Tiap dus berisi '+b+' '+it+'. Jumlah '+it+' seluruhnya ...',fmt(c),dis(c,[10,100,a,b],100,2000).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}},
{t:"Operasi Hitung Campuran",d:"Urutan pengerjaan: kali dan bagi dulu, lalu tambah dan kurang",h:"Urutan: kerjakan tanda kurung dulu, lalu × dan ÷, terakhir + dan −.",gen(){
  const f=rnd(0,4);let r,w,show;
  if(f===0){const a=rnd(5,60),b=rnd(2,12),c=rnd(2,12);r=a+b*c;w=(a+b)*c;show=a+' + '+b+' × '+c}
  else if(f===1){const a=rnd(2,12),b=rnd(2,12),c=rnd(2,40);if(a*b<=c)return LEVELS[4].gen();r=a*b-c;w=a*(b-c);show=a+' × '+b+' − '+c}
  else if(f===2){const c=rnd(2,9),q=rnd(2,12),b=c*q,a=rnd(b+1,b+60);r=a-q;w=(a-b)/c;show=a+' − '+b+' ÷ '+c}
  else if(f===3){const a=rnd(20,90),b=rnd(2,9),c=rnd(2,9),d=rnd(2,20);r=a+b*c-d;w=(a+b)*c-d;show=a+' + '+b+' × '+c+' − '+d}
  else{const a=rnd(2,15),b=rnd(2,15),c=rnd(2,9);r=(a+b)*c;w=a+b*c;show='('+a+' + '+b+') × '+c}
  const ex={0:()=>'',1:()=>'',2:()=>'',3:()=>'',4:()=>''};
  const ck=['a+b*c','a*b-c','a-b/c','a+b*c-d','(a+b)*c'][f];
  return mk('<b>'+show+' = ...</b>',r,uniq(r,[w,r+1,r-1,r+10,r-10,r*2].filter(x=>Number.isInteger(x)&&x>0)),'Kerjakan perkalian, pembagian, atau tanda kurung lebih dulu. Hasilnya '+r+'.',show.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-'))}},
{t:"Faktor Bilangan",d:"Menentukan faktor dan banyak faktor",h:"Faktor adalah bilangan yang habis membagi. Cari pasangan perkalian, misalnya 12 = 1×12 = 2×6 = 3×4.",gen(){
  const t=rnd(0,2);
  if(t===0){let n;do n=rnd(12,60);while(isPrime(n));const d=divs(n),nd=Array.from({length:n},(_,i)=>i+2).filter(x=>n%x!==0&&x<n),c=pick(d.filter(x=>x>1&&x<n));return mk('Manakah yang merupakan <b>faktor</b> dari <b>'+n+'</b>?',c,shuf(nd).slice(0,3),n+' ÷ '+c+' = '+n/c+' (habis dibagi), jadi '+c+' faktor dari '+n+'.',n+'%'+c+'===0')}
  if(t===1){const n=pick([6,8,10,12,14,15,16,18,20,24,28,30,32,36]),c=divs(n).length;return mk('Banyak faktor dari <b>'+n+'</b> adalah ...',c,near(c,2,12),'Faktor dari '+n+': '+divs(n).join(', ')+'. Banyaknya '+c+'.','divs('+n+').length')}
  let n;do n=rnd(12,48);while(divs(n).length<5);const d=divs(n).filter(x=>x>1&&x<n),c=pick(Array.from({length:n-2},(_,i)=>i+2).filter(x=>n%x!==0));return mk('Manakah yang <b>bukan</b> faktor dari <b>'+n+'</b>?',c,shuf(d).slice(0,3),n+' tidak habis dibagi '+c+', jadi bukan faktor.',n+'%'+c+'!==0')}},
{t:"Kelipatan Bilangan",d:"Kelipatan dan kelipatan terdekat",h:"Kelipatan diperoleh dengan mengalikan bilangan itu dengan 1, 2, 3, dan seterusnya.",gen(){
  const t=rnd(0,2),k=rnd(3,12);
  if(t===0){const m=rnd(4,12),c=k*m;return mk('Kelipatan <b>'+k+'</b> yang ke-<b>'+m+'</b> adalah ...',c,dis(c,[k,1,2*k],k,150),k+' × '+m+' = '+c+'.',k+'*'+m)}
  if(t===1){const m=rnd(3,12),c=k*m,w=Array.from({length:14},(_,i)=>c+i-7).filter(x=>x%k!==0&&x>1);return mk('Manakah yang merupakan <b>kelipatan '+k+'</b>?',c,shuf(w).slice(0,3),c+' ÷ '+k+' = '+m+', jadi '+c+' kelipatan '+k+'.',c+'%'+k+'===0')}
  const n=rnd(30,90),c=(Math.floor(n/k)+1)*k;return mk('Kelipatan <b>'+k+'</b> pertama yang lebih besar dari <b>'+n+'</b> adalah ...',c,dis(c,[k,2*k,1],k,200),'Kelipatan '+k+' terdekat di atas '+n+' adalah '+c+'.','(Math.floor('+n+'/'+k+')+1)*'+k)}},
{t:"Bilangan Prima",d:"Mengenal bilangan prima dan komposit",h:"Bilangan prima hanya punya dua faktor: 1 dan dirinya sendiri. Contoh: 2, 3, 5, 7, 11, 13.",gen(){
  const P=Array.from({length:49},(_,i)=>i+2).filter(isPrime),C=Array.from({length:49},(_,i)=>i+2).filter(x=>!isPrime(x)),t=rnd(0,3);
  if(t===0){const c=pick(P);return mk('Manakah yang merupakan bilangan <b>prima</b>?',c,shuf(C).slice(0,3),c+' hanya habis dibagi 1 dan '+c+'.','isPrime('+c+')')}
  if(t===1){const c=pick(C);return mk('Manakah yang <b>bukan</b> bilangan prima?',c,shuf(P).slice(0,3),c+' punya faktor selain 1 dan '+c+': '+divs(c).join(', ')+'.','!isPrime('+c+')')}
  if(t===2){const N=pick([10,20,30,40,50]),c=P.filter(x=>x<N).length;return mk('Banyak bilangan prima yang kurang dari <b>'+N+'</b> adalah ...',c,near(c,2,16),'Bilangan prima kurang dari '+N+': '+P.filter(x=>x<N).join(', ')+'.','Array.from({length:'+N+'},(_,i)=>i).filter(isPrime).length')}
  return mk('Satu-satunya bilangan prima yang <b>genap</b> adalah ...',2,[4,6,8],'Bilangan genap lain habis dibagi 2, sehingga punya lebih dari dua faktor.','isPrime(2)')}},
{t:"FPB",d:"Faktor Persekutuan Terbesar dua bilangan",h:"Tulis faktor kedua bilangan, cari yang sama, lalu ambil yang terbesar.",gen(){
  const g=rnd(2,9);let p,q;do{p=rnd(1,6);q=rnd(1,6)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;
  return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[p,q,lcm(a,b),Math.abs(a-b),g+1,g*2,1]),'Faktor '+a+': '+divs(a).join(', ')+'. Faktor '+b+': '+divs(b).join(', ')+'. FPB = '+g+'.','gcd('+a+','+b+')')}},
{t:"KPK",d:"Kelipatan Persekutuan Terkecil dua bilangan",h:"Tulis kelipatan kedua bilangan, cari yang sama pertama kali. Itulah KPK-nya.",gen(){
  let a,b;do{a=rnd(2,12);b=rnd(2,12)}while(a===b);const c=lcm(a,b);
  return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,gcd(a,b),a+b,c*2,c+a,c+b,Math.max(a,b)]).slice(0,3),'Kelipatan '+a+' dan '+b+' pertama yang sama adalah '+c+'.','lcm('+a+','+b+')')}}
];
const PREVIEW=[
{t:"Faktorisasi Prima",d:"Pohon faktor dan bentuk perkalian prima"},
{t:"FPB dengan Faktorisasi",d:"FPB dua dan tiga bilangan yang lebih besar"},
{t:"KPK Bilangan Lebih Besar",d:"KPK dua dan tiga bilangan"},
{t:"Soal Cerita FPB dan KPK",d:"Cerita pembagian kelompok dan jadwal bersamaan"},
{t:"Pecahan Senilai",d:"Pecahan yang nilainya sama"},
{t:"Menyederhanakan Pecahan",d:"Pecahan paling sederhana"},
{t:"Penjumlahan Pecahan",d:"Menjumlahkan pecahan berpenyebut sama dan berbeda"},
{t:"Pengurangan Pecahan",d:"Mengurangkan pecahan berpenyebut sama dan berbeda"},
{t:"Pecahan Campuran",d:"Mengubah pecahan campuran dan pecahan biasa"},
{t:"Bilangan Desimal",d:"Nilai tempat, perbandingan, dan hubungan dengan pecahan"},
{t:"Operasi Bilangan Desimal",d:"Menjumlahkan dan mengurangkan desimal"},
{t:"Pengukuran Panjang dan Berat",d:"Konversi satuan panjang dan berat"},
{t:"Pengukuran Waktu",d:"Satuan waktu dan menghitung lama kegiatan"},
{t:"Sudut dan Garis",d:"Jenis sudut, penyiku, pelurus, dan hubungan garis"},
{t:"Keliling Bangun Datar",d:"Keliling persegi, persegi panjang, segitiga, dan mencari sisi"},
{t:"Luas Persegi dan Persegi Panjang",d:"Menghitung luas dan mencari ukuran"},
{t:"Luas dan Keliling Bersama",d:"Mencari keliling dari luas dan sebaliknya"},
{t:"Soal Cerita Campuran",d:"Cerita dengan beberapa langkah hitung"},
{t:"Penalaran dan Pemecahan Masalah",d:"Soal gabungan pecahan, desimal, luas, dan keliling"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
