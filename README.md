# Dicionário de Dados - Academia Vitalis Fitness

Dicionário de dados interativo do banco de dados **vitalis_fitness** (MySQL), desenvolvido na disciplina de Banco de Dados da UNICID, sob orientação do Prof. Dr. Diego Carvalho. A documentação segue boas práticas de governança de dados do DAMA-DMBOK e do COBIT.

**Site publicado:** https://SEU-USUARIO.github.io/dicionario-dados-vitalis/

## Sobre o projeto

A Vitalis Fitness é uma academia independente em Santana (São Paulo/SP), com cerca de 320 alunos ativos. Seus dados ficavam em três bases desconectadas: o cadastro da catraca biométrica, a planilha de alunos e financeiro e a grade de aulas em quadro branco. O banco de dados único e centralizado cobre:

- cadastro e privacidade de alunos;
- planos, matrículas e parcelas;
- pagamentos e cobrança;
- controle de acesso e frequência pela catraca;
- aulas coletivas;
- vendas avulsas (suplementos e personal trainer);
- relatórios gerenciais e administração de usuários.

## Conteúdo do dicionário

- 18 tabelas e 124 colunas, 100% fiéis ao script DDL.
- Para cada coluna: descrição e regra de negócio, tipo e tamanho, constraints, classificação LGPD/GDPR, linhagem (origem e destino) e controle de acesso (RBAC).
- Badges de privacidade: **[DPS]** dado pessoal sensível, **[DP]** dado pessoal e **[N/A]** não aplicável.
- Busca em tempo real por tabela ou coluna.
- Alternância entre tema claro e escuro.
- Modal do DER com zoom por scroll, arrastar e botões Zoom +, Zoom - e Reset (Panzoom.js).
- Download da Especificação de Requisitos e Regras de Negócio em PDF.

## Estrutura do repositório

```text
.
├── index.html
├── style.css
├── script.js
├── docs/
│   └── Especificacao_Requisitos_Regras_Negocio_BD.pdf
└── assets/
    └── der.png
```

Os nomes de pastas e arquivos devem ser mantidos em minúsculas. O GitHub Pages roda em servidor Linux, onde `der.png` e `DER.png` são arquivos diferentes.

## Como visualizar localmente

Baixe ou clone o repositório e abra o `index.html` em qualquer navegador. A biblioteca Panzoom.js é carregada por CDN, então o zoom do DER precisa de conexão com a internet.

## Tecnologias

HTML5, CSS3, JavaScript, Panzoom.js 4.5.1 (CDN) e GitHub Pages. O banco de dados é MySQL 8.0.19+ (InnoDB, utf8mb4).

## Equipe

| Integrante | Papel |
|---|---|
| Sophia Campos | Data Owner (Regras de Negócio e Requisitos) |
| Luiz Henrique Rodrigues Nunes | Data Owner (Financeiro) |
| Gabriel Gonçalves da Silva | Data Owner (Acesso, frequência e aulas) |
| Lucas Henrique Silva Alves | Data Steward (Qualidade técnica e Dicionário) |
| João Pedro de Sousa Araujo | Data Steward (Modelagem DER e DDL) |
| Pedro Henrique Teixeira de Lima | Data Steward (Privacidade LGPD e RBAC) |

Orientador: Prof. Dr. Diego Carvalho.

## Observação

Projeto acadêmico. Os enquadramentos legais citados (LGPD, CDC, CTN) devem ser confirmados com assessoria jurídica e contábil antes de uso em produção.
