Seja um expert em JS Como criar uma lista com objetos do tipo { disciplina: nota} e eu tenho uma função que recebe o nome da disciplina e a nota e adiciona a lista disciplinas da classe Estudante ?

Claro, eu estou aqui para ajudar. Para criar uma lista com objetos do tipo { disciplina: nota } em JavaScript, você pode utilizar um array de objetos. Cada objeto dentro do array representará uma disciplina com sua respectiva nota. Veja o exemplo abaixo:

```javascript

let disciplinasDaClasse = [];


function adicionarNota(disciplina, nota) {

  disciplinasDaClasse.push({ [disciplina]: nota });

}
```

Neste exemplo, a função adicionarNota recebe o nome da disciplina e a nota como parâmetros e adiciona um novo objeto ao array disciplinasDaClasse. A sintaxe { [disciplina]: nota } cria um objeto com a chave dinâmica disciplina e o valor nota. Isso permite que o nome da disciplina seja passado como uma variável em vez de ser hardcoded no código.

Agora, você pode adicionar notas à lista da seguinte maneira:

```javascript

adicionarNota('Matemática', 8);

adicionarNota('Português', 9);
```

Após executar este código, a variável disciplinasDaClasse conterá o seguinte array de objetos:

```javascript

[

  { Matemática: 8 },

  { Português: 9 }

]
```

Isso lhe permite manter uma lista de notas por disciplina em constante evolução, facilitando a manipulação e organização dos dados.


---

Faça uma função que recebe o nome da disciplina e a nota, pega o objeto com a disciplina correspondente e seta uma nova nota para a mesma instância.

Entendi! Para atualizar a nota de uma disciplina existente, você pode criar uma função que itere sobre o array de objetos e atualize a nota correspondente. Aqui vai um exemplo:

```javascript

function atualizarNota(disciplina, novaNota) {

  for (let i = 0; i < disciplinasDaClasse.length; i++) {

    if (Object.keys(disciplinasDaClasse[i])[0] === disciplina) {

      disciplinasDaClasse[i][disciplina] = novaNota;

      return;

    }

  }

}
```

Essa função atualizarNota itera sobre o array disciplinasDaClasse e verifica se o nome da disciplina passada como parâmetro coincide com a chave do objeto atual. Se encontrar, atualiza a nota correspondente e sai da função com return.

Você pode usar essa função da seguinte maneira:

```javascript

atualizarNota('Matemática', 9);
```

Isso atualizaria a nota da disciplina "Matemática" para 9.

Observação: se a disciplina não existir no array, a função não fará nada. Se você quiser que a função crie um novo objeto se a disciplina não existir, você pode modificar a função para incluir uma lógica de criação de objeto, como mostrado abaixo:

```javascript

function atualizarNota(disciplina, novaNota) {

  for (let i = 0; i < disciplinasDaClasse.length; i++) {

    if (Object.keys(disciplinasDaClasse[i])[0] === disciplina) {

      disciplinasDaClasse[i][disciplina] = novaNota;

      return;

    }

  }

  // Se a disciplina não existir, crie um novo objeto

  disciplinasDaClasse.push({ [disciplina]: novaNota });

}
```

Dessa forma, se a disciplina não existir, a função criará um novo objeto com a nota passada como parâmetro.

---

Não tem como fazer com o .get não ? Esse novo push não vai duplicar o objeto não ?

How to change value of object which is inside an array using ...
stackoverflow

How to modify an object's property in an array of objects in JavaScript
geeksforgeeks

JavaScript Update Object in Array: A Comprehensive Guide - DhiWise
dhiwise

Update Object in Array Without Mutation in Javascript - CodeVertiser
codevertiser

Para atualizar um objeto em um array JavaScript usando o método .get, você pode seguir os seguintes passos:

    Encontre o índice do objeto que deseja atualizar usando o método .findIndex().
    Use o método .get() para acessar o objeto no array.
    Atualize a propriedade do objeto.

Aqui vai um exemplo:

```javascript

const index = disciplinasDaClasse.findIndex(obj => Object.keys(obj)[0] === disciplina);

if (index !== -1) {

  disciplinasDaClasse.get(index)[disciplina] = novaNota;

}
```

Isso encontrará o índice do objeto que tem a chave igual à disciplina passada como parâmetro, e então atualizará a nota correspondente.

Quanto à sua pergunta sobre o push duplicar o objeto, sim, se você usar o push sem verificar se o objeto já existe no array, ele criará um novo objeto duplicado. Para evitar isso, você pode usar o método .find() para verificar se o objeto já existe no array antes de adicioná-lo.

Por exemplo:

```javascript

const existingObject = disciplinasDaClasse.find(obj => Object.keys(obj)[0] === disciplina);

if (!existingObject) {

  disciplinasDaClasse.push({ [disciplina]: novaNota });

}
```

Dessa forma, se o objeto não existir no array, ele criará um novo objeto com a nota passada como parâmetro. Se o objeto já existir, ele não fará nada.