# GitHub pages
usamos o gh-pages para publicar nossas aplicações react no github de foram a ficar acessivel o projeto rodando.

*instalar*
'npm install gh-pages --save-dev'

no package.json acrescente  entre a linha 3 e 4 a linha

  '"homepage": "https://username.github.io/portfolio",'

e em scripts

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "publicar": "npm run build && gh-pages -d build && git add ."
  },

agora basta escrever o comando
npm run publicar

e fazer o commit normalmente
git commit -m ""
git push

Atenção: o deploy deve ser commitado ou nao rodara no github.
