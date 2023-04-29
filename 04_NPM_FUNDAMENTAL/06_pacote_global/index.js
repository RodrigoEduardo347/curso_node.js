// usamos npm install -g lodash para instalar
// npm link lodash para clonar os arquivos para uma pasta node_modules

const _ = require("lodash")

const diff = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5]

console.log(_.sortedUniq(diff))