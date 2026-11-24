/* Bank soal Matematika Kelas 6 - FULL - Developer: portgas75 */
const GAME={"grade":6,"version":"full","totalLevels":30,"hint":true};
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

/* Level Kelas 6 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Bilangan Bulat dan Garis Bilangan',d:'Membandingkan dan mengurutkan bilangan bulat positif dan negatif',h:'Pada garis bilangan, makin ke kanan makin besar. Bilangan negatif selalu lebih kecil dari nol.',gen(){
  const t=rnd(0,2);
  if(t===0){let a=rnd(-15,15),b=rnd(-15,15);if(a===b)b=a+3;const r=sg(a,b);return mk('Tanda yang tepat: <b>'+ng(a)+' ... '+ng(b)+'</b>',r,SIG.filter(x=>x!==r),'Pada garis bilangan, yang lebih kanan lebih besar.')}
  if(t===1){const a=shuf([-9,-6,-3,0,2,5,8,-1,4,-7]).slice(0,4),s=a.slice().sort((x,y)=>x-y),key=x=>x.map(ng).join(', ');const w=[a.slice().sort((x,y)=>y-x),a,s.slice().reverse().map((v,i,r)=>r[(i+1)%4]),[s[1],s[0],s[2],s[3]]].map(key).filter(x=>x!==key(s));return mk('Urutan dari yang <b>terkecil</b> ke terbesar: '+key(a)+'. Urutan yang benar ...',key(s),uniq(key(s),w),'Dari kiri ke kanan pada garis bilangan: '+key(s)+'.')}
  const a=rnd(-20,-1),c=-a;return mk('Lawan dari <b>'+ng(a)+'</b> adalah ...',String(c),uniq(c,[ng(a),ng(a-1),c+1,0,c-1]),'Lawan bilangan '+ng(a)+' adalah '+c+'.')}},
/*2*/{t:'Penjumlahan Bilangan Bulat',d:'Menjumlahkan bilangan bulat positif dan negatif',h:'Tanda sama: jumlahkan, tanda ikut. Tanda beda: kurangkan, tanda mengikuti yang lebih besar (tanpa tanda).',gen(){
  const a=rnd(-30,30),b=rnd(-30,30),c=a+b,p=b<0?'('+ng(b)+')':String(b);return mk('<b>'+ng(a)+' + '+p+' = ...</b>',ng(c),uniq(ng(c),[ng(a-b),ng(-c),ng(c+2),ng(c-2),ng(Math.abs(a)+Math.abs(b))]),ng(a)+' + '+p+' = '+ng(c)+'.',a+'+('+b+')')}},
/*3*/{t:'Pengurangan Bilangan Bulat',d:'Mengurangkan bilangan bulat',h:'Mengurangi sama dengan menambah lawannya. a − (−b) = a + b.',gen(){
  const a=rnd(-30,30),b=rnd(-30,30),c=a-b,p=b<0?'('+ng(b)+')':String(b);return mk('<b>'+ng(a)+' − '+p+' = ...</b>',ng(c),uniq(ng(c),[ng(a+b),ng(-c),ng(c+2),ng(c-2),ng(b-a)]),ng(a)+' − '+p+' = '+ng(c)+'.',a+'-('+b+')')}},
/*4*/{t:'Perkalian Bilangan Bulat',d:'Mengalikan bilangan bulat positif dan negatif',h:'Tanda sama → hasil positif. Tanda beda → hasil negatif.',gen(){
  const a=rnd(-12,12)||3,b=rnd(-12,12)||4,c=a*b,pa=a<0?'('+ng(a)+')':a,pb=b<0?'('+ng(b)+')':b;return mk('<b>'+pa+' × '+pb+' = ...</b>',ng(c),uniq(ng(c),[ng(-c),ng(a+b),ng(c+a),ng(c-b),ng(Math.abs(c)+1)]),pa+' × '+pb+' = '+ng(c)+'.',a+'*('+b+')')}},
/*5*/{t:'Pembagian Bilangan Bulat',d:'Membagi bilangan bulat',h:'Aturan tanda pembagian sama dengan perkalian: sama → positif, beda → negatif.',gen(){
  const b=rnd(-12,12)||2,q=rnd(-12,12)||3,a=b*q,pa=a<0?'('+ng(a)+')':a,pb=b<0?'('+ng(b)+')':b;return mk('<b>'+pa+' ÷ '+pb+' = ...</b>',ng(q),uniq(ng(q),[ng(-q),ng(q+1),ng(q-1),ng(b),ng(a-b)]),pb+' × '+ng(q)+' = '+ng(a)+'.',a+'/('+b+')')}},
/*6*/{t:'Operasi Campuran Bilangan Bulat',d:'Hitung campuran dengan bilangan bulat dan tanda kurung',h:'Kerjakan kurung dulu, lalu × dan ÷, terakhir + dan −. Perhatikan tanda negatif.',gen(){
  const a=rnd(-9,12),b=rnd(2,9),c=rnd(-9,9)||2,d=rnd(-9,9),r=a+b*c-d,pc=c<0?'('+ng(c)+')':c,pd=d<0?'('+ng(d)+')':d;
  if(Math.random()<.5)return mk('<b>'+ng(a)+' + '+b+' × '+pc+' − '+pd+' = ...</b>',ng(r),uniq(ng(r),[ng((a+b)*c-d),ng(r+b),ng(r-b),ng(-r),ng(r+2)]),'× dulu: '+b+' × '+pc+' = '+ng(b*c)+'. Lalu '+ng(a)+' + '+ng(b*c)+' − '+pd+' = '+ng(r)+'.',a+'+'+b+'*('+c+')-('+d+')');
  const x=rnd(-8,8),y=rnd(-8,8),z=rnd(2,6),r2=(x+y)*z;return mk('<b>('+ng(x)+' + '+(y<0?'('+ng(y)+')':y)+') × '+z+' = ...</b>',ng(r2),uniq(ng(r2),[ng(x+y*z),ng(-r2),ng(r2+z),ng(r2-z),ng(x*z+y)]),'Kurung: '+ng(x+y)+', lalu × '+z+' = '+ng(r2)+'.','('+x+'+('+y+'))*'+z)}},
