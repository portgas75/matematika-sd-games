/* Bank soal Matematika Kelas 5 - FULL - Developer: portgas75 */
const GAME={"grade":5,"version":"full","totalLevels":30,"hint":true};
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

/* Level Kelas 5 (30 level). Level 1-10 = Trial, 1-30 = Full */
const LEVELS=[
/*1*/{t:'Operasi Hitung Bilangan Cacah',d:'Tambah, kurang, kali, bagi, dan hitung campuran bilangan besar',h:'Kerjakan tanda kurung dulu, lalu × dan ÷, terakhir + dan −. Periksa hasil dengan operasi kebalikannya.',gen(){
  const t=rnd(0,4);
  if(t===0){const a=rnd(12000,89999),b=rnd(3000,99999-a),c=a+b;return mk('<b>'+fmt(a)+' + '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],10000,99999).map(fmt),fmt(a)+' + '+fmt(b)+' = '+fmt(c)+'.',a+'+'+b)}
  if(t===1){const a=rnd(40000,99999),b=rnd(2000,a-5000),c=a-b;return mk('<b>'+fmt(a)+' − '+fmt(b)+' = ...</b>',fmt(c),dis(c,[10,100,1000,10000],1000,99999).map(fmt),fmt(a)+' − '+fmt(b)+' = '+fmt(c)+'.',a+'-'+b)}
  if(t===2){const a=rnd(120,999),b=rnd(12,99),c=a*b;return mk('<b>'+a+' × '+b+' = ...</b>',fmt(c),dis(c,[10,100,1000,a],1000,99999).map(fmt),a+' × '+b+' = '+fmt(c)+'.',a+'*'+b)}
  if(t===3){const b=rnd(12,49),q=rnd(21,99),a=b*q;return mk('<b>'+fmt(a)+' ÷ '+b+' = ...</b>',q,dis(q,[1,10,b,2],10,130),b+' × '+q+' = '+fmt(a)+', jadi '+fmt(a)+' ÷ '+b+' = '+q+'.',a+'/'+b)}
  const a=rnd(20,90),b=rnd(20,90),c=rnd(2,9),d=rnd(5,60),r=(a+b)*c-d;return mk('<b>('+a+' + '+b+') × '+c+' − '+d+' = ...</b>',fmt(r),uniq(fmt(r),[a+b*c-d,r+10,r-10,r+c,r-d].filter(x=>x>0).map(fmt)),'Tanda kurung dulu: '+(a+b)+', lalu × '+c+' = '+(a+b)*c+', lalu − '+d+' = '+fmt(r)+'.','('+a+'+'+b+')*'+c+'-'+d)}},
/*2*/{t:'FPB',d:'Faktor Persekutuan Terbesar dua dan tiga bilangan',h:'Uraikan ke faktor prima, ambil faktor yang sama dengan pangkat terkecil, lalu kalikan.',gen(){
  if(Math.random()<.65){const g=rnd(2,15);let p,q;do{p=rnd(2,7);q=rnd(2,7)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('FPB dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',g,uniq(g,[g+1,g*2,p,q,lcm(a,b),1,g-1].filter(x=>+x>0)),a+' = '+fstr(a)+', '+b+' = '+fstr(b)+'. FPB = '+g+'.','gcd('+a+','+b+')')}
  const g=rnd(2,9),T=[[2,3,5],[2,3,4],[3,4,5],[2,5,3],[3,5,4],[4,6,9],[2,6,9]],t=pick(T),a=g*t[0],b=g*t[1],c=g*t[2],r=gcd(gcd(a,b),c);
  return mk('FPB dari <b>'+a+', '+b+', dan '+c+'</b> adalah ...',r,uniq(r,[r+1,r*2,r+2,1,2,3,g+1]),'FPB dari ketiga bilangan = '+r+'.','gcd(gcd('+a+','+b+'),'+c+')')}},
/*3*/{t:'KPK',d:'Kelipatan Persekutuan Terkecil dua dan tiga bilangan',h:'Uraikan ke faktor prima, ambil semua faktor dengan pangkat terbesar, lalu kalikan.',gen(){
  if(Math.random()<.6){let a,b;do{a=rnd(4,24);b=rnd(4,24)}while(a===b);const c=lcm(a,b);return mk('KPK dari <b>'+a+'</b> dan <b>'+b+'</b> adalah ...',c,uniq(c,[a*b,gcd(a,b),c*2,c+a,c-a,c+b,a+b]).filter(x=>+x>0).slice(0,3),a+' = '+fstr(a)+', '+b+' = '+fstr(b)+'. KPK = '+c+'.','lcm('+a+','+b+')')}
  const T=[[2,3,4],[2,3,5],[3,4,6],[4,6,8],[3,5,6],[4,5,6],[6,8,12],[5,6,10],[3,4,9],[4,6,9]],t=pick(T),c=lcm(lcm(t[0],t[1]),t[2]);
  return mk('KPK dari <b>'+t.join(', ')+'</b> adalah ...',c,uniq(c,[t[0]*t[1]*t[2],c*2,c/2,c+t[0],c+t[2],c-t[1]]).filter(x=>+x>0).slice(0,3),'KPK dari '+t.join(', ')+' adalah '+c+'.','lcm(lcm('+t[0]+','+t[1]+'),'+t[2]+')')}},
/*4*/{t:'Soal Cerita FPB dan KPK',d:'Cerita pengelompokan dan jadwal berulang',h:'Dibagi sama banyak tanpa sisa → FPB. Terjadi bersamaan lagi → KPK. Tentukan dulu mana yang ditanya.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t<2){const g=rnd(3,15);let p,q;do{p=rnd(2,7);q=rnd(2,7)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q;
    return t===0?mk(nm+' membuat bingkisan dari '+a+' permen dan '+b+' cokelat. Isi tiap bingkisan sama banyak. Banyak bingkisan paling banyak ...',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+'.','gcd('+a+','+b+')'):mk('Dua pita masing-masing '+a+' cm dan '+b+' cm dipotong menjadi potongan sama panjang, selebar mungkin. Panjang tiap potongan ... cm',g,uniq(g,[g+1,g*2,p,q,1]),'FPB('+a+', '+b+') = '+g+' cm.','gcd('+a+','+b+')')}
  let a,b;do{a=rnd(4,15);b=rnd(4,15)}while(a===b);const c=lcm(a,b);
  return t===2?mk(nm+' berenang setiap '+a+' hari dan temannya setiap '+b+' hari. Jika hari ini berenang bersama, mereka berenang bersama lagi ... hari lagi',c,uniq(c,[a*b,a+b,c*2,c+a,gcd(a,b)]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')'):mk('Lampu A berkedip tiap '+a+' detik dan lampu B tiap '+b+' detik. Jika berkedip bersama sekarang, keduanya berkedip bersama lagi setelah ... detik',c,uniq(c,[a*b,a+b,c*2,c+b,gcd(a,b)]),'KPK('+a+', '+b+') = '+c+'.','lcm('+a+','+b+')')}},
