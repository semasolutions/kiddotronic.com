(() => {
'use strict';
const copy = {
de: {
brandSeason:'DIE WEIHNACHTSWELT',navProduct:'Das Geschenk',navAtelier:'Weihnachtsatelier',navReviews:'Familienstimmen',navFaq:'Gut zu wissen',navGuide:'Anleitung',navPrivacy:'Datenschutz',skip:'Zum Inhalt',
heroKicker:'FÜR KLEINE KÖPFE MIT GROSSEN IDEEN',heroLine1:'Unter dem Baum.',heroLine2:'Eine ganze Welt',heroLine3:'voller Fantasie.',
heroText:'Ein Drache im Schnee? Ein Einhorn mit Weihnachtsmütze? Mit Kiddotronic werden aus Kinderideen eigene Sticker – und aus einem Geschenk immer neue Geschichten.',
heroCta:'Das Geschenk entdecken ↗',heroSecondary:'Erst mal Weihnachtszauber machen ↓',proof1:'Idee einsprechen',proof2:'Ohne Tinte drucken',proof3:'Gemeinsam gestalten',peek:'Kleine Box. Große Ideen.',stamp:'Mit Liebe.\nMit Fantasie.',
toolbarText:'Mach es dir weihnachtlich.',snowLabel:'Schneefall',giftHint:'Geschenktipp ansehen',route1:'Ein Geschenk voller Ideen',route2:'Dein persönlicher Weihnachtsgruß',route3:'Alles, was du wissen möchtest',
atelierKicker:'EIN KLEINES GESCHENK VON UNS',atelierTitle:'Deine Fantasie.\nDein Weihnachtsgruß.',
atelierIntro:'Gestalte einen persönlichen Geschenkanhänger. Für dein Kiddotronic-Päckchen, die selbstgebackenen Kekse oder einfach einen lieben Menschen.',
themeLegend:'1. Wähle deinen Weihnachtszauber',themeTree:'Tannenliebe',themeCookie:'Kekszauber',themeStar:'Sternenglanz',
toLabel:'2. Für wen ist dein Geschenk?',fromLabel:'3. Von wem kommt der Weihnachtsgruß?',
download:'Deinen Anhänger herunterladen ↓',atelierPrivacy:'Ohne Anmeldung. Deine Eingaben bleiben in deinem Browser. Als SVG speichern und auf Papier ausdrucken.',
previewCaption:'Für kleine Gesten, die ganz groß ankommen.',faqKicker:'GUT ZU WISSEN',faqTitle:'Große Vorfreude.\nKlare Antworten.',faqIntro:'Damit aus einer schönen Geschenkidee ein gutes Gefühl wird.',guideLink:'Zur ausführlichen Anleitung ↗',
q1:'Was macht der KI Sticker Printer?',a1:'Kinder sprechen eine Idee ein. Die KI erstellt daraus ein Motiv und der Drucker bringt es aufs Papier. Die Sticker lassen sich anschließend ausmalen, sammeln, kleben oder verschenken.',
q2:'Braucht er Tintenpatronen?',a2:'Nein. Der Kiddotronic Sticker Printer verwendet Thermodruck. Dafür wird passendes Thermopapier beziehungsweise Thermo-Stickerpapier benötigt.',
q3:'Wo bestelle ich das Geschenk?',a3:'Die Bestellung erfolgt bei Amazon. Dort findest du die aktuellen Angaben zu Verfügbarkeit, Liefertermin, Lieferumfang und Produktdetails. Bitte prüfe den angezeigten Liefertermin vor deiner Bestellung.',amazonLink:'Produkt auf Amazon ansehen ↗',
q4:'Wo finde ich Hilfe zur Einrichtung?',a4:'Unsere digitale Anleitung führt durch die Einrichtung und enthält WLAN-Hinweise. Das Datenblatt bietet weitere Produktinformationen.',dataSheet:'Datenblatt',
q5:'Ist der Geschenkanhänger ein Ausdruck des Geräts?',a5:'Der Anhänger im Weihnachtsatelier ist eine eigene Gestaltungshilfe dieser Webseite. Du kannst ihn als SVG herunterladen und mit einem normalen Drucker auf Papier drucken. Er zeigt keine Druckvorschau des Kiddotronic-Geräts.',
finalKicker:'DAS SCHÖNSTE PASST IN KEINE SCHLEIFE',finalTitle:'Zeit zusammen.\nIdeen ohne Ende.',finalText:'Schenke den Anfang von vielen kleinen Geschichten.',finalCta:'Kiddotronic auf Amazon entdecken ↗',
toPlaceholder:'z. B. Emma',fromPlaceholder:'z. B. Mama & Papa',to:'FÜR',from:'VON HERZEN VON',recipient:'Dich',sender:'Deinem Weihnachtswichtel',greeting:'Frohe Weihnachten',status:'Dein Anhänger ist bereit. Der Download wurde gestartet.',preview:'Vorschau deines Geschenkanhängers',reduced:'Schneefall ist wegen deiner Einstellung für reduzierte Bewegung ausgeschaltet.'
},
en: {
brandSeason:'THE CHRISTMAS WORLD',navProduct:'The gift',navAtelier:'Christmas atelier',navReviews:'Family stories',navFaq:'Good to know',navGuide:'User guide',navPrivacy:'Privacy',skip:'Skip to content',
heroKicker:'FOR LITTLE MINDS WITH BIG IDEAS',heroLine1:'Under the tree.',heroLine2:'A whole world',heroLine3:'of imagination.',
heroText:'A dragon in the snow? A unicorn in a Christmas hat? Kiddotronic turns children’s ideas into personal stickers — and one gift into endless little stories.',
heroCta:'Discover the gift ↗',heroSecondary:'Make a little Christmas magic first ↓',proof1:'Speak an idea',proof2:'Print without ink',proof3:'Create together',peek:'Little box. Big ideas.',stamp:'With love.\nWith imagination.',
toolbarText:'Make yourself merry.',snowLabel:'Snowfall',giftHint:'See the gift idea',route1:'A gift full of ideas',route2:'Your personal Christmas greeting',route3:'Everything you want to know',
atelierKicker:'A LITTLE GIFT FROM US',atelierTitle:'Your imagination.\nYour Christmas greeting.',
atelierIntro:'Create a personal gift tag. For your Kiddotronic present, homemade cookies or someone you love.',
themeLegend:'1. Choose your Christmas magic',themeTree:'Christmas tree',themeCookie:'Cookie magic',themeStar:'Starlight',
toLabel:'2. Who is your gift for?',fromLabel:'3. Who is sending the Christmas greeting?',
download:'Download your gift tag ↓',atelierPrivacy:'No account needed. Your entries stay in your browser. Save as SVG and print on paper.',
previewCaption:'For little gestures that mean a lot.',faqKicker:'GOOD TO KNOW',faqTitle:'Big excitement.\nClear answers.',faqIntro:'So a lovely gift idea comes with peace of mind.',guideLink:'Read the full user guide ↗',
q1:'What does the AI Sticker Printer do?',a1:'Children speak an idea. AI turns it into a motif and the printer puts it on paper. The stickers can then be colored, collected, stuck on or given away.',
q2:'Does it need ink cartridges?',a2:'No. The Kiddotronic Sticker Printer uses thermal printing. It requires suitable thermal paper or thermal sticker paper.',
q3:'Where can I order the gift?',a3:'Orders are placed on Amazon. You can find current availability, delivery estimates, included items and product details there. Please check the estimated delivery date before ordering.',amazonLink:'View the product on Amazon ↗',
q4:'Where can I get help setting it up?',a4:'Our digital guide walks you through setup and includes Wi-Fi guidance. The data sheet provides more product information.',dataSheet:'Data sheet',
q5:'Is the gift tag a printout from the device?',a5:'The gift tag in the Christmas atelier is a separate design tool on this website. Download it as SVG and print it on paper using a regular printer. It is not a preview of output from the Kiddotronic device.',
finalKicker:'THE BEST THINGS CANNOT BE TIED WITH A BOW',finalTitle:'Time together.\nEndless ideas.',finalText:'Give the beginning of many little stories.',finalCta:'Discover Kiddotronic on Amazon ↗',
toPlaceholder:'e.g. Emma',fromPlaceholder:'e.g. Mum & Dad',to:'FOR',from:'WITH LOVE FROM',recipient:'You',sender:'Your Christmas elf',greeting:'Merry Christmas',status:'Your gift tag is ready. The download has started.',preview:'Preview of your personal gift tag',reduced:'Snowfall is off because you prefer reduced motion.'
}};
let language=document.documentElement.lang==='en'?'en':'de';
let theme='tree';
const toInput=document.getElementById('gift-to'),fromInput=document.getElementById('gift-from'),preview=document.getElementById('tag-preview');
const clean=v=>Array.from(v.trim()).slice(0,24).join('');
const xml=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const motifs={
tree:'<path d="M150 68 119 115h16l-29 37h23l-28 38h98l-28-38h23l-29-37h16Z" fill="#194F3C"/><path d="M120 145q30 15 60 0M113 178q37 15 74 0" fill="none" stroke="#D8B66A" stroke-width="3"/><path d="M145 190h10v16h-10z" fill="#9d6b3d"/><circle cx="141" cy="128" r="4" fill="#B93639"/><circle cx="166" cy="168" r="5" fill="#B93639"/><path d="m150 56 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1Z" fill="#D8B66A"/>',
cookie:'<circle cx="150" cy="140" r="62" fill="#b97b43" stroke="#8c512c" stroke-width="3"/><circle cx="150" cy="140" r="49" fill="none" stroke="#FFF6E8" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/><path d="m150 103 10 23 25 2-19 17 6 25-22-13-22 13 6-25-19-17 25-2Z" fill="#FFF6E8"/><circle cx="119" cy="108" r="4" fill="#B93639"/><circle cx="180" cy="173" r="4" fill="#B93639"/>',
star:'<path d="m150 70 19 44 47 5-36 31 11 47-41-25-41 25 11-47-36-31 47-5Z" fill="#D8B66A" stroke="#b58d46" stroke-width="2"/><path d="m150 89 12 35 38 3-29 24 8 31-29-18-29 18 8-31-29-24 38-3Z" fill="none" stroke="#FFF6E8" stroke-width="2"/><path d="M86 76v16m-8-8h16M210 187v16m-8-8h16" stroke="#D8B66A" stroke-width="2"/>'
};
function tagSVG(){
 const c=copy[language],to=clean(toInput.value)||c.recipient,from=clean(fromInput.value)||c.sender;
 const fit=(v,max)=>Math.min(max,Math.floor(238/(Array.from(v).length*.58)));
 return '<svg xmlns="http://www.w3.org/2000/svg" width="75mm" height="110mm" viewBox="0 0 300 440" role="img"><title>'+xml(c.preview)+'</title><path d="M62 7h176l54 58v351q0 17-17 17H25q-17 0-17-17V65Z" fill="#FFF6E8" stroke="#D8B66A" stroke-width="2"/><path d="M69 20h162l47 51v339q0 10-10 10H32q-10 0-10-10V71Z" fill="none" stroke="#D8B66A" stroke-width="1" stroke-dasharray="3 5"/><circle cx="150" cy="38" r="7" fill="#194F3C"/>'+motifs[theme]+'<g text-anchor="middle" font-family="Georgia,serif" fill="#194F3C"><text x="150" y="237" font-size="19" font-style="italic">'+xml(c.greeting)+'</text><text x="150" y="267" font-family="Arial,sans-serif" font-size="9" letter-spacing="3">'+c.to+'</text><text x="150" y="303" font-size="'+fit(to,32)+'">'+xml(to)+'</text><path d="M120 324h60" stroke="#D8B66A"/><text x="150" y="350" font-family="Arial,sans-serif" font-size="8" letter-spacing="2">'+c.from+'</text><text x="150" y="379" font-size="'+fit(from,20)+'">'+xml(from)+'</text><text x="150" y="408" font-family="Arial,sans-serif" font-size="7" letter-spacing="2">KIDDOTRONIC</text></g></svg>';
}
function renderTag(){if(!preview)return;preview.innerHTML=tagSVG();preview.setAttribute('aria-label',copy[language].preview);document.getElementById('tag-status').textContent='';}
function localize(){
 language=document.documentElement.lang==='en'?'en':'de';const c=copy[language];
 document.querySelectorAll('[data-xmas-copy]').forEach(el=>{const value=c[el.dataset.xmasCopy];if(value)el.textContent=value;});
 if(toInput){toInput.placeholder=c.toPlaceholder;fromInput.placeholder=c.fromPlaceholder;renderTag();}
 updateSnow();
}
document.querySelectorAll('[data-tag-theme]').forEach(button=>button.addEventListener('click',()=>{
 theme=button.dataset.tagTheme;
 document.querySelectorAll('[data-tag-theme]').forEach(b=>{const selected=b===button;b.classList.toggle('is-selected',selected);b.setAttribute('aria-pressed',String(selected));});
 renderTag();
}));
[toInput,fromInput].filter(Boolean).forEach(input=>input.addEventListener('input',renderTag));
document.getElementById('tag-download')?.addEventListener('click',()=>{
 const url=URL.createObjectURL(new Blob([tagSVG()],{type:'image/svg+xml;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='kiddotronic-weihnachtsanhaenger.svg';document.body.append(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.getElementById('tag-status').textContent=copy[language].status;
});
// Decorative snow: six vector crystals, three on mobile, with a user-controlled off switch.
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let snowEnabled=true;
try{snowEnabled=sessionStorage.getItem('kiddotronic-snow')!=='off';}catch{}
let layer=document.querySelector('.kiddotronic-snow');
if(!layer){
 layer=document.createElement('div');layer.className='kiddotronic-snow';layer.setAttribute('aria-hidden','true');
 [7,24,43,63,79,93].forEach((x,i)=>{
  const flake=document.createElement('span');flake.className='flake';
  flake.innerHTML='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" focusable="false"><path d="M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11M8.5 4.5 12 8l3.5-3.5M8.5 19.5 12 16l3.5 3.5M3.8 11.3l4.7-1.3-1.3-4.8M16.8 18.8l-1.3-4.8 4.7-1.3M7.2 18.8l1.3-4.8-4.7-1.3M20.2 11.3l-4.7-1.3 1.3-4.8"/></svg>';
  Object.entries({'--x':x+'%','--size':(18+i%3*3)+'px','--duration':(28+i*2)+'s','--delay':(-i*6)+'s','--drift':(i%2?'-25px':'30px'),'--opacity':'.5'}).forEach(([k,v])=>flake.style.setProperty(k,v));layer.append(flake);
 });document.body.append(layer);
}
const snowButton=document.getElementById('snow-toggle');
function updateSnow(){const on=snowEnabled&&!motion.matches;document.body.classList.toggle('snow-paused',!on);if(snowButton){snowButton.setAttribute('aria-pressed',String(on));snowButton.disabled=motion.matches;snowButton.title=motion.matches?copy[language].reduced:'';}}
snowButton?.addEventListener('click',()=>{snowEnabled=!snowEnabled;try{sessionStorage.setItem('kiddotronic-snow',snowEnabled?'on':'off');}catch{}updateSnow();});
motion.addEventListener('change',updateSnow);
document.addEventListener('visibilitychange',()=>{layer.style.visibility=document.hidden?'hidden':'';layer.querySelectorAll('.flake').forEach(e=>e.style.animationPlayState=document.hidden?'paused':'');});
// Gift dialog opens only when requested. Keep keyboard focus inside, restore it on close.
const popup=document.getElementById('gift-hint-popup'),close=popup?.querySelector('.offer-popup-close');
let opener=null;const inerted=[];
function closeGift(){if(!popup)return;popup.hidden=true;document.body.classList.remove('offer-popup-open');inerted.splice(0).forEach(([el,was])=>el.inert=was);opener?.focus();}
document.querySelectorAll('[data-open-gift]').forEach(button=>button.addEventListener('click',()=>{
 if(!popup)return;opener=button;
 const source=document.querySelector('.hero .amazon-offer');const target=popup.querySelector('.offer-popup-content');target.replaceChildren(source.cloneNode(true));
 popup.hidden=false;document.body.classList.add('offer-popup-open');
 [...document.body.children].filter(el=>el!==popup&&!['SCRIPT','STYLE'].includes(el.tagName)).forEach(el=>{inerted.push([el,el.inert]);el.inert=true;});
 close.focus();
}));
close?.addEventListener('click',closeGift);
popup?.addEventListener('click',e=>{if(e.target===popup)closeGift();});
document.addEventListener('keydown',e=>{
 if(!popup||popup.hidden)return;
 if(e.key==='Escape'){e.preventDefault();closeGift();}
 if(e.key==='Tab'){const items=[...popup.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(el=>!el.disabled&&el.getClientRects().length);const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
document.querySelectorAll('#site-menu a').forEach(a=>a.addEventListener('click',()=>{const b=document.querySelector('.menu-toggle');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label',language==='en'?'Open menu':'Menü öffnen');document.getElementById('site-menu').classList.remove('is-open');}));
new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
localize();
})();
