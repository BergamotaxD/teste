# Desafio | Fullstack

O teste consiste em implementar uma lista de contatos e empresas. O projeto, obrigatoriamente, deve ser separado em backend e frontend.

## Backend

O backend **deve** ser desenvolvido em `php` e **deve** conter uma API Rest.

O sistema deve conter as seguintes entidades e seus respectivos campos:

- Usuário
    - Nome: obrigatório para preenchimento
    - E-mail: obrigatório para preenchimento
    - Telefone: não obrigatório
    - Data de nascimento: não obrigatório
    - Cidade onde nasceu: não obrigatório
    - Empresas: obrigatório para preenchimento

- Empresa
    - Nome: obrigatório para preenchimento
    - CNPJ: obrigatório para preenchimento
    - Endereço: obrigatório para preenchimento
    - Usuários: obrigatório para preenchimento

A regra de relacionamento para `Usuário` e `Empresa` deve ser de __n para n__

### Banco
Você **deve** utilizar um banco de dados para o sistema. Pode-se escolher qualquer opção que desejar, mas o seguite cenário deve ser levado em consideração:
- O sistema lida com informações sensíveis e preza pela integridade dos dados
- O sistema lida com diferentes entidades relacionadas

Pedimos para que nos sinalize o motivo da escolha do banco no final do documento


## Frontend
O frontend **deve** ser desenvolvido utilizando `react` e **deve** usar os dados fornecidos pela API.

Você **pode** e, de preferência, **deve** utilizar bibliotecas de terceiros.

Deve-se desenvolver uma página de formulário para cada uma das entidades (`Usuario` e `Empresa`). Também deve ser desenvolvida uma página listando todos os usuários e seus respectivos campos, inclusive todas as empresas de que ele faz parte.

Deve-se ter a possibilidade de filtrar os dados conforme cada um dos campos.

Obs: para facilitar, segue uma proposta de layout, você tem liberdade para desenvolver o layout da forma que achar mais adequado.

## Testes
Testes unitários **devem** ser implementados no backend para validação das operações do CRUD.

Testes unitários **devem** ser implementados no frontend para a tela de exibição dos usuários.

Você pode utilizar o framework de sua preferência tanto para o backend quanto para o frontend.

## Ambiente
Aqui na Contato Seguro, utilizamos __Docker__ nos nossos ambientes, então será muito bem visto caso decida utilizar. Principalmente para que tenhamos o mesmo resultado (mesma configuração de ambiente). Caso desenvolva com docker, nos envie junto com o projeto o `docker-compose.yml` e/ou os `Dockerfile´`s.

## Requisitos mínimos
- As 4 operações CRUD, tanto para entidade `Usuário`, quanto para `Empresa`. Todas as operações devem ter rotas específicas no backend.
- O filtro de registros
- Código legível, limpo e seguindo boas práticas de Orientação a Objetos
- Um dump ou DDL do banco de dados
- Testes unitários

## Requisitos bônus
- Utilizar Docker
- Outras entidades e relacionamento entre entidades. Por exemplo: uma entidade `Relatos` ou `Atividades` que tenha `Usuários` e/ou `Empresas` vinculadas.
- Separação em commits, especialmente com boas mensagens de identificação.

# Resposta do participante
_Responda aqui quais foram suas dificuldades e explique a sua solução_

Tudo em si foi um teste muito dificil pra mim, tendo em vista que nunca tinha nem aberto o vscode praticamente, entao perdi bastante tempo pesquisando e tentando entender
como em si funcionava o react/js/html/css, e juntamente tentando implementar. A construcao do formulario já foi um desafio, mas após vários e vários videos modelos,
consegui achar um que se adaptava ao que eu tinha imaginado, que seria clicar nos botoes e  ir pra o lugar desejado como um site mesmo, sendo assim usando react-router-dom fiz as rotas tendo isso pronto fui para o CRUD aonde encontrei muita dificuldade para realizalo via fetch ate encontrar o AXIOS que me facilitou um pouco a vida, tentei implantar que quando fosse editar os dados ja viesse as infos juntas mas infelismente ate onde consegui aprender nao obtive sucesso assim no console.log vai ver um erro que nao consegui identificar e corrigis e como usei 99% do tempo para o codigo em si, a estilizacao ficou bem basica tambem pois preferi gastar o tempo nas funcionalidades do que na aparencia.
 Para db pois quando pesquisei vi que era um banco facil de usar.
 os testes unitarios infelismente nao tive pericia para conseguir olhar e implementar, assim como o filtro de pesquisa.
 na hora de fazer o cadastro de empresas infelismente nao consegui acertar as rotas para mostralos entao ficou de lado.
 Agradeço a oportunidade.