/*5*/{t:'Pecahan Biasa',d:'Menyederhanakan, membandingkan, dan mengurutkan pecahan',h:'Untuk membandingkan, samakan penyebut atau kalikan silang. Untuk menyederhanakan, bagi dengan FPB.',gen(){
  const t=rnd(0,2);
  if(t===0){const b=rnd(2,9),d=rnd(2,9);let a=rnd(1,b-1),c=rnd(1,d-1);if(Math.random()<.2){const k=rnd(2,3);c=a*k;if(c>=b*k){c=a}}
    const dd=(c===a&&Math.random()<.5)?b:d,r=sg(a*dd,c*b);return mk('Tanda yang tepat: '+fr(a,b)+' <b>...</b> '+fr(c,dd),r,SIG.filter(x=>x!==r),'Kalikan silang: '+a+' × '+dd+' = '+a*dd+' dan '+c+' × '+b+' = '+c*b+'.')}
  if(t===1){const g=rnd(2,9);let p,q;do{p=rnd(1,9);q=rnd(2,10)}while(p>=q||gcd(p,q)!==1);const a=g*p,b=g*q;return mk('Bentuk paling sederhana dari '+fr(a,b)+' adalah ...',fr(p,q),uniq(fr(p,q),[fr(q,p),fr(p,q+1),fr(p+1,q),(g%2===0&&g>2?fr(a/2,b/2):fr(p,q+2))]),a+' ÷ '+g+' = '+p+', '+b+' ÷ '+g+' = '+q+'.',a+'/'+b)}
  const ds=pick([[2,3,4],[2,4,8],[3,6,12],[2,3,6],[4,6,12],[2,5,10]]),F=ds.map(d=>({d:d,n:rnd(1,d-1)}));const vs=F.map(x=>x.n/x.d);if(new Set(vs.map(v=>Math.round(v*1e6))).size<3)return LEVELS[4].gen();
  const asc=Math.random()<.5,s=F.slice().sort((x,y)=>asc?x.n/x.d-y.n/y.d:y.n/y.d-x.n/x.d),key=x=>x.map(v=>fr(v.n,v.d)).join(', ');
  const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]].map(p=>key(p.map(i=>s[i]))).filter(x=>x!==key(s));
  return mk('Urutan dari pecahan <b>'+(asc?'terkecil ke terbesar':'terbesar ke terkecil')+'</b> adalah ...',key(s),shuf(perms).slice(0,3),'Samakan penyebut lalu bandingkan. Urutan: '+key(s)+'.')}},
/*6*/{t:'Pecahan Campuran',d:'Mengubah dan membandingkan pecahan campuran',h:'Campuran → biasa: bilangan bulat × penyebut + pembilang. Biasa → campuran: bagi pembilang dengan penyebut.',gen(){
  const t=rnd(0,2),D=pick([2,3,4,5,6,7,8]),w=rnd(1,9),a=rnd(1,D-1),n=w*D+a;
  if(t===0)return mk('Ubahlah ke pecahan biasa: <b>'+mx(w,a,D)+'</b>',fr(n,D),uniq(fr(n,D),[fr(w+a,D),fr(w*a+D,D),fr(n+1,D),fr(n,D+1),fr(n-1,D)]),w+' × '+D+' + '+a+' = '+n+', jadi '+fr(n,D)+'.',w+'+'+a+'/'+D);
  if(t===1){const c=mx(w,a,D);return mk('Ubahlah ke pecahan campuran: <b>'+fr(n,D)+'</b>',c,uniq(c,[mx(w+1,a,D),mx(w,D-a,D),mx(a,w,D),mx(w+2,a,D),mx(w,a+1<D?a+1:a-1||1,D)]),n+' ÷ '+D+' = '+w+' sisa '+a+', jadi '+c+'.',n+'/'+D)}
  const D2=pick([2,3,4,5,6]),w2=rnd(1,9),a2=rnd(1,D2-1),r=sg(w*D*D2+a*D2,w2*D2*D+a2*D);return mk('Tanda yang tepat: '+mx(w,a,D)+' <b>...</b> '+mx(w2,a2,D2),r,SIG.filter(x=>x!==r),'Ubah ke pecahan biasa lalu bandingkan.')}},
/*7*/{t:'Penjumlahan Pecahan',d:'Penjumlahan pecahan berpenyebut berbeda',h:'Samakan penyebut dengan KPK, jumlahkan pembilang, lalu sederhanakan.',gen(){
  let b,d;do{b=pick([2,3,4,5,6,8,10]);d=pick([2,3,4,5,6,8,10,12])}while(b===d||lcm(b,d)>24);
  const a=rnd(1,b-1),c=rnd(1,d-1),L=lcm(b,d),n=a*L/b+c*L/d,r=frs(n,L);
  return mk('<b>'+fr(a,b)+' + '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,L,[[a+c,b+d],[a+c,b],[a+c,d],[n+1,L],[n-1,L],[n,L*2],[a+c,L+1]])),'Penyebut sama '+L+': '+fr(a*L/b,L)+' + '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'+'+c+'/'+d)}},
/*8*/{t:'Pengurangan Pecahan',d:'Pengurangan pecahan berpenyebut berbeda',h:'Samakan penyebut dengan KPK, kurangkan pembilang, lalu sederhanakan hasilnya.',gen(){
  let b,d,a,c,n,L;do{b=pick([2,3,4,5,6,8,10]);d=pick([2,3,4,5,6,8,10,12]);L=lcm(b,d);a=rnd(1,b-1);c=rnd(1,d-1);n=a*L/b-c*L/d}while(b===d||L>24||n<=0);
  const r=frs(n,L);return mk('<b>'+fr(a,b)+' − '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,L,[[a-c>0?a-c:1,Math.abs(b-d)||b+1],[a-c>0?a-c:1,b],[n+1,L],[n,L*2],[a+c,L],[n+2,L]])),'Penyebut sama '+L+': '+fr(a*L/b,L)+' − '+fr(c*L/d,L)+' = '+fr(n,L)+', sederhana: '+r+'.',a+'/'+b+'-'+c+'/'+d)}},
