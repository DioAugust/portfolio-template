/* Portfólio de dev · template gratuito (MIT)
   Botão de tema (claro/escuro), menu do celular e a entrada suave das seções ao rolar.
   Você não precisa mexer neste arquivo. Sem JavaScript, a página aparece inteira e funciona. */
(function () {
  "use strict";
  var d = document.documentElement;

  /* tema: claro é o padrão; só vira escuro se a pessoa escolheu pelo botão (fica guardado no navegador) */
  var botao = document.getElementById("tema");
  function marca() {
    if (!botao) return;
    var escuro = d.getAttribute("data-theme") === "dark";
    botao.setAttribute("aria-pressed", String(escuro));
    botao.setAttribute("aria-label", escuro ? "Tema claro" : "Tema escuro");
  }
  if (botao) {
    marca();
    botao.addEventListener("click", function () {
      d.classList.add("tema-anim");
      d.setAttribute("data-theme", d.getAttribute("data-theme") === "dark" ? "light" : "dark");
      try { localStorage.setItem("tema", d.getAttribute("data-theme")); } catch (e) {}
      marca();
      setTimeout(function () { d.classList.remove("tema-anim"); }, 250);
    });
  }

  /* menu do celular: fecha ao escolher um link e com Esc */
  var menu = document.querySelector(".menu");
  if (menu) {
    menu.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("a")) menu.removeAttribute("open"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.open) { menu.removeAttribute("open"); menu.querySelector("summary").focus(); } });
  }

  /* entrada das seções: só esconde se o navegador sabe observar e a pessoa não pediu menos movimento */
  var itens = document.querySelectorAll(".reveal");
  if (!itens.length || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  /* o que já está na primeira tela ao carregar não se esconde (sem "buraco" na dobra) */
  itens.forEach(function (el) { if (el.getBoundingClientRect().top < innerHeight) el.classList.add("is-in"); });
  d.classList.add("js-reveal");
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px 10% 0px", threshold: 0 });
  document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) { io.observe(el); });
  /* rolagem rápida ou âncora (#contato): o que ficou acima da tela aparece de uma vez, sem esperar a pessoa voltar */
  var fila = false;
  addEventListener("scroll", function () {
    if (fila) return;
    fila = true;
    requestAnimationFrame(function () {
      fila = false;
      document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
        if (el.getBoundingClientRect().bottom < 0) { el.classList.add("is-in"); io.unobserve(el); }
      });
    });
  }, { passive: true });
})();
