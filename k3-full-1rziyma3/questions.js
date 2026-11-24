/* Bank soal Matematika Kelas 3 - FULL - Developer: portgas75 */
const GAME={"grade":3,"version":"full","totalLevels":30,"hint":true};
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

/* Level Kelas 3 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Bilangan sampai 10.000',d:'Membaca, menulis, dan urutan bilangan ribuan',h:'Bacalah dari angka paling kiri: ribuan, lalu ratusan, puluhan, dan satuan.',gen(){
  const t=rnd(0,3),n=rnd(1001,9999),w=[1,10,100,1000];
  if(t===0)return mk('Angka berapa yang dibaca "<b>'+kata4(n)+'</b>"?',fmt(n),dis(n,w,1000,10000).map(fmt),kata4(n)+' ditulis '+fmt(n)+'.');
  if(t===1)return mk('Bilangan <b>'+fmt(n)+'</b> dibaca ...',kata4(n),dis(n,w,1000,10000).map(kata4),fmt(n)+' dibaca '+kata4(n)+'.');
  if(t===2){const m=pick([n,1999,2999,3999,4999,5999,6999,7999,8999,9999,5499,6099]);return mk('Bilangan setelah <b>'+fmt(m)+'</b> adalah ...',fmt(m+1),dis(m+1,w,1000,10000).map(fmt),'Setelah '+fmt(m)+' adalah '+fmt(m+1)+'.')}
  const m=pick([n,2000,3000,4000,5000,6000,7000,8000,9000,5100,6010]);return mk('Bilangan sebelum <b>'+fmt(m)+'</b> adalah ...',fmt(m-1),dis(m-1,w,999,10000).map(fmt),'Sebelum '+fmt(m)+' adalah '+fmt(m-1)+'.')}},
/*2*/{t:'Nilai Tempat Ribuan',d:'Ribuan, ratusan, puluhan, satuan dan nilai tiap angka',h:'Dari kanan: satuan, puluhan, ratusan, ribuan. Nilai angka = angka × nilai tempatnya.',gen(){
  const D=shuf([1,2,3,4,5,6,7,8,9]).slice(0,4),n=D[0]*1000+D[1]*100+D[2]*10+D[3],N=['ribuan','ratusan','puluhan','satuan'],V=[1000,100,10,1];
  if(Math.random()<.45){const p=rnd(0,3);return mk('Angka <b>'+N[p]+'</b> dari bilangan <b>'+fmt(n)+'</b> adalah ...',D[p],near(D[p],0,9),'Pada '+fmt(n)+', angka '+N[p]+' adalah '+D[p]+'.')}
  const p=rnd(0,3),d=D[p],c=d*V[p],o=[d*1000,d*100,d*10,d].filter(x=>x!==c);return mk('Nilai angka <b>'+d+'</b> pada bilangan <b>'+fmt(n)+'</b> adalah ...',fmt(c),o.map(fmt),'Angka '+d+' berada di tempat '+N[p]+', nilainya '+fmt(c)+'.')}},
/*3*/{t:'Membandingkan Bilangan Besar',d:'Tanda >, <, = dan mengurutkan bilangan ribuan',h:'Bandingkan angka dari yang paling kiri (ribuan dulu). Jika sama, lanjut ke ratusan.',gen(){
  const t=rnd(0,2);
  if(t===0){let a=rnd(1000,9999),b=Math.random()<.2?a:rnd(1000,9999);if(Math.random()<.5&&b!==a)b=a+rnd(-90,90)||a+7;if(b<1000)b=a+11;
    const c=a>b?'&gt;':a<b?'&lt;':'=';return mk('Tanda yang tepat: <b>'+fmt(a)+' ... '+fmt(b)+'</b>',c,['&gt;','&lt;','='].filter(x=>x!==c),fmt(a)+(a>b?' lebih besar dari ':a<b?' lebih kecil dari ':' sama dengan ')+fmt(b)+'.')}
  if(t===1){const a=shuf(Array.from({length:90},(_,i)=>1000+i*97+rnd(0,50))).slice(0,4),big=Math.random()<.5,c=big?Math.max.apply(null,a):Math.min.apply(null,a);
    return mk('Bilangan yang paling '+(big?'besar':'kecil')+' di antara <b>'+a.map(fmt).join(', ')+'</b> adalah ...',fmt(c),a.filter(x=>x!==c).map(fmt),fmt(c)+' paling '+(big?'besar':'kecil')+'.')}
  const a=shuf(Array.from({length:90},(_,i)=>1000+i*97+rnd(0,50))).slice(0,3),big=Math.random()<.5,s=a.slice().sort((x,y)=>big?y-x:x-y),key=x=>x.map(fmt).join(', ');
  const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
  return mk('Urutan dari yang '+(big?'terbesar ke terkecil':'terkecil ke terbesar')+' adalah ...',key(s),shuf(perms).slice(0,3),'Urutan benar: '+key(s)+'.')}},