/*9*/{t:'Perkalian Pecahan',d:'Mengalikan pecahan dengan pecahan dan bilangan bulat',h:'Kalikan pembilang dengan pembilang dan penyebut dengan penyebut. Sederhanakan sebelum atau sesudah mengalikan.',gen(){
  if(Math.random()<.65){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),n=a*c,D=b*d,r=frs(n,D);
    return mk('<b>'+fr(a,b)+' × '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,D,[[a+c,b+d],[a*c,b+d],[a*d,b*c],[a+c,b*d],[n+1,D],[n,D+b]])),a+' × '+c+' = '+n+' dan '+b+' × '+d+' = '+D+'. Hasil: '+r+'.',a+'/'+b+'*'+c+'/'+d)}
  const b=rnd(2,9),a=rnd(1,b-1),k=rnd(2,9),n=a*k,r=frs(n,b);return mk('<b>'+k+' × '+fr(a,b)+' = ...</b>',r,uniq(r,frWrong(n,b,[[a,b*k],[a+k,b],[n,b+k],[n+1,b],[n,b*k]])),k+' × '+a+' = '+n+', per '+b+': '+r+'.',k+'*'+a+'/'+b)}},
/*10*/{t:'Pembagian Pecahan',d:'Membagi pecahan dengan pecahan dan bilangan bulat',h:'Membagi pecahan sama dengan mengalikan dengan kebalikan pembaginya.',gen(){
  if(Math.random()<.65){const b=rnd(2,9),d=rnd(2,9),a=rnd(1,b-1),c=rnd(1,d-1),n=a*d,D=b*c,r=frs(n,D);
    return mk('<b>'+fr(a,b)+' ÷ '+fr(c,d)+' = ...</b>',r,uniq(r,frWrong(n,D,[[a*c,b*d],[b*c,a*d],[a*d,b*d],[a+d,b+c],[n+1,D],[n,D+1]])),'Kebalikan '+fr(c,d)+' adalah '+fr(d,c)+'. '+fr(a,b)+' × '+fr(d,c)+' = '+r+'.',a+'/'+b+'/('+c+'/'+d+')')}
  const b=rnd(2,9),a=rnd(1,b-1),k=rnd(2,9),n=a,D=b*k,r=frs(n,D);return mk('<b>'+fr(a,b)+' ÷ '+k+' = ...</b>',r,uniq(r,frWrong(n,D,[[a*k,b],[a,b+k],[a+k,b],[n+1,D],[a,D+1]])),fr(a,b)+' ÷ '+k+' = '+fr(a,b)+' × '+fr(1,k)+' = '+r+'.',a+'/'+b+'/'+k)}},
/*11*/{t:'Tambah Kurang Pecahan Campuran',d:'Menjumlahkan dan mengurangkan pecahan campuran',h:'Ubah ke pecahan biasa atau kerjakan bilangan bulat dan pecahannya terpisah. Sederhanakan hasilnya.',gen(){
  const D=pick([2,3,4,5,6,8]),k=pick([1,2]),D2=D*k;if(D2>12)return LEVELS[10].gen();
  const w1=rnd(2,8),a=rnd(1,D-1),w2=rnd(1,w1-1),c=rnd(1,D2-1),L=lcm(D,D2),n1=(w1*D+a)*L/D,n2=(w2*D2+c)*L/D2;
  if(Math.random()<.5){const n=n1+n2,r=frs(n,L);return mk('<b>'+mx(w1,a,D)+' + '+mx(w2,c,D2)+' = ...</b>',r,uniq(r,frWrong(n,L,[[n+1,L],[n-1,L],[n+L,L],[n,L+1],[n-L,L]]).concat([frs(n+L,L),frs(n-L,L),frs(n+1,L)])),'Ubah ke pecahan biasa dengan penyebut '+L+': '+fr(n1,L)+' + '+fr(n2,L)+' = '+fr(n,L)+' = '+r+'.',w1+'+'+a+'/'+D+'+'+w2+'+'+c+'/'+D2)}
  const n=n1-n2;if(n<=0)return LEVELS[10].gen();const r=frs(n,L);return mk('<b>'+mx(w1,a,D)+' − '+mx(w2,c,D2)+' = ...</b>',r,uniq(r,frWrong(n,L,[[n+1,L],[n-1,L],[n+L,L],[n,L+1],[n-L,L]]).concat([frs(n+L,L),frs(n+1,L),frs(n+2,L)])),'Ubah ke pecahan biasa dengan penyebut '+L+': '+fr(n1,L)+' − '+fr(n2,L)+' = '+fr(n,L)+' = '+r+'.',w1+'+'+a+'/'+D+'-('+w2+'+'+c+'/'+D2+')')}},
/*12*/{t:'Pecahan dan Desimal',d:'Mengubah pecahan ke desimal dan sebaliknya',h:'Ubah penyebut menjadi 10, 100, atau 1.000, atau bagi pembilang dengan penyebut. 0,125 = 125/1.000 = 1/8.',gen(){
  const P=[[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,8],[3,8],[5,8],[7,8],[1,20],[3,20],[7,20],[9,20],[1,25],[3,25],[7,25],[1,10],[3,10],[7,10],[9,10],[11,20],[13,20]],p=pick(P),v=p[0]/p[1],t=rnd(0,2);
  if(t===0)return mk('Pecahan '+fr(p[0],p[1])+' sama dengan desimal ...',dec(v),uniq(dec(v),P.map(x=>dec(x[0]/x[1]))),p[0]+' ÷ '+p[1]+' = '+dec(v)+'.',p[0]+'/'+p[1]);
  if(t===1)return mk('Desimal <b>'+dec(v)+'</b> sama dengan pecahan paling sederhana ...',fr(p[0],p[1]),uniq(fr(p[0],p[1]),shuf(P).map(x=>fr(x[0],x[1]))),dec(v)+' = '+fr(p[0],p[1])+' (paling sederhana).',p[0]+'/'+p[1]);
  let q;do q=pick(P);while(q===p||Math.abs(q[0]/q[1]-v)<1e-9);const r=sg(Math.round(v*1000),Math.round(q[0]/q[1]*1000));return mk('Tanda yang tepat: '+fr(p[0],p[1])+' <b>...</b> '+dec(q[0]/q[1]),r,SIG.filter(x=>x!==r),'Ubah ke desimal: '+fr(p[0],p[1])+' = '+dec(v)+'. Bandingkan dengan '+dec(q[0]/q[1])+'.')}},
