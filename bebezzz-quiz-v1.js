/* Meta Pixel - BebeZzz */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2014631956086086');
fbq('track', 'PageView');

(function(){
  "use strict";

  var BRAND = "BebéZzz";
  var TECHNIQUE = "Técnica de la Lunita";
  // Configure onde os botões da tela de oferta (vsloffer) devem levar no checkout final. Fica como placeholder.
  var NEXT_STEP_URL = "https://pay.hotmart.com/N106750354L?checkoutMode=10";

  var MOON_SVG = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M58 6 A46 46 0 1 0 58 94 A34 34 0 1 1 58 6 Z" fill="#5D8AB8"/>' +
    '<path d="M4 45 q3 -4 6 0" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '<path d="M13 45 q3 -4 6 0" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '<path d="M7 54 q4 3.5 8 0" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '<circle cx="4" cy="49" r="2" fill="#F2A9A0" opacity="0.85"/>' +
    '<circle cx="19" cy="49" r="2" fill="#F2A9A0" opacity="0.85"/>' +
    '</svg>';

  var ADULT_FACE_SVG = '<svg viewBox="8 8 74 80" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="45" cy="52" r="20" fill="#F6D9BE"/>' +
    '<path d="M25 45 a20 20 0 0 1 40 0 q-20 -10 -40 0 Z" fill="#5D8AB8"/>' +
    '<path d="M37 50 q2.4 -3 4.8 0" stroke="#3A322E" stroke-width="1.6" stroke-linecap="round" fill="none"/>' +
    '<path d="M49 50 q2.4 -3 4.8 0" stroke="#3A322E" stroke-width="1.6" stroke-linecap="round" fill="none"/>' +
    '<path d="M39 59 q6 4 12 0" stroke="#3A322E" stroke-width="1.6" stroke-linecap="round" fill="none"/>' +
    '<circle cx="34" cy="56" r="2.6" fill="#F2A9A0" opacity="0.75"/>' +
    '<circle cx="56" cy="56" r="2.6" fill="#F2A9A0" opacity="0.75"/>' +
    '</svg>';

  var BABY_FACE_SVG = '<svg viewBox="126 20 50 60" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="150" cy="54" r="22" fill="#FBE6D4"/>' +
    '<path d="M144 34 q3 -8 8 -2 q2 -5 5 1" stroke="#5D8AB8" stroke-width="4" stroke-linecap="round" fill="none"/>' +
    '<circle cx="141" cy="52" r="3.2" fill="#3A322E"/>' +
    '<circle cx="159" cy="52" r="3.2" fill="#3A322E"/>' +
    '<path d="M144 62 q6 4.5 12 0" stroke="#3A322E" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
    '<circle cx="136" cy="58" r="3" fill="#F2A9A0" opacity="0.8"/>' +
    '<circle cx="164" cy="58" r="3" fill="#F2A9A0" opacity="0.8"/>' +
    '</svg>';

  var PILLOW_SVG = '<svg viewBox="8 28 74 55" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="10" y="35" width="70" height="45" rx="20" fill="#5D8AB8" opacity="0.16"/>' +
    '<path d="M22 50 q2 -3 4 0" stroke="#5D8AB8" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
    '<path d="M31 50 q2 -3 4 0" stroke="#5D8AB8" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
    '<path d="M24 58 q4.5 3 9 0" stroke="#5D8AB8" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
    '<circle cx="20" cy="55" r="1.8" fill="#F2A9A0" opacity="0.7"/>' +
    '<circle cx="38" cy="55" r="1.8" fill="#F2A9A0" opacity="0.7"/>' +
    '<text x="52" y="46" font-family="Georgia,serif" font-size="9" fill="#5D8AB8" opacity="0.55">z</text>' +
    '<text x="58" y="40" font-family="Georgia,serif" font-size="7" fill="#5D8AB8" opacity="0.45">z</text>' +
    '<text x="63" y="35" font-family="Georgia,serif" font-size="5.5" fill="#5D8AB8" opacity="0.35">z</text>' +
    '</svg>';

  var BOTTLE_SVG = '<svg viewBox="122 18 28 50" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="130" y="20" width="12" height="7" rx="2.4" fill="#5D8AB8"/>' +
    '<path d="M128 27h16l-2.4 4.8h-11.2L128 27z" fill="#5D8AB8"/>' +
    '<rect x="124" y="31.8" width="24" height="34" rx="7" fill="#5D8AB8" opacity="0.85"/>' +
    '<line x1="124" y1="45" x2="148" y2="45" stroke="#FFFFFF" stroke-width="1.4" opacity="0.6"/>' +
    '</svg>';

  var state = { name:"", answers:{} };

  var screens = [
    {id:"intro", type:"intro"},
    {id:"q1", type:"single", key:"q1", title:"¿Cómo duerme tu bebé HOY?", sub:"Sé 100% sincera, nadie te está juzgando ❤️", options:[
      {e:"😩", t:"Solo se duerme con el pecho y se despierta varias veces"},
      {e:"🍼", t:"Solo se duerme con biberón y se despierta de madrugada"},
      {e:"😔", t:"Solo se duerme en brazos/arrullándolo y tarda horas"},
      {e:"🌤️", t:"Duerme más o menos bien, pero quiero mejorar"}
    ]},
    {id:"q2", type:"single", key:"q2", title:"¿Cuántas veces se despierta tu bebé DE MADRUGADA buscando el pecho/biberón?", sub:"Piensa en la noche de AYER...", options:[
      {e:"😵‍💫", t:"5 veces o más (cada 1-2 horas)", pts:3},
      {e:"😟", t:"3 a 4 veces", pts:2},
      {e:"😌", t:"1 a 2 veces", pts:1},
      {e:"😴", t:"Ya no se despierta (o muy rara vez)", pts:0}
    ]},
    {id:"q3", type:"single", key:"q3", title:"¿Cuánto tiempo llevas pasando por esto?", sub:"No es tu culpa. Pero entre más pronto actúes, más rápido vas a sentir alivio.", options:[
      {e:"🥺", t:"Más de 6 meses (¡ya no aguanto!)", pts:3},
      {e:"😥", t:"Entre 3 y 6 meses", pts:2},
      {e:"😕", t:"Entre 1 y 3 meses", pts:1},
      {e:"🌱", t:"Menos de 1 mes", pts:0}
    ]},
    {id:"q4", type:"single", key:"q4", title:"¿Qué edad tiene tu bebé?", sub:"Esto nos ayuda a personalizar las técnicas para su etapa.", options:[
      {e:"🌙", t:"0 a 6 meses"},
      {e:"🍼", t:"7 a 12 meses"},
      {e:"🧸", t:"13 a 24 meses (1 a 2 años)"},
      {e:"🎈", t:"Más de 2 años"}
    ]},
    {id:"name", type:"input", title:"¿Cuál es tu nombre?"},
    {id:"affects", type:"multi", key:"affects", greet:true, title:"¿Cómo te está afectando la falta de sueño?", sub:"Marca todas las opciones que apliquen a tu caso:", options:[
      {e:"😮‍💨", t:"Estoy agotada e irritada todo el tiempo"},
      {e:"🕰️", t:"No tengo tiempo/energía para nada (ni para bañarme)"},
      {e:"💔", t:"Mi relación de pareja se está viendo afectada"},
      {e:"😔", t:"Me siento culpable, como si hubiera fallado"},
      {e:"😰", t:"Me da ansiedad a la hora de dormir"},
      {e:"🪞", t:"Siento que perdí mi identidad"}
    ], cta:"Continuar"},
    {id:"q5", type:"single", key:"q5", title:"¿Cómo se duerme tu bebé NORMALMENTE?", sub:"Piensa en la rutina de sueño de la NOCHE:", options:[
      {e:"🤱", t:"Con el pecho (siempre)", diag:"con el pecho"},
      {e:"🍼", t:"Con biberón", diag:"con el biberón"},
      {e:"🚶‍♀️", t:"En el coche/carriola, en movimiento", diag:"con el movimiento (coche/carriola)"},
      {e:"🤲", t:"En brazos, arrullándolo", diag:"con estar en brazos"},
      {e:"🛏️", t:"Acostado en la cuna/cama (rara vez)", diag:"con la rutina actual"}
    ]},
    {id:"loading1", type:"video", title:"Mira lo que dicen otras mamás 👇", sub:"Un testimonio real en video antes de ver tu resultado."},
    {id:"reveal1", type:"reveal1"},
    {id:"tried", type:"multi", key:"tried", title:"¿Ya intentaste resolver esto antes?", sub:"Marca todo lo que ya intentaste:", options:[
      {t:"Reducir las tomas poco a poco"},
      {t:"Ponerlo en la cuna adormilado (pero no funciona)"},
      {t:"Dejar que el papá/otra persona lo duerma"},
      {t:"Rutina de sueño (baño, música, etc.)"},
      {t:"Consulté al pediatra (pero no se resolvió)"},
      {t:"¡Nada de eso funcionó!"},
      {t:"No, todavía no he intentado nada"}
    ], cta:"Continuar"},
    {id:"reveal2", type:"reveal2"},
    {id:"testimonial3d", type:"transition"},
    {id:"commit", type:"single", key:"commit", title:"¿Puedes dedicar 20 MINUTOS AL DÍA durante 3 días?", sub:"Ese es el tiempo necesario para aplicar el método:", options:[
      {e:"✅", t:"¡Sí! Hago lo que sea para resolver esto"},
      {e:"💪", t:"Sí, puedo organizar mi tiempo"},
      {e:"🤔", t:"Tal vez... depende del día"},
      {e:"🚫", t:"No tengo tiempo ni para eso"}
    ]},
    {id:"loading2", type:"checklist"},
    {id:"result", type:"result"},
    {id:"vsloffer", type:"vsloffer"}
  ];

  var idx = 0;
  var host = document.getElementById("screenHost");
  var progressBar = document.getElementById("progressBar");

  var EMOJI_MAP = {"⏰":"23f0","❤️":"2764","😩":"1f629","🍼":"1f37c","😔":"1f614","🌤️":"1f324","😵‍💫":"1f635-200d-1f4ab","😟":"1f61f","😌":"1f60c","😴":"1f634","🥺":"1f97a","😥":"1f625","😕":"1f615","🌱":"1f331","🌙":"1f319","🧸":"1f9f8","🎈":"1f388","😮‍💨":"1f62e-200d-1f4a8","🕰️":"1f570","💔":"1f494","😰":"1f630","🪞":"1fa9e","🤱":"1f931","🚶‍♀️":"1f6b6-200d-2640","🤲":"1f932","🛏️":"1f6cf","✅":"2705","💪":"1f4aa","🤔":"1f914","🚫":"1f6ab","⭐️":"2b50","👋":"1f44b","🧠":"1f9e0","❌":"274c","❓":"2753","💬":"1f4ac","🌑":"1f311","🌗":"1f317","🌕":"1f315","🎯":"1f3af","⚠️":"26a0","🎬":"1f3ac"};
  var EMOJI_RE = new RegExp(Object.keys(EMOJI_MAP).sort(function(a,b){return b.length-a.length;}).map(function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}).join("|"),"g");
  function parseEmoji(){
    if(!host) return;
    var walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      var txt = node.nodeValue;
      if(!txt) return;
      EMOJI_RE.lastIndex = 0;
      if(!EMOJI_RE.test(txt)) return;
      EMOJI_RE.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while((m = EMOJI_RE.exec(txt))){
        if(m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
        var img = document.createElement("img");
        img.className = "emoji";
        img.alt = m[0];
        img.setAttribute("draggable","false");
        img.src = "emoji/" + EMOJI_MAP[m[0]] + ".webp";
        frag.appendChild(img);
        last = m.index + m[0].length;
      }
      if(last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function esc(s){
    var d=document.createElement("div");
    d.textContent=s==null?"":s;
    return d.innerHTML;
  }

  function updateProgress(){
    var questionScreens = ["q1","q2","q3","q4","name","affects","q5","tried","commit"];
    var total = questionScreens.length;
    var seen = 0;
    for(var i=0;i<=idx;i++){
      if(questionScreens.indexOf(screens[i].id) !== -1) seen++;
    }
    var pct = Math.min(100, Math.round((seen/total)*100));
    progressBar.style.width = pct + "%";
  }

  function go(nextIdx){
    idx = nextIdx;
    updateProgress();
    render();
    window.scrollTo(0,0);
  }

  function next(){ go(idx+1); }

  function brandHeader(){
    return '<div class="brand"><span class="moon">' + MOON_SVG + '</span>' + BRAND + '</div>';
  }

  function render(){
    var s = screens[idx];
    var html = "";

    var pw = document.querySelector(".progress-wrap");
    if(pw) pw.style.display = (s.type === "intro") ? "none" : "";

    if(s.type === "intro"){
      html += '<h1 style="text-align:center;color:#332728;font-size:22px;">Test de 1 minuto: descubre cómo enseñar a tu bebé a <span style="color:#D23B3B;">dormir toda la noche</span> en 3 días o menos</h1>';
      html += '<div class="sub" style="text-align:center;font-weight:700;color:#353E49;">De forma Gentil con la <span class="accent" style="color:var(--rose);font-weight:700;">' + TECHNIQUE + '</span></div>';
      html += '<img src="hero-antes-depois.webp" alt="Antes y después: mamá cansada de noche y mamá tranquila con bebé dormido" style="width:100%;height:auto;display:block;border-radius:16px;margin:4px 0 14px;box-shadow:var(--shadow);">';
      html += '<div class="badge" style="background-color:#FFDD00;color:#000000;font-weight:600;text-align:center;border-radius:105px;width:300px;margin:10px auto 6px;">4 tests personalizados disponibles para hoy</div>';
      html += '<div class="hint" style="font-weight:500;">Haz clic en el botón de abajo para comenzar</div>';
      html += '<div class="social" style="font-weight:500;">Más de <b style="color:#34373B;">32.420</b> madres ya lo hicieron</div>';
      html += '<div class="stars" style="font-weight:600;">⭐️⭐️⭐️⭐️⭐️ (4.9/5)</div>';
      html += '<button class="btn" id="btnMain" style="font-weight:700;">EMPEZAR EL TEST GRATIS</button>';
      host.innerHTML = html;
      document.getElementById("btnMain").onclick = next;
      return;
    }

    if(s.type === "single"){
      html += '<h1 style="text-align:center;font-size:20px;">' + esc(s.title) + "</h1>";
      if(s.sub) html += '<div class="sub" style="text-align:center;">' + esc(s.sub) + "</div>";
      html += '<div class="options">';
      s.options.forEach(function(o,i){
        html += '<button class="opt" data-i="'+i+'">' +
                (o.e? '<span class="emoji">'+o.e+'</span>':'') +
                '<span>'+esc(o.t)+'</span></button>';
      });
      html += '</div>';
      host.innerHTML = html;
      var btns = host.querySelectorAll(".opt");
      btns.forEach(function(b){
        b.onclick = function(){
          var i = parseInt(b.getAttribute("data-i"),10);
          var o = s.options[i];
          state.answers[s.key] = o;
          b.classList.add("selected");
          btns.forEach(function(x){ if(x!==b) x.disabled = true; });
          setTimeout(next, 260);
        };
      });
      return;
    }

    if(s.type === "input"){
      html += "<h1>" + esc(s.title) + "</h1>";
      html += '<input type="text" id="nameInput" placeholder="Escribe tu nombre aquí" maxlength="30" autocomplete="given-name">';
      html += '<button class="btn" id="btnMain">CONTINUAR</button>';
      host.innerHTML = html;
      var inp = document.getElementById("nameInput");
      inp.focus();
      function submitName(){
        var v = inp.value.trim();
        if(!v) { inp.focus(); return; }
        state.name = v;
        next();
      }
      document.getElementById("btnMain").onclick = submitName;
      inp.addEventListener("keydown", function(e){ if(e.key==="Enter") submitName(); });
      return;
    }

    if(s.type === "multi"){
      if(s.greet) html += '<div class="sub" style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:18px;text-align:center;">¡Hola, '+esc(state.name||"mamá")+'! 👋</div>';
      html += '<h1 style="font-size:20px;">' + esc(s.title) + "</h1>";
      html += '<div class="sub">' + esc(s.sub) + "</div>";
      html += '<div class="options">';
      s.options.forEach(function(o,i){
        html += '<button class="opt" data-i="'+i+'">' +
                (o.e? '<span class="emoji">'+o.e+'</span>':'') +
                '<span>'+esc(o.t)+'</span><span class="check"></span></button>';
      });
      html += '</div>';
      html += '<button class="btn" id="btnMain" style="margin-top:6px;">'+esc(s.cta)+'</button>';
      host.innerHTML = html;
      var selected = {};
      var btns = host.querySelectorAll(".opt");
      btns.forEach(function(b){
        b.onclick = function(){
          var i = b.getAttribute("data-i");
          selected[i] = !selected[i];
          b.classList.toggle("selected");
          var chk = b.querySelector(".check");
          chk.textContent = selected[i] ? "✓" : "";
        };
      });
      document.getElementById("btnMain").onclick = function(){
        var picked = [];
        Object.keys(selected).forEach(function(k){ if(selected[k]) picked.push(s.options[k].t); });
        state.answers[s.key] = picked;
        next();
      };
      return;
    }

    if(s.type === "video"){
      html += "<h1>" + esc(s.title) + "</h1>";
      html += '<div class="sub">' + esc(s.sub) + "</div>";
      // PLACEHOLDER: colar aqui dentro o embed real do Panda Video (substituir o innerHTML de #vslEmbed)
      html += '<div class="vsl-box" id="vslEmbed"><span class="play">▶</span><div style="font-size:14px;font-weight:700;opacity:.85;padding:0 24px;">Vídeo de depoimento</div><div style="font-size:12px;opacity:.55;margin-top:6px;">(placeholder — pegar embed do Panda Video aqui)</div></div>';
      html += '<button class="btn" id="btnMain">Continuar</button>';
      host.innerHTML = html;
      document.getElementById("btnMain").onclick = next;
      return;
    }

    if(s.type === "loading"){
      html += '<div class="loading-wrap">';
      html += '<span class="spinner-moon">'+MOON_SVG+'</span>';
      html += '<div class="loading-title">' + esc(s.title) + '</div>';
      html += '<div class="progress-wrap" style="max-width:220px;"><div class="progress-bar" id="loadBar1"></div></div>';
      html += '<div class="loading-pct" id="loadPct1">0%</div>';
      html += '</div>';
      host.innerHTML = html;
      animateLoading(document.getElementById("loadBar1"), document.getElementById("loadPct1"), 2200, next);
      return;
    }

    if(s.type === "checklist"){
      var items = [
        "Analizando la edad del bebé...",
        "Identificando el patrón de sueño...",
        "Detectando asociaciones...",
        "Calculando la técnica ideal...",
        "Personalizando el protocolo..."
      ];
      html += '<div class="loading-wrap">';
      html += '<div class="loading-title">'+esc(state.name||"Mamá")+', estamos preparando tu análisis personalizado...</div>';
      html += '<div class="checklist" id="checklist">';
      items.forEach(function(it,i){
        html += '<div class="citem" id="citem'+i+'"><span class="tick"></span><span>'+esc(it)+'</span></div>';
      });
      html += '</div></div>';
      host.innerHTML = html;
      items.forEach(function(it,i){
        setTimeout(function(){
          var el = document.getElementById("citem"+i);
          if(el){ el.classList.add("done"); el.querySelector(".tick").textContent="✓"; }
        }, 450 + i*450);
      });
      setTimeout(next, 450 + items.length*450 + 500);
      return;
    }

    if(s.type === "reveal1"){
      html += '<div style="font-size:20px;text-align:center;font-weight:600;color:#000000;margin-bottom:14px;">Mira por qué está pasando esto...</div>';
      html += '<img src="que-paso.webp" alt="Qué pasó: tu bebé creó una asociación de sueño" style="width:100%;height:auto;display:block;border-radius:16px;margin:0 0 18px;">';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">❌</span><span>Esto no significa que tenga hambre.</span></div>';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">❌</span><span>Esto no significa que hiciste algo mal.</span></div>';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">✅</span><span>Significa que es la única forma que conoce para relajarse y dormir.</span></div>';
      html += '<div class="goodnews-box"><div class="gn-label">La buena noticia:</div><div class="gn-text"><span class="gn-check">✓</span>¡Puedes cambiar esto en 3 días o menos!</div></div>';
      html += '<button class="btn" id="btnMain">Entendido, continuar...</button>';
      host.innerHTML = html;
      document.getElementById("btnMain").onclick = next;
      return;
    }

    if(s.type === "reveal2"){
      html += "<h1>NO fallaste. ❤️</h1>";
      html += '<div class="sub">La mayoría de los métodos en internet tienen 3 problemas:</div>';
      html += '<div style="margin-bottom:16px;"><div style="color:var(--bad);font-weight:800;font-size:12px;letter-spacing:.4px;margin-bottom:4px;">❌ PROBLEMA 1:</div><div style="font-weight:800;font-size:16px;margin-bottom:6px;">Son GENÉRICOS</div><div style="font-size:13.5px;color:var(--text-dim);line-height:1.5;">No toman en cuenta la edad específica de tu bebé, ni el tipo de asociación que tiene.</div></div>';
      html += '<div style="margin-bottom:16px;"><div style="color:var(--bad);font-weight:800;font-size:12px;letter-spacing:.4px;margin-bottom:4px;">❌ PROBLEMA 2:</div><div style="font-weight:800;font-size:16px;margin-bottom:6px;">Exigen que DEJES LLORAR A TU BEBÉ</div><div style="font-size:13.5px;color:var(--text-dim);line-height:1.5;">Esto puede generar trauma e inseguridad. Tienes toda la razón en no querer hacerlo.</div></div>';
      html += '<div style="margin-bottom:16px;"><div style="color:var(--bad);font-weight:800;font-size:12px;letter-spacing:.4px;margin-bottom:4px;">❌ PROBLEMA 3:</div><div style="font-weight:800;font-size:16px;margin-bottom:6px;">Son COMPLICADOS</div><div style="font-size:13.5px;color:var(--text-dim);line-height:1.5;">Muchos pasos, sin un paso a paso claro, que te dejan perdida.</div></div>';
      html += '<div class="approach"><div class="atitle">✅ NUESTRO ENFOQUE ES DIFERENTE:</div>';
      html += '<div class="arrow-line">→ Método GENTIL y respetuoso (Cero dejar llorar solo)</div>';
      html += '<div class="arrow-line">→ Personalizado para la edad y situación de TU bebé</div>';
      html += '<div class="arrow-line">→ Paso a paso SENCILLO en video</div>';
      html += '<div class="arrow-line">→ Resultados Rápidos: en 3 DÍAS O MENOS</div></div>';
      html += '<button class="btn" id="btnMain">❓ Entendido. ¿Cómo funciona el método?</button>';
      host.innerHTML = html;
      document.getElementById("btnMain").onclick = next;
      return;
    }

    if(s.type === "transition"){
      html += "<h1>💬 Mira lo que pasa en solo 3 días:</h1>";
      html += '<div class="tcarousel"><div class="tviewport" id="tvp"><div class="tslides" id="tslides">' +
        ["depoimento1.webp","depoimento2.webp","depoimento3.webp","depoimento4.webp"].map(function(src,i){
          return '<div class="tslide"><img src="'+src+'" alt="Depoimento '+(i+1)+'" draggable="false"></div>';
        }).join("") +
        '</div></div>' +
        '<button class="tnav tprev" id="tPrev" aria-label="Anterior">‹</button>' +
        '<button class="tnav tnext" id="tNext" aria-label="Siguiente">›</button>' +
        '<div class="tdots" id="tDots">' +
        [0,1,2,3].map(function(i){ return '<button class="tdot'+(i===0?' active':'')+'" data-dot="'+i+'"></button>'; }).join("") +
        '</div></div>';
      html += '<button class="btn" id="btnMain" style="margin-top:14px;">Continuar</button>';
      host.innerHTML = html;
      initCarousel();
      document.getElementById("btnMain").onclick = next;
      return;
    }

    if(s.type === "result"){
      var q2pts = (state.answers.q2 && state.answers.q2.pts) || 0;
      var q3pts = (state.answers.q3 && state.answers.q3.pts) || 0;
      var score = q2pts + q3pts;
      var markerPct = 12 + Math.min(70, score * 11);
      var diagText = (state.answers.q5 && state.answers.q5.diag) || "con el pecho";
      var nm = state.name || "mamá";

      html += "<h1>¡" + esc(nm) + ", el perfil de sueño de tu bebé está listo!</h1>";
      html += '<div style="text-align:center;color:var(--text-dim);font-size:13.5px;margin-bottom:8px;">Nivel de agotamiento:</div>';
      html += '<div style="display:flex;justify-content:center;margin-bottom:22px;"><span style="display:inline-flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--card-line);border-radius:12px;padding:10px 18px;font-size:15px;font-weight:700;color:var(--text);box-shadow:var(--shadow);">⏰ Alto/Crítico</span></div>';

      html += '<div style="position:relative;overflow:hidden;background:linear-gradient(90deg,#FF2340,#FF7A1F 28%,#FFC91E 50%,#8BE04B 72%,#1FC85F);border-radius:16px;padding:16px 16px 18px;margin:16px 0 24px;box-shadow:0 6px 18px rgba(255,70,70,.18);">';
      html += '<div style="position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.13) 0 1.5px,transparent 1.5px 42px),repeating-linear-gradient(0deg,rgba(255,255,255,.09) 0 1px,transparent 1px 22px);"></div>';
      html += '<div style="position:relative;z-index:1;font-size:12px;font-weight:800;letter-spacing:.5px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.18);margin-bottom:36px;">CALIDAD DE SUEÑO ACTUAL</div>';
      html += '<div style="position:relative;z-index:1;">';
      html += '<div id="gaugeTag" style="position:absolute;top:-34px;left:0%;transform:translateX(-50%);background:#fff;color:#2F333A;font-size:11px;font-weight:800;padding:5px 10px;border-radius:9px;white-space:nowrap;box-shadow:0 3px 8px rgba(0,0,0,.2);transition:left 1.9s cubic-bezier(.22,.61,.36,1);">Estás aquí<span style="position:absolute;left:50%;bottom:-5px;transform:translateX(-50%);border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;"></span></div>';
      html += '<div style="position:relative;height:6px;border-radius:99px;background:rgba(255,255,255,.55);"></div>';
      html += '<div id="gaugeMarker" style="position:absolute;top:3px;left:0%;transform:translate(-50%,-50%);width:20px;height:20px;background:#fff;border-radius:50%;box-shadow:0 2px 7px rgba(0,0,0,.28);transition:left 1.9s cubic-bezier(.22,.61,.36,1);"></div>';
      html += '<div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;font-weight:800;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.18);"><span>Mala</span><span>Media</span><span>Buena</span></div>';
      html += '</div>';
      html += '</div>';

      html += '<div class="diag-title" style="text-align:center;color:#1B1E20;font-weight:700;">🎯 DIAGNÓSTICO:</div>';
      html += '<div class="diag-text" style="text-align:center;font-weight:400;">Tu bebé creó un HÁBITO (ASOCIACIÓN) DE SUEÑO '+esc(diagText)+'.</div>';

      html += '<div class="list-title" style="text-align:center;color:#37393B;font-weight:700;">LO QUE ESTO SIGNIFICA:</div>';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">❌</span><span>No sabe relajarse y dormir sin eso</span></div>';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">❌</span><span>Por eso puede despertarse cada 40 minutos</span></div>';
      html += '<div class="reveal-line" style="background:none;border:none;box-shadow:none;padding:8px 2px;"><span class="ic">❌</span><span>Entre más tiempo pasa, más fuerte se vuelve ese hábito</span></div>';

      html += '<div style="margin:16px 0;"><div class="atitle" style="text-align:center;font-weight:700;">✅ LA BUENA NOTICIA:</div>';
      html += '<div class="arrow-line" style="text-align:center;">¡Tu bebé está en la edad PERFECTA para <b>DESBLOQUEAR</b> EL SUEÑO SIN EL PECHO!</div></div>';

      html += '<div class="list-title" style="text-align:center;color:#111213;font-weight:700;">CON EL RETO DE 3 DÍAS PUEDES:</div>';
      html += '<div class="arrow-line">→ Enseñarle a dormir sin el pecho en 3 DÍAS (o menos)</div>';
      html += '<div class="arrow-line">→ Reducir/eliminar los despertares nocturnos</div>';
      html += '<div class="arrow-line">→ Método 100% GENTIL (sin dejarlo llorar solo)</div>';
      html += '<div class="arrow-line">→ Mantener la lactancia (si quieres)</div>';
      html += '<div class="arrow-line">→ Recuperar tus noches tranquilas</div>';

      html += '<div style="margin:18px 0;"><div class="list-title" style="margin-top:0;color:#121111;text-align:center;font-weight:700;">⚠️ '+esc(nm)+', cada noche que pasa:</div>';
      html += '<div class="arrow-line">→ Estás más agotada</div>';
      html += '<div class="arrow-line">→ El hábito del bebé se vuelve más fuerte</div>';
      html += '<div class="arrow-line">→ Es más difícil cambiarlo después</div></div>';

      html += '<div class="closing">¡Las mamás que empiezan HOY logran RESULTADOS en hasta 3 días! Haz clic en el botón de abajo para ver el reto que preparamos para ti</div>';
      html += '<button class="btn" id="btnMain">🎬 VER MI RETO PRÁCTICO</button>';
      html += '<div class="footnote">En el siguiente paso verás un video rápido que explica cómo funciona el método</div>';

      host.innerHTML = html;
      if (typeof fbq === "function") { fbq("track", "Lead"); }
      setTimeout(function(){
        var mk=document.getElementById("gaugeMarker");
        var tg=document.getElementById("gaugeTag");
        if(mk) mk.style.left=markerPct+"%";
        if(tg) tg.style.left=markerPct+"%";
      }, 160);
      document.getElementById("btnMain").onclick = next;
      return;
    }
    if(s.type === "vsloffer"){
      html += '<div style="text-align:center;font-size:13px;font-weight:800;letter-spacing:.3px;color:var(--text);margin-bottom:16px;">DALE PLAY Y MIRA EL RESULTADO EN EL VIDEO DE ABAJO ▼</div>';
      // PLACEHOLDER: colar aqui dentro o embed real da VSL (substituir o innerHTML de #vslOfferEmbed)
      html += '<div class="vsl-box" id="vslOfferEmbed"><span class="play">▶</span><div style="font-size:14px;font-weight:700;opacity:.85;padding:0 24px;">Vídeo VSL</div><div style="font-size:12px;opacity:.55;margin-top:6px;">(placeholder — pegar embed da VSL aqui)</div></div>';
      html += '<button class="btn" id="btnCta1" style="background:#0F7A46;box-shadow:0 4px 14px rgba(15,122,70,.28);font-size:14px;">🎁 QUIERO ACCESO AL RETO AHORA</button>';

      html += '<div style="text-align:center;font-weight:800;font-size:13px;color:var(--text);margin:26px 0 8px;">¡EXCELENTES NOTICIAS!</div>';
      html += '<div class="sub" style="margin-bottom:20px;">Estás exactamente donde estaban miles de mamás antes de descubrir el Reto de 3 Días de ' + BRAND + '.</div>';

      html += '<div style="background:#F5F5F7;border-radius:16px;padding:20px 14px;margin-bottom:20px;">';
      html += '<div style="display:flex;justify-content:space-between;gap:8px;">';
      html += dayCol("🤯","HOY","Tu bebé solo se duerme con el pecho","#D93838",26,"");
      html += dayCol("😮","DÍA 1","Aprende la "+TECHNIQUE,"#0F7A46",42,"1D");
      html += dayCol("😍","DÍA 2","Primeros Resultados","#0F7A46",68,"2D");
      html += dayCol("🥰","DÍA 3","Bebé durmiendo sin el pecho","#0F7A46",92,"3D");
      html += '</div></div>';

      html += '<div style="background:#FBF0C4;border-radius:14px;padding:16px 16px;margin-bottom:18px;">';
      html += '<div style="font-weight:800;font-size:14px;line-height:1.4;margin-bottom:10px;">🔥 Tu Reto Práctico de 3 Días Para Enseñarle a Tu Bebé a Dormir Sin el Pecho</div>';
      html += '<div style="display:flex;gap:8px;font-size:13.5px;line-height:1.5;color:var(--text);"><span style="flex-shrink:0;">✅</span><span>En máximo 3 Días tu bebé ya no dependerá del pecho para dormir, y <b>vas a poder descansar</b> como antes.</span></div>';
      html += '</div>';

      html += '<div style="border:1.5px solid #B7E0C6;background:#F2FBF5;border-radius:14px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;">';
      html += '<div style="display:flex;align-items:center;gap:10px;"><span style="color:#0F7A46;font-size:18px;">✅</span><div><div style="font-weight:800;font-size:13.5px;">PRUEBALO POR 7 DIAS</div><div style="font-size:12.5px;color:var(--text-dim);">Sin riesgos</div></div></div>';
      html += '<div style="text-align:center;flex-shrink:0;"><div style="font-size:10px;color:var(--text-dim);">Por solo</div><div style="font-weight:800;font-size:17px;">$9,90</div></div>';
      html += '</div>';

      html += '<div style="background:#F5F5F7;border-radius:14px;padding:20px 18px;text-align:center;margin-bottom:18px;">';
      html += '<div style="font-size:26px;margin-bottom:10px;">🛡️</div>';
      html += '<div style="font-weight:800;font-size:14px;line-height:1.4;margin-bottom:10px;">¡Tu bebé durmiendo sin el pecho o <span style="color:#F2857A;">te devolvemos tu dinero!</span></div>';
      html += '<div style="font-size:13px;color:var(--text-dim);line-height:1.55;">Todo el paso a paso debe hacerse durante 3 días seguidos, ese es el tiempo que muchas mamás necesitaron para ver a sus bebés durmiendo mejor sin el pecho. Por eso, con nuestra garantía de 7 días, <b style="color:var(--text);">no corres ningún riesgo</b>. Si en 7 días o menos aplicas las técnicas y no ves <b style="color:var(--text);">ningún resultado</b>, te devolvemos el 100% de tu dinero.</div>';
      html += '</div>';

      html += '<button class="btn" id="btnCta2" style="background:#0F7A46;box-shadow:0 4px 14px rgba(15,122,70,.28);">HAZ CLIC AQUÍ PARA ACCEDER</button>';

      host.innerHTML = html;
      var goCheckout = function(){ if (typeof fbq === "function") { fbq("track", "InitiateCheckout"); } window.location.href = NEXT_STEP_URL; };
      document.getElementById("btnCta1").onclick = goCheckout;
      document.getElementById("btnCta2").onclick = goCheckout;
      return;
    }
  }

  function dayCol(emoji, label, text, color, pct, tag){
    return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;">' +
      '<div style="font-size:20px;margin-bottom:6px;">'+emoji+'</div>' +
      '<div style="position:relative;width:34px;height:96px;background:#E4E4E8;border-radius:99px;overflow:hidden;">' +
        '<div style="position:absolute;bottom:0;left:0;right:0;height:'+pct+'%;background:'+color+';display:flex;align-items:flex-start;justify-content:center;">' +
          (tag ? '<span style="color:#fff;font-size:9px;font-weight:800;margin-top:3px;">'+tag+'</span>' : '') +
        '</div>' +
      '</div>' +
      '<div style="font-weight:800;font-size:12px;margin-top:8px;">'+label+'</div>' +
      '<div style="font-size:10.5px;color:var(--text-dim);text-align:center;margin-top:3px;line-height:1.3;">'+esc(text)+'</div>' +
    '</div>';
  }

  function initCarousel(){
    var track = document.getElementById("tslides");
    var vp = document.getElementById("tvp");
    var dots = Array.prototype.slice.call(document.querySelectorAll("#tDots .tdot"));
    var total = track.children.length;
    var cIdx = 0;
    function goTo(i){
      cIdx = (i + total) % total;
      track.style.transform = "translateX(" + (-cIdx * 100) + "%)";
      dots.forEach(function(d, di){ d.classList.toggle("active", di === cIdx); });
    }
    document.getElementById("tPrev").onclick = function(){ goTo(cIdx - 1); };
    document.getElementById("tNext").onclick = function(){ goTo(cIdx + 1); };
    dots.forEach(function(d){
      d.onclick = function(){ goTo(parseInt(d.getAttribute("data-dot"),10)); };
    });
    var startX = null, dx = 0, dragging = false, w = 0;
    function down(x){ dragging = true; startX = x; dx = 0; w = vp.offsetWidth; track.style.transition = "none"; }
    function move(x){ if(!dragging) return; dx = x - startX; track.style.transform = "translateX(" + (-cIdx * 100 + (dx / w) * 100) + "%)"; }
    function up(){
      if(!dragging) return;
      dragging = false;
      track.style.transition = "";
      if(Math.abs(dx) > w * 0.15){ goTo(cIdx + (dx < 0 ? 1 : -1)); }
      else { goTo(cIdx); }
      dx = 0;
    }
    vp.addEventListener("pointerdown", function(e){ down(e.clientX); });
    vp.addEventListener("pointermove", function(e){ if(dragging){ e.preventDefault(); move(e.clientX); } });
    vp.addEventListener("pointerup", up);
    vp.addEventListener("pointercancel", up);
    vp.addEventListener("pointerleave", up);
    vp.addEventListener("dragstart", function(e){ e.preventDefault(); });
  }

  function animateLoading(barEl, pctEl, duration, done){
    var start = Date.now();
    function step(){
      var elapsed = Date.now()-start;
      var pct = Math.min(100, Math.round((elapsed/duration)*100));
      barEl.style.width = pct+"%";
      pctEl.textContent = pct+"%";
      if(pct < 100){
        requestAnimationFrame(step);
      } else {
        setTimeout(done, 300);
      }
    }
    requestAnimationFrame(step);
  }

  render();
})();