/*4*/{t:'Penjumlahan Bilangan',d:'Penjumlahan bersusun sampai ribuan',h:'Jumlahkan dari satuan. Jika hasilnya 10 atau lebih, simpan ke tempat berikutnya.',gen(){
  const a=rnd(120,6500),b=rnd(120,Math.min(3400,9999-a)),c=a+b;
  if(Math.random()<.6)return mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[1,10,100,1000],100,9999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Toko '+nm+' punya '+fmt(a)+' '+it+'. Lalu datang '+fmt(b)+' '+it+' lagi. Jumlah '+it+' sekarang ...',fmt(c),dis(c,[1,10,100,1000],100,9999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}},
/*5*/{t:'Pengurangan Bilangan',d:'Pengurangan bersusun dengan meminjam',h:'Kurangkan dari satuan. Jika angka atas lebih kecil, pinjam 1 dari tempat di sebelah kirinya.',gen(){
  const a=rnd(1200,9999),b=rnd(120,a-100),c=a-b;
  if(Math.random()<.6)return mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[1,10,100,1000],0,9999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk('Gudang '+nm+' punya '+fmt(a)+' '+it+'. Sebanyak '+fmt(b)+' '+it+' dijual. Sisa '+it+' ...',fmt(c),dis(c,[1,10,100,1000],0,9999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}},
/*6*/{t:'Perkalian Dasar 1–10',d:'Perkalian bilangan 1 sampai 10',h:'Ingat tabel perkalian. Perkalian adalah penjumlahan berulang, misalnya 4 × 3 = 4 + 4 + 4.',gen(){
  const a=rnd(2,10),b=rnd(2,10),c=a*b,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[a,b,1,2],0,100),a+' × '+b+' = '+c+'.',a+'*'+b);
  if(t===1)return mk('<b>'+a+' × __ = '+c+'</b>',b,near(b,1,12),a+' × '+b+' = '+c+'.',a+'*'+b+'==='+c);
  const it=pick(BENDA)[1];return mk('Ada '+a+' kotak. Tiap kotak berisi '+b+' '+it+'. Jumlah seluruh '+it+' ...',c,dis(c,[a,b,1,2],0,100),a+' × '+b+' = '+c+'.',a+'*'+b)}},
/*7*/{t:'Pembagian Dasar',d:'Pembagian sebagai kebalikan perkalian',h:'Pembagian adalah kebalikan perkalian. Untuk 24 ÷ 4, tanyakan: 4 × berapa = 24?',gen(){
  const b=rnd(2,10),c=rnd(2,10),a=b*c,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' ÷ '+b+' = ...</b>',c,dis(c,[1,2,b],1,12),b+' × '+c+' = '+a+', jadi '+a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  if(t===1)return mk('<b>'+a+' ÷ __ = '+c+'</b>',b,near(b,2,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b+'==='+c);
  const it=pick(BENDA)[1];return mk(a+' '+it+' dibagi sama banyak kepada '+b+' anak. Tiap anak mendapat ... '+it,c,dis(c,[1,2,b],1,12),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
/*8*/{t:'Perkalian Bilangan Dua Angka',d:'Perkalian bilangan dua angka dengan satu angka',h:'Kalikan satuan dulu, lalu puluhan. Jika hasil 10 atau lebih, simpan ke tempat berikutnya.',gen(){
  const a=rnd(11,99),b=rnd(2,9),c=a*b;
  if(Math.random()<.65)return mk('<b>'+a+' × '+b+' = ...</b>',c,dis(c,[10,a,b,1],0,900),a+' × '+b+' = '+c+'.',a+'*'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membeli '+b+' kantong '+it+'. Setiap kantong berisi '+a+' '+it+'. Jumlah '+it+' seluruhnya ...',c,dis(c,[10,a,b,1],0,900),b+' × '+a+' = '+c+'.',a+'*'+b)}},
/*9*/{t:'Pembagian Bilangan Besar',d:'Pembagian bilangan sampai ratusan dengan satu angka',h:'Bagi dari angka paling kiri. Periksa jawabanmu dengan mengalikan hasil dan pembaginya.',gen(){
  const b=rnd(2,9),c=rnd(11,99),a=b*c;
  if(Math.random()<.65)return mk('<b>'+a+' ÷ '+b+' = ...</b>',c,dis(c,[10,1,2,b],5,100),b+' × '+c+' = '+a+', jadi '+a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membagi '+a+' '+it+' sama banyak ke '+b+' kotak. Tiap kotak berisi ... '+it,c,dis(c,[10,1,2,b],5,100),a+' ÷ '+b+' = '+c+'.',a+'/'+b)}},
/*10*/{t:'Pecahan Sederhana',d:'Mengenal pecahan dari gambar, pembilang, penyebut, dan cara baca',h:'Penyebut (angka bawah) adalah banyak bagian seluruhnya. Pembilang (angka atas) adalah bagian yang diambil.',gen(){
  const D=pick([2,3,4,5,6,8]),a=D===2?1:rnd(1,D-1),t=rnd(0,2);
  if(t===0){const c=fr(a,D),w=shuf([fr(D-a,D),fr(a,D+1),fr(a+1<D?a+1:a-1||2,D),fr(D,a),fr(a,D-1>a?D-1:D+2)].filter(x=>x!==c));
    return mk('Bagian <b>biru</b> adalah ... dari seluruhnya.<div class="vis">'+'🟦'.repeat(a)+'⬜'.repeat(D-a)+'</div>',c,Array.from(new Set(w)).slice(0,3),'Ada '+D+' bagian sama besar, '+a+' bagian berwarna biru. Jadi '+a+'/'+D+'.')}
  if(t===1){const w=pick(['pembilang','penyebut']),c=w==='pembilang'?a:D;return mk('Pada pecahan '+fr(a,D)+', <b>'+w+'</b>nya adalah ...',c,near(c,1,10),'Angka atas adalah pembilang ('+a+') dan angka bawah adalah penyebut ('+D+').')}
  const pool=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[3,8],[5,8]],P=pick(pool),w=pool.filter(x=>baca(x[0],x[1])!==baca(P[0],P[1]));
  return mk('Pecahan '+fr(P[0],P[1])+' dibaca ...',baca(P[0],P[1]),shuf(w).slice(0,3).map(x=>baca(x[0],x[1])),fr(P[0],P[1])+' dibaca '+baca(P[0],P[1])+'.')}},
/*11*/{t:'Pecahan Senilai',d:'Mencari pecahan yang nilainya sama',h:'Kalikan pembilang dan penyebut dengan bilangan yang sama, nilai pecahan tidak berubah.',gen(){
  const D=pick([2,3,4,5]),a=rnd(1,D-1),k=rnd(2,4),t=rnd(0,2);
  if(t===0)return mk('<b>'+fr(a,D)+' = '+fr('__',D*k)+'</b>',a*k,near(a*k,1,20),'Penyebut dikali '+k+', jadi pembilang juga dikali '+k+': '+a+' × '+k+' = '+a*k+'.',a+'*'+k);
  if(t===1)return mk('<b>'+fr(a,D)+' = '+fr(a*k,'__')+'</b>',D*k,near(D*k,2,24),'Pembilang dikali '+k+', jadi penyebut juga dikali '+k+': '+D+' × '+k+' = '+D*k+'.',D+'*'+k);
  const c=fr(a*k,D*k),w=Array.from(new Set([fr(a*k,D*k+1),fr(a+k,D+k),fr(a*k,D),fr(a,D*k)])).filter(x=>x!==c);
  return mk('Pecahan yang senilai dengan '+fr(a,D)+' adalah ...',c,w.slice(0,3),fr(a,D)+' = '+fr(a*k,D*k)+' (pembilang dan penyebut sama-sama dikali '+k+').')}},
/*12*/{t:'Membandingkan Pecahan',d:'Membandingkan pecahan berpenyebut sama atau berpembilang sama',h:'Penyebut sama: pembilang lebih besar berarti pecahan lebih besar. Pembilang sama: penyebut lebih kecil berarti pecahan lebih besar.',gen(){
  const t=rnd(0,2),sg=(x,y)=>x>y?'&gt;':x<y?'&lt;':'=';
  if(t===0){const D=pick([4,5,6,8,10]),a=rnd(1,D-1);let b=Math.random()<.2?a:rnd(1,D-1);const c=sg(a,b);return mk('Tanda yang tepat: '+fr(a,D)+' <b>...</b> '+fr(b,D),c,['&gt;','&lt;','='].filter(x=>x!==c),'Penyebut sama, bandingkan pembilang: '+a+' dan '+b+'.')}
  if(t===1){const n=rnd(1,3);let d1=rnd(n+2,10),d2;do d2=rnd(n+2,10);while(d2===d1);const c=sg(d2,d1);return mk('Tanda yang tepat: '+fr(n,d1)+' <b>...</b> '+fr(n,d2),c,['&gt;','&lt;','='].filter(x=>x!==c),'Pembilang sama. Penyebut lebih kecil berarti pecahan lebih besar.')}
  const D=pick([5,6,8,10]),a=shuf(Array.from({length:D-1},(_,i)=>i+1)).slice(0,3),big=Math.random()<.5,m=big?Math.max.apply(null,a):Math.min.apply(null,a);
  return mk('Pecahan yang paling <b>'+(big?'besar':'kecil')+'</b> adalah ...',fr(m,D),a.filter(x=>x!==m).map(x=>fr(x,D)),'Penyebut sama ('+D+'), pembilang '+(big?'terbesar':'terkecil')+' adalah '+m+'.')}},
/*13*/{t:'Mengurutkan Pecahan',d:'Mengurutkan pecahan dari kecil ke besar atau sebaliknya',h:'Pecahan berpenyebut sama: urutkan pembilangnya. Pecahan 1 per sekian: makin besar penyebut, makin kecil pecahan.',gen(){
  const asc=Math.random()<.5;let vals,mkf;
  if(Math.random()<.5){const D=pick([5,6,8,9,10]);vals=shuf(Array.from({length:D-1},(_,i)=>i+1)).slice(0,3);mkf=v=>fr(v,D);vals=vals.map(v=>({k:v,f:mkf(v)}))}
  else{const ds=shuf([2,3,4,5,6,8,10]).slice(0,3);vals=ds.map(d=>({k:1/d,f:fr(1,d)}))}
  const s=vals.slice().sort((x,y)=>asc?x.k-y.k:y.k-x.k),key=x=>x.map(v=>v.f).join(', ');
  const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
  return mk('Urutan dari pecahan <b>'+(asc?'terkecil ke terbesar':'terbesar ke terkecil')+'</b> adalah ...',key(s),shuf(perms).slice(0,3),'Urutan yang benar: '+key(s)+'.')}},
/*14*/{t:'Pecahan dari Sekumpulan Benda',d:'Menentukan pecahan dari jumlah benda',h:'Bagi jumlah benda dengan penyebut, lalu kalikan dengan pembilang.',gen(){
  const D=pick([2,3,4,5]),a=D===2?1:rnd(1,D-1),k=rnd(2,9),n=D*k,c=a*k,it=pick(BENDA)[1];
  return mk(fr(a,D)+' dari <b>'+n+' '+it+'</b> adalah ... '+it,c,dis(c,[k,a,1,2],0,60),n+' ÷ '+D+' = '+k+', lalu × '+a+' = '+c+'.',n+'/'+D+'*'+a)}},
/*15*/{t:'Perkalian dengan Menyimpan',d:'Perkalian dua dan tiga angka dengan satu angka',h:'Kalikan dari satuan, simpan jika hasilnya 10 atau lebih, lalu lanjut ke puluhan dan ratusan.',gen(){
  const three=Math.random()<.4,a=three?rnd(101,333):rnd(23,99),b=three?rnd(2,3):rnd(3,9),c=a*b;
  if(Math.random()<.65)return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,a,b],0,1000).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membeli '+b+' dus '+it+'. Tiap dus berisi '+a+' '+it+'. Jumlah '+it+' ...',fmt(c),dis(c,[10,100,a,b],0,1000).map(fmt),b+' × '+a+' = '+fmt(c)+'.',a+'*'+b)}},
/*16*/{t:'Perkalian Puluhan dan Ratusan',d:'Perkalian dengan 10, 100, puluhan, dan ratusan',h:'Kalikan angka depannya dulu, lalu tambahkan nol di belakang sebanyak nol yang ada.',gen(){
  const t=rnd(0,3);
  if(t===0){const a=rnd(2,99),k=pick([10,100]),c=a*k;return mk('<b>'+a+' × '+k+' = ...</b>',fmt(c),[c*10,c/10,c+k,c-k].filter(x=>x>0&&x!==c&&Number.isInteger(x)).slice(0,3).map(fmt),a+' × '+k+' = '+fmt(c)+' (tambahkan '+(k===10?'satu nol':'dua nol')+').',a+'*'+k)}
  if(t===1){const a=rnd(2,9)*10,b=rnd(2,9),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,a,b],0,1000).map(fmt),(a/10)+' × '+b+' = '+(a/10*b)+', lalu tambahkan satu nol: '+fmt(c)+'.',a+'*'+b)}
  if(t===2){const a=rnd(2,9)*100,b=rnd(2,5),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[100,1000,a,b],0,5000).map(fmt),(a/100)+' × '+b+' = '+(a/100*b)+', lalu tambahkan dua nol: '+fmt(c)+'.',a+'*'+b)}
  const a=rnd(2,9)*10,b=rnd(2,5)*10,c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[100,1000,a,b],0,5000).map(fmt),(a/10)+' × '+(b/10)+' = '+(a*b/100)+', lalu tambahkan dua nol: '+fmt(c)+'.',a+'*'+b)}},
/*17*/{t:'Pembagian dengan Sisa',d:'Pembagian yang tidak habis dibagi',h:'Cari kelipatan pembagi yang paling dekat tetapi tidak melebihi bilangan itu. Selisihnya adalah sisa.',gen(){
  const b=rnd(3,9),q=rnd(2,12),r=rnd(1,b-1),a=b*q+r,t=rnd(0,2);
  if(t===0)return mk('<b>'+a+' ÷ '+b+'</b> = ... sisa ...<br>Hasil baginya adalah ...',q,dis(q,[1,2],0,15),b+' × '+q+' = '+(b*q)+', sisa '+a+' − '+(b*q)+' = '+r+'.',Math.floor(a/b));
  if(t===1)return mk('<b>'+a+' ÷ '+b+'</b> = '+q+' sisa ...<br>Sisanya adalah ...',r,near(r,0,b),b+' × '+q+' = '+(b*q)+', sisa '+a+' − '+(b*q)+' = '+r+'.',a%b);
  const nm=pick(NAMA),it=pick(BENDA)[1];return mk(nm+' membagi '+a+' '+it+' sama banyak kepada '+b+' teman. Sisa '+it+' yang tidak terbagi ada ...',r,near(r,0,b),a+' ÷ '+b+' = '+q+' sisa '+r+'.',a%b)}},
/*18*/{t:'Soal Cerita Tambah Kurang',d:'Cerita dengan bilangan ribuan',h:'Baca soal pelan-pelan. Kata "jumlah" atau "bertambah" berarti tambah, "sisa" atau "selisih" berarti kurang.',gen(){
  const [n1,n2]=two(),it=pick(BENDA)[1],t=rnd(0,3);
  if(t<2){const a=rnd(1200,5500),b=rnd(800,4000),c=a+b,q=t===0?n1+' punya '+fmt(a)+' '+it+' dan '+n2+' punya '+fmt(b)+' '+it+'. Berapa jumlah '+it+' mereka?':'Sebuah toko menjual '+fmt(a)+' '+it+' pada bulan lalu dan '+fmt(b)+' '+it+' bulan ini. Berapa '+it+' yang terjual seluruhnya?';return mk(q,fmt(c),dis(c,[10,100,1000,1],500,9999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}
  const a=rnd(3000,9500),b=rnd(700,a-500),c=a-b,q=t===2?'Gudang menyimpan '+fmt(a)+' '+it+'. Sebanyak '+fmt(b)+' '+it+' dikirim ke toko. Sisa '+it+' di gudang ...':n1+' punya '+fmt(a)+' '+it+', sedangkan '+n2+' punya '+fmt(b)+' '+it+'. Selisih '+it+' mereka ...';
  return mk(q,fmt(c),dis(c,[10,100,1000,1],0,9999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}},
/*19*/{t:'Soal Cerita Perkalian',d:'Cerita perkalian sehari-hari, termasuk uang',h:'Cari tahu ada berapa kelompok dan berapa isi tiap kelompok, lalu kalikan.',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),t=rnd(0,2);
  if(t===0){const a=rnd(3,9),b=rnd(12,48),c=a*b;return mk('Ada '+a+' rak. Tiap rak berisi '+b+' '+it+'. Berapa jumlah seluruh '+it+'?',c,dis(c,[10,a,b,1],0,500),a+' × '+b+' = '+c+'.',a+'*'+b)}
  if(t===1){const a=rnd(3,9),p=pick([1500,2000,2500,3000,4500,5000]),c=a*p;return mk(nm+' membeli '+a+' buku. Harga satu buku '+rp(p)+'. Berapa yang harus dibayar?',rp(c),Array.from(new Set([c+p,c-p,c+1000,c-1000,c+500,c*2])).filter(x=>x>0&&x!==c).slice(0,3).map(rp),a+' × '+rp(p)+' = '+rp(c)+'.',a+'*'+p)}
  const k=rnd(3,9),a=rnd(12,60),c=k*a;return mk('Sebuah pabrik membuat '+a+' '+it+' setiap hari. Berapa '+it+' yang dibuat dalam '+k+' hari?',c,dis(c,[10,a,k,1],0,600),k+' × '+a+' = '+c+'.',a+'*'+k)}},
/*20*/{t:'Soal Cerita Pembagian',d:'Cerita pembagian rata dan pengelompokan',h:'Jika dibagi rata atau dikelompokkan sama banyak, gunakan pembagian.',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),b=rnd(3,9),c=rnd(12,60),a=b*c,t=rnd(0,2);
  if(t===0)return mk(nm+' membagi '+a+' '+it+' sama banyak kepada '+b+' adiknya. Tiap adik mendapat ... '+it,c,dis(c,[10,1,2,b],5,100),a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  if(t===1)return mk(a+' '+it+' dimasukkan ke dalam kantong. Tiap kantong berisi '+b+' '+it+'. Banyak kantong yang dibutuhkan ...',c,dis(c,[10,1,2,b],5,100),a+' ÷ '+b+' = '+c+'.',a+'/'+b);
  const p=pick([1000,2000,3000]),n=rnd(3,9),tot=p*n*b;return mk('Uang '+rp(tot)+' dibagi sama banyak kepada '+b+' anak. Tiap anak mendapat ...',rp(tot/b),Array.from(new Set([tot/b+p,tot/b-p,tot/b+1000,tot/b-1000,tot/b*2])).filter(x=>x>0&&x!==tot/b).slice(0,3).map(rp),rp(tot)+' ÷ '+b+' = '+rp(tot/b)+'.',tot+'/'+b)}},
/*21*/{t:'Pengukuran Panjang',d:'Satuan km, m, cm, mm dan soal ceritanya',h:'1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm. Satuan lebih kecil berarti angkanya lebih banyak.',gen(){
  const t=rnd(0,4);
  if(t===0){const k=rnd(1,9),c=k*1000;return mk('<b>'+k+' km = ... m</b>',fmt(c),[c/10,c*10,c+100,c-100].filter(x=>x>0&&x!==c).slice(0,3).map(fmt),'1 km = 1.000 m, jadi '+k+' km = '+fmt(c)+' m.')}
  if(t===1){const k=rnd(1,9),c=k*100;return mk('<b>'+k+' m = ... cm</b>',c,[c/10,c*10,c+10,c+50].filter(x=>x!==c).slice(0,3),'1 m = 100 cm, jadi '+k+' m = '+c+' cm.')}
  if(t===2){const k=rnd(2,9)*10,c=k*10;return mk('<b>'+k+' cm = ... mm</b>',c,[c/10,c*10,c+10,c-10].filter(x=>x>0&&x!==c).slice(0,3),'1 cm = 10 mm, jadi '+k+' cm = '+c+' mm.')}
  if(t===3){const k=rnd(2,9),c=k;return mk('<b>'+fmt(k*1000)+' m = ... km</b>',c,near(c,1,12),'1.000 m = 1 km, jadi '+fmt(k*1000)+' m = '+k+' km.')}
  const a=rnd(120,950),b=rnd(120,950),c=a+b,nm=pick(NAMA);return mk(nm+' berjalan '+a+' m ke taman, lalu '+b+' m ke sekolah. Total jarak yang ditempuh ... m',fmt(c),dis(c,[10,100,1],100,2000).map(fmt),a+' + '+b+' = '+fmt(c)+' m.',a+'+'+b)}},
/*22*/{t:'Pengukuran Berat',d:'Satuan ton, kg, g dan soal ceritanya',h:'1 ton = 1.000 kg; 1 kg = 1.000 g. Mengubah ke satuan lebih kecil berarti dikalikan.',gen(){
  const t=rnd(0,4);
  if(t===0){const k=rnd(1,9),c=k*1000;return mk('<b>'+k+' kg = ... g</b>',fmt(c),[c/10,c*10,c+100,c-100].filter(x=>x>0&&x!==c).slice(0,3).map(fmt),'1 kg = 1.000 g, jadi '+k+' kg = '+fmt(c)+' g.')}
  if(t===1){const k=rnd(2,9),c=k;return mk('<b>'+fmt(k*1000)+' g = ... kg</b>',c,near(c,1,12),'1.000 g = 1 kg, jadi '+fmt(k*1000)+' g = '+k+' kg.')}
  if(t===2){const k=rnd(1,9),c=k*1000;return mk('<b>'+k+' ton = ... kg</b>',fmt(c),[c/10,c*10,c+100,c-100].filter(x=>x>0&&x!==c).slice(0,3).map(fmt),'1 ton = 1.000 kg, jadi '+k+' ton = '+fmt(c)+' kg.')}
  if(t===3){const a=rnd(12,60),b=rnd(12,60),c=a+b,nm=pick(NAMA);return mk(nm+' membeli '+a+' kg beras dan '+b+' kg gula. Berat seluruh belanjaan ... kg',c,dis(c,[10,1,2],10,200),a+' + '+b+' = '+c+' kg.',a+'+'+b)}
  const a=rnd(30,90),b=rnd(5,a-10),c=a-b;return mk('Sebuah karung berisi '+a+' kg jeruk. Sebanyak '+b+' kg dijual. Sisa jeruk ... kg',c,dis(c,[10,1,2],0,100),a+' − '+b+' = '+c+' kg.',a+'-'+b)}},
/*23*/{t:'Pengukuran Waktu',d:'Jam, menit, detik, dan menghitung lama waktu',h:'1 jam = 60 menit, 1 menit = 60 detik, 1 hari = 24 jam. Hitung dari jam yang dimulai.',gen(){
  const t=rnd(0,4);
  if(t===0){const k=rnd(2,9),c=k*60;return mk('<b>'+k+' jam = ... menit</b>',c,[c/10,c+30,c-30,c*2].filter(x=>x>0&&x!==c).slice(0,3),'1 jam = 60 menit, jadi '+k+' jam = '+c+' menit.')}
  if(t===1){const k=rnd(2,9),c=k*60;return mk('<b>'+k+' menit = ... detik</b>',c,[c/10,c+30,c-30,c*2].filter(x=>x>0&&x!==c).slice(0,3),'1 menit = 60 detik, jadi '+k+' menit = '+c+' detik.')}
  if(t===2){const k=rnd(2,6),c=k*24;return mk('<b>'+k+' hari = ... jam</b>',c,dis(c,[12,24,6,1],1,200),'1 hari = 24 jam, jadi '+k+' hari = '+c+' jam.',k+'*24')}
  const h=rnd(6,16),m=pick([0,15,30,45]),dh=rnd(1,3),dm=pick([15,30,45]),st=h*60+m,en=st+dh*60+dm,nm=pick(NAMA);
  const cand=Array.from(new Set([en+15,en-15,en+30,en-30,en+60,en-60])).filter(x=>x!==en).map(t2s);
  return mk(nm+' mulai belajar pukul '+t2s(st)+' selama '+dh+' jam '+dm+' menit. Ia selesai belajar pukul ...',t2s(en),shuf(cand).slice(0,3),t2s(st)+' + '+dh+' jam = '+t2s(st+dh*60)+', lalu + '+dm+' menit = '+t2s(en)+'.')}},
/*24*/{t:'Keliling Persegi dan Persegi Panjang',d:'Menghitung keliling persegi dan persegi panjang',h:'Keliling adalah jumlah semua sisi. Persegi: 4 × sisi. Persegi panjang: 2 × (panjang + lebar).',gen(){
  if(Math.random()<.45){const s=rnd(2,40),c=4*s;return mk('Sebuah persegi memiliki panjang sisi <b>'+s+' cm</b>. Kelilingnya ... cm',c,Array.from(new Set([s*s,s*2,s+4,c+s,c+4,c-4,s*3])).filter(x=>x!==c&&x>0).slice(0,3),'Keliling persegi = 4 × '+s+' = '+c+' cm.',4+'*'+s)}
  let p=rnd(5,40),l;do l=rnd(2,p-1);while(l===p);const c=2*(p+l);return mk('Persegi panjang berukuran panjang <b>'+p+' cm</b> dan lebar <b>'+l+' cm</b>. Kelilingnya ... cm',c,Array.from(new Set([p*l,p+l,2*p+l,p+2*l,c+2])).filter(x=>x!==c).slice(0,3),'Keliling = 2 × ('+p+' + '+l+') = 2 × '+(p+l)+' = '+c+' cm.','2*('+p+'+'+l+')')}},
/*25*/{t:'Keliling Segitiga dan Mencari Sisi',d:'Keliling segitiga dan mencari panjang sisi',h:'Segitiga: jumlahkan ketiga sisinya. Jika keliling diketahui, kurangkan sisi yang sudah ada.',gen(){
  const t=rnd(0,2);
  if(t===0){const a=rnd(3,30),b=rnd(3,30),c=rnd(3,30),k=a+b+c;return mk('Sisi-sisi segitiga panjangnya <b>'+a+' cm, '+b+' cm, dan '+c+' cm</b>. Kelilingnya ... cm',k,dis(k,[1,2,3,10],5,95),a+' + '+b+' + '+c+' = '+k+' cm.',a+'+'+b+'+'+c)}
  if(t===1){const s=rnd(3,30),k=4*s;return mk('Keliling sebuah persegi adalah <b>'+k+' cm</b>. Panjang sisinya ... cm',s,near(s,1,40),k+' ÷ 4 = '+s+' cm.',k+'/4')}
  const p=rnd(8,30),l=rnd(3,p-2),k=2*(p+l);return mk('Keliling persegi panjang adalah <b>'+k+' cm</b> dan panjangnya <b>'+p+' cm</b>. Lebarnya ... cm',l,Array.from(new Set([k/2,k-p,p-l,l+2,l-1])).filter(x=>x>0&&x!==l).slice(0,3),'Setengah keliling = '+k+' ÷ 2 = '+(k/2)+'. Lebar = '+(k/2)+' − '+p+' = '+l+' cm.',k+'/2-'+p)}},
/*26*/{t:'Membaca Tabel',d:'Membaca dan menghitung data dari tabel',h:'Lihat judul kolom, lalu cari baris yang ditanyakan. Untuk jumlah, tambahkan angka-angkanya.',gen(){
  const names=shuf(['apel','jeruk','mangga','pisang','anggur','semangka','salak','pepaya']).slice(0,4),v=shuf(Array.from({length:35},(_,i)=>i+6)).slice(0,4),o=names.map((n,i)=>({n:n,v:v[i]}));
  const tb='<table class="tb"><tr><th>Buah</th><th>Jumlah</th></tr>'+o.map(x=>'<tr><td>'+x.n+'</td><td>'+x.v+'</td></tr>').join('')+'</table>',s=o.slice().sort((a,b)=>b.v-a.v),t=rnd(0,3);
  if(t===0)return mk('Perhatikan tabel penjualan buah.'+tb+'Buah yang paling <b>banyak</b> terjual adalah ...',s[0].n,names.filter(x=>x!==s[0].n),s[0].n+' terjual '+s[0].v+', paling banyak.');
  if(t===1)return mk('Perhatikan tabel penjualan buah.'+tb+'Buah yang paling <b>sedikit</b> terjual adalah ...',s[3].n,names.filter(x=>x!==s[3].n),s[3].n+' terjual '+s[3].v+', paling sedikit.');
  if(t===2){const a=o[0],b=o[1],c=a.v+b.v;return mk('Perhatikan tabel penjualan buah.'+tb+'Jumlah <b>'+a.n+'</b> dan <b>'+b.n+'</b> yang terjual adalah ...',c,dis(c,[1,2,10],5,100),a.v+' + '+b.v+' = '+c+'.',a.v+'+'+b.v)}
  const c=s[0].v-s[3].v;return mk('Perhatikan tabel penjualan buah.'+tb+'Selisih penjualan terbanyak dan tersedikit adalah ...',c,dis(c,[1,2,10],1,60),s[0].v+' − '+s[3].v+' = '+c+'.',s[0].v+'-'+s[3].v)}},
/*27*/{t:'Membaca Diagram Gambar',d:'Membaca piktogram dan menghitung datanya',h:'Lihat keterangan: satu gambar mewakili berapa. Hitung banyak gambar, lalu kalikan dengan nilainya.',gen(){
  const nm=shuf(NAMA).slice(0,4),u=pick([2,5,10]),cnt=shuf([1,2,3,4,5,6,7,8]).slice(0,4),e=pick(['🍎','⭐','🎈','🍪']),o=nm.map((n,i)=>({n:n,k:cnt[i]}));
  const pk='<div class="pk-c"><div class="pk">'+o.map(x=>x.n+': '+e.repeat(x.k)).join('<br>')+'</div></div><p class="mut">Keterangan: 1 '+e+' = '+u+'</p>',s=o.slice().sort((a,b)=>b.k-a.k),t=rnd(0,3);
  if(t===0){const x=pick(o),c=x.k*u;return mk('Diagram menunjukkan banyak koleksi anak-anak.'+pk+'Koleksi <b>'+x.n+'</b> berjumlah ...',c,dis(c,[u,2*u,1],1,100),x.k+' × '+u+' = '+c+'.',x.k+'*'+u)}
  if(t===1)return mk('Diagram menunjukkan banyak koleksi anak-anak.'+pk+'Anak yang koleksinya paling <b>banyak</b> adalah ...',s[0].n,nm.filter(x=>x!==s[0].n),s[0].n+' punya '+s[0].k+' gambar, paling banyak.');
  if(t===2){const c=(s[0].k-s[3].k)*u;return mk('Diagram menunjukkan banyak koleksi anak-anak.'+pk+'Selisih koleksi terbanyak dan tersedikit adalah ...',c,dis(c,[u,2*u,1],1,100),'('+s[0].k+' − '+s[3].k+') × '+u+' = '+c+'.','('+s[0].k+'-'+s[3].k+')*'+u)}
  const c=o.reduce((a,x)=>a+x.k,0)*u;return mk('Diagram menunjukkan banyak koleksi anak-anak.'+pk+'Jumlah koleksi mereka semua adalah ...',c,dis(c,[u,2*u,10,1],5,300),'Total gambar '+(c/u)+' × '+u+' = '+c+'.',(c/u)+'*'+u)}},
/*28*/{t:'Penalaran Dua Langkah',d:'Soal cerita dua langkah hitung',h:'Pecah soal menjadi dua bagian. Selesaikan bagian pertama, lalu gunakan hasilnya untuk bagian kedua.',gen(){
  const it=pick(BENDA)[1],nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const a=rnd(3,9),b=rnd(10,40),c=rnd(10,90),r=a*b+c;return mk(nm+' punya '+a+' kotak berisi '+b+' '+it+' tiap kotak. Ia menerima '+c+' '+it+' lagi. Jumlah '+it+' sekarang ...',r,dis(r,[a,b,c,10],0,600),a+' × '+b+' = '+a*b+', lalu + '+c+' = '+r+'.',a+'*'+b+'+'+c)}
  if(t===1){const a=rnd(3,9),b=rnd(12,40),p=a*b,c=rnd(5,p-5),r=p-c;return mk(nm+' membuat '+a+' rak berisi '+b+' '+it+' tiap rak. Sebanyak '+c+' '+it+' terjual. Sisa '+it+' ...',r,dis(r,[a,b,c,10],0,600),a+' × '+b+' = '+p+', lalu − '+c+' = '+r+'.',a+'*'+b+'-'+c)}
  if(t===2){const b=rnd(3,9),q=rnd(12,40),c=rnd(5,30),a=b*q,r=q+c;return mk(a+' '+it+' dibagi sama banyak ke '+b+' kotak. Lalu tiap kotak ditambah '+c+' '+it+'. Isi tiap kotak sekarang ...',r,dis(r,[b,c,10,1],5,100),a+' ÷ '+b+' = '+q+', lalu + '+c+' = '+r+'.',a+'/'+b+'+'+c)}
  const a=rnd(2,6),p=pick([1500,2000,2500,3000]),pay=pick([20000,50000]);if(a*p>=pay)return LEVELS[27].gen();const c=pay-a*p;
  return mk(nm+' membeli '+a+' pensil seharga '+rp(p)+' per buah. Ia membayar '+rp(pay)+'. Uang kembaliannya ...',rp(c),Array.from(new Set([c+p,c-p,c+500,c-500,c+1000,c-1000])).filter(x=>x>0&&x!==c).slice(0,3).map(rp),a+' × '+rp(p)+' = '+rp(a*p)+'. Kembalian '+rp(pay)+' − '+rp(a*p)+' = '+rp(c)+'.',pay+'-'+a+'*'+p)}},
/*29*/{t:'Pemecahan Masalah',d:'Soal cerita gabungan keliling, waktu, dan pecahan',h:'Tentukan dulu apa yang ditanyakan, data apa yang diketahui, lalu pilih operasi hitungnya.',gen(){
  const t=rnd(0,3),nm=pick(NAMA);
  if(t===0){const p=rnd(8,30),l=rnd(4,p-1),c=2*(p+l);return mk('Kebun '+nm+' berbentuk persegi panjang dengan panjang '+p+' m dan lebar '+l+' m. Kebun itu dipagari satu kali keliling. Panjang pagar yang dibutuhkan ... m',c,Array.from(new Set([p*l,p+l,2*p+l,c+2])).filter(x=>x!==c).slice(0,3),'Keliling = 2 × ('+p+' + '+l+') = '+c+' m.','2*('+p+'+'+l+')')}
  if(t===1){const h=rnd(6,9),m=pick([0,15,30,45]),d=pick([15,30,45,60]),st=h*60+m,en=st+d,cand=Array.from(new Set([en+15,en-15,en+30,en-30,en+60])).filter(x=>x!==en).map(t2s);return mk(nm+' berangkat ke sekolah pukul '+t2s(st)+'. Perjalanan memakan waktu '+d+' menit. '+nm+' tiba di sekolah pukul ...',t2s(en),shuf(cand).slice(0,3),t2s(st)+' + '+d+' menit = '+t2s(en)+'.')}
  if(t===2){const D=pick([2,3,4,5]),a=D===2?1:rnd(1,D-1),k=rnd(2,8),n=D*k,c=n-a*k;return mk('Ibu membeli '+n+' telur. Sebanyak '+fr(a,D)+' bagian telur dipakai membuat kue. Sisa telur ...',c,dis(c,[k,a,1,2],0,60),fr(a,D)+' dari '+n+' = '+a*k+'. Sisa '+n+' − '+a*k+' = '+c+'.',n+'-'+n+'/'+D+'*'+a)}
  const k=rnd(2,6),u=pick([2,3,4,5]),w=rnd(2,5)*100,tot=k*u*w;return mk('Sebuah pabrik mengemas '+u+' kardus setiap jam. Tiap kardus berisi '+w+' '+pick(['permen','kelereng','manik'])+'. Dalam '+k+' jam, jumlah yang dikemas ...',fmt(tot),Array.from(new Set([tot+w,tot-w,tot*2,tot+u*w])).filter(x=>x>0&&x!==tot).slice(0,3).map(fmt),k+' × '+u+' = '+k*u+' kardus, lalu × '+w+' = '+fmt(tot)+'.',k+'*'+u+'*'+w)}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',h:'Baca soal dengan tenang, tentukan jenis soalnya, lalu kerjakan langkah demi langkah.',gen(){return LEVELS[rnd(14,28)].gen()}}
];

const PREVIEW=[];