/*13*/{t:'Tambah Kurang Desimal',d:'Penjumlahan dan pengurangan desimal dua angka di belakang koma',h:'Sejajarkan tanda koma, tambahkan nol bila perlu, lalu hitung seperti bilangan bulat.',gen(){
  const A=rnd(120,999),B=rnd(120,999),nm=pick(NAMA);
  if(Math.random()<.5){const C=A+B;return Math.random()<.6?mk('<b>'+dec(A/100)+' + '+dec(B/100)+' = ...</b>',dec(C/100),dis(C,[1,10,100,5],200,2000).map(x=>dec(x/100)),dec(A/100)+' + '+dec(B/100)+' = '+dec(C/100)+'.',A+'/100+'+B+'/100'):mk(nm+' membeli '+dec(A/100)+' kg apel dan '+dec(B/100)+' kg jeruk. Berat belanjaan ... kg',dec(C/100),dis(C,[1,10,100,5],200,2000).map(x=>dec(x/100)),dec(A/100)+' + '+dec(B/100)+' = '+dec(C/100)+' kg.',A+'/100+'+B+'/100')}
  const hi=Math.max(A,B),lo=Math.min(A,B)===hi?hi-7:Math.min(A,B),C=hi-lo;return Math.random()<.6?mk('<b>'+dec(hi/100)+' − '+dec(lo/100)+' = ...</b>',dec(C/100),dis(C,[1,10,100,5],1,1000).map(x=>dec(x/100)),dec(hi/100)+' − '+dec(lo/100)+' = '+dec(C/100)+'.',hi+'/100-'+lo+'/100'):mk(nm+' punya kain '+dec(hi/100)+' m. Dipakai '+dec(lo/100)+' m. Sisa kain ... m',dec(C/100),dis(C,[1,10,100,5],1,1000).map(x=>dec(x/100)),dec(hi/100)+' − '+dec(lo/100)+' = '+dec(C/100)+' m.',hi+'/100-'+lo+'/100')}},
/*14*/{t:'Kali Bagi Desimal',d:'Perkalian dan pembagian desimal',h:'Kalikan seperti bilangan bulat lalu geser koma. Perkalian 10, 100 menggeser koma ke kanan; pembagian ke kiri.',gen(){
  const t=rnd(0,3);
  if(t===0){const A=rnd(12,99),k=rnd(2,9),c=A*k;return mk('<b>'+dec(A/10)+' × '+k+' = ...</b>',dec(c/10),dis(c,[1,10,A,5],10,900).map(x=>dec(x/10)),dec(A/10)+' × '+k+' = '+dec(c/10)+'.',A+'/10*'+k)}
  if(t===1){const A=rnd(12,99)*10+rnd(1,9),p=pick([10,100]),c=A*p/100;return mk('<b>'+dec(A/100)+' × '+p+' = ...</b>',dec(c),uniq(dec(c),[dec(c*10),dec(c/10),dec(c*100),dec(c/100)]),'Dikali '+p+', koma bergeser '+(p===10?'1':'2')+' tempat ke kanan: '+dec(c)+'.',A+'/100*'+p)}
  if(t===2){const k=rnd(2,9),q=rnd(12,99),A=k*q,c=q/10;return mk('<b>'+dec(A/10)+' ÷ '+k+' = ...</b>',dec(c),dis(q,[1,10,5,k],1,200).map(x=>dec(x/10)),dec(A/10)+' ÷ '+k+' = '+dec(c)+'.',A+'/10/'+k)}
  const A=rnd(12,99),p=pick([10,100]),c=A/p;return mk('<b>'+A+' ÷ '+p+' = ...</b>',dec(c),uniq(dec(c),[dec(A*p),dec(A/p*10),dec(A/p/10),dec(A)]),A+' ÷ '+p+': koma bergeser '+(p===10?'1':'2')+' tempat ke kiri: '+dec(c)+'.',A+'/'+p)}},
/*15*/{t:'Persentase',d:'Mengubah persen, pecahan, dan desimal',h:'Persen berarti per seratus. 25% = 25/100 = 1/4 = 0,25. Untuk mengubah ke persen, kalikan dengan 100.',gen(){
  const P=[[1,2,50],[1,4,25],[3,4,75],[1,5,20],[2,5,40],[3,5,60],[4,5,80],[1,10,10],[3,10,30],[7,10,70],[9,10,90],[1,20,5],[3,20,15],[1,25,4],[3,25,12]],p=pick(P),t=rnd(0,3);
  if(t===0)return mk('Pecahan '+fr(p[0],p[1])+' sama dengan ... %',p[2],uniq(p[2],P.map(x=>x[2])),fr(p[0],p[1])+' × 100% = '+p[2]+'%.',p[2]+'');
  if(t===1)return mk('<b>'+p[2]+'%</b> sama dengan pecahan paling sederhana ...',fr(p[0],p[1]),uniq(fr(p[0],p[1]),shuf(P).map(x=>fr(x[0],x[1]))),p[2]+'% = '+p[2]+'/100 = '+fr(p[0],p[1])+'.',p[0]+'/'+p[1]);
  if(t===2)return mk('<b>'+p[2]+'%</b> sama dengan desimal ...',dec(p[2]/100),uniq(dec(p[2]/100),P.map(x=>dec(x[2]/100))),p[2]+'% = '+p[2]+'/100 = '+dec(p[2]/100)+'.',p[2]+'/100');
  return mk('Desimal <b>'+dec(p[2]/100)+'</b> sama dengan ... %',p[2],uniq(p[2],P.map(x=>x[2])),dec(p[2]/100)+' × 100% = '+p[2]+'%.',p[2]+'')}},
/*16*/{t:'Persen dari Bilangan dan Diskon',d:'Menghitung persen dari suatu bilangan dan potongan harga',h:'p% dari n = p/100 × n. Diskon: harga bayar = harga awal − potongan.',gen(){
  const t=rnd(0,3),nm=pick(NAMA);
  if(t<2){const p=pick([10,20,25,30,40,50,60,75,80]),n=rnd(2,20)*20,c=n*p/100;return mk('<b>'+p+'%</b> dari <b>'+n+'</b> adalah ...',c,dis(c,[5,10,n/10,1],1,n),p+'/100 × '+n+' = '+c+'.',p+'/100*'+n)}
  if(t===2){const p=pick([10,20,25,50]),P=rnd(2,25)*2000,pot=P*p/100,c=P-pot;return mk(nm+' membeli tas seharga '+rp(P)+' dengan diskon '+p+'%. Harga yang dibayar ...',rp(c),uniq(rp(c),[P+pot,pot,c+1000,c-1000,c+5000].filter(x=>x>0).map(rp)),'Potongan = '+rp(pot)+'. Bayar = '+rp(P)+' − '+rp(pot)+' = '+rp(c)+'.',P+'-'+P+'*'+p+'/100')}
  const n=pick([40,60,80,100,120,200]),p=pick([10,20,25,50,75]),c=n-n*p/100;return mk('Di sebuah kelas ada '+n+' siswa. Sebanyak '+p+'% suka membaca. Siswa yang <b>tidak</b> suka membaca ada ... siswa',c,uniq(c,[n*p/100,c+5,c-5,c+10,n/2].filter(x=>x>0)),p+'% dari '+n+' = '+n*p/100+'. Sisanya '+n+' − '+n*p/100+' = '+c+'.',n+'-'+n+'*'+p+'/100')}},
