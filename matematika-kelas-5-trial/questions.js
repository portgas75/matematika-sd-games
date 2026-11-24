/* Bank soal Matematika Kelas 5 - TRIAL - Developer: portgas75 */
const GAME={"grade":5,"version":"trial","totalLevels":30,"hint":true};
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
const frWrong=(n,d,P)=>P.filter(p=>p[0]>0&&p[1]>0&&p[0]*d!==n*p[1]).map(p=>fr(p[0],p[1]));
const tbl=(h,r)=>'<table class="tb"><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(x=>'<tr>'+x.map(y=>'<td>'+y+'</td>').join('')+'</tr>').join('')+'</table>';
const bars=(n,v,u)=>'<div class="bc">'+n.map((x,i)=>'<div class="br"><span>'+x+'</span><i style="width:'+(v[i]*(u||4))+'px"></i><b>'+v[i]+'</b></div>').join('')+'</div>';

const LEVELS=[
{t:"Operasi Hitung Bilangan Cacah",d:"Tambah, kurang, kali, bagi, dan hitung campuran bilangan besar",h:"Kerjakan tanda kurung dulu, lalu × dan ÷, terakhir + dan −. Periksa hasil dengan operasi kebalikannya.",gen(){
  const t=rnd(0,4);
  if(t===0){const a=rnd(12000,89999),b=rnd(3000,99999-a),c=a+b;return mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}
  if(t===1){const a=rnd(40000,99999),b=rnd(2000,a-5000),c=a-b;return mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],1000,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}
  if(t===2){const a=rnd(120,999),b=rnd(12,99),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,1000,a],1000,99999).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}
  if(t===3){const b=rnd(12,49),q=rnd(21,99),a=b*q;return mk('<b>'+fmt(a)+' ÷ '+b+' = ...</b>',q,dis(q,[1,10,b,2],10,130),b+' × '+q+' = '+fmt(a)+', jadi '+fmt(a)+' ÷ '+b+' = '+q+'.',a+'/'+b)}
  const a=rnd(20,90),b=rnd(20,90),c=rnd(2,9),d=rnd(5,60),r=(a+b)*c-d;return mk('<b>('+a+' + '+b+') × '+c+' − '+d+' = ...</b>',fmt(r),uniq(fmt(r),[a+b*c-d,r+10,r-10,r+c,r-d].filter(x=>x>0).map(fmt)),'Tanda kurung dulu: '+(a+b)+', lalu × '+c+' = '+(a+b)*c+', lalu − '+d+' = '+fmt(r)+'.','('+a+'+'+b+')*'+c+'-'+d)}},
{t:"FPB",d:"Faktor Persekutuan Terbesar dua dan tiga bilangan",h:"Uraikan ke faktor prima, ambil faktor yang sama dengan pangkat terkecil, lalu kalikan.",gen(){
  if(Math.random()<.65){const g=rnd(2,15);let p,q;do{p=rnd(2,7);q=rnd(2,7)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[g+1,g*2,p,q,lcm(a,b),1,g-1].filter(x=>+x>0)),a+' = '+fstr(a)+', '+b+' = '+fstr(b)+'. FPB = '+g+'.','gcd('+a+','+b+')')}
  const g=rnd(2,9),T=[[2,3,5],[2,3,4],[3,4,5],[2,5,3],[3,5,4],[4,6,9],[2,6,9]],t=pick(T),a=g*t[0],b=g*t[1],c=g*t[2],r=gcd(gcd(a,b),c);
  return mk('FPB dari <b>'+a+', '+b+', dan '+c+'</b> adalah ...',r,uniq(r,[r+1,r*2,r+2,1,2,3,g+1]),'FPB dari ketiga bilangan = '+r+'.','gcd(gcd('+a+','+b+'),'+c+')')}},
{t:"KPK",d:"Kelipatan Persekutuan Terkecil dua dan tiga bilangan",h:"Uraikan ke faktor prima, ambil semua faktor dengan pangkat terbesar, lalu kalikan.",gen(){
  if(Math.random()<.6){let a,b;do{a=rnd(4,24);b=rnd(4,24)}while(a===b);const c=lcm(a,b);return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,gcd(a,b),c*2,c+a,c-a,c+b,a+b]).filter(x=>+x>0).slice(0,3),a+' = '+fstr(a)+', '+b+' = '+fstr(b)+'. KPK = '+c+'.','lcm('+a+','+b+')')}
  const T=[[2,3,4],[2,3,5],[3,4,6],[4,6,8],[3,5,6],[4,5,6],[6,8,12],[5,6,10],[3,4,9],[4,6,9]],t=pick(T),c=lcm(lcm(t[0],t[1]),t[2]);
  return mk('KPK dari <b>'+t.join(', ')+'</b> adalah ...',c,uniq(c,[t[0]*t[1]*t[2],c*2,c/2,c+t[0],c+t[2],c-t[1]]).filter(x=>+x>0).slice(0,3),'KPK dari '+t.join(', ')+' adalah '+c+'.','lcm(lcm('+t[0]+','+t[1]+'),'+t[2]+')')}},
{t:"Soal Cerita FPB dan KPK",d:"Cerita pengelompokan dan jadwal berulang",h:"Dibagi sama banyak tanpa sisa → FPB. Terjadi bersamaan lagi → KPK. Tentukan dulu mana yang ditanya.",gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t<2){const g=rnd(3,15);let p,q;do{p=rnd(2,7);q=rnd(2,7)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;
    return t===0?mk(nm+' membuat bingkisan dari '+a+' permen dan '+b+' cokelat. Isi tiap bingkisan sama banyak. Banyak bingkisan paling banyak ...',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+'.','gcd('+a+','+b+')'):mk('Dua pita masing-masing '+a+' cm dan '+b+' cm dipotong menjadi potongan sama panjang, selebar mungkin. Panjang tiap potongan ... cm',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+' cm.','gcd('+a+','+b+')')}
  let a,b;do{a=rnd(4,15);b=rnd(4,15)}while(a===b);const c=lcm(a,b);
  return t===2?mk(nm+' berenang setiap '+a+' hari dan temannya setiap '+b+' hari. Jika hari ini berenang bersama, mereka berenang bersama lagi ... hari lagi',c,uniq(c,[a*b,a+b,c*2,c+a,gcd(a,b)]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')'):mk('Lampu A berkedip tiap '+a+' detik dan lampu B tiap '+b+' detik. Jika berkedip bersama sekarang, keduanya berkedip bersama lagi setelah ... detik',c,uniq(c,[a*b,a+b,c*2,c+b,gcd(a,b)]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')')}},
{t:"Pecahan Biasa",d:"Menyederhanakan, membandingkan, dan mengurutkan pecahan",h:"Untuk membandingkan, samakan penyebut atau kalikan silang. Untuk menyederhanakan, bagi dengan FPB.",gen(){
  const t=rnd(0,2);
  if(t===0){const b=rnd(2,9),d=rnd(2,9);let a=rnd(1,b-1),c=rnd(1,d-1);if(Math.random()<.2){const k=rnd(2,3);c=a*k;if(c>=b*k){c=a}}
    const dd=(c===a&&Math.random()<.5)?b:d,r=sg(a*dd,c*b);return mk('Tanda yang tepat: '+fr(a,b)+' <b>...</b> '+fr(c,dd),r,SIG.filter(x=>x!==r),'Kalikan silang: '+a+' × '+dd+' = '+a*dd+' dan '+c+' × '+b+' = '+c*b+'.')}
  if(t===1){const g=rnd(2,9);let p,q;do{p=rnd(1,9);q=rnd(2,10)}while(p>=q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('Bentuk paling sederhana dari '+fr(a,b)+' adalah ...',fr(p,q),uniq(fr(p,q),[fr(q,p),fr(p,q+1),fr(p+1,q),(g%2===0&&g>2?fr(a/2,b/2):fr(p,q+2))]),a+' ÷ '+g+' = '+p+', '+b+' ÷ '+g+' = '+q+'.',a+'/'+b)}
  const ds=pick([[2,3,4],[2,4,8],[3,6,12],[2,3,6],[4,6,12],[2,5,10]]),F=ds.map(d=>({d:d,n:rnd(1,d-1)}));const vs=F.map(x=>x.n/x.d);if(new Set(vs.map(v=>Math.round(v*1e6))).size<3)return LEVELS[4].gen();
  const asc=Math.random()<.5,s=F.slice().sort((x,y)=>asc?x.n/x.d-y.n/y.d:y.n/y.d-x.n/x.d),key=x=>x.map(v=>fr(v.n,v.d)).join(', ');
  const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
  return mk('Urutan dari pecahan <b>'+(asc?'terkecil ke terbesar':'terbesar ke terkecil')+'</b> adalah ...',key(s),shuf(perms).slice(0,3),'Samakan penyebut lalu bandingkan. Urutan: '+key(s)+'.')}},
{t:"Pecahan Campuran",d:"Mengubah dan membandingkan pecahan campuran",h:"Campuran → biasa: bilangan bulat × penyebut + pembilang. Biasa → campuran: bagi pembilang dengan penyebut.",gen(){
  const t=rnd(0,2),D=pick([2,3,4,5,6,7,8]),w=rnd(1,9),a=rnd(1,D-1),n=w*D+a;
  if(t===0)return mk('Ubahlah ke pecahan biasa: <b>'+mx(w,a,D)+'</b>',fr(n,D),uniq(fr(n,D),[fr(w+a,D),fr(w*a+D,D),fr(n+1,D),fr(n,D+1),fr(n-1,D)]),w+' × '+D+' + '+a+' = '+n+', jadi '+fr(n,D)+'.',w+'+'+a+'/'+D);
  if(t===1){const c=mx(w,a,D);return mk('Ubahlah ke pecahan campuran: <b>'+fr(n,D)+'</b>',c,uniq(c,[mx(w+1,a,D),mx(w,D-a,D),mx(a,w,D),mx(w+2,a,D),mx(w,a+1<D?a+1:a-1||1,D)]),n+' ÷ '+D+' = '+w+' sisa '+a+', jadi '+c+'.',n+'/'+D)}
  const D2=pick([2,3,4,5,6]),w2=rnd(1,9),a2=rnd(1,D2-1),r=sg(w*D*D2+a*D2,w2*D2*D+a2*D);return mk('Tanda yang tepat: '+mx(w,a,D)+' <b>...</b> '+mx(w2,a2,D2),r,SIG.filter(x=>x!==r),'Ubah ke pecahan biasa lalu bandingkan.')}},
{t:"Penjumlahan Pecahan",d:"Penjumlahan pecahan berpenyebut berbeda",h:"Samakan penyebut dengan KPK, jumlahkan pembilang, lalu sederhanakan.",gen(){
  let b,d;do{b=pick([2,3,4,5,6,8,10]);d=pick([2,3,4,5,6,8,10,12])}while(b===d||lcm(b,d)>24);
  const a=rnd(1,b-1),c=rnd(1,d-1),L=lcm(b,d),n=a*L/b+c*L/d,r=frs(n,L);
  return mk('<b>'+fr(a,b)+' + '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,L,[[a+c,b+d],[a+c,b],[a+c,d],[n+1,L],[n-1,L],[n,L*2],[a+c,L+1]])),'Penyebut sama '+L+': '+fr(a*L/b,L)+' + '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'+'+c+'/'+d)}},
{t:"Pengurangan Pecahan",d:"Pengurangan pecahan berpenyebut berbeda",h:"Samakan penyebut dengan KPK, kurangkan pembilang, lalu sederhanakan hasilnya.",gen(){
  let b,d,a,c,n,L;do{b=pick([2,3,4,5,6,8,10]);d=pick([2,3,4,5,6,8,10,12]);L=lcm(b,d);a=rnd(1,b-1);c=rnd(1,d-1);n=a*L/b-c*L/d}while(b===d||L>24||n<=0);
  const r=frs(n,L);return mk('<b>'+fr(a,b)+' − '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,L,[[a-c>0?a-c:1,Math.abs(b-d)||b+1],[a-c>0?a-c:1,b],[n+1,L],[n,L*2],[a+c,L],[n+2,L]])),'Penyebut sama '+L+': '+fr(a*L/b,L)+' − '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'-'+c+'/'+d)}},
{t:"Perkalian Pecahan",d:"Mengalikan pecahan dengan pecahan dan bilangan bulat",h:"Kalikan pembilang dengan pembilang dan penyebut dengan penyebut. Sederhanakan sebelum atau sesudah mengalikan.",gen(){
  if(Math.random()<.65){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),n=a*c,D=b*d,r=frs(n,D);
    return mk('<b>'+fr(a,b)+' × '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,D,[[a+c,b+d],[a*c,b+d],[a*d,b*c],[a+c,b*d],[n+1,D],[n,D+b]])),a+' × '+c+' = '+n+' dan '+b+' × '+d+' = '+D+'. Hasil: '+r+'.',a+'/'+b+'*'+c+'/'+d)}
  const b=rnd(2,9),a=rnd(1,b-1),k=rnd(2,9),n=a*k,r=frs(n,b);return mk('<b>'+k+' × '+fr(a,b)+' = ...</b>',r,uniq(r,frWrong(n,b,[[a,b*k],[a+k,b],[n,b+k],[n+1,b],[n,b*k]])),k+' × '+a+' = '+n+', per '+b+': '+r+'.',k+'*'+a+'/'+b)}},
{t:"Pembagian Pecahan",d:"Membagi pecahan dengan pecahan dan bilangan bulat",h:"Membagi pecahan sama dengan mengalikan dengan kebalikan pembaginya.",gen(){
  if(Math.random()<.65){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),n=a*d,D=b*c,r=frs(n,D);
    return mk('<b>'+fr(a,b)+' ÷ '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,D,[[a*c,b*d],[b*c,a*d],[a*d,b*d],[a+d,b+c],[n+1,D],[n,D+1]])),'Kebalikan '+fr(c,d)+' adalah '+fr(d,c)+'. '+fr(a,b)+' × '+fr(d,c)+' = '+r+'.',a+'/'+b+'/('+c+'/'+d+')')}
  const b=rnd(2,9),a=rnd(1,b-1),k=rnd(2,9),n=a,D=b*k,r=frs(n,D);return mk('<b>'+fr(a,b)+' ÷ '+k+' = ...</b>',r,uniq(r,frWrong(n,D,[[a*k,b],[a,b+k],[a+k,b],[n+1,D],[a,D+1]])),fr(a,b)+' ÷ '+k+' = '+fr(a,b)+' × '+fr(1,k)+' = '+r+'.',a+'/'+b+'/'+k)}}
];
const PREVIEW=[
{t:"Tambah Kurang Pecahan Campuran",d:"Menjumlahkan dan mengurangkan pecahan campuran"},
{t:"Pecahan dan Desimal",d:"Mengubah pecahan ke desimal dan sebaliknya"},
{t:"Tambah Kurang Desimal",d:"Penjumlahan dan pengurangan desimal dua angka di belakang koma"},
{t:"Kali Bagi Desimal",d:"Perkalian dan pembagian desimal"},
{t:"Persentase",d:"Mengubah persen, pecahan, dan desimal"},
{t:"Persen dari Bilangan dan Diskon",d:"Menghitung persen dari suatu bilangan dan potongan harga"},
{t:"Perbandingan",d:"Menyatakan dan menyederhanakan perbandingan"},
{t:"Perbandingan Senilai",d:"Soal cerita harga, jarak, dan takaran"},
{t:"Skala",d:"Jarak pada peta dan jarak sebenarnya"},
{t:"Keliling Bangun Datar",d:"Keliling persegi, persegi panjang, segitiga, jajar genjang, dan belah ketupat"},
{t:"Luas Persegi dan Persegi Panjang",d:"Luas, mencari ukuran, dan biaya"},
{t:"Luas Segitiga",d:"Menghitung luas segitiga dan mencari alas atau tinggi"},
{t:"Luas Jajar Genjang",d:"Menghitung luas jajar genjang dan mencari alas atau tinggi"},
{t:"Luas Bangun Gabungan",d:"Luas gabungan beberapa bangun datar"},
{t:"Volume Kubus dan Balok",d:"Menghitung volume kubus dan balok"},
{t:"Volume: Mencari Ukuran dan Liter",d:"Mencari tinggi dari volume, serta hubungan cm³, dm³, dan liter"},
{t:"Membaca Tabel dan Diagram Batang",d:"Menafsirkan data dari tabel dan diagram"},
{t:"Rata-rata dan Modus",d:"Menghitung rata-rata, modus, dan data yang hilang"},
{t:"Pemecahan Masalah Campuran",d:"Soal cerita gabungan perbandingan, persen, dan volume"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
