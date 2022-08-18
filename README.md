# MK Combos

## Oque é:

#### O MK Combos é um projeto desenvolvido para o conteúdo de Linguagens Regulares da matéria de Teoria da Computação, utilizando ReGex em JavaScript, CSS e HTML5.

#### Mostra de forma simples o funcionamento de expressões regulares e autômatos finitos usando RegEx.

#### O problema em questão é a leitura de uma entrada para a exibição de um movimento do game Mortal Kombat, desse modo, a aplicação em questão busca resolver o problema tendo por base o conceito de string match

## Como funciona:

#### A palavra fornecida no input é verificada por diversas RegEx, se o resultado do teste for verdadeiro em alguma delas, é executado o comando da respectiva palavra. Como o uso se faz apenas para demostração desse funcionamento foram utilizadas apenas 3 palavras aceitas:

##

- 7681
- 1234
- 864

## Instruções de execução:

#### Ao entrar na aplicação podem ser vistas 3 opções:
- Créditos, onde será exibida uma breve descrição do programa.
- Combos List, onde serão mostrados os controle, elementos que podem ser inseridos na entrada, e as palavras que serão aceitas
- Start, onde deve ser clicado no espaço em branco e ali inserir uma palavra de entrada. Após digitar a entrada se deve clicar no botão "Go!" para checar se a palavra inserida foi aceita ou não, se aceita, será exibido um vídeo do personagem "Scorpion" realizando diferentes ações de acordo com a entrada que foi dada.

#### Exemplos:

- Se a entrada fornecida for 2576813, ela será verificada por uma ReGex. O resultado do teste vai ser verdadeiro, pois foi identificada uma subpalavra que pode ser aceita(7681), logo, será executado o vídeo da palavra anteriormente estabelecida que for compatível com a subpalavra em questão. O seguinte automato finito permite um melhor compreendimento das mudanças de estado ocorridas nesse processo, onde q0 realiza 2 loops para "consumir" os elementos 2 e 5 da entrada, então os 4 elementos seguintes, lidos na sequencia especfícada, levam a 1 mudança de estado cada. Por fim, o estado final é atingido, exibindo o vídeo que corresponde à palavra encontrada e o elemento 3 é lido sem acarretar em nenhuma mudança de estado

![CHain](https://user-images.githubusercontent.com/107697323/185242295-8b4e4f0a-a67f-41fa-8e4a-ff248d447ad5.jpg)

- Se a entrada inserida for 7681864, serão identificadas 2 subpalavras que podem ser aceitas, nesse caso, será exibido o vídeo da última subpalavra aceita, o vídeo de 864

- Se a entrada for uma palavra não cadastrada,como 87564, nenhum teste será verdadeiro, então será exibida uma mensagem de erro.

##

<img src="https://giffiles.alphacoders.com/688/68810.gif"/>