/*17*/{t:'Perbandingan',d:'Menyatakan dan menyederhanakan perbandingan',h:'Perbandingan disederhanakan dengan membagi kedua bilangan dengan FPB-nya. Perbandingan senilai dikalikan atau dibagi sama.',gen(){
  const t=rnd(0,2),g=rnd(2,9);let p,q;do{p=rnd(1,8);q=rnd(1,8)}while(p===q||gcd(p,q)!==1);const a=g*p,b=g*q,nm=pick(NAMA),I=pick(['kelereng','buku','pensil','permen']);
  if(t===0)return mk('Perbandingan <b>'+a+' : '+b+'</b> dalam bentuk paling sederhana adalah ...',p+' : '+q,uniq(p+' : '+q,[q+' : '+p,(p+1)+' : '+q,p+' : '+(q+1),a+' : '+q,(p*2)+' : '+(q*2)].filter(x=>x!==p+' : '+q)),a+' ÷ '+g+' = '+p+', '+b+' ÷ '+g+' = '+q+'.');
  if(t===1){const k=rnd(2,6);return mk('<b>'+p+' : '+q+' = '+(p*k)+' : __</b>',q*k,near(q*k,2,60),'Dikali '+k+': '+p+' × '+k+' = '+p*k+', jadi '+q+' × '+k+' = '+q*k+'.',q+'*'+k)}
  return mk(nm+' punya '+a+' '+I+' merah dan '+b+' '+I+' biru. Perbandingan '+I+' merah dan biru adalah ...',p+' : '+q,uniq(p+' : '+q,[q+' : '+p,a+' : '+(a+b),(p+1)+' : '+q,p+' : '+(q+1)]),a+' : '+b+' = '+p+' : '+q+' (disederhanakan).')}},
/*18*/{t:'Perbandingan Senilai',d:'Soal cerita harga, jarak, dan takaran',h:'Cari nilai satu satuan dulu, lalu kalikan sesuai yang ditanya.',gen(){
  const t=rnd(0,2),nm=pick(NAMA);
  if(t===0){const a=rnd(2,9);let b;do b=rnd(2,12);while(b===a);const p=pick([1500,2000,2500,3000,4000,4500,5000]),c=p*b;return mk(nm+' membeli '+a+' buku seharga '+rp(p*a)+'. Harga '+b+' buku yang sama ...',rp(c),uniq(rp(c),[c+p,c-p,c+1000,c-1000,p*a*b].filter(x=>x>0).map(rp)),'Harga 1 buku = '+rp(p*a)+' ÷ '+a+' = '+rp(p)+'. '+b+' buku = '+rp(c)+'.',p+'*'+b)}
  if(t===1){const v=pick([40,45,50,60,70,80]),a=rnd(2,4);let b;do b=rnd(3,8);while(b===a);const c=v*b;return mk('Sebuah mobil menempuh '+(v*a)+' km dalam '+a+' jam. Dengan kecepatan sama, jarak yang ditempuh dalam '+b+' jam ... km',c,dis(c,[v,10,b,2*v],20,700),'Kecepatan = '+(v*a)+' ÷ '+a+' = '+v+' km/jam. Jarak = '+v+' × '+b+' = '+c+' km.',v+'*'+b)}
  const a=rnd(2,5),b=rnd(2,5)*a,u=rnd(2,6),c=u*b;return mk('Untuk membuat '+a+' porsi nasi goreng dibutuhkan '+(a*u)+' sendok bumbu. Untuk '+b+' porsi dibutuhkan ... sendok bumbu',c,dis(c,[u,a,1,2],2,80),'Per porsi '+u+' sendok. '+b+' × '+u+' = '+c+'.',u+'*'+b)}},
/*19*/{t:'Skala',d:'Jarak pada peta dan jarak sebenarnya',h:'Skala 1 : K berarti 1 cm pada peta mewakili K cm sebenarnya. 100.000 cm = 1 km.',gen(){
  const t=rnd(0,2),K=pick([50000,100000,200000,500000]),X=K/100000;
  if(t===0){const d=pick([2,4,6,8,10,12]),R=d*X,c=Number.isInteger(R)?R:dec(R);return mk('Jarak dua kota pada peta <b>'+d+' cm</b>. Skala peta <b>1 : '+fmt(K)+'</b>. Jarak sebenarnya ... km',c,uniq(c,[d*X*10,d/X,d*K,R+1,R*2,d].map(x=>Number.isInteger(x)?x:dec(x))),d+' × '+fmt(K)+' = '+fmt(d*K)+' cm = '+c+' km.',d+'*'+K+'/100000')}
  if(t===1){const d=rnd(2,12),R=d*X,k=Number.isInteger(R)?R:null;if(k===null)return LEVELS[18].gen();return mk('Jarak sebenarnya dua kota <b>'+R+' km</b>. Pada peta berskala <b>1 : '+fmt(K)+'</b>, jaraknya ... cm',d,dis(d,[1,2,X],1,60),R+' km = '+fmt(R*100000)+' cm. Dibagi '+fmt(K)+' = '+d+' cm.',R+'*100000/'+K)}
  const Y=pick([1,2,5,10]),c='1 : '+fmt(Y*100000);return mk('Pada peta, <b>1 cm</b> mewakili jarak sebenarnya <b>'+Y+' km</b>. Skala peta tersebut adalah ...',c,uniq(c,[1,2,5,10].map(z=>'1 : '+fmt(z*100000)).concat(['1 : '+fmt(Y*1000),'1 : '+fmt(Y*10000)])),Y+' km = '+fmt(Y*100000)+' cm, sehingga skalanya '+c+'.')}},
/*20*/{t:'Keliling Bangun Datar',d:'Keliling persegi, persegi panjang, segitiga, jajar genjang, dan belah ketupat',h:'Keliling = jumlah panjang semua sisi. Jajar genjang: 2 × (a + b). Belah ketupat: 4 × sisi.',gen(){
  const t=rnd(0,4);
  if(t===0){const s=rnd(8,80),c=4*s;return mk('Keliling persegi dengan sisi <b>'+s+' cm</b> adalah ... cm',c,uniq(c,[s*s,2*s,c+s,c-4]),'4 × '+s+' = '+c+' cm.','4*'+s)}
  if(t===1){const p=rnd(12,90),l=rnd(5,p-2),c=2*(p+l);return mk('Persegi panjang berukuran <b>'+p+' cm × '+l+' cm</b>. Kelilingnya ... cm',c,uniq(c,[p*l,p+l,2*p+l,p+2*l,c+2]),'2 × ('+p+' + '+l+') = '+c+' cm.','2*('+p+'+'+l+')')}
  if(t===2){const a=rnd(8,40),b=rnd(5,30),c=2*(a+b);return mk('Jajar genjang dengan sisi sejajar <b>'+a+' cm</b> dan sisi miring <b>'+b+' cm</b>. Kelilingnya ... cm',c,uniq(c,[a+b,a*b,2*a+b,a+2*b,c+2]),'2 × ('+a+' + '+b+') = '+c+' cm.','2*('+a+'+'+b+')')}
  if(t===3){const s=rnd(5,40),c=4*s;return mk('Belah ketupat dengan sisi <b>'+s+' cm</b>. Kelilingnya ... cm',c,uniq(c,[s*s,2*s,s+4,c+s]),'4 × '+s+' = '+c+' cm.','4*'+s)}
  const p=rnd(15,60),l=rnd(6,p-3),K=2*(p+l);return mk('Keliling persegi panjang <b>'+K+' cm</b> dan panjangnya <b>'+p+' cm</b>. Lebarnya ... cm',l,uniq(l,[K/2,K-p,p-l,l+2,l-1]).filter(x=>+x>0).slice(0,3),K+' ÷ 2 − '+p+' = '+l+' cm.',K+'/2-'+p)}},