/*7*/{t:'Pangkat dan Akar',d:'Bilangan kuadrat, kubik, dan akar',h:'a² = a × a, a³ = a × a × a. Akar kuadrat adalah kebalikan dari kuadrat: √49 = 7 karena 7 × 7 = 49.',gen(){
  const t=rnd(0,3);
  if(t===0){const a=rnd(2,20),c=a*a;return mk('<b>'+a+'² = ...</b>',fmt(c),uniq(fmt(c),[2*a,a*3,c+a,c-a,a*a*a].map(fmt)),a+' × '+a+' = '+fmt(c)+'.',a+'*'+a)}
  if(t===1){const a=rnd(2,10),c=a*a*a;return mk('<b>'+a+'³ = ...</b>',fmt(c),uniq(fmt(c),[3*a,a*a,a*a+a,c+a,6*a*a].map(fmt)),a+' × '+a+' × '+a+' = '+fmt(c)+'.',a+'*'+a+'*'+a)}
  if(t===2){const a=rnd(2,25),c=a*a;return mk('<b>√'+fmt(c)+' = ...</b>',a,uniq(a,[a+1,a-1,c/2,a*2,a+2]).filter(x=>+x>0),a+' × '+a+' = '+fmt(c)+', jadi akarnya '+a+'.',String(a))}
  const a=rnd(2,5),b=rnd(2,5),r=a*a+b*b;return mk('<b>'+a+'² + '+b+'² = ...</b>',r,uniq(r,[(a+b)*(a+b),a+b,a*b,r+2,r-1]),a*a+' + '+b*b+' = '+r+'.',a+'*'+a+'+'+b+'*'+b)}},
/*8*/{t:'FPB dan KPK',d:'FPB dan KPK serta soal cerita',h:'FPB untuk membagi sama rata tanpa sisa; KPK untuk kejadian berulang bersamaan.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const g=rnd(2,12);let p,q;do{p=rnd(2,8);q=rnd(2,8)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[g+1,g*2,p,q,lcm(a,b),1]),'FPB = '+g+'.','gcd('+a+','+b+')')}
  if(t===1){let a,b;do{a=rnd(4,20);b=rnd(4,20)}while(a===b);const c=lcm(a,b);return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,c*2,c+a,gcd(a,b),a+b]).filter(x=>+x>0),'KPK = '+c+'.','lcm('+a+','+b+')')}
  if(t===2){const g=rnd(3,12);let p,q;do{p=rnd(2,8);q=rnd(2,8)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk(nm+' punya '+a+' kelereng dan '+b+' kancing. Dibagi ke beberapa kantong dengan isi sama. Kantong paling banyak ...',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+'.','gcd('+a+','+b+')')}
  let a,b;do{a=rnd(4,14);b=rnd(4,14)}while(a===b);const c=lcm(a,b);return mk('Dua bus berangkat dari terminal setiap '+a+' menit dan '+b+' menit. Jika berangkat bersamaan sekarang, berangkat bersamaan lagi setelah ... menit',c,uniq(c,[a*b,a+b,c*2,c+a]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')')}},
/*9*/{t:'Pecahan Campuran',d:'Tambah, kurang, kali, bagi pecahan',h:'Tambah/kurang: samakan penyebut. Kali: pembilang × pembilang, penyebut × penyebut. Bagi: kalikan kebalikan.',gen(){
  const t=rnd(0,3);
  if(t===0){let b,d;do{b=pick([2,3,4,5,6,8]);d=pick([2,3,4,5,6,8,9])}while(b===d||lcm(b,d)>24);const a=rnd(1,b-1),c=rnd(1,d-1),L=lcm(b,d),n=a*L/b+c*L/d,r=frs(n,L);return mk('<b>'+fr(a,b)+' + '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a+c,b+d),frs(a+c,b),frs(n+1,L),frs(n-1,L),frs(n,L+1)].filter(x=>x!==r)),fr(a*L/b,L)+' + '+fr(c*L/d,L)+' = '+fr(n,L)+' = '+r+'.',a+'/'+b+'+'+c+'/'+d)}
  if(t===1){let b,d,a,c,n,L;do{b=pick([2,3,4,5,6,8]);d=pick([2,3,4,5,6,8,9]);L=lcm(b,d);a=rnd(1,b-1);c=rnd(1,d-1);n=a*L/b-c*L/d}while(b===d||L>24||n<=0);const r=frs(n,L);return mk('<b>'+fr(a,b)+' − '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a+c,L),frs(n+1,L),frs(n+2,L),frs(n,L+1),frs(n*2,L)].filter(x=>x!==r)),fr(a*L/b,L)+' − '+fr(c*L/d,L)+' = '+fr(n,L)+' = '+r+'.',a+'/'+b+'-'+c+'/'+d)}
  if(t===2){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),r=frs(a*c,b*d);return mk('<b>'+fr(a,b)+' × '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a*d,b*c),frs(a+c,b+d),frs(a*c+1,b*d),frs(a*c,b+d),frs(a*c,b*d+b)].filter(x=>x!==r)),'Hasil: '+r+'.',a+'/'+b+'*'+c+'/'+d)}
  const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),r=frs(a*d,b*c);return mk('<b>'+fr(a,b)+' ÷ '+fr(c,d)+' = ...</b>',r,uniq(r,[frs(a*c,b*d),frs(b*c,a*d),frs(a*d+1,b*c),frs(a*d,b*c+1),frs(a*d*2,b*c)].filter(x=>x!==r)),fr(a,b)+' × '+fr(d,c)+' = '+r+'.',a+'/'+b+'/('+c+'/'+d+')')}},
/*10*/{t:'Desimal dan Persen',d:'Pecahan, desimal, dan persen saling berubah',h:'Persen = per seratus. 0,75 = 75% = 3/4. Dari desimal ke persen kalikan 100.',gen(){
  const P=[[1,2,50],[1,4,25],[3,4,75],[1,5,20],[2,5,40],[3,5,60],[4,5,80],[1,10,10],[3,10,30],[7,10,70],[9,10,90],[1,20,5],[3,20,15],[1,25,4]],p=pick(P),t=rnd(0,3);
  if(t===0)return mk('Pecahan '+fr(p[0],p[1])+' sama dengan ... %',p[2],uniq(p[2],P.map(x=>x[2])),fr(p[0],p[1])+' × 100% = '+p[2]+'%.',String(p[2]));
  if(t===1)return mk('<b>'+p[2]+'%</b> sama dengan desimal ...',dec(p[2]/100),uniq(dec(p[2]/100),P.map(x=>dec(x[2]/100))),p[2]+'% = '+dec(p[2]/100)+'.',p[2]+'/100');
  if(t===2)return mk('<b>'+p[2]+'%</b> sama dengan pecahan paling sederhana ...',fr(p[0],p[1]),uniq(fr(p[0],p[1]),shuf(P).map(x=>fr(x[0],x[1]))),p[2]+'/100 = '+fr(p[0],p[1])+'.',p[0]+'/'+p[1]);
  const n=pick([40,60,80,100,120,200,300]),q=pick([10,20,25,50,75]),c=n*q/100;return mk('<b>'+q+'%</b> dari <b>'+n+'</b> adalah ...',c,dis(c,[5,10,1,n/10],1,n),q+'/100 × '+n+' = '+c+'.',q+'/100*'+n)}},
