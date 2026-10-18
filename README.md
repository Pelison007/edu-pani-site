# 🍳 CookBook API

<p align="center">
  <img src="https://unsplash.com" alt="CookBook Header Banner" width="100%" height="250px" style="object-fit: cover; border-radius: 8px;"/>
</p>

### 👥 Integrantes
* **[Seu Nome Completo]**
* **[Nome Completo do Integrante 2]**
* **[Nome Completo do Integrante 3]**

**🎓 Curso:** [Nome do Seu Curso - Ex: Análise e Desenvolvimento de Sistemas]  
**🏫 Turma:** [Sua Turma - Ex: 3º Período - Noite]

---

## 📝 Resumo

O CookBook é uma plataforma digital projetada para simplificar a gestão culinária diária, atuando como um assistente inteligente para o mapeamento e o gerenciamento de receitas. Desenvolvido com foco na eficiência e na redução do desperdício de alimentos, o ecossistema armazena de forma estruturada os ingredientes e os passos sequenciais de preparo. O grande diferencial do sistema reside na sua capacidade de cruzar dados em tempo real, permitindo que os usuários descubram instantaneamente quais pratos podem ser cozinhados com base exclusivamente nos insumos que possuem disponíveis em suas dispensas domésticas.

---

## 🚀 Funcionalidades

* 🥦 **Gerenciamento de Ingredientes:** Cadastro e catalogação de insumos alimentares com suporte a múltiplas unidades de medida.
* ⏱️ **Modelagem de Etapas de Preparo:** Estruturação ordenada e sequencial do passo a passo para a execução de cada prato.
* 🔗 **Vínculo Dinâmico de Receitas:** Associação inteligente que unifica receitas, seus respectivos ingredientes e o modo de preparo.
* 🔍 **Busca Inversa por Insumos:** Algoritmo de cruzamento que localiza receitas viáveis a partir da dispensa informada pelo usuário.

---

## 🔍 Descrição das Funcionalidades

### 🥦 Gerenciamento de Ingredientes
Esta funcionalidade provê uma base de dados centralizada para o cadastro de itens alimentícios. Cada ingrediente possui um registro único, o que evita a duplicidade de informações. O sistema permite especificar nomes comerciais ou genéricos, servindo como a fundação para o controle de estoque de despensa dos usuários.

### ⏱️ Modelagem de Etapas de Preparo
As etapas de preparo ditam a linha cronológica de execução da receita. Cada passo é indexado de forma sequencial (ex: Passo 1, Passo 2), contendo instruções textuais detalhadas sobre o que deve ser feito. Essa separação estrutural garante que as instruções de preparo permaneçam organizadas e fáceis de serem renderizadas em qualquer interface visual.

### 🔗 Vínculo Dinâmico de Receitas (Tabela Pivô)
Através de uma arquitetura relacional otimizada, o sistema conecta receitas a múltiplos ingredientes e quantidades específicas (ex: 200g de farinha, 3 unidades de ovos). Esta abordagem separa a existência física do ingrediente em si da quantidade exata exigida por um prato específico, permitindo a reutilização do mesmo insumo em centenas de receitas diferentes.

### 🧮 Busca Inversa por Insumos
É o motor de inteligência da API. O usuário envia uma lista com os ingredientes que possui em mãos e o sistema realiza uma varredura na tabela relacional. Ele filtra e retorna apenas as receitas cujos requisitos de ingredientes sejam atendidos integralmente ou parcialmente pelos itens fornecidos, otimizando o uso de mantimentos e sugerindo opções práticas para o dia a dia.

---

## 🏛️ Arquitetura e Banco de Dados

O backend é construído sobre o ecossistema **ASP.NET Core** utilizando o template de **API Mínima** (`dotnet new web`), o que confere alta performance e baixa latência ao projeto. 

<p align="center">
  <img src="https://holistics.io" alt="Database Schema Concept Diagram" width="500px" style="border-radius: 6px;"/>
</p>

Para sustentar as funcionalidades descritas, a modelagem relacional do banco de dados foi estruturada da seguinte forma:

| Tabela | Coluna | Tipo de Dado | Chave | Descrição / Regra |
| :--- | :--- | :--- | :--- | :--- |
| **Receitas** | `Id` <br> `Nome` <br> `Descricao` | Guid <br> VARCHAR <br> TEXT | PK <br> - <br> - | Identificador único global da receita. <br> Nome do prato (ex: "Bolo de Cenoura"). <br> Detalhes ou história do prato. |
| **Ingredientes** | `Id` <br> `Nome` | Guid <br> VARCHAR | PK <br> - | Identificador único do ingrediente na base. <br> Nome do item (ex: "Ovo", "Farinha"). |
| **Etapas** | `Id` <br> `Ordem` <br> `Descricao` <br> `ReceitaId` | Guid <br> INT <br> TEXT <br> Guid | PK <br> - <br> - <br> FK | Identificador único do passo de preparo. <br> Passo sequencial numérico (ex: 1, 2, 3). <br> Instrução clara da ação a ser tomada. <br> Vinculação direta com a receita dona da etapa. |
| **ReceitasIngredientes** <br> *(Tabela Pivô)* | `ReceitaId` <br> `IngredienteId` <br> `Quantidade` <br> `UnidadeMedida` | Guid <br> Guid <br> DECIMAL <br> VARCHAR | PK / FK <br> PK / FK <br> - <br> - | Chave composta. Associa o ingrediente à receita. <br> Chave composta. Associa o ingrediente à receita. <br> Proporção necessária para o prato. <br> Métrica utilizada (ex: "g", "ml", "unidades"). |

---

## 🤖 Uso de AI (Inteligência Artificial)

<p align="center">
  <img src="https://vecteezy.com" alt="AI Assisted Coding Icon" width="120px"/>
</p>

### 🛠️ Ferramenta Utilizada
* **Modelo de Linguagem:** OpenAI GPT-4o / Claude 3.5 Sonnet (via assistente de IA).

### ⚙️ Forma de Uso
* **Geração de Testes Automatizados:** A ferramenta de IA foi integrada ao fluxo de desenvolvimento para analisar a lógica de negócio dos endpoints da API Mínima e gerar cenários de testes unitários e de integração correspondentes.
* **Escrita de Documentação Técnica:** Utilizada para expandir as notas rascunhadas do projeto em um formato de documentação acadêmica formal, padronizando a descrição das funcionalidades e gerando o layout Markdown da modelagem de dados.

### 📑 Revisões Realizadas
* **Correção Arquitetural:** A IA auxiliou na identificação de um problema de modelagem na antiga tabela `ReceitasIngredientesEtapas`. Foi realizada a separação das Etapas e a criação de uma tabela pivô exclusiva para os Ingredientes (`ReceitasIngredientes`), otimizando o algoritmo de busca reversa.
* **Ajuste de Tom:** O texto gerado automaticamente passou por revisão humana para garantir o alinhamento com os critérios de avaliação da banca acadêmica, mantendo a clareza técnica e eliminando termos redundantes.