/*21*/{t:'Luas Persegi dan Persegi Panjang',d:'Luas, mencari ukuran, dan biaya',h:'Luas persegi = s × s. Luas persegi panjang = p × l. Biaya = luas × harga per satuan luas.',gen(){
  const t=rnd(0,3);
  if(t===0){const s=rnd(6,40),c=s*s;return mk('Luas persegi dengan sisi <b>'+s+' m</b> adalah ... m²',fmt(c),uniq(fmt(c),[4*s,2*s,c+s,c-s].map(fmt)),s+' × '+s+' = '+fmt(c)+' m².',s+'*'+s)}
  if(t===1){const p=rnd(10,60),l=rnd(5,p-1),c=p*l;return mk('Luas persegi panjang <b>'+p+' m × '+l+' m</b> adalah ... m²',fmt(c),uniq(fmt(c),[2*(p+l),p+l,c+p,c-l].map(fmt)),p+' × '+l+' = '+fmt(c)+' m².',p+'*'+l)}
  if(t===2){const p=rnd(8,30),l=rnd(4,p-1),L=p*l;return mk('Luas persegi panjang <b>'+L+' cm²</b> dan lebarnya <b>'+l+' cm</b>. Panjangnya ... cm',p,uniq(p,[L-l,p+l,p+2,p-1,L/2]).filter(x=>+x>0).slice(0,3),L+' ÷ '+l+' = '+p+' cm.',L+'/'+l)}
  const p=rnd(6,20),l=rnd(4,p-1),pr=pick([15000,20000,25000,30000]),c=p*l*pr;return mk('Lantai berukuran '+p+' m × '+l+' m akan dipasang keramik dengan biaya '+rp(pr)+' per m². Seluruh biaya ...',rp(c),uniq(rp(c),[c+pr,c-pr,c*2,p*l*10000,2*(p+l)*pr].filter(x=>x>0).map(rp)),'Luas = '+p+' × '+l+' = '+p*l+' m². Biaya = '+p*l+' × '+rp(pr)+' = '+rp(c)+'.',p+'*'+l+'*'+pr)}},
/*22*/{t:'Luas Segitiga',d:'Menghitung luas segitiga dan mencari alas atau tinggi',h:'Luas segitiga = ½ × alas × tinggi. Jika luas diketahui, balik rumusnya: alas = 2 × luas ÷ tinggi.',gen(){
  let a=rnd(4,40),h=rnd(3,30);if((a*h)%2)a+=1;const L=a*h/2,t=rnd(0,3);
  if(t<2)return mk('Segitiga memiliki alas <b>'+a+' cm</b> dan tinggi <b>'+h+' cm</b>. Luasnya ... cm²',L,uniq(L,[a*h,a+h,L+a,L-h,2*(a+h)]).filter(x=>+x>0).slice(0,3),'½ × '+a+' × '+h+' = '+L+' cm².',a+'*'+h+'/2');
  if(t===2)return mk('Luas segitiga <b>'+L+' cm²</b> dan alasnya <b>'+a+' cm</b>. Tingginya ... cm',h,uniq(h,[L/a,L*2,a+h,h+2,h-1]).filter(x=>+x>0).slice(0,3),'Tinggi = 2 × '+L+' ÷ '+a+' = '+h+' cm.',(2*L)+'/'+a);
  return mk('Layar berbentuk segitiga memiliki alas '+a+' m dan tinggi '+h+' m. Luas layar ... m²',L,uniq(L,[a*h,a+h,L+a,L-h]).filter(x=>+x>0).slice(0,3),'½ × '+a+' × '+h+' = '+L+' m².',a+'*'+h+'/2')}},
/*23*/{t:'Luas Jajar Genjang',d:'Menghitung luas jajar genjang dan mencari alas atau tinggi',h:'Luas jajar genjang = alas × tinggi (tinggi tegak lurus alas, bukan sisi miring).',gen(){
  const a=rnd(6,40),h=rnd(4,25),L=a*h,t=rnd(0,2);
  if(t===0)return mk('Jajar genjang memiliki alas <b>'+a+' cm</b> dan tinggi <b>'+h+' cm</b>. Luasnya ... cm²',L,uniq(L,[a*h/2,a+h,2*(a+h),L+a,L-h]).filter(x=>+x>0).slice(0,3),a+' × '+h+' = '+L+' cm².',a+'*'+h);
  if(t===1)return mk('Luas jajar genjang <b>'+fmt(L)+' cm²</b> dan tingginya <b>'+h+' cm</b>. Alasnya ... cm',a,uniq(a,[L/h/2,L-h,a+h,a+2,a-1]).filter(x=>+x>0).slice(0,3),'Alas = '+L+' ÷ '+h+' = '+a+' cm.',L+'/'+h);
  const b=rnd(5,30);return mk('Jajar genjang dengan alas <b>'+a+' cm</b>, sisi miring <b>'+b+' cm</b>, dan tinggi <b>'+h+' cm</b>. Luasnya ... cm²',L,uniq(L,[a*b,a*h/2,b*h,2*(a+b)]).filter(x=>+x>0&&x!==L).slice(0,3),'Luas = alas × tinggi = '+a+' × '+h+' = '+L+' cm². Sisi miring tidak dipakai.',a+'*'+h)}},