/*11*/{t:'Operasi Desimal',d:'Tambah, kurang, kali, dan bagi bilangan desimal',h:'Sejajarkan koma untuk tambah/kurang. Untuk kali, hitung tanpa koma lalu geser koma sebanyak total angka di belakang koma.',gen(){
  const A=rnd(120,999),B=rnd(120,999),t=rnd(0,3);
  if(t===0)return mk('<b>'+dec(A/100)+' + '+dec(B/100)+' = ...</b>',dec((A+B)/100),dis(A+B,[1,10,100],200,2000).map(x=>dec(x/100)),dec(A/100)+' + '+dec(B/100)+' = '+dec((A+B)/100)+'.',A+'/100+'+B+'/100');
  if(t===1){const hi=Math.max(A,B)+5,lo=Math.min(A,B);return mk('<b>'+dec(hi/100)+' − '+dec(lo/100)+' = ...</b>',dec((hi-lo)/100),dis(hi-lo,[1,10,100],1,1000).map(x=>dec(x/100)),dec(hi/100)+' − '+dec(lo/100)+' = '+dec((hi-lo)/100)+'.',hi+'/100-'+lo+'/100')}
  if(t===2){const a=rnd(12,99),k=rnd(2,9);return mk('<b>'+dec(a/10)+' × '+k+' = ...</b>',dec(a*k/10),dis(a*k,[1,10,a],10,900).map(x=>dec(x/10)),dec(a/10)+' × '+k+' = '+dec(a*k/10)+'.',a+'/10*'+k)}
  const k=rnd(2,9),q=rnd(12,99);return mk('<b>'+dec(k*q/10)+' ÷ '+k+' = ...</b>',dec(q/10),dis(q,[1,10,5],1,200).map(x=>dec(x/10)),dec(k*q/10)+' ÷ '+k+' = '+dec(q/10)+'.',(k*q)+'/10/'+k)}},
/*12*/{t:'Persen: Diskon, Untung, dan Rugi',d:'Soal cerita persen dalam jual beli',h:'Diskon = persen × harga. Untung = harga jual − harga beli. Persen untung = untung ÷ harga beli × 100%.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const p=pick([10,20,25,50]),P=rnd(2,25)*2000,c=P-P*p/100;return mk(nm+' membeli sepatu seharga '+rp(P)+' diskon '+p+'%. Harga yang dibayar ...',rp(c),uniq(rp(c),[rp(P+P*p/100),rp(P*p/100),rp(c+5000),rp(c-1000)]),'Diskon '+rp(P*p/100)+'. Bayar '+rp(c)+'.',P+'-'+P+'*'+p+'/100')}
  if(t===1){const b=rnd(5,40)*1000,u=pick([10,20,25,50]),c=b+b*u/100;return mk('Pedagang membeli barang '+rp(b)+' dan menjualnya untung '+u+'%. Harga jualnya ...',rp(c),uniq(rp(c),[rp(b-b*u/100),rp(b*u/100),rp(c+1000),rp(c-1000)]),'Untung '+rp(b*u/100)+'. Jual '+rp(c)+'.',b+'+'+b+'*'+u+'/100')}
  if(t===2){const b=pick([20000,40000,50000,80000,100000,200000]),u=pick([10,20,25,50,5]),j=b+b*u/100;return mk('Barang dibeli '+rp(b)+' dan dijual '+rp(j)+'. Persentase untungnya ... %',u,dis(u,[5,10,1],1,100),'Untung '+rp(j-b)+'. '+(j-b)+' ÷ '+b+' × 100% = '+u+'%.',(j-b)+'/'+b+'*100')}
  const b=rnd(10,50)*1000,p=pick([10,20,25]),c=b-b*p/100;return mk('Sebuah barang dibeli '+rp(b)+' lalu dijual rugi '+p+'%. Harga jualnya ...',rp(c),uniq(rp(c),[rp(b+b*p/100),rp(b*p/100),rp(c+1000),rp(c-1000)]),'Rugi '+rp(b*p/100)+'. Jual '+rp(c)+'.',b+'-'+b+'*'+p+'/100')}},
/*13*/{t:'Perbandingan dan Skala',d:'Perbandingan, skala peta, dan denah',h:'Skala 1 : K berarti 1 cm di gambar = K cm sebenarnya. 100.000 cm = 1 km.',gen(){
  const t=rnd(0,3),nm=pick(NAMA);
  if(t===0){const g=rnd(2,9);let p,q;do{p=rnd(1,8);q=rnd(1,8)}while(p===q||gcd(p,q)!==1);return mk('Perbandingan <b>'+g*p+' : '+g*q+'</b> disederhanakan menjadi ...',p+' : '+q,uniq(p+' : '+q,[q+' : '+p,(p+1)+' : '+q,p+' : '+(q+1),g*p+' : '+q]),'Dibagi '+g+': '+p+' : '+q+'.')}
  if(t===1){const p=rnd(1,5);let q;do q=rnd(1,6);while(q===p);const T=(p+q)*rnd(3,12);return mk('Uang '+nm+' dan adiknya berbanding '+p+' : '+q+'. Jumlahnya '+rp(T*1000)+'. Uang adik ...',rp(T/(p+q)*q*1000),uniq(rp(T/(p+q)*q*1000),[rp(T/(p+q)*p*1000),rp(T*1000-q*1000),rp(T/(p+q)*1000),rp(T/(p+q)*q*1000+1000)]),'Satu bagian = '+rp(T/(p+q)*1000)+'. Adik = '+q+' bagian.',T/(p+q)*q+'*1000')}
  const K=pick([50000,100000,200000,500000]),X=K/100000;
  if(t===2){const d=pick([2,4,6,8,10]),R=d*X,c=Number.isInteger(R)?String(R):dec(R);return mk('Jarak pada peta <b>'+d+' cm</b>, skala <b>1 : '+fmt(K)+'</b>. Jarak sebenarnya ... km',c,uniq(c,[d*X*10,d/X,R+1,R*2,d].map(x=>Number.isInteger(x)?String(x):dec(x))),d+' × '+fmt(K)+' = '+fmt(d*K)+' cm = '+c+' km.',d+'*'+K+'/100000')}
  const d=rnd(2,12),R=d*X;if(!Number.isInteger(R))return LEVELS[12].gen();return mk('Jarak sebenarnya <b>'+R+' km</b>, skala <b>1 : '+fmt(K)+'</b>. Jarak pada peta ... cm',d,dis(d,[1,2,X],1,60),R+' km = '+fmt(R*100000)+' cm ÷ '+fmt(K)+' = '+d+' cm.',R+'*100000/'+K)}},
