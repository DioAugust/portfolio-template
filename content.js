/* ==========================================================================
   SEU CONTEÚDO FICA AQUI. É o único arquivo que você precisa editar.

   Como editar sem quebrar:
   - Troque só o texto que está entre aspas "assim".
   - Não apague as aspas, as vírgulas no fim das linhas nem as chaves { }.
   - Se precisar de aspas dentro do texto, use aspas simples: 'assim'.
   - Salvou? Atualize a página no navegador (F5) e confira.

   Os dados abaixo são fictícios (Ana Dev). Troque todos pelos seus.
   ========================================================================== */

window.CONTENT = {

  /* ---------- Configuração geral ---------- */
  site: {
    dominio: "seudominio.com.br",   // só o endereço, sem https://
    mostrarCredito: true            // true = mostra "template por @dioaugusto.dev" no rodapé; false = esconde
  },

  /* ---------- Você ---------- */
  pessoa: {
    nome: "Ana Dev",
    cargo: "Desenvolvedora web",
    foto: "",        // opcional: nome do arquivo da sua foto, ex.: "foto.jpg" (coloque o arquivo nesta pasta). Retrato em pé (4:5), ex.: 800 x 1000 px. Vazio = aparecem as suas iniciais
    fotoAlt: "",     // se usar foto, descreva em poucas palavras, ex.: "Ana sorrindo, de óculos"
    resumo: "Quase 5 anos transformando processos manuais em sites e sistemas simples de usar."
  },

  /* ---------- 1. Frase do topo: "Eu [faço o quê] para [quem]" ----------
     Escreva só o miolo. A página monta: "Eu ... para ...".
     Dica: se alguém ler só essa frase, entende o que você faz e pra quem?
     Evite frases vazias como "sou apaixonado por tecnologia". */
  topo: {
    eu: "crio sites e sistemas de agendamento fáceis de usar",
    para: "pequenos negócios que ainda marcam tudo no papel",
    botaoContato: "Falar comigo",
    botaoProjetos: "Ver projetos"
  },

  /* ---------- 2 e 3. Três projetos, cada um em 4 linhas ----------
     Mantenha 3 projetos. Cada um conta: Problema, O que eu fiz, O que mudou, Link. */
  projetos: [
    {
      nome: "Agenda Fácil",
      tipo: "Sistema web · HTML, JavaScript e API REST",
      problema: "Um salão de beleza perdia clientes porque marcava horários só por mensagem e errava a agenda.",
      fiz: "Desenhei e programei uma agenda online com confirmação automática por e-mail.",
      mudou: "Faltas caíram de 1 em cada 4 atendimentos para 1 em cada 10 (dado de exemplo).",
      link: { texto: "Ver demo no ar", url: "https://example.com" }
    },
    {
      nome: "Loja da Vila",
      tipo: "Site de vendas · HTML e CSS",
      problema: "Uma loja de bairro vendia só no balcão e não aparecia quando alguém buscava o produto na internet.",
      fiz: "Criei um catálogo online leve, que abre rápido no celular, e configurei a busca para achar a loja.",
      mudou: "Passou a receber pedidos pelo site toda semana (dado de exemplo).",
      link: { texto: "Ver o repositório", url: "https://example.org" }
    },
    {
      nome: "Painel de Estoque",
      tipo: "Painel de dados · Python",
      problema: "Uma distribuidora conferia o estoque em planilhas soltas e descobria a falta de produto tarde demais.",
      fiz: "Montei um painel que lê as planilhas e avisa quando um item está acabando.",
      mudou: "O time deixou de gastar uma manhã por semana conferindo estoque (dado de exemplo).",
      link: { texto: "Ler o artigo sobre o projeto", url: "https://example.net" }
    }
  ],

  /* ---------- 4. Provas que dá para conferir ----------
     Tipos sugeridos: "Demo", "Repositório", "Artigo", "Palestra".
     Regra de ouro: todo link precisa abrir. Teste um por um antes de publicar. */
  provas: [
    { tipo: "Demo",        texto: "Agenda Fácil funcionando",       detalhe: "Dá para marcar um horário de teste.",  url: "https://example.com" },
    { tipo: "Repositório", texto: "Código da Loja da Vila",         detalhe: "Código aberto, com README.",           url: "https://example.org" },
    { tipo: "Artigo",      texto: "Como montei o Painel de Estoque", detalhe: "Passo a passo, 6 min de leitura.",     url: "https://example.net" },
    { tipo: "Palestra",    texto: "Portfólio de dev em 20 minutos", detalhe: "Meetup de exemplo, 2026.",             url: "https://example.com" }
  ],

  /* ---------- 5. Contato fácil ----------
     Use o e-mail do seu domínio (contato@seudominio.com.br),
     não um e-mail genérico (gmail, hotmail...). */
  contato: {
    titulo: "Vamos conversar sobre o seu projeto?",
    texto: "Me conte o que você precisa e eu respondo em até 2 dias úteis.",
    botao: "Enviar e-mail",
    email: "contato@seudominio.com.br",
    redes: [
      { nome: "GitHub",   url: "https://github.com/" },
      { nome: "LinkedIn", url: "https://www.linkedin.com/" }
    ]
  }

};
