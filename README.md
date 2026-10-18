# CookBook

O projeto CookBook é uma API (e futuramente site) onde o usuário pode registrar, pesquisar e gerenciar ingredientes, etapas e receitas. A ferramenta também oferece a capacidade de pesquisar quais receitas são possíveis a partir de um conjunto de ingredientes que o usuário possua.

## Backend

O backend existe dentro do projeto Api e utiliza o ASP.NET, implementado uma API mínima.

Template inicial:
```bash
dotnet new web
```

### Estrutura de Banco de Dados

A arquitetura do banco de dados foi projetada para separar as relações de ingredientes e passos de preparo. Isso otimiza a funcionalidade principal de busca por ingredientes disponíveis, evitando redundância de dados.

| Tabela | Coluna | Tipo de Dado | Chave | Descrição / Regra |
| :--- | :--- | :--- | :--- | :--- |
| **Receitas** | `Id` <br> `Nome` <br> `Descricao` | Guid / Int <br> VARCHAR <br> TEXT | PK <br> - <br> - | Identificador único da receita. <br> Nome do prato (ex: "Bolo de Cenoura"). <br> Detalhes ou história do prato. |
| **Ingredientes** | `Id` <br> `Nome` | Guid / Int <br> VARCHAR | PK <br> - | Identificador único do ingrediente. <br> Nome do item (ex: "Ovo", "Farinha"). |
| **Etapas** | `Id` <br> `Ordem` <br> `Descricao` <br> `ReceitaId` | Guid / Int <br> INT <br> TEXT <br> Guid / Int | PK <br> - <br> - <br> FK | Identificador único da etapa. <br> Passo sequencial (ex: 1, 2, 3). <br> Instrução (ex: "Bata as claras em neve"). <br> Vinculação direta com a tabela **Receitas**. |
| **ReceitasIngredientes** <br> *(Tabela Pivô)* | `ReceitaId` <br> `IngredienteId` <br> `Quantidade` <br> `UnidadeMedida` | Guid / Int <br> Guid / Int <br> DECIMAL <br> VARCHAR | PK / FK <br> PK / FK <br> - <br> - | Chave composta. Associa o ingrediente à receita. <br> Chave composta. Associa o ingrediente à receita. <br> Proporção necessária (ex: 200, 3, 1.5). <br> Métrica utilizada (ex: "g", "unidades", "xícara"). |

## Frontend (no futuro)

Planejado para as próximas etapas do desenvolvimento do projeto.

## Uso de AI Generativa

O projeto utiliza ferramentas de AI generativa na criação de testes a partir de código existente.