/*14*/{t:'Kecepatan, Jarak, dan Waktu',d:'Menghitung kecepatan, jarak, dan waktu tempuh',h:'Kecepatan = jarak ÷ waktu. Jarak = kecepatan × waktu. Waktu = jarak ÷ kecepatan.',gen(){
  const t=rnd(0,3),nm=pick(NAMA);
  if(t===0){const v=rnd(4,20)*5,w=rnd(2,6);return mk('Sebuah motor menempuh '+(v*w)+' km dalam '+w+' jam. Kecepatannya ... km/jam',v,dis(v,[5,10,w],10,200),(v*w)+' ÷ '+w+' = '+v+' km/jam.',(v*w)+'/'+w)}
  if(t===1){const v=rnd(4,16)*5,w=rnd(2,6);return mk('Mobil berkecepatan '+v+' km/jam selama '+w+' jam. Jarak yang ditempuh ... km',v*w,dis(v*w,[v,10,w*5],10,900),v+' × '+w+' = '+v*w+' km.',v+'*'+w)}
  if(t===2){const v=rnd(4,16)*5,w=rnd(2,8);return mk(nm+' mengendarai sepeda '+(v*w)+' km dengan kecepatan '+v+' km/jam. Waktu tempuh ... jam',w,dis(w,[1,2,3],1,20),(v*w)+' ÷ '+v+' = '+w+' jam.',(v*w)+'/'+v)}
  const v=rnd(3,12)*10,m=pick([30,60,90,120]),j=v*m/60;if(!Number.isInteger(j))return LEVELS[13].gen();return mk('Sebuah bus berkecepatan '+v+' km/jam berjalan selama '+m+' menit. Jarak ... km',j,dis(j,[v,10,5],5,400),m+' menit = '+m/60+' jam. '+v+' × '+m/60+' = '+j+' km.',v+'*'+m+'/60')}},
/*15*/{t:'Keliling Lingkaran',d:'Menghitung keliling lingkaran dan setengah lingkaran',h:'Keliling = π × d = 2 × π × r. Pakai π = 22/7 jika jari-jari kelipatan 7, atau 3,14 jika kelipatan 10.',gen(){
  const t=rnd(0,3);
  if(t===0){const r=7*rnd(1,10),c=2*22*r/7;return mk('Lingkaran berjari-jari <b>'+r+' cm</b> (π = 22/7). Kelilingnya ... cm',c,dis(c,[r,22,44,10],7,500),'K = 2 × 22/7 × '+r+' = '+c+' cm.','2*22/7*'+r)}
  if(t===1){const d=rnd(1,10)*10,c=3.14*d;return mk('Lingkaran berdiameter <b>'+d+' cm</b> (π = 3,14). Kelilingnya ... cm',dec(c),uniq(dec(c),[dec(3.14*d/2),dec(3.14*d*2),dec(d*3),dec(c+3.14)]),'K = 3,14 × '+d+' = '+dec(c)+' cm.','3.14*'+d)}
  if(t===2){const d=7*rnd(1,10),c=22*d/7;return mk('Roda berdiameter <b>'+d+' cm</b> (π = 22/7). Sekali berputar menempuh ... cm',c,dis(c,[d,22,11,7],7,300),'K = 22/7 × '+d+' = '+c+' cm.','22/7*'+d)}
  const r=7*rnd(1,8),c=22*r/7;return mk('Keliling setengah lingkaran (tanpa diameter) berjari-jari <b>'+r+' cm</b>, π = 22/7. Panjangnya ... cm',c,dis(c,[r,2*c,22,c+r],7,300),'½ × 2 × 22/7 × '+r+' = '+c+' cm.','22/7*'+r)}},
/*16*/{t:'Luas Lingkaran',d:'Menghitung luas lingkaran, setengah, dan seperempat lingkaran',h:'Luas = π × r × r. Setengah lingkaran: bagi 2. Seperempat: bagi 4. Jangan lupa jari-jari = diameter ÷ 2.',gen(){
  const t=rnd(0,3);
  if(t===0){const r=7*rnd(1,6),c=22*r*r/7;return mk('Luas lingkaran berjari-jari <b>'+r+' cm</b> (π = 22/7) ... cm²',fmt(c),uniq(fmt(c),[2*22*r/7,22*r/7,c*2,c+r,22*r*r].map(fmt)),'L = 22/7 × '+r+' × '+r+' = '+fmt(c)+' cm².','22/7*'+r+'*'+r)}
  if(t===1){const r=rnd(1,10)*10,c=3.14*r*r,F=x=>Number.isInteger(Math.round(x*100)/100)?fmt(Math.round(x*100)/100):dec(x);return mk('Luas lingkaran berjari-jari <b>'+r+' cm</b> (π = 3,14) ... cm²',F(c),uniq(F(c),[3.14*r*2,3.14*r*r*2,3.14*r,r*r*3,c+r].map(F)),'L = 3,14 × '+r+' × '+r+' = '+F(c)+' cm².','3.14*'+r+'*'+r)}
  if(t===2){const d=14*rnd(1,4),r=d/2,c=22*r*r/7;return mk('Lingkaran berdiameter <b>'+d+' cm</b> (π = 22/7). Luasnya ... cm²',fmt(c),uniq(fmt(c),[22*d*d/7,22*d/7,c*2,c/2].map(fmt)),'r = '+r+'. L = 22/7 × '+r+' × '+r+' = '+fmt(c)+' cm².','22/7*'+r+'*'+r)}
  const r=14*rnd(1,3),q=pick([2,4]),c=22*r*r/7/q;return mk('Luas '+(q===2?'setengah':'seperempat')+' lingkaran berjari-jari <b>'+r+' cm</b> (π = 22/7) ... cm²',fmt(c),uniq(fmt(c),[22*r*r/7,22*r*r/7/(q===2?4:2),c*2,c+r].map(fmt)),'Luas penuh '+fmt(22*r*r/7)+' ÷ '+q+' = '+fmt(c)+' cm².','22/7*'+r+'*'+r+'/'+q)}},
