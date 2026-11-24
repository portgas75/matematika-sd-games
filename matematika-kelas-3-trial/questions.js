/* Bank soal Matematika Kelas 3 - TRIAL - Developer: portgas75 */
const GAME={"grade":3,"version":"trial","totalLevels":30,"hint":true};
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
{t:"Bilangan sampai 10.000",d:"Membaca, menulis, dan urutan bilangan ribuan",h:"Bacalah dari angka paling kiri: ribuan, lalu ratusan, puluhan, dan satuan.",gen(){
  const t=rnd(0,3),n=rnd(1001,9999),w=[1,10,100,1000];
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata4(n)+'</b>"?',fmt(n),dis(n,w,1000,10000).map(fmt),kata4(n)+' ditulis '+fmt(n)+'.');
  if(t===1)return mk('Bilangan <b>'+fmt(n)+'</b> dibaca ...',kata4(n),dis(n,w,1000,10000).map(kata4),fmt(n)+' dibaca '+kata4(n)+'.');
  if(t===2){const m=pick([n,1999,2999,3999,4999,5999,6999,7999,8999,9999,5499,6099]);return mk('Bilangan setelah <b>'+fmt(m)+'</b> adalah ...',fmt(m+1),dis(m+1,w,1000,10000).map(fmt),'Setelah '+fmt(m)+' adalah '+fmt(m+1)+'.')}
  const m=pick([n,2000,3000,4000,5000,6000,7000,8000,9000,5100,6010]);return mk('Bilangan sebelum <b>'+fmt(m)+'</b> adalah ...',fmt(m-1),dis(m-1,w,999,10000).map(fmt),'Sebelum '+fmt(m)+' adalah '+fmt(m-1)+'.')}},
{t:"Nilai Tempat Ribuan",d:"Ribuan, ratusan, puluhan, satuan dan nilai tiap angka",h:"Dari kanan: satuan, puluhan, ratusan, ribuan. Nilai angka = angka × nilai tempatnya.",gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,4),n=D[0]*1000+D[1]*100+D[2]*10+D[3],N=['ribuan','ratusan','puluhan','satuan'],V=[1000,100,10,1];
  if(Math.random()<.45){const p=rnd(0,3);return mk('Angka <b>'+N[p]+'</b> dari bilangan <b>'+fmt(n)+'</b> adalah ...',D[p],near(D[p],0,9),'Pada '+fmt(n)+', angka '+N[p]+' adalah '+D[p]+'.')}
  const p=rnd(0,3),d=D[p],c=d*V[p],o=[d*1000,d*100,d*10,d].filter(x=>x!==c);return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+fmt(n)+'</b> adalah ...',fmt(c),o.map(fmt),'Angka '+d+' berada di tempat '+N[p]+', nilainya '+fmt(c)+'.')}},
{t:"Membandingkan Bilangan Besar",d:"Tanda >, <, = dan mengurutkan bilangan ribuan",h:"Bandingkan angka dari yang paling kiri (ribuan dulu). Jika sama, lanjut ke ratusan.",gen(){
  const t=rnd(0,2);
  if(t===0){let a=rnd(1000,9999),b=Math.random()<.2?a:rnd(1000,9999);if(Math.random()<.5&&b!==a)b=a+rnd(-90,90)||a+7;if(b<1000)b=a+11;
    const c=a>b?'&gt;':a<b?'&lt;':'=';return mk('Tanda yang tepat: <b>'+fmt(a)+' ... '+fmt(b)+'</b>',c,['&gt;','&lt;','='].filter(x=>x!==c),fmt(a)+(a>b?' lebih besar dari ':a<b?' lebih kecil dari ':' sama dengan ')+fmt(b)+'.')}
  if(t===1){const a=shuf(Array.from({length:90},(_,i)=>1000+i*97+rnd(0,50))).slice(0,4),big=Math.random()<.5,c=big?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(big?'besar':'kecil')+' di antara <b>'+a.map(fmt).join(', ')+'</b> adalah ...',fmt(c),a.filter(x=>x!==c).map(fmt),fmt(c)+' paling '+(big?'besar':'kecil')+'.')}
  const a=shuf(Array.from({length:90},(_,i)=>1000+i*97+rnd(0,50))).slice(0,3),big=Math.random()<.5,s=a.slice().sort((x,y)=>big?y-x:x-y),key=x=>x.map(fmt).join(', ');
  const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
  return mk('Urutan dari yang '+(big?'terbesar ke terkecil':'terkecil ke terbesar')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan benar: '+key(s)+'.')}},
{t:"Penjumlahan Bilangan",d:"Penjumlahan bersusun sampai ribuan",h:"Jumlahkan dari satuan. Jika hasilnya 10 atau lebih, simpan ke tempat berikutnya.",gen(){
  const a=rnd(120,6500),b=rnd(120,Math.min(3400,9999-a)),c=a+b;
  if(Math.random()<.6)return mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[1,10,100,1000],100,9999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Toko '+nm+' punya '+fmt(a)+' '+it+'. Lalu datang '+fmt(b)+' '+it+' lagi. Jumlah '+it+' sekarang ...',fmt(c),dis(c,[1,10,100,1000],100,9999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}},
{t:"Pengurangan Bilangan",d:"Pengurangan bersusun dengan meminjam",h:"Kurangkan dari satuan. Jika angka atas lebih kecil, pinjam 1 dari tempat di sebelah kirinya.",gen(){
  const a=rnd(1200,9999),b=rnd(120,a-100),c=a-b;
  if(Math.random()<.6)return mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[1,10,100,1000],0,9999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Gudang '+nm+' punya '+fmt(a)+' '+it+'. Sebanyak '+fmt(b)+' '+it+' dijual. Sisa '+it+' ...',fmt(c),dis(c,[1,10,100,1000],0,9999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}},
{t:"Perkalian Dasar 1–10",d:"Perkalian bilangan 1 sampai 10",h:"Ingat tabel perkalian. Perkalian adalah penjumlahan berulang, misalnya 4 × 3 = 4 + 4 + 4.",gen(){
  const a=rnd(2,10),b=rnd(2,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2],0,100),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+a+' × __ = '+c+'</b>',b,near(b,1,12),a+' × '+b+' = '+c+'.',a+'*'+b+'==='+c);
  const it=pick(BENDA)[1];return mk('Ada '+a+' kotak. Tiap kotak berisi '+b+' '+it+'. Jumlah seluruh '+it+' ...',c,dis(c,[a,b,1,2],0,100),a+' × '+b+' = '+c+'.',a+'*'+b)}},
{t:"Pembagian Dasar",d:"Pembagian sebagai kebalikan perkalian",h:"Pembagian adalah kebalikan perkalian. Untuk 24 ÷ 4, tanyakan: 4 × berapa = 24?",gen(){
  const b=rnd(2,10),c=rnd(2,10),a=b*c,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' ÷ '+b+' = ...</b>',c,dis(c,[1,2,b],1,12),b+' × '+c+' = '+a+', jadi '+a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  if(t===1)return mk('<b>'+a+' ÷ __ = '+c+'</b>',b,near(b,2,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b+'==='+c);
  const it=pick(BENDA)[1];return mk(a+' '+it+' dibagi sama banyak kepada '+b+' anak. Tiap anak mendapat ... '+it,c,dis(c,[1,2,b],1,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
{t:"Perkalian Bilangan Dua Angka",d:"Perkalian bilangan dua angka dengan satu angka",h:"Kalikan satuan dulu, lalu puluhan. Jika hasil 10 atau lebih, simpan ke tempat berikutnya.",gen(){
  const a=rnd(11,99),b=rnd(2,9),c=a*b;
  if(Math.random()<.65)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[10,a,b,1],0,900),a+' × '+b+' = '+c+'.',a+'*'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membeli '+b+' kantong '+it+'. Setiap kantong berisi '+a+' '+it+'. Jumlah '+it+' seluruhnya ...',c,dis(c,[10,a,b,1],0,900),b+' × '+a+' = '+c+'.',a+'*'+b)}},
{t:"Pembagian Bilangan Besar",d:"Pembagian bilangan sampai ratusan dengan satu angka",h:"Bagi dari angka paling kiri. Periksa jawabanmu dengan mengalikan hasil dan pembaginya.",gen(){
  const b=rnd(2,9),c=rnd(11,99),a=b*c;
  if(Math.random()<.65)return mk('<b>'+a+' ÷ '+b+' = ...</b>',c,dis(c,[10,1,2,b],5,100),b+' × '+c+' = '+a+', jadi '+a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membagi '+a+' '+it+' sama banyak ke '+b+' kotak. Tiap kotak berisi ... '+it,c,dis(c,[10,1,2,b],5,100),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
{t:"Pecahan Sederhana",d:"Mengenal pecahan dari gambar, pembilang, penyebut, dan cara baca",h:"Penyebut (angka bawah) adalah banyak bagian seluruhnya. Pembilang (angka atas) adalah bagian yang diambil.",gen(){
  const D=pick([2,3,4,5,6,8]),a=D===2?1:rnd(1,D-1),t=rnd(0,2);
  if(t===0){const c=fr(a,D),w=shuf([fr(D-a,D),fr(a,D+1),fr(a+1<D?a+1:a-1||2,D),fr(D,a),fr(a,D-1>a?D-1:D+2)].filter(x=>x!==c));
    return mk('Bagian <b>biru</b> adalah ... dari seluruhnya.<div class="vis">'+'🟦'.repeat(a)+'⬜'.repeat(D-a)+'</div>',c,Array.from(new Set(w)).slice(0,3),'Ada '+D+' bagian sama besar, '+a+' bagian berwarna biru. Jadi '+a+'/'+D+'.')}
  if(t===1){const w=pick(['pembilang','penyebut']),c=w==='pembilang'?a:D;return mk('Pada pecahan '+fr(a,D)+', <b>'+w+'</b>nya adalah ...',c,near(c,1,10),'Angka atas adalah pembilang ('+a+') dan angka bawah adalah penyebut ('+D+').')}
  const pool=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[3,8],[5,8]],P=pick(pool),w=pool.filter(x=>baca(x[0],x[1])!==baca(P[0],P[1]));
  return mk('Pecahan '+fr(P[0],P[1])+' dibaca ...',baca(P[0],P[1]),shuf(w).slice(0,3).map(x=>baca(x[0],x[1])),fr(P[0],P[1])+' dibaca '+baca(P[0],P[1])+'.')}}
];
const PREVIEW=[
{t:"Pecahan Senilai",d:"Mencari pecahan yang nilainya sama"},
{t:"Membandingkan Pecahan",d:"Membandingkan pecahan berpenyebut sama atau berpembilang sama"},
{t:"Mengurutkan Pecahan",d:"Mengurutkan pecahan dari kecil ke besar atau sebaliknya"},
{t:"Pecahan dari Sekumpulan Benda",d:"Menentukan pecahan dari jumlah benda"},
{t:"Perkalian dengan Menyimpan",d:"Perkalian dua dan tiga angka dengan satu angka"},
{t:"Perkalian Puluhan dan Ratusan",d:"Perkalian dengan 10, 100, puluhan, dan ratusan"},
{t:"Pembagian dengan Sisa",d:"Pembagian yang tidak habis dibagi"},
{t:"Soal Cerita Tambah Kurang",d:"Cerita dengan bilangan ribuan"},
{t:"Soal Cerita Perkalian",d:"Cerita perkalian sehari-hari, termasuk uang"},
{t:"Soal Cerita Pembagian",d:"Cerita pembagian rata dan pengelompokan"},
{t:"Pengukuran Panjang",d:"Satuan km, m, cm, mm dan soal ceritanya"},
{t:"Pengukuran Berat",d:"Satuan ton, kg, g dan soal ceritanya"},
{t:"Pengukuran Waktu",d:"Jam, menit, detik, dan menghitung lama waktu"},
{t:"Keliling Persegi dan Persegi Panjang",d:"Menghitung keliling persegi dan persegi panjang"},
{t:"Keliling Segitiga dan Mencari Sisi",d:"Keliling segitiga dan mencari panjang sisi"},
{t:"Membaca Tabel",d:"Membaca dan menghitung data dari tabel"},
{t:"Membaca Diagram Gambar",d:"Membaca piktogram dan menghitung datanya"},
{t:"Penalaran Dua Langkah",d:"Soal cerita dua langkah hitung"},
{t:"Pemecahan Masalah",d:"Soal cerita gabungan keliling, waktu, dan pecahan"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