/*24*/{t:'Luas Bangun Gabungan',d:'Luas gabungan beberapa bangun datar',h:'Pecah bangun menjadi bangun-bangun sederhana, hitung luas masing-masing, lalu jumlahkan (atau kurangkan bila ada bagian kosong).',gen(){
  const t=rnd(0,2);
  if(t===0){const l=rnd(4,15),p=rnd(6,20)*2,h=rnd(3,12),L1=p*l,L2=p*h/2,c=L1+L2;return mk('Sebuah bangun terdiri dari persegi panjang <b>'+p+' cm × '+l+' cm</b> dan segitiga di atasnya dengan alas '+p+' cm dan tinggi '+h+' cm. Luas seluruhnya ... cm²',c,uniq(c,[L1,L2,L1+p*h,c+p,c-h]).filter(x=>+x>0&&x!==c).slice(0,3),'Persegi panjang = '+L1+', segitiga = '+L2+'. Jumlah = '+c+' cm².',p+'*'+l+'+'+p+'*'+h+'/2')}
  if(t===1){const a=rnd(4,20),b=rnd(3,15),c1=rnd(4,20),d=rnd(3,15),c=a*b+c1*d;return mk('Dua persegi panjang berimpit. Persegi panjang pertama <b>'+a+' cm × '+b+' cm</b> dan kedua <b>'+c1+' cm × '+d+' cm</b>. Luas gabungan ... cm²',c,uniq(c,[a*b,c1*d,2*(a+b)+2*(c1+d),c+a,c-d]).filter(x=>+x>0&&x!==c).slice(0,3),a*b+' + '+c1*d+' = '+c+' cm².',a+'*'+b+'+'+c1+'*'+d)}
  const s=rnd(8,20),k=rnd(2,s/2-1|0)||2,c=s*s-k*k;return mk('Sebuah persegi bersisi <b>'+s+' cm</b> memiliki lubang persegi bersisi <b>'+k+' cm</b> di tengahnya. Luas bagian yang tersisa ... cm²',c,uniq(c,[s*s,k*k,s*s+k*k,c+s,c-k]).filter(x=>+x>0&&x!==c).slice(0,3),s+' × '+s+' = '+s*s+', dikurangi '+k+' × '+k+' = '+k*k+'. Sisa = '+c+' cm².',s+'*'+s+'-'+k+'*'+k)}},
/*25*/{t:'Volume Kubus dan Balok',d:'Menghitung volume kubus dan balok',h:'Volume kubus = s × s × s. Volume balok = p × l × t. Satuannya pangkat tiga, misalnya cm³.',gen(){
  if(Math.random()<.45){const s=rnd(3,15),c=s*s*s;return mk('Volume kubus dengan rusuk <b>'+s+' cm</b> adalah ... cm³',fmt(c),uniq(fmt(c),[s*s,3*s,6*s*s,c+s,s*s*2].map(fmt)),s+' × '+s+' × '+s+' = '+fmt(c)+' cm³.',s+'*'+s+'*'+s)}
  const p=rnd(4,25),l=rnd(3,15),t=rnd(2,12),c=p*l*t;return mk('Volume balok dengan ukuran <b>'+p+' cm × '+l+' cm × '+t+' cm</b> adalah ... cm³',fmt(c),uniq(fmt(c),[p*l+t,2*(p*l+p*t+l*t),p+l+t,p*l,c+p].map(fmt)),p+' × '+l+' × '+t+' = '+fmt(c)+' cm³.',p+'*'+l+'*'+t)}},
/*26*/{t:'Volume: Mencari Ukuran dan Liter',d:'Mencari tinggi dari volume, serta hubungan cm³, dm³, dan liter',h:'1 dm³ = 1 liter = 1.000 cm³. Mencari tinggi: volume ÷ (panjang × lebar).',gen(){
  const t=rnd(0,3);
  if(t===0){const p=rnd(4,15),l=rnd(3,12),h=rnd(2,10),V=p*l*h;return mk('Volume balok <b>'+fmt(V)+' cm³</b>, panjang <b>'+p+' cm</b>, dan lebar <b>'+l+' cm</b>. Tingginya ... cm',h,uniq(h,[V/p,V/l,h+1,h+2,h-1]).filter(x=>+x>0).slice(0,3),'Tinggi = '+V+' ÷ ('+p+' × '+l+') = '+h+' cm.',V+'/('+p+'*'+l+')')}
  if(t===1){const k=rnd(2,9),c=k*1000;return mk('<b>'+k+' liter = ... cm³</b>',fmt(c),uniq(fmt(c),[fmt(k*100),fmt(k*10),fmt(k),fmt(k*10000)]),'1 liter = 1.000 cm³, jadi '+k+' liter = '+fmt(c)+' cm³.',k+'*1000')}
  if(t===2){const p=rnd(3,12),l=rnd(3,10),h=rnd(2,8),V=p*l*h;return mk('Bak air berbentuk balok berukuran <b>'+p+' dm × '+l+' dm × '+h+' dm</b>. Jika penuh, bak itu berisi ... liter air',V,dis(V,[p,l,h,10],4,600),p+' × '+l+' × '+h+' = '+V+' dm³ = '+V+' liter.',p+'*'+l+'*'+h)}
  const s=pick([10,20,30,40,50]),V=s*s*s/1000,p=pick([1,2,3]);const nm=pick(NAMA);return mk(nm+' mengisi bak kubus berusuk <b>'+s+' cm</b> sampai penuh. Isi bak itu ... liter',dec(V),[V*10,V*100,V/10,s*3/10,s*s/100].filter(x=>x!==V&&x>0).map(dec).filter(x=>x!==dec(V)).slice(0,3),s+' × '+s+' × '+s+' = '+fmt(s*s*s)+' cm³ = '+V+' liter.',s+'*'+s+'*'+s+'/1000')}},
/*27*/{t:'Membaca Tabel dan Diagram Batang',d:'Menafsirkan data dari tabel dan diagram',h:'Baca judul, satuan, dan keterangan lebih dulu. Cari nilai yang ditanya, lalu hitung jumlah atau selisihnya.',gen(){
  const nm=shuf(['Senin','Selasa','Rabu','Kamis','Jumat']).slice(0,4),v=shuf(Array.from({length:35},(_,i)=>i+6)).slice(0,4),o=nm.map((n,i)=>({n:n,v:v[i]})),s=o.slice().sort((a,b)=>b.v-a.v),t=rnd(0,4);
  const view=Math.random()<.5?tbl(['Hari','Pengunjung'],o.map(x=>[x.n,x.v])):bars(o.map(x=>x.n),o.map(x=>x.v),5);
  const head='Data pengunjung perpustakaan dalam seminggu.'+view;
  if(t===0)return mk(head+'Hari dengan pengunjung <b>terbanyak</b> adalah ...',s[0].n,nm.filter(x=>x!==s[0].n),s[0].n+' memiliki '+s[0].v+' pengunjung, paling banyak.');
  if(t===1)return mk(head+'Hari dengan pengunjung <b>tersedikit</b> adalah ...',s[3].n,nm.filter(x=>x!==s[3].n),s[3].n+' memiliki '+s[3].v+' pengunjung, paling sedikit.');
  if(t===2){const c=s[0].v-s[3].v;return mk(head+'Selisih pengunjung terbanyak dan tersedikit adalah ...',c,dis(c,[1,2,10],1,60),s[0].v+' − '+s[3].v+' = '+c+'.',s[0].v+'-'+s[3].v)}
  if(t===3){const c=o.reduce((a,x)=>a+x.v,0);return mk(head+'Jumlah seluruh pengunjung adalah ...',c,dis(c,[1,2,10,5],20,200),'Jumlah = '+o.map(x=>x.v).join(' + ')+' = '+c+'.',o.map(x=>x.v).join('+'))}
  const x=o[0],y=o[1],c=x.v+y.v;return mk(head+'Jumlah pengunjung hari <b>'+x.n+'</b> dan <b>'+y.n+'</b> adalah ...',c,dis(c,[1,2,10],10,100),x.v+' + '+y.v+' = '+c+'.',x.v+'+'+y.v)}},