/*17*/{t:'Luas Bangun Gabungan',d:'Gabungan persegi, segitiga, dan lingkaran',h:'Pecah menjadi bangun sederhana, hitung luas tiap bagian, lalu jumlahkan atau kurangkan.',gen(){
  const t=rnd(0,2);
  if(t===0){const s=14*rnd(1,3),c=s*s+22*(s/2)*(s/2)/7/2;return mk('Persegi bersisi <b>'+s+' cm</b> dengan setengah lingkaran (diameter sisi persegi) di atasnya. π = 22/7. Luas seluruhnya ... cm²',fmt(c),uniq(fmt(c),[s*s,s*s+22*(s/2)*(s/2)/7,s*s-22*(s/2)*(s/2)/7/2,c+s,c-s].map(fmt)),'Persegi '+s*s+' + setengah lingkaran '+22*(s/2)*(s/2)/7/2+' = '+fmt(c)+' cm².',s+'*'+s+'+22/7*'+s/2+'*'+s/2+'/2')}
  if(t===1){const s=14*rnd(1,3),c=s*s-22*(s/2)*(s/2)/7,d=Math.round(c*100)/100;return mk('Dari persegi bersisi <b>'+s+' cm</b> dibuat lubang lingkaran berdiameter '+s+' cm (π = 22/7). Luas sisa ... cm²',fmt(d),uniq(fmt(d),[s*s,22*(s/2)*(s/2)/7,s*s+22*(s/2)*(s/2)/7,d+s,d-s].map(x=>fmt(Math.round(x*100)/100))),'Persegi '+s*s+' − lingkaran '+22*(s/2)*(s/2)/7+' = '+fmt(d)+' cm².',s+'*'+s+'-22/7*'+s/2+'*'+s/2)}
  const p=rnd(6,20)*2,l=rnd(4,12),h=rnd(3,10),c=p*l+p*h/2;return mk('Gabungan persegi panjang <b>'+p+' × '+l+' cm</b> dan segitiga di atasnya (alas '+p+' cm, tinggi '+h+' cm). Luas seluruhnya ... cm²',c,uniq(c,[p*l,p*h/2,p*l+p*h,c+p,c-h]).filter(x=>+x>0),'Persegi panjang '+p*l+' + segitiga '+p*h/2+' = '+c+' cm².',p+'*'+l+'+'+p+'*'+h+'/2')}},
/*18*/{t:'Bangun Ruang dan Sifatnya',d:'Kubus, balok, prisma, tabung, kerucut, bola',h:'Hitung bidang sisi (permukaan), rusuk (garis pertemuan), dan titik sudut (pojok) tiap bangun ruang.',gen(){
  const B=[['kubus',6,12,8],['balok',6,12,8],['prisma segitiga',5,9,6],['limas segiempat',5,8,5],['tabung',3,2,0],['kerucut',2,1,1],['bola',1,0,0]],b=pick(B),t=rnd(0,2),N=['sisi','rusuk','titik sudut'][t],v=b[t+1];
  const pool=[0,1,2,3,4,5,6,8,9,12].filter(x=>x!==v);return mk('Banyak <b>'+N+'</b> pada '+b[0]+' adalah ...',v,shuf(pool).slice(0,3),b[0]+' memiliki '+v+' '+N+'.')}},
/*19*/{t:'Volume Kubus, Balok, dan Prisma',d:'Menghitung volume bangun ruang bersisi datar',h:'Kubus s³. Balok p × l × t. Prisma = luas alas × tinggi.',gen(){
  const t=rnd(0,3);
  if(t===0){const s=rnd(3,15),c=s*s*s;return mk('Volume kubus rusuk <b>'+s+' cm</b> ... cm³',fmt(c),uniq(fmt(c),[3*s,s*s,6*s*s,c+s].map(fmt)),s+'³ = '+fmt(c)+' cm³.',s+'*'+s+'*'+s)}
  if(t===1){const p=rnd(4,25),l=rnd(3,15),h=rnd(2,12),c=p*l*h;return mk('Volume balok <b>'+p+' × '+l+' × '+h+' cm</b> ... cm³',fmt(c),uniq(fmt(c),[p+l+h,p*l,2*(p*l+p*h+l*h),c+p].map(fmt)),p+' × '+l+' × '+h+' = '+fmt(c)+' cm³.',p+'*'+l+'*'+h)}
  if(t===2){const a=rnd(2,10)*2,tt=rnd(2,10),H=rnd(3,15),c=a*tt/2*H;return mk('Prisma segitiga dengan alas segitiga (alas '+a+' cm, tinggi '+tt+' cm) dan tinggi prisma '+H+' cm. Volumenya ... cm³',fmt(c),uniq(fmt(c),[a*tt*H,a*tt/2,a*tt/2+H,c+a].map(fmt)),'Luas alas = ½ × '+a+' × '+tt+' = '+a*tt/2+'. Volume = '+a*tt/2+' × '+H+' = '+fmt(c)+' cm³.',a+'*'+tt+'/2*'+H)}
  const p=rnd(4,15),l=rnd(3,10),h=rnd(2,8),V=p*l*h;return mk('Volume balok <b>'+fmt(V)+' cm³</b>, panjang '+p+' cm, lebar '+l+' cm. Tingginya ... cm',h,dis(h,[1,2,3],1,20),V+' ÷ ('+p+' × '+l+') = '+h+' cm.',V+'/('+p+'*'+l+')')}},
