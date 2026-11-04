# Template de portfólio de dev (grátis, estático)

Um portfólio de uma página, em HTML + CSS + um pouco de JavaScript. **Sem Node, sem banco, sem build.** Você edita um arquivo de texto, sobe a pasta para a sua hospedagem e pronto.

Ele segue os 6 passos do carrossel "Seu GitHub não é seu portfólio":

1. Uma frase no topo: "Eu [faço o quê] para [quem]".
2. Três projetos (não 30).
3. Cada projeto em 4 linhas: Problema · O que eu fiz · O que mudou · Link.
4. Provas que dá para conferir: demo, repositório, artigo, palestra.
5. Contato fácil: botão e e-mail do seu domínio.
6. No ar com domínio próprio (veja "Como colocar no ar" abaixo).

Licença MIT: use, mude e distribua à vontade.

## O que tem na pasta

```
index.html    a página (você mexe no bloco "SEO" no topo e, se trocar a frase, no título <h1>)
content.js    O SEU CONTEÚDO. É o arquivo que você edita.
style.css     o visual (as cores ficam nas primeiras linhas)
app.js        monta a página com o que está no content.js
ui.js         botão de tema (claro/escuro), menu do celular e a entrada suave das seções
fonts/        as fontes Sora, Inter e JetBrains Mono (licença OFL), já na pasta: nada de CDN
favicon.svg   o ícone da aba
og-image.png  a imagem que aparece quando alguém compartilha o link
LICENSE       licença MIT
```

## 1. Editar o conteúdo

1. Abra o `content.js` num editor de texto simples (qualquer um serve).
2. Troque o texto que está **entre aspas**. Não apague aspas, vírgulas nem chaves.
3. Se precisar de aspas dentro de uma frase, use aspas simples: `'assim'`.
4. Salve e atualize a página no navegador (F5).

Os dados de exemplo são da "Ana Dev" (fictícia). Troque todos.

### Como escrever cada parte

- **Frase do topo** (`topo.eu` e `topo.para`): a página monta "Eu ... para ...". Se alguém ler só essa frase, tem que entender o que você faz e para quem. "Sou apaixonado por tecnologia" não diz nada. "Crio sites de agendamento para salões de beleza" diz. Para o Google e o WhatsApp lerem a frase, copie-a também para o `<h1>` do `index.html` (o `?checar=1` avisa se estiverem diferentes). Quer escrever a frase inteira do seu jeito? Use o campo `topo.frase` no lugar de `eu` e `para`: as duas últimas palavras ganham a sublinha de destaque.
- **Projetos**: três, cada um com problema, o que você fez, o que mudou e um link. Se ainda não tem número, descreva o que mudou com palavras. Não invente dado.
- **Provas**: demo, repositório, artigo ou palestra. **Todo link precisa abrir.** Teste um por um antes de publicar.
- **Contato**: use o e-mail do seu domínio (`contato@seudominio.com.br`), não `nome123@gmail.com`.
- **Foto** (opcional): um retrato em pé, na proporção 4:5 (por exemplo 800 × 1000 px, rosto no terço de cima). Coloque o arquivo na mesma pasta, escreva o nome em `pessoa.foto` (ex.: `"foto.jpg"`) e descreva a imagem em `pessoa.fotoAlt`. Sem foto, a página mostra as suas iniciais num bloco com a cor de destaque atrás. Dica: tire a localização (GPS) e os dados da câmera da foto antes de publicar (no Mac, o app Fotos tem "Imagem > Localização > Ocultar localização"; no computador, ferramentas como o `exiftool -all= foto.jpg` fazem isso).
- **Crédito no rodapé**: para remover "template por @dioaugusto.dev", troque `mostrarCredito` para `false`. A licença MIT permite.

### O texto que o Google e as redes sociais leem

No topo do `index.html` há um bloco marcado "SEO". Troque lá o título, a descrição e o endereço (`seudominio.com.br`). Esse bloco fica no HTML porque os buscadores e o WhatsApp leem antes do JavaScript rodar.

Para a imagem de compartilhamento, troque o `og-image.png` por uma imagem sua de 1200 × 630 px. Use o mesmo nome de arquivo.

### Tema claro e escuro

A página abre **sempre no tema claro**, mesmo se o celular estiver em modo escuro. O botão de lua, no topo, liga o tema escuro e o navegador lembra a escolha. Para a página seguir o modo do aparelho, abra o `index.html` e troque `var segue = false;` por `var segue = true;` (no começo do `<script>` do `<head>`).

### Trocar a cor de destaque

Abra o `style.css`. No começo há três linhas:

```
--amber: #F2A33C;       cor de destaque DECORATIVA: botão, bloco atrás da foto, números 01 02 03
--amber-text: #8F5300;  cor de destaque para TEXTO e links (mais escura)
--on-amber: #181510;    cor do texto que fica em cima do --amber (no botão)
```

Troque os códigos. Regra: o texto precisa de contraste de 4,5 para 1 com o fundo. A cor `--amber` clara **não** serve para texto; por isso há a `--amber-text`, mais escura. Teste cada par em webaim.org/resources/contrastchecker (a `--amber-text` sobre `#F5F1E8`, e a `--on-amber` sobre a `--amber`). No tema escuro, a `--amber-text` é redefinida mais abaixo, no bloco `[data-theme="dark"]`.

### Conferir antes de publicar

Abra o `index.html?checar=1` (no endereço do navegador, acrescente `?checar=1`). Aparece um aviso amarelo no topo se sobrou `seudominio`, `[preencher]`, e-mail genérico, link vazio ou frase de topo vazia. É uma ajuda, não substitui clicar nos links.

## 2. Testar no seu computador

**Jeito mais simples:** dê dois cliques no `index.html`. Abre no navegador.

**Se quiser simular um servidor** (opcional), com Python instalado, dentro da pasta:

```
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Para parar, `Ctrl + C`.

Teste também no celular (ou estreite a janela do navegador): a página foi feita para celular primeiro.

## 3. Como colocar no ar

> **Onde eu hospedo:** o meu portfólio fica na **HostGator**. Se você ainda não tem hospedagem, este é o meu link de indicação: **[hostgator.com.br/53314](https://www.hostgator.com.br/53314.html)**. Na Black November, os planos trienais de hospedagem ganham 3 meses.
> _#publi: é um link de parceria paga com a HostGator. Você não paga nada a mais por usar ele._

Mas o template não depende da HostGator: qualquer hospedagem de sites que aceite arquivos serve. O passo a passo abaixo é genérico. Os nomes dos botões mudam de provedor para provedor, e o que o seu plano inclui (domínio, e-mail, SSL) depende das condições dele. Confira no site da hospedagem.

1. **Registre ou conecte o seu domínio.** Alguns planos incluem domínio no primeiro ano, conforme as condições do plano. Confira antes de contar com isso.
2. **Crie o e-mail do domínio** (`contato@seudominio.com.br`) no painel da hospedagem, na área de e-mails. Atualize o `content.js` com ele.
3. **Abra o gerenciador de arquivos** do painel (geralmente chamado "Gerenciador de Arquivos", no cPanel). Se preferir, use FTP, com um programa como FileZilla e os dados de FTP que a hospedagem informa.
4. **Entre na pasta `public_html`.** É a pasta que aparece para o público quando alguém digita o seu domínio. Se o seu domínio for um "domínio adicional", a pasta pode ter o nome dele. Veja a indicação no painel.
5. **Suba os arquivos da pasta do template** (`index.html`, `content.js`, `style.css`, `app.js`, `ui.js`, a pasta `fonts`, `favicon.svg`, `og-image.png` e a sua foto, se tiver). Importante: os arquivos vão **direto dentro** do `public_html`, não dentro de uma subpasta. O `index.html` tem que ficar na raiz.
6. **Aponte o domínio para a hospedagem**, se ele foi registrado em outro lugar: troque os servidores de nome (DNS) no site onde registrou. Se o domínio e a hospedagem são do mesmo lugar, isso já vem pronto. A propagação pode levar de minutos a algumas horas.
7. **Ative o SSL** (o cadeado, `https://`). Na maioria das hospedagens há um SSL gratuito para ativar no painel. Depois de ativo, abra `https://seudominio.com.br`.
8. **Confira no ar:** abra o site no celular e no computador, clique em todos os links e mande um e-mail de teste para `contato@seudominio.com.br`.

Para atualizar o site depois, edite o `content.js` e suba só esse arquivo de novo, sobrescrevendo o antigo.

## Dúvidas comuns

- **A página abriu em branco ou com "Não achei o content.js".** O `content.js` precisa estar na mesma pasta do `index.html`. Confira também se não apagou aspas ou vírgulas ao editar.
- **A foto não aparece.** O nome do arquivo no `content.js` tem que ser igual ao do arquivo, com maiúsculas e minúsculas.
- **O link compartilhado não mostra imagem.** Confira o endereço no bloco SEO do `index.html`. Redes sociais guardam o resultado antigo por um tempo.
- **Posso usar para vender serviço, para vaga de emprego, para freela?** Pode. É MIT.

## Créditos e licença

Template por [@dioaugusto.dev](https://www.instagram.com/dioaugusto.dev/). Licença MIT (arquivo `LICENSE`). Sem framework, sem rastreadores, sem cookies.