/*28*/{t:'Rata-rata dan Modus',d:'Menghitung rata-rata, modus, dan data yang hilang',h:'Rata-rata = jumlah data ÷ banyak data. Modus adalah data yang paling sering muncul.',gen(){
  const t=rnd(0,2);
  if(t===0){const k=rnd(4,5),m=rnd(60,95),a=[];for(let i=0;i<k-1;i++)a.push(rnd(m-12,m+8));const last=m*k-a.reduce((x,y)=>x+y,0);if(last<30||last>100)return LEVELS[27].gen();a.push(last);const arr=shuf(a);
    return mk('Nilai ulangan: <b>'+arr.join(', ')+'</b>. Rata-ratanya ... ',m,dis(m,[1,2,3,5],30,100),'Jumlah = '+(m*k)+', dibagi '+k+' = '+m+'.','('+arr.join('+')+')/'+k)}
  if(t===1){const k=rnd(4,6),m=rnd(8,20),a=[];for(let i=0;i<k-1;i++)a.push(rnd(m-4,m+4));const last=m*k-a.reduce((x,y)=>x+y,0);if(last<1||last>40)return LEVELS[27].gen();
    return mk('Rata-rata dari '+k+' bilangan adalah <b>'+m+'</b>. '+(k-1)+' bilangan di antaranya: <b>'+a.join(', ')+'</b>. Bilangan terakhir ...',last,dis(last,[1,2,3,m],1,40),'Jumlah semua = '+k+' × '+m+' = '+(k*m)+'. Bilangan terakhir = '+(k*m)+' − '+a.reduce((x,y)=>x+y,0)+' = '+last+'.',(k*m)+'-('+a.join('+')+')')}
  const k=rnd(7,9),arr=Array.from({length:k},()=>rnd(4,10)),f={};arr.forEach(x=>f[x]=(f[x]||0)+1);const mf=Math.max.apply(null,Object.values(f)),modes=Object.keys(f).filter(x=>f[x]===mf);if(modes.length!==1||mf<2)return LEVELS[27].gen();const c=+modes[0];
  const w=[4,5,6,7,8,9,10,11].filter(x=>x!==c);return mk('Data: <b>'+arr.join(', ')+'</b>. Modus data tersebut adalah ...',c,shuf(w).slice(0,3),'Angka '+c+' muncul '+mf+' kali, paling sering.',String(c))}},
/*29*/{t:'Pemecahan Masalah Campuran',d:'Soal cerita gabungan perbandingan, persen, dan volume',h:'Tentukan konsep yang dipakai (perbandingan, persen, volume, dst.), tulis rumusnya, lalu hitung bertahap.',gen(){
  const nm=pick(NAMA),t=rnd(0,3);
  if(t===0){const p=rnd(1,5);let q;do q=rnd(1,6);while(q===p);const T=(p+q)*rnd(3,12);return mk('Perbandingan kelereng '+nm+' dan adiknya adalah '+p+' : '+q+'. Jumlah kelereng mereka '+T+'. Kelereng adiknya ... buah',T/(p+q)*q,uniq(T/(p+q)*q,[T/(p+q)*p,T-q,T/q,T/(p+q),T/(p+q)*q+5]).filter(x=>+x>0).slice(0,3),'Jumlah bagian = '+(p+q)+'. Satu bagian = '+T/(p+q)+'. Adik = '+q+' × '+T/(p+q)+'.',T+'/'+(p+q)+'*'+q)}
  if(t===1){const p=pick([30,40,50,60]),l=pick([20,25,30,40]),h=pick([20,30,40]),f=pick([[1,2],[3,4],[1,4],[2,3]]);if((p*l*h*f[0])%f[1])return LEVELS[28].gen();const V=p*l*h*f[0]/f[1];
    return mk('Akuarium berukuran '+p+' cm × '+l+' cm × '+h+' cm diisi air sebanyak '+fr(f[0],f[1])+' bagian. Volume air ... cm³',fmt(V),uniq(fmt(V),[p*l*h,V+1000,V-1000,p*l*h/2,p*l*f[0]].filter(x=>x>0).map(fmt)),'Volume penuh = '+fmt(p*l*h)+'. Air = '+fr(f[0],f[1])+' × '+fmt(p*l*h)+' = '+fmt(V)+' cm³.',p+'*'+l+'*'+h+'*'+f[0]+'/'+f[1])}
  if(t===2){const n=pick([40,60,80,100,120,200]),p=pick([20,25,40,50,75]),c=n*p/100;return mk('Dari '+n+' siswa, '+p+'% mengikuti ekstrakurikuler. Siswa yang mengikuti ekstrakurikuler ada ... siswa',c,uniq(c,[n-c,c+5,c-5,n/2,c+10]).filter(x=>+x>0).slice(0,3),p+'% × '+n+' = '+c+'.',p+'/100*'+n)}
  const p=rnd(6,16),l=rnd(4,p-1),K=2*(p+l),pg=pick([15000,20000,25000]);return mk('Kebun berbentuk persegi panjang '+p+' m × '+l+' m akan dipagari satu kali keliling. Biaya pagar '+rp(pg)+' per meter. Seluruh biaya ...',rp(K*pg),uniq(rp(K*pg),[p*l*pg,(p+l)*pg,K*pg+pg,K*pg-pg,K*10000].filter(x=>x>0).map(rp)),'Keliling = '+K+' m. Biaya = '+K+' × '+rp(pg)+' = '+rp(K*pg)+'.','2*('+p+'+'+l+')*'+pg)}},
/*30*/{t:'Tantangan Juara Matematika',d:'Campuran semua materi, soal paling menantang',h:'Baca soal dengan tenang, kenali jenis soalnya, lalu kerjakan langkah demi langkah.',gen(){return LEVELS[rnd(14,28)].gen()}}
];

const PREVIEW=[];