/*20*/{t:'Volume Tabung',d:'Menghitung volume tabung dan isi dalam liter',h:'Volume tabung = π × r × r × t. 1.000 cm³ = 1 liter.',gen(){
  const t=rnd(0,2);
  if(t===0){const r=7*rnd(1,3),h=rnd(2,20),c=22*r*r*h/7;return mk('Volume tabung berjari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 22/7) ... cm³',fmt(c),uniq(fmt(c),[22*r*h/7,22*r*r/7,c*2,c+r].map(fmt)),'V = 22/7 × '+r+' × '+r+' × '+h+' = '+fmt(c)+' cm³.','22/7*'+r+'*'+r+'*'+h)}
  if(t===1){const r=rnd(1,5)*10,h=rnd(2,10)*10,c=3.14*r*r*h;return mk('Volume tabung jari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 3,14) ... cm³',fmt(c),uniq(fmt(c),[3.14*r*h,3.14*r*r,c*2,c/2].map(x=>fmt(Math.round(x*100)/100))),'V = 3,14 × '+r+' × '+r+' × '+h+' = '+fmt(c)+' cm³.','3.14*'+r+'*'+r+'*'+h)}
  const r=7*rnd(1,3),h=rnd(5,25)*10,c=22*r*r*h/7/1000,d=dec(c);return mk('Tandon berbentuk tabung jari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 22/7). Isinya ... liter',d,uniq(d,[c*10,c*100,c/10,22*r*h/7/1000].map(dec)).filter(x=>x!==d),'V = '+fmt(22*r*r*h/7)+' cm³ = '+d+' liter.','22/7*'+r+'*'+r+'*'+h+'/1000')}},
/*21*/{t:'Luas Permukaan Kubus dan Balok',d:'Menghitung luas seluruh sisi kubus dan balok',h:'Kubus: 6 × s × s. Balok: 2 × (pl + pt + lt).',gen(){
  const t=rnd(0,2);
  if(t===0){const s=rnd(3,20),c=6*s*s;return mk('Luas permukaan kubus rusuk <b>'+s+' cm</b> ... cm²',fmt(c),uniq(fmt(c),[s*s,4*s*s,12*s,c+s*s].map(fmt)),'6 × '+s+' × '+s+' = '+fmt(c)+' cm².','6*'+s+'*'+s)}
  if(t===1){const p=rnd(4,20),l=rnd(3,12),h=rnd(2,10),c=2*(p*l+p*h+l*h);return mk('Luas permukaan balok <b>'+p+' × '+l+' × '+h+' cm</b> ... cm²',fmt(c),uniq(fmt(c),[p*l*h,p*l+p*h+l*h,2*(p+l+h),c+p].map(fmt)),'2 × ('+p*l+' + '+p*h+' + '+l*h+') = '+fmt(c)+' cm².','2*('+p+'*'+l+'+'+p+'*'+h+'+'+l+'*'+h+')')}
  const s=rnd(3,12),c=6*s*s,nm=pick(NAMA);return mk(nm+' mengecat seluruh permukaan kotak kubus rusuk '+s+' dm. Luas yang dicat ... dm²',fmt(c),uniq(fmt(c),[s*s,5*s*s,4*s*s,12*s].map(fmt)),'6 × '+s+' × '+s+' = '+fmt(c)+' dm².','6*'+s+'*'+s)}},
/*22*/{t:'Luas Permukaan Tabung',d:'Menghitung luas selimut dan permukaan tabung',h:'Luas permukaan = 2πr(r + t). Selimut = 2πrt. Tanpa tutup: π r² + 2πrt.',gen(){
  const r=7*rnd(1,3),h=rnd(3,20),t=rnd(0,2),P=22/7;
  if(t===0){const c=2*22*r*h/7;return mk('Luas selimut tabung jari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 22/7) ... cm²',fmt(c),uniq(fmt(c),[22*r*r*h/7,c+2*22*r*r/7,22*r*h/7,c*2].map(fmt)),'2 × 22/7 × '+r+' × '+h+' = '+fmt(c)+' cm².','2*22/7*'+r+'*'+h)}
  if(t===1){const c=2*22*r*(r+h)/7;return mk('Luas permukaan tabung (dengan tutup) jari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 22/7) ... cm²',fmt(c),uniq(fmt(c),[2*22*r*h/7,22*r*r/7+2*22*r*h/7,22*r*(r+h)/7,c+r*r].map(fmt)),'2 × 22/7 × '+r+' × ('+r+' + '+h+') = '+fmt(c)+' cm².','2*22/7*'+r+'*('+r+'+'+h+')')}
  const c=22*r*r/7+2*22*r*h/7;return mk('Luas permukaan tabung <b>tanpa tutup</b> jari-jari <b>'+r+' cm</b> dan tinggi <b>'+h+' cm</b> (π = 22/7) ... cm²',fmt(c),uniq(fmt(c),[2*22*r*(r+h)/7,2*22*r*h/7,c+22*r*r/7,c*2].map(fmt)),'Alas '+22*r*r/7+' + selimut '+2*22*r*h/7+' = '+fmt(c)+' cm².','22/7*'+r+'*'+r+'+2*22/7*'+r+'*'+h)}},
/*23*/{t:'Mean, Median, dan Modus',d:'Menghitung ukuran pemusatan data',h:'Mean = jumlah ÷ banyak. Median = nilai tengah setelah diurutkan. Modus = paling sering muncul.',gen(){
  const t=rnd(0,2),k=pick([5,7]),arr=Array.from({length:k},()=>rnd(4,10)),s=arr.slice().sort((a,b)=>a-b);
  if(t===0){const sum=arr.reduce((a,b)=>a+b,0);if(sum%k)return LEVELS[22].gen();const m=sum/k;return mk('Data: <b>'+arr.join(', ')+'</b>. Mean (rata-rata) ... ',m,dis(m,[1,2,3],1,12),'Jumlah '+sum+' ÷ '+k+' = '+m+'.','('+arr.join('+')+')/'+k)}
  if(t===1){const m=median(arr);return mk('Data: <b>'+arr.join(', ')+'</b>. Median ... ',m,uniq(m,[m+1,m-1,s[0],s[k-1],mean(arr)].map(x=>Number.isInteger(x)?x:dec(x))).filter(x=>+String(x).replace(',','.')>0),'Urut: '+s.join(', ')+'. Tengahnya '+m+'.',null)}
  const f={};arr.forEach(x=>f[x]=(f[x]||0)+1);const mf=Math.max.apply(null,Object.values(f)),md=Object.keys(f).filter(x=>f[x]===mf);if(md.length!==1||mf<2)return LEVELS[22].gen();const c=+md[0];return mk('Data: <b>'+arr.join(', ')+'</b>. Modus ... ',c,shuf([4,5,6,7,8,9,10].filter(x=>x!==c)).slice(0,3),c+' muncul '+mf+' kali.',String(c))}},
