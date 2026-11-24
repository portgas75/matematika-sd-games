/* Bank soal Matematika Kelas 6 - TRIAL - Developer: portgas75 */
const GAME={"grade":6,"version":"trial","totalLevels":30,"hint":true};
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
{t:"Bilangan Bulat dan Garis Bilangan",d:"Membandingkan dan mengurutkan bilangan bulat positif dan negatif",h:"Pada garis bilangan, makin ke kanan makin besar. Bilangan negatif selalu lebih kecil dari nol.",gen(){
  const t=rnd(0,2);
  if(t===0){let a=rnd(-15,15),b=rnd(-15,15);if(a===b)b=a+3;const r=sg(a,b);return mk('Tanda yang tepat: <b>'+ng(a)+' ... '+ng(b)+'</b>',r,SIG.filter(x=>x!==r),'Pada garis bilangan, yang lebih kanan lebih besar.')}
  if(t===1){const a=shuf([-9,-6,-3,0,2,5,8,-1,4,-7]).slice(0,4),s=a.slice().sort((x,y)=>x-y),key=x=>x.map(ng).join(', ');const w=[a.slice().sort((x,y)=>y-x),a,s.slice().reverse().map((v,i,r)=>r[(i+1)%4]),[s[1],s[0],s[2],s[3]]].map(key).filter(x=>x!==key(s));return mk('Urutan dari yang <b>terkecil</b> ke terbesar: '+key(a)+'. Urutan yang benar ...',key(s),uniq(key(s),w),'Dari kiri ke kanan pada garis bilangan: '+key(s)+'.')}
  const a=rnd(-20,-1),c=-a;return mk('Lawan dari <b>'+ng(a)+'</b> adalah ...',String(c),uniq(c,[ng(a),ng(a-1),c+1,0,c-1]),'Lawan bilangan '+ng(a)+' adalah '+c+'.')}},
{t:"Penjumlahan Bilangan Bulat",d:"Menjumlahkan bilangan bulat positif dan negatif",h:"Tanda sama: jumlahkan, tanda ikut. Tanda beda: kurangkan, tanda mengikuti yang lebih besar (tanpa tanda).",gen(){
  const a=rnd(-30,30),b=rnd(-30,30),c=a+b,p=b<0?'('+ng(b)+')':String(b);return mk('<b>'+ng(a)+' + '+p+' = ...</b>',ng(c),uniq(ng(c),[ng(a-b),ng(-c),ng(c+2),ng(c-2),ng(Math.abs(a)+Math.abs(b))]),ng(a)+' + '+p+' = '+ng(c)+'.',a+'+('+b+')')}},
{t:"Pengurangan Bilangan Bulat",d:"Mengurangkan bilangan bulat",h:"Mengurangi sama dengan menambah lawannya. a − (−b) = a + b.",gen(){
  const a=rnd(-30,30),b=rnd(-30,30),c=a-b,p=b<0?'('+ng(b)+')':String(b);return mk('<b>'+ng(a)+' − '+p+' = ...</b>',ng(c),uniq(ng(c),[ng(a+b),ng(-c),ng(c+2),ng(c-2),ng(b-a)]),ng(a)+' − '+p+' = '+ng(c)+'.',a+'-('+b+')')}},
{t:"Perkalian Bilangan Bulat",d:"Mengalikan bilangan bulat positif dan negatif",h:"Tanda sama → hasil positif. Tanda beda → hasil negatif.",gen(){
  const a=rnd(-12,12)||3,b=rnd(-12,12)||4,c=a*b,pa=a<0?'('+ng(a)+')':a,pb=b<0?'('+ng(b)+')':b;return mk('<b>'+pa+' × '+pb+' = ...</b>',ng(c),uniq(ng(c),[ng(-c),ng(a+b),ng(c+a),ng(c-b),ng(Math.abs(c)+1)]),pa+' × '+pb+' = '+ng(c)+'.',a+'*('+b+')')}},
{t:"Pembagian Bilangan Bulat",d:"Membagi bilangan bulat",h:"Aturan tanda pembagian sama dengan perkalian: sama → positif, beda → negatif.",gen(){
  const b=rnd(-12,12)||2,q=rnd(-12,12)||3,a=b*q,pa=a<0?'('+ng(a)+')':a,pb=b<0?'('+ng(b)+')':b;return mk('<b>'+pa+' ÷ '+pb+' = ...</b>',ng(q),uniq(ng(q),[ng(-q),ng(q+1),ng(q-1),ng(b),ng(a-b)]),pb+' × '+ng(q)+' = '+ng(a)+'.',a+'/('+b+')')}},
{t:"Operasi Campuran Bilangan Bulat",d:"Hitung campuran dengan bilangan bulat dan tanda kurung",h:"Kerjakan kurung dulu, lalu × dan ÷, terakhir + dan −. Perhatikan tanda negatif.",gen(){
  const a=rnd(-9,12),b=rnd(2,9),c=rnd(-9,9)||2,d=rnd(-9,9),r=a+b*c-d,pc=c<0?'('+ng(c)+')':c,pd=d<0?'('+ng(d)+')':d;
  if(Math.random()<.5)return mk('<b>'+ng(a)+' + '+b+' × '+pc+' − '+pd+' = ...</b>',ng(r),uniq(ng(r),[ng((a+b)*c-d),ng(r+b),ng(r-b),ng(-r),ng(r+2)]),'× dulu: '+b+' × '+pc+' = '+ng(b*c)+'. Lalu '+ng(a)+' + '+ng(b*c)+' − '+pd+' = '+ng(r)+'.',a+'+'+b+'*('+c+')-('+d+')');
  const x=rnd(-8,8),y=rnd(-8,8),z=rnd(2,6),r2=(x+y)*z;return mk('<b>('+ng(x)+' + '+(y<0?'('+ng(y)+')':y)+') × '+z+' = ...</b>',ng(r2),uniq(ng(r2),[ng(x+y*z),ng(-r2),ng(r2+z),ng(r2-z),ng(x*z+y)]),'Kurung: '+ng(x+y)+', lalu × '+z+' = '+ng(r2)+'.','('+x+'+('+y+'))*'+z)}},
{t:"Pangkat dan Akar",d:"Bilangan kuadrat, kubik, dan akar",h:"a² = a × a, a³ = a × a × a. Akar kuadrat adalah kebalikan dari kuadrat: √49 = 7 karena 7 × 7 = 49.",gen(){
  const t=rnd(0,3);
  if(t===0){const a=rnd(2,20),c=a*a;return mk('<b>'+a+'² = ...</b>',fmt(c),uniq(fmt(c),[2*a,a*3,c+a,c-a,a*a*a].map(fmt)),a+' × '+a+' = '+fmt(c)+'.',a+'*'+a)}
  if(t===1){const a=rnd(2,10),c=a*a*a;return mk('<b>'+a+'³ = ...</b>',fmt(c),uniq(fmt(c),[3*a,a*a,a*a+a,c+a,6*a*a].map(fmt)),a+' × '+a+' × '+a+' = '+fmt(c)+'.',a+'*'+a+'*'+a)}
  if(t===2){const a=rnd(2,25),c=a*a;return mk('<b>√'+fmt(c)+' = ...</b>',a,uniq(a,[a+1,a-1,c/2,a*2,a+2]).filter(x=>+x>0),a+' × '+a+' = '+fmt(c)+', jadi akarnya '+a+'.',String(a))}
  const a=rnd(2,5),b=rnd(2,5),r=a*a+b*b;return mk('<b>'+a+'² + '+b+'² = ...</b>',r,uniq(r,[(a+b)*(a+b),a+b,a*b,r+2,r-1]),a*a+' + '+b*b+' = '+r+'.',a+'*'+a+'+'+b+'*'+b)}},
{t:"FPB dan KPK",d:"FPB dan KPK serta soal cerita",h:"FPB untuk membagi sama rata tanpa sisa; KPK untuk kejadian berulang bersamaan.",gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const g=rnd(2,12);let p,q;do{p=rnd(2,8);q=rnd(2,8)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[g+1,g*2,p,q,lcm(a,b),1]),'FPB = '+g+'.','gcd('+a+','+b+')')}
  if(t===1){let a,b;do{a=rnd(4,20);b=rnd(4,20)}while(a===b);const c=lcm(a,b);return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,c*2,c+a,gcd(a,b),a+b]).filter(x=>+x>0),'KPK = '+c+'.','lcm('+a+','+b+')')}
  if(t===2){const g=rnd(3,12);let p,q;do{p=rnd(2,8);q=rnd(2,8)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk(nm+' punya '+a+' kelereng dan '+b+' kancing. Dibagi ke beberapa kantong dengan isi sama. Kantong paling banyak ...',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+'.','gcd('+a+','+b+')')}
  let a,b;do{a=rnd(4,14);b=rnd(4,14)}while(a===b);const c=lcm(a,b);return mk('Dua bus berangkat dari terminal setiap '+a+' menit dan '+b+' menit. Jika berangkat bersamaan sekarang, berangkat bersamaan lagi setelah ... menit',c,uniq(c,[a*b,a+b,c*2,c+a]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')')}},
{t:"Pecahan Campuran",d:"Tambah, kurang, kali, bagi pecahan",h:"Tambah/kurang: samakan penyebut. Kali: pembilang × pembilang, penyebut × penyebut. Bagi: kalikan kebalikan.",gen(){
  const t=rnd(0,3);
  if(t===0){let b,d;do{b=pick([2,3,4,5,6,8]);d=pick([2,3,4,5,6,8,9])}while(b===d||lcm(b,d)>24);const a=rnd(1,b-1),c=rnd(1,d-1),L=lcm(b,d),n=a*L/b+c*L/d,r=frs(n,L);return mk('<b>'+fr(a,b)+' + '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a+c,b+d),frs(a+c,b),frs(n+1,L),frs(n-1,L),frs(n,L+1)].filter(x=>x!==r)),fr(a*L/b,L)+' + '+fr(c*L/d,L)+' = '+fr(n,L)+' = '+r+'.',a+'/'+b+'+'+c+'/'+d)}
  if(t===1){let b,d,a,c,n,L;do{b=pick([2,3,4,5,6,8]);d=pick([2,3,4,5,6,8,9]);L=lcm(b,d);a=rnd(1,b-1);c=rnd(1,d-1);n=a*L/b-c*L/d}while(b===d||L>24||n<=0);const r=frs(n,L);return mk('<b>'+fr(a,b)+' − '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a+c,L),frs(n+1,L),frs(n+2,L),frs(n,L+1),frs(n*2,L)].filter(x=>x!==r)),fr(a*L/b,L)+' − '+fr(c*L/d,L)+' = '+fr(n,L)+' = '+r+'.',a+'/'+b+'-'+c+'/'+d)}
  if(t===2){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),r=frs(a*c,b*d);return mk('<b>'+fr(a,b)+' × '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a*d,b*c),frs(a+c,b+d),frs(a*c+1,b*d),frs(a*c,b+d),frs(a*c,b*d+b)].filter(x=>x!==r)),'Hasil: '+r+'.',a+'/'+b+'*'+c+'/'+d)}
  const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),r=frs(a*d,b*c);return mk('<b>'+fr(a,b)+' ÷ '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a*c,b*d),frs(b*c,a*d),frs(a*d+1,b*c),frs(a*d,b*c+1),frs(a*d*2,b*c)].filter(x=>x!==r)),fr(a,b)+' × '+fr(d,c)+' = '+r+'.',a+'/'+b+'/('+c+'/'+d+')')}},
{t:"Desimal dan Persen",d:"Pecahan, desimal, dan persen saling berubah",h:"Persen = per seratus. 0,75 = 75% = 3/4. Dari desimal ke persen kalikan 100.",gen(){
  const P=[[1,2,50],[1,4,25],[3,4,75],[1,5,20],[2,5,40],[3,5,60],[4,5,80],[1,10,10],[3,10,30],[7,10,70],[9,10,90],[1,20,5],[3,20,15],[1,25,4]],p=pick(P),t=rnd(0,3);
  if(t===0)return mk('Pecahan '+fr(p[0],p[1])+' sama dengan ... %',p[2],uniq(p[2],P.map(x=>x[2])),fr(p[0],p[1])+' × 100% = '+p[2]+'%.',String(p[2]));
  if(t===1)return mk('<b>'+p[2]+'%</b> sama dengan desimal ...',dec(p[2]/100),uniq(dec(p[2]/100),P.map(x=>dec(x[2]/100))),p[2]+'% = '+dec(p[2]/100)+'.',p[2]+'/100');
  if(t===2)return mk('<b>'+p[2]+'%</b> sama dengan pecahan paling sederhana ...',fr(p[0],p[1]),uniq(fr(p[0],p[1]),shuf(P).map(x=>fr(x[0],x[1]))),p[2]+'/100 = '+fr(p[0],p[1])+'.',p[0]+'/'+p[1]);
  const n=pick([40,60,80,100,120,200,300]),q=pick([10,20,25,50,75]),c=n*q/100;return mk('<b>'+q+'%</b> dari <b>'+n+'</b> adalah ...',c,dis(c,[5,10,1,n/10],1,n),q+'/100 × '+n+' = '+c+'.',q+'/100*'+n)}}
];
const PREVIEW=[
{t:"Operasi Desimal",d:"Tambah, kurang, kali, dan bagi bilangan desimal"},
{t:"Persen: Diskon, Untung, dan Rugi",d:"Soal cerita persen dalam jual beli"},
{t:"Perbandingan dan Skala",d:"Perbandingan, skala peta, dan denah"},
{t:"Kecepatan, Jarak, dan Waktu",d:"Menghitung kecepatan, jarak, dan waktu tempuh"},
{t:"Keliling Lingkaran",d:"Menghitung keliling lingkaran dan setengah lingkaran"},
{t:"Luas Lingkaran",d:"Menghitung luas lingkaran, setengah, dan seperempat lingkaran"},
{t:"Luas Bangun Gabungan",d:"Gabungan persegi, segitiga, dan lingkaran"},
{t:"Bangun Ruang dan Sifatnya",d:"Kubus, balok, prisma, tabung, kerucut, bola"},
{t:"Volume Kubus, Balok, dan Prisma",d:"Menghitung volume bangun ruang bersisi datar"},
{t:"Volume Tabung",d:"Menghitung volume tabung dan isi dalam liter"},
{t:"Luas Permukaan Kubus dan Balok",d:"Menghitung luas seluruh sisi kubus dan balok"},
{t:"Luas Permukaan Tabung",d:"Menghitung luas selimut dan permukaan tabung"},
{t:"Mean, Median, dan Modus",d:"Menghitung ukuran pemusatan data"},
{t:"Penyajian Data: Tabel dan Diagram",d:"Membaca tabel dan diagram batang"},
{t:"Koordinat Kartesius",d:"Menentukan dan membaca titik pada bidang koordinat"},
{t:"Soal Cerita Bilangan Bulat",d:"Suhu, ketinggian, dan saldo dengan bilangan bulat"},
{t:"Pemecahan Masalah Pecahan dan Persen",d:"Cerita pecahan, desimal, dan persen"},
{t:"Pemecahan Masalah Bangun Datar dan Ruang",d:"Cerita keliling, luas, dan volume"},
{t:"Penalaran dan Perbandingan Pilihan",d:"Soal penalaran: mana yang lebih besar, hemat, atau tepat"},
{t:"Tantangan Juara Matematika",d:"Campuran semua materi, soal paling menantang"}
];
