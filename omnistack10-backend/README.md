<h1 align="center">Dev Radar - Módulo Backend</h1> 

# Model: DEV

```
{
  "_id": "<UID>",
  "github": "<User do GitHub>",
  "name": "<Nome do usuário>",
  "bio": "<Descrição>",
  "avatar_url": "<GitHub's Avatar URL>",
  "techs": [ "Tech1", "Tech2", "Tech3" ],
  "location": {
    "coordinates": [
      <Longitude>,
      <Latitude>
    ]
  },
  "__v": <versao>
}
```
<br>

# API

## Devs

Rota para CRUD de devs.

| Método       | Estrutura           | Ação                              | Parâmetros          | Retorno       |
| ------------ | ------------------- | --------------------------------- | ------------------- | ------------- |
| ![GET][1]    | `/api/devs`         | Lista todos os devs cadastrados   | **Nenhum**          | JSON/Usuários |
| ![POST][2]   | `/api/devs`         | Cadastra um dev no banco de dados | JSON/git,techs,geo  | JSON/Usuário  |
| ![GET][3]    | `/api/devs/:github` | Obtem os dados de um único dev    | Rota/User do Github | JSON/Usuário  |
| ![PUT][4]    | `/api/devs/:github` | Edita dados do dev                | Rota + JSON/campos  | JSON/Qnt,ok   |
| ![DELETE][5] | `/api/devs/:github` | Deleta um dev                     | Rota                | 200 OK        |

## Search

Rota para buscar devs por tecnologias e em um raio de busca.

| Método    | Estrutura     | Ação              | Parâmetros                     | Retorno       |
| --------- | ------------- | ----------------- | ------------------------------ | ------------- |
| ![GET][6] | `/api/search` | Pesquisa usuários | Query/techs,latitude,longitude | JSON/Usuários |