/*24*/{t:'Penyajian Data: Tabel dan Diagram',d:'Membaca tabel dan diagram batang',h:'Baca judul dan keterangan, cari nilai yang ditanya, lalu hitung selisih atau jumlahnya.',gen(){
  const nm=shuf(['Apel','Jeruk','Mangga','Pisang','Anggur']).slice(0,4),v=shuf(Array.from({length:30},(_,i)=>i+10)).slice(0,4),o=nm.map((n,i)=>({n:n,v:v[i]})),s=o.slice().sort((a,b)=>b.v-a.v),t=rnd(0,3);
  const view=Math.random()<.5?tbl(['Buah','Terjual (kg)'],o.map(x=>[x.n,x.v])):bars(o.map(x=>x.n),o.map(x=>x.v),4),head='Penjualan buah di toko hari ini.'+view;
  if(t===0)return mk(head+'Buah <b>terlaris</b> adalah ...',s[0].n,nm.filter(x=>x!==s[0].n),s[0].n+' terjual '+s[0].v+' kg, terbanyak.');
  if(t===1){const c=s[0].v-s[3].v;return mk(head+'Selisih penjualan terbanyak dan tersedikit ... kg',c,dis(c,[1,2,10],1,50),s[0].v+' − '+s[3].v+' = '+c+'.',s[0].v+'-'+s[3].v)}
  if(t===2){const c=o.reduce((a,x)=>a+x.v,0);return mk(head+'Total penjualan ... kg',c,dis(c,[1,2,10,5],20,200),'Jumlah = '+c+' kg.',o.map(x=>x.v).join('+'))}
  const c=o.reduce((a,x)=>a+x.v,0);if(c%4)return LEVELS[23].gen();const m=c/4;return mk(head+'Rata-rata penjualan tiap jenis buah ... kg',m,dis(m,[1,2,3,5],5,60),c+' ÷ 4 = '+m+'.',c+'/4')}},
/*25*/{t:'Koordinat Kartesius',d:'Menentukan dan membaca titik pada bidang koordinat',h:'Koordinat ditulis (x, y): x geser mendatar, y geser tegak. Kuadran I (+,+), II (−,+), III (−,−), IV (+,−).',gen(){
  const t=rnd(0,2),x=rnd(-8,8)||2,y=rnd(-8,8)||3;
  if(t===0){const q=x>0&&y>0?'I':x<0&&y>0?'II':x<0&&y<0?'III':'IV';return mk('Titik <b>('+ng(x)+', '+ng(y)+')</b> berada pada kuadran ...',q,['I','II','III','IV'].filter(z=>z!==q),'x '+(x>0?'positif':'negatif')+', y '+(y>0?'positif':'negatif')+', jadi kuadran '+q+'.')}
  if(t===1){const a=rnd(1,8),b=rnd(1,8);return mk('Titik A('+a+', '+b+'). Titik A dipindah <b>'+rnd(1,1)+' satuan ke kanan</b> dan <b>2 satuan ke atas</b>. Koordinat barunya ...','('+(a+1)+', '+(b+2)+')',uniq('('+(a+1)+', '+(b+2)+')',['('+(a+2)+', '+(b+1)+')','('+(a-1)+', '+(b+2)+')','('+(a+3)+', '+(b+1)+')','('+(b+2)+', '+(a+1)+')']),'Kanan menambah x, atas menambah y: ('+(a+1)+', '+(b+2)+').')}
  const a=rnd(1,6),b=rnd(1,6),c=a+rnd(2,6),d=b+rnd(2,6);return mk('Persegi panjang ABCD dengan titik A('+a+', '+b+'), B('+c+', '+b+'), dan C('+c+', '+d+'). Titik D adalah ...','('+a+', '+d+')',uniq('('+a+', '+d+')',['('+c+', '+a+')','('+d+', '+a+')','('+a+', '+c+')','('+b+', '+d+')']),'D sejajar A secara tegak dan C secara mendatar: ('+a+', '+d+').')}},
/*26*/{t:'Soal Cerita Bilangan Bulat',d:'Suhu, ketinggian, dan saldo dengan bilangan bulat',h:'Naik/untung → tambah. Turun/rugi → kurang. Tulis dulu kalimat matematikanya.',gen(){
  const t=rnd(0,2),nm=pick(NAMA);
  if(t===0){const a=rnd(-10,10),b=rnd(2,15),c=a-b;return mk('Suhu di kota A '+ng(a)+'°C. Setelah malam hari suhu turun '+b+'°C. Suhu sekarang ... °C',ng(c),uniq(ng(c),[ng(a+b),ng(-c),ng(c+2),ng(c-2)]),ng(a)+' − '+b+' = '+ng(c)+'.',a+'-'+b)}
  if(t===1){const a=rnd(10,60),b=rnd(5,40),c=a-b;return mk('Seorang penyelam berada di kedalaman '+a+' m (−'+a+'). Ia naik '+b+' m. Posisinya sekarang ...',ng(-c),uniq(ng(-c),[ng(-(a+b)),ng(c),ng(-c+2),ng(-c-2)]),ng(-a)+' + '+b+' = '+ng(-c)+'.','-'+a+'+'+b)}
  const m=rnd(2,8),n=rnd(2,9),c=-m*n;return mk(nm+' berutang '+rp(m*1000)+' setiap hari selama '+n+' hari. Perubahan uangnya (dalam ribuan rupiah) ...',ng(c),uniq(ng(c),[ng(-c),ng(m+n),ng(c+m),ng(c-n)]),'(−'+m+') × '+n+' = '+ng(c)+'.','-'+m+'*'+n)}},
