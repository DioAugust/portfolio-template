/* Portfólio de dev · template gratuito (MIT)
   Você não precisa mexer neste arquivo. O conteúdo está em content.js.
   Este arquivo monta as seções a partir do content.js e confere o conteúdo (?checar=1).
   O topo (foto, nome, cargo, frase, botões) já está escrito no index.html para aparecer na hora e sem JavaScript;
   aqui ele só é atualizado se você mudou o content.js. */
(function () {
  "use strict";

  var C = window.CONTENT;
  var d = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };

  if (!C) {
    var msg = $("aviso");
    msg.hidden = false;
    msg.textContent = "Não achei o content.js. Ele precisa estar na mesma pasta do index.html.";
    d.classList.add("pronto");
    return;
  }

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text) n.textContent = text;
    return n;
  }

  /* e-mail: <wbr> antes do @ (se precisar quebrar, quebra ali; sem letra órfã) */
  function textoEmail(a, email) {
    var i = email.indexOf("@");
    a.textContent = "";
    if (i < 1) { a.textContent = email; return; }
    a.appendChild(document.createTextNode(email.slice(0, i)));
    a.appendChild(document.createElement("wbr"));
    a.appendChild(document.createTextNode(email.slice(i)));
  }

  /* entrada suave ao rolar: grupos de até 4 itens, cada um 60 ms depois do anterior (a CSS usa --i) */
  function rev(n, i) {
    n.classList.add("reveal");
    n.style.setProperty("--i", String((i || 0) % 4));
    return n;
  }

  function pendente(url) {
    return !url || /\[[^\]]*\]/.test(url);
  }

  var SETA = "\u2197";
  function link(texto, url, className) {
    /* link ainda não preenchido ([preencher]): mostra texto simples, nunca um link quebrado */
    if (pendente(url)) {
      return el("span", (className ? className + " " : "") + "pendente", texto + " (link a preencher)");
    }
    var a = el("a", className, texto);
    a.href = url;
    if (/^https?:\/\//i.test(url)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      var s = el("span", "seta", SETA);
      s.setAttribute("aria-hidden", "true");
      a.appendChild(s);
    }
    return a;
  }

  function iniciais(nome) {
    return nome.split(/\s+/).filter(Boolean).slice(0, 2).map(function (p) {
      return p.charAt(0).toUpperCase();
    }).join("");
  }

  /* a frase do topo é escrita inteira; a sublinha âmbar fica nas duas últimas palavras (só se a frase tiver 4 palavras ou mais) */
  function fraseNoH1(h1, frase) {
    var m = /^(.*\s)(\S+\s+\S+?)([.!?…]*)$/.exec(frase);
    if (frase.split(/\s+/).length < 4 || !m) { h1.textContent = frase; return; }
    h1.textContent = "";
    h1.appendChild(document.createTextNode(m[1]));
    h1.appendChild(el("span", "sublinha", m[2]));
    if (m[3]) h1.appendChild(document.createTextNode(m[3]));
  }

  var p = C.pessoa, t = C.topo, ct = C.contato, s = C.site;
  var mailto = "mailto:" + ct.email + "?subject=" + encodeURIComponent("Contato pelo seu portfólio");
  var fraseTopo = t.frase || ("Eu " + t.eu + " para " + t.para + ".");

  /* ---------- topo ---------- */
  $("marca-nome").textContent = p.nome;
  $("topo-nome").textContent = p.nome;
  $("topo-cargo").textContent = p.cargo;
  var h1 = $("titulo-topo");
  var h1Estatico = h1.textContent;
  if (h1Estatico.trim() !== fraseTopo.trim()) fraseNoH1(h1, fraseTopo);   /* igual: mantém o que já está no HTML (sem repintar) */
  h1.classList.toggle("h1--longo", fraseTopo.length > 70);                /* frase longa: letra um pouco menor */
  $("topo-resumo").textContent = p.resumo;
  $("topo-contato").textContent = t.botaoContato;
  $("topo-contato").href = mailto;
  var bp = $("topo-projetos");
  bp.textContent = t.botaoProjetos + " ";
  var seta = el("span", null, "\u2193");
  seta.setAttribute("aria-hidden", "true");
  bp.appendChild(seta);
  textoEmail($("topo-email"), ct.email);
  $("topo-email").href = "mailto:" + ct.email;

  /* foto: no site do Dio já vem no HTML (<picture>, para carregar rápido). No template, uma foto única vira <img>; sem foto ficam as iniciais */
  var fig = $("topo-foto");
  var imgEstatica = fig.querySelector("img");
  if (imgEstatica) {
    if (p.fotoAlt) imgEstatica.alt = p.fotoAlt;
  } else if (p.foto && !pendente(p.foto)) {
    fig.textContent = "";
    var img = el("img");
    img.src = p.foto;
    img.alt = p.fotoAlt || p.nome;
    img.width = 800;
    img.height = 1000;
    img.decoding = "async";
    fig.appendChild(img);
  } else {
    var ini = fig.querySelector(".retrato__ini") || fig.appendChild(el("div", "retrato__ini"));
    ini.textContent = iniciais(p.nome);
  }

  /* ---------- projetos: "O que mudou" primeiro, depois problema, o que eu fiz e a stack ---------- */
  var lista = $("lista-projetos");
  C.projetos.forEach(function (pr, i) {
    var li = rev(el("li", "projeto"), i + 2);
    var cab = el("div", "projeto__cab");
    var topo = el("div", "projeto__topo");
    topo.appendChild(el("h3", "projeto__t", pr.nome));
    cab.appendChild(topo);
    cab.appendChild(el("p", "projeto__tipo", pr.tipo || ""));
    cab.appendChild(link(pr.link.texto, pr.link.url, "link link--solo projeto__link"));
    li.appendChild(cab);
    var dl = el("dl", "projeto__dl");
    var linhas = [["O que mudou", pr.mudou, "projeto__row--mudou"], ["Problema", pr.problema, ""], ["O que eu fiz", pr.fiz, ""]];
    if (pr.tecnico && pr.tecnico.texto) linhas.push([pr.tecnico.rotulo || "Stack", pr.tecnico.texto, "projeto__row--tec"]);
    linhas.forEach(function (par) {
      var row = el("div", "projeto__row " + par[2]);
      row.appendChild(el("dt", null, par[0]));
      row.appendChild(el("dd", null, par[1]));
      dl.appendChild(row);
    });
    li.appendChild(dl);
    lista.appendChild(li);
  });

  /* ---------- palestras e workshops: uma linha do tempo (as de "em breve" primeiro) ---------- */
  var pa = C.palestras;
  if (pa && pa.itens && pa.itens.length) {
    $("palestras").hidden = false;
    $("titulo-palestras").textContent = pa.titulo || "Palestras e workshops";
    $("palestras-sub").textContent = pa.sub || "";
    var tl = $("lista-palestras");
    var todas = (pa.proximas || []).map(function (x) { return [x, true]; }).concat(pa.itens.map(function (x) { return [x, false]; }));
    todas.forEach(function (par, i) {
      var x = par[0];
      var li = rev(el("li", "tl" + (par[1] ? " tl--prox" : "")), i);
      li.appendChild(el("p", "rotulo tl__tipo", x.tipo || (par[1] ? (pa.proximasTitulo || "Em breve") : "")));
      li.appendChild(el("p", "tl__t", x.titulo));
      if (x.detalhe) li.appendChild(el("p", "tl__det", x.detalhe));
      if (x.link) li.appendChild(link(x.link.texto, x.link.url, "link link--solo"));
      tl.appendChild(li);
    });
  }

  /* ---------- projetos abertos (opcional) ---------- */
  var ab = C.abertos;
  if (ab && ab.itens && ab.itens.length) {
    $("abertos").hidden = false;
    $("titulo-abertos").textContent = ab.titulo || "Projetos abertos";
    $("abertos-sub").textContent = ab.sub || "";
    ab.itens.forEach(function (x, i) {
      var li = rev(el("li", "mini"), i);
      li.appendChild(el("p", "rotulo mini__tipo", x.tipo || ""));
      li.appendChild(el("h3", "mini__t", x.nome));
      li.appendChild(el("p", "mini__txt", x.texto));
      if (x.tecnico) li.appendChild(el("p", "mini__tec", x.tecnico));
      var ls = el("div", "mini__links");
      x.links.forEach(function (l) { ls.appendChild(link(l.texto, l.url, "link link--solo")); });
      li.appendChild(ls);
      $("lista-abertos").appendChild(li);
    });
  }

  /* ---------- stack (opcional; sem C.stack a seção some) ---------- */
  var st = C.stack;
  if (st && st.grupos && st.grupos.length) {
    $("stack").hidden = false;
    $("titulo-stack").textContent = st.titulo || "Stack";
    $("stack-sub").textContent = st.sub || "";
    st.grupos.forEach(function (g, i) {
      var box = rev(el("div", "stack__g"), i);
      box.appendChild(el("dt", null, g.nome));
      var dd = el("dd");
      var ul = el("ul", "stack__chips");
      g.itens.forEach(function (it) { ul.appendChild(el("li", "stack__chip", it)); });
      dd.appendChild(ul);
      box.appendChild(dd);
      $("lista-stack").appendChild(box);
    });
  }

  /* links do menu que só existem quando a seção existe (ex.: "Palestras" no template) */
  document.querySelectorAll("[data-nav]").forEach(function (li) {
    var alvo = $(li.getAttribute("data-nav"));
    li.hidden = !alvo || alvo.hidden;
  });

  /* ---------- provas ---------- */
  if (C.provasSub) $("provas-sub").textContent = C.provasSub;
  C.provas.forEach(function (pv, i) {
    var li = rev(el("li", "prova"), i);
    li.appendChild(el("span", "rotulo", pv.tipo));
    li.appendChild(link(pv.texto, pv.url, "prova__link"));
    if (pv.detalhe) li.appendChild(el("span", "prova__det", pv.detalhe));
    $("lista-provas").appendChild(li);
  });

  /* ---------- contato ---------- */
  $("titulo-contato").textContent = ct.titulo;
  $("contato-texto").textContent = ct.texto;
  $("contato-botao").textContent = ct.botao;
  $("contato-botao").href = mailto;
  textoEmail($("contato-email"), ct.email);
  $("contato-email").href = "mailto:" + ct.email;
  var redes = $("lista-redes");
  var redesRodape = $("rodape-redes");
  (ct.redes || []).forEach(function (r) {
    var li = el("li");
    li.appendChild(link(r.nome, r.url, "link rede"));
    redes.appendChild(li);
    var lf = el("li");
    lf.appendChild(link(r.nome, r.url));
    redesRodape.appendChild(lf);
  });

  /* ---------- rodapé ---------- */
  $("rodape-copia").textContent = "© " + new Date().getFullYear() + " " + p.nome + (s.dominio ? " · " + s.dominio : "");
  var cred = $("rodape-credito");
  if (s.mostrarCredito) {
    cred.appendChild(document.createTextNode("template por "));
    cred.appendChild(link("@dioaugusto.dev", "https://www.instagram.com/dioaugusto.dev/"));
  } else {
    cred.hidden = true;
  }

  /* ---------- modo conferência: abra o index.html?checar=1 antes de publicar ----------
     Mostra um aviso se sobrou texto de exemplo, link vazio ou e-mail genérico
     (os erros mais comuns de portfólio: frase vazia, link quebrado, contato escondido). */
  if (/[?&]checar(=|&|$)/.test(location.search)) {
    var problemas = [];
    var texto = JSON.stringify(C);
    /* diz exatamente o que falta: cada campo com [preencher] (projeto + linha) e, à parte, [domínio]/seudominio */
    var faltam = [];
    C.projetos.forEach(function (x) {
      [["Problema", x.problema], ["O que eu fiz", x.fiz], ["O que mudou", x.mudou], [(x.tecnico && x.tecnico.rotulo) || "Stack", x.tecnico && x.tecnico.texto], ["Link", x.link.url]].forEach(function (par) {
        if (/\[preencher/i.test(par[1] || "")) faltam.push(x.nome + ": " + par[0]);
      });
    });
    [["resumo", p.resumo], ["foto", p.foto], ["e-mail", ct.email]].forEach(function (par) {
      if (/\[preencher/i.test(par[1] || "")) faltam.push(par[0]);
    });
    if (faltam.length) problemas.push("falta preencher [preencher] em " + faltam.length + " campo(s): " + faltam.join("; "));
    if (/\[domínio\]|seudominio/i.test(texto)) problemas.push("ainda tem [domínio] ou seudominio no content.js (rode scripts/set_base_url.sh)");
    if (!faltam.length && /\[preencher/i.test(texto)) problemas.push("ainda tem [preencher] no content.js");
    if (!s.aceitarEmailGenerico && /@(gmail|hotmail|outlook|yahoo|icloud)\./i.test(ct.email)) problemas.push("o e-mail de contato é genérico; use um e-mail do seu domínio");
    if (fraseTopo.length < 20) problemas.push("a frase do topo está vazia ou curta demais");
    else if (/apaixonad|entusiasta|sou uma pessoa|tecnologia em geral/i.test(fraseTopo)) problemas.push("a frase do topo parece vazia; diga o que faz e para quem");
    if (h1Estatico.trim() !== fraseTopo.trim()) problemas.push(t.frase ? "a frase do topo no index.html (h1) está diferente de topo.frase; rode bash scripts/build_zip.sh" : "a frase do topo no index.html (h1) está diferente da do content.js; copie a frase para o h1 do index.html (o Google e o WhatsApp leem esse texto)");
    if (C.projetos.length !== 3) problemas.push("o ideal são 3 projetos; você tem " + C.projetos.length);
    if (p.foto && !pendente(p.foto) && !fig.querySelector("img")) problemas.push("a foto não carregou: confira o nome do arquivo em pessoa.foto");
    if (p.foto && !p.fotoAlt) problemas.push("falta descrever a foto em pessoa.fotoAlt (para quem usa leitor de tela)");
    var urls = [];
    C.projetos.forEach(function (x) { urls.push(x.link.url); });
    C.provas.forEach(function (x) { urls.push(x.url); });
    ((C.palestras && C.palestras.itens) || []).forEach(function (x) { if (x.link) urls.push(x.link.url); });
    ((C.abertos && C.abertos.itens) || []).forEach(function (x) { x.links.forEach(function (l) { urls.push(l.url); }); });
    urls.forEach(function (u) {
      if (!/^https?:\/\/[^\s/]+\.[^\s/]+/i.test(u) && !/^[a-z0-9][a-z0-9._\/-]*\/?$/i.test(u || "") && !/^#[a-z0-9-]+$/i.test(u || "")) problemas.push("link inválido ou vazio: " + (u || "(vazio)"));
    });
    var av = $("aviso");
    av.hidden = false;
    av.textContent = problemas.length
      ? "Conferência: " + problemas.join(" · ")
      : "Conferência: nada de errado encontrado. Falta só abrir cada link para ver se carrega.";
  }
  d.classList.add("pronto");
})();
