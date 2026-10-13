(() => {
  const MEASUREMENT_ID = "G-RRW0VGBY8F";
  const STORAGE_KEY = "kiddotronic_analytics_consent";

  const styles = `
    .cookie-banner{position:fixed;left:16px;right:16px;top:50%;z-index:99999;max-width:760px;margin:auto;padding:24px;background:#fffaf2;color:#111;border:4px solid #111;border-radius:22px;box-shadow:0 0 0 100vmax rgba(17,17,17,.68),8px 8px 0 #111;font-family:"Baloo 2",Arial,sans-serif;transform:translateY(-50%)}
    .cookie-banner[hidden]{display:none}
    .cookie-banner strong{display:block;margin-bottom:8px;font-size:clamp(1.55rem,4vw,2.2rem);line-height:1}
    .cookie-banner p{margin:0 0 14px;line-height:1.4}
    .cookie-banner a{color:#111;font-weight:800}
    .cookie-actions{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .cookie-actions button,.privacy-settings{min-height:48px;padding:10px 16px;border:3px solid #111;border-radius:999px;background:#ffec3d;color:#111;font:800 1rem "Baloo 2",Arial,sans-serif;cursor:pointer;box-shadow:3px 3px 0 #111}
    .cookie-actions .reject{background:#8cc8ea}
    .privacy-settings{position:fixed;left:12px;bottom:12px;z-index:9998;min-height:38px;padding:6px 12px;font-size:.85rem;background:#fff}
    @media(max-width:560px){.cookie-banner{left:10px;right:10px;padding:20px}.cookie-actions{grid-template-columns:1fr}.cookie-actions button{width:100%}}
  `;
  const addStyles=()=>{if(document.getElementById("kiddotronic-analytics-styles"))return;const s=document.createElement("style");s.id="kiddotronic-analytics-styles";s.textContent=styles;document.head.appendChild(s)};
  const configureConsent=(state)=>{window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag("consent","default",{analytics_storage:state==="granted"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",wait_for_update:500})};
  const loadAnalytics=()=>{if(document.querySelector('script[data-kiddotronic-ga]'))return;configureConsent("granted");const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+MEASUREMENT_ID;s.dataset.kiddotronicGa="true";document.head.appendChild(s);window.gtag("js",new Date());window.gtag("config",MEASUREMENT_ID,{anonymize_ip:true});document.addEventListener("click",e=>{const l=e.target.closest('a[href*="amazon."]');if(!l)return;window.gtag("event","amazon_click",{link_url:l.href,link_text:(l.textContent||"").trim(),page_location:location.href})})};
  const createControls=()=>{addStyles();const b=document.createElement("aside");b.className="cookie-banner";b.setAttribute("aria-label","Datenschutzeinstellungen");b.innerHTML=`<strong>Wir verwenden Cookies</strong><p>Notwendige Speicherfunktionen sorgen dafür, dass deine Datenschutzauswahl erhalten bleibt. Mit deiner freiwilligen Einwilligung verwenden wir zusätzlich Google Analytics-Cookies, um Seitenaufrufe und Klicks auf Amazon zu messen und unser Angebot zu verbessern. Ohne Zustimmung bleibt die Analyse deaktiviert. Deine Auswahl kannst du jederzeit ändern. <a href="datenschutz.html">Mehr erfahren</a></p><div class="cookie-actions"><button type="button" class="accept">Analytics-Cookies erlauben</button><button type="button" class="reject">Optionale Cookies ablehnen</button></div>`;document.body.appendChild(b);const settings=document.createElement("button");settings.type="button";settings.className="privacy-settings";settings.textContent="Datenschutz-Einstellungen";settings.hidden=true;document.body.appendChild(settings);const clear=()=>{document.cookie.split(";").forEach(entry=>{const n=entry.split("=")[0].trim();if(!/^_ga(?:_|$)/.test(n))return;const ex="expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax";document.cookie=n+"=;"+ex;document.cookie=n+"=;"+ex+";domain=kiddotronic.com";document.cookie=n+"=;"+ex+";domain=.kiddotronic.com"})};const setChoice=choice=>{const prev=localStorage.getItem(STORAGE_KEY);localStorage.setItem(STORAGE_KEY,choice);b.hidden=true;settings.hidden=false;if(choice==="granted")loadAnalytics();else{configureConsent("denied");clear();if(prev==="granted")location.reload()}};b.querySelector(".accept").addEventListener("click",()=>setChoice("granted"));b.querySelector(".reject").addEventListener("click",()=>setChoice("denied"));settings.addEventListener("click",()=>{b.hidden=false;settings.hidden=true});const choice=localStorage.getItem(STORAGE_KEY);if(choice==="granted"){b.hidden=true;settings.hidden=false;loadAnalytics()}else if(choice==="denied"){b.hidden=true;settings.hidden=false;configureConsent("denied")}else configureConsent("denied")};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",createControls);else createControls();
})();

(() => {
  const updateReview=()=>{const cards=document.querySelectorAll(".reviews-section .review-card");if(cards.length<3)return;const card=cards[2],author=card.querySelector(".review-author");if(!author||!author.textContent.includes("Andreas F."))return;const stars=card.querySelector(".review-stars"),title=card.querySelector("h3"),quote=card.querySelector("blockquote");if(stars){stars.textContent="★★★★★";stars.setAttribute("aria-label","Bewertung mit 5 von 5 Sternen")}if(title)title.textContent="Ein unterhaltsames und kreatives Gadget für Kinder";if(quote)quote.textContent="„Dieser kleine Sticker-Drucker ist bei uns zu Hause schnell zum Favoriten geworden, vor allem weil er Technik und kreatives Basteln auf eine Art verbindet, die Kinder wirklich begeistert. Die Bluetooth-Verbindung zur App funktioniert reibungslos … Meine Tochter liebt es besonders, eigene Ausmalbilder zu gestalten und sie dann als Sticker auszudrucken … Insgesamt ist dies ein durchdachtes Geschenk, das Technik, Kreativität und bildschirmfreie Unterhaltung vereint …“";author.innerHTML='Elena<span class="review-label">Vine Kundenrezension eines kostenlosen Produkts · 7. September 2026</span>'};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",updateReview);else updateReview();
})();


/* Subtle seasonal decorations, only in the top area of the page. */
(() => {
  const end=Date.parse("2026-11-01T00:00:00+01:00");
  const init=()=>{
    if(Date.now()>=end || document.getElementById("kiddotronic-halloween-decor"))return;
    const style=document.createElement("style");
    style.textContent=`
      #kiddotronic-halloween-decor{position:absolute;top:0;left:0;right:0;height:420px;overflow:hidden;pointer-events:none;z-index:3}
      #kiddotronic-halloween-decor .seasonal-item{position:absolute;top:var(--top);left:var(--left);font-size:var(--size);opacity:.48;animation:kiddotronic-seasonal-drift 7s ease-in-out infinite alternate;animation-delay:var(--delay)}
      @keyframes kiddotronic-seasonal-drift{from{transform:translateY(0) rotate(-5deg)}to{transform:translateY(-12px) rotate(5deg)}}
      @media(max-width:600px){#kiddotronic-halloween-decor{height:290px}#kiddotronic-halloween-decor .seasonal-item{font-size:24px;opacity:.38}}
      @media(prefers-reduced-motion:reduce){#kiddotronic-halloween-decor .seasonal-item{animation:none}}
    `;
    document.head.appendChild(style);
    const layer=document.createElement("div");
    layer.id="kiddotronic-halloween-decor";
    layer.setAttribute("aria-hidden","true");
    [{icon:"🎃",left:"5%",top:"75px",delay:"0s",size:"30px"},{icon:"🎁",left:"88%",top:"115px",delay:"-2s",size:"29px"},{icon:"🎁",left:"12%",top:"265px",delay:"-4s",size:"25px"}].forEach(item=>{
      const el=document.createElement("span");el.className="seasonal-item";el.textContent=item.icon;
      for(const key of ["left","top","delay","size"])el.style.setProperty("--"+key,item[key]);
      layer.appendChild(el);
    });
    document.body.appendChild(layer);
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