/*27*/{t:'Pemecahan Masalah Pecahan dan Persen',d:'Cerita pecahan, desimal, dan persen',h:'Tentukan bagian atau total yang ditanya, lalu pakai operasi yang sesuai.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const T=pick([24,36,48,60,72,120]),a=pick([[1,2],[1,3],[1,4],[2,3],[3,4]]);if(T*a[0]%a[1])return LEVELS[26].gen();const c=T*a[0]/a[1];return mk(nm+' punya '+T+' kelereng. '+fr(a[0],a[1])+' bagian diberikan ke adik. Kelereng yang diberikan ...',c,dis(c,[1,2,5,T-c],1,T),fr(a[0],a[1])+' × '+T+' = '+c+'.',a[0]+'/'+a[1]+'*'+T)}
  if(t===1){const n=pick([40,60,80,100,120,200]),p=pick([25,40,60,75]),c=n*p/100;return mk('Dalam kelas ada '+n+' siswa, '+p+'% suka membaca. Siswa yang suka membaca ... orang',c,dis(c,[n-c,5,10],1,n),p+'% × '+n+' = '+c+'.',p+'/100*'+n)}
  if(t===2){const h=rnd(2,8),q=rnd(12,60),T=q*h;return mk('Pita sepanjang '+dec(T/10)+' m dipotong menjadi '+h+' bagian sama panjang. Panjang tiap potongan ... m',dec(q/10),uniq(dec(q/10),[dec(T/10*h),dec(q/5),dec(q/10+1),dec(q/20),dec(T/10)]),dec(T/10)+' ÷ '+h+' = '+dec(q/10)+' m.',T+'/10/'+h)}
  const a=rnd(2,9),k=rnd(2,5);return mk('Harga '+a+' kg beras '+rp(a*12000)+'. Harga '+(a*k)+' kg beras yang sama ...',rp(a*k*12000),uniq(rp(a*k*12000),[rp(a*12000*k+12000),rp(a*12000+k*12000),rp(a*k*12000-12000),rp(12000*k)]),'Per kg '+rp(12000)+'. '+(a*k)+' kg = '+rp(a*k*12000)+'.',a*k+'*12000')}},
/*28*/{t:'Pemecahan Masalah Bangun Datar dan Ruang',d:'Cerita keliling, luas, dan volume',h:'Tentukan rumus yang dipakai (keliling, luas, volume), lalu hitung bertahap dengan satuan yang tepat.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const r=7*rnd(1,5),c=2*22*r/7,pg=pick([1000,2000,2500]);return mk('Taman melingkar berjari-jari '+r+' m (π = 22/7) dipagari satu kali keliling. Biaya '+rp(pg)+' per meter. Seluruh biaya ...',rp(c*pg),uniq(rp(c*pg),[rp(22*r*r/7*pg),rp(c*pg+pg),rp(c*pg-pg),rp(r*pg)]),'Keliling = '+c+' m. Biaya = '+rp(c*pg)+'.','2*22/7*'+r+'*'+pg)}
  if(t===1){const p=rnd(3,10)*10,l=rnd(2,8)*10,h=rnd(2,6)*10,V=p*l*h/1000;return mk('Bak air '+p+' cm × '+l+' cm × '+h+' cm terisi penuh. Isinya ... liter',dec(V),uniq(dec(V),[V*10,V/10,V*100,p*l*h].map(dec)).filter(x=>x!==dec(V)),fmt(p*l*h)+' cm³ = '+dec(V)+' liter.',p+'*'+l+'*'+h+'/1000')}
  if(t===2){const p=rnd(6,16),l=rnd(4,p-1),pr=pick([20000,25000,30000]);return mk('Lantai '+p+' m × '+l+' m dipasang keramik '+rp(pr)+' per m². Biaya seluruhnya ...',rp(p*l*pr),uniq(rp(p*l*pr),[rp(2*(p+l)*pr),rp(p*l*pr+pr),rp(p*l*pr-pr),rp((p+l)*pr)]),'Luas '+p*l+' m². Biaya '+rp(p*l*pr)+'.',p+'*'+l+'*'+pr)}
  const s=rnd(3,10),c=6*s*s,pr=pick([500,1000]);return mk(nm+' mengecat seluruh sisi kubus rusuk '+s+' dm. Cat Rp'+fmt(pr)+' per dm². Biayanya ...',rp(c*pr),uniq(rp(c*pr),[rp(s*s*pr),rp(4*s*s*pr),rp(c*pr+pr),rp(c*pr-pr)]),'Luas '+c+' dm². Biaya '+rp(c*pr)+'.','6*'+s+'*'+s+'*'+pr)}},
/*29*/{t:'Penalaran dan Perbandingan Pilihan',d:'Soal penalaran: mana yang lebih besar, hemat, atau tepat',h:'Ubah semua ke bentuk yang sama (desimal, persen, atau harga per satuan), baru bandingkan.',gen(){
  const nm=pick(NAMA),t=rnd(0,2);
  if(t===0){const a=rnd(3,9),b=rnd(2,5);let c=rnd(2,9),d=rnd(2,9);if(a*d===b*c)c++;const r=a*d>b*c?fr(a,b)+' lebih besar':'';const x=[fr(a,b),fr(c,d)];const bigger=a/b>c/d?x[0]:x[1];return mk('Pecahan yang lebih besar antara <b>'+fr(a,b)+'</b> dan <b>'+fr(c,d)+'</b> adalah ...',bigger,x.filter(z=>z!==bigger).concat(['sama besar']),'Ubah ke desimal: '+dec(a/b)+' dan '+dec(c/d)+'. Yang lebih besar: '+bigger+'.')}
  if(t===1){const p1=rnd(2,6)*1000,k1=pick([2,3,4]),p2=p1*k1+pick([-1000,500,1000,-500]);const hm=p1*k1*1.0<p2?'Toko A':'Toko B';return mk('Toko A menjual '+k1+' pensil seharga '+rp(p1*k1)+'. Toko B menjual '+k1+' pensil seharga '+rp(p2)+'. Pembeli hemat membeli di ...',p1*k1<p2?'Toko A':'Toko B',['Toko A','Toko B','Sama saja'].filter(z=>z!==(p1*k1<p2?'Toko A':'Toko B')),'Yang harganya lebih murah lebih hemat.')}
  const a=rnd(2,9),b=rnd(2,9),c=a*b;return mk(nm+' mengatakan: "Saya memikirkan bilangan, dikalikan '+a+' hasilnya '+c+'." Bilangan itu ...',b,dis(b,[1,2,a],1,20),c+' ÷ '+a+' = '+b+'.',c+'/'+a)}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',h:'Baca soal dengan tenang, kenali jenis soalnya, lalu kerjakan langkah demi langkah.',gen(){return LEVELS[rnd(12,28)].gen()}}
];

const PREVIEW=[];
