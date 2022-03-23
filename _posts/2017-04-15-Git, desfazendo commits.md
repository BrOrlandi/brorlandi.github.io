---
layout: post
date: 2017-04-15 17:42:21 -0300
title: Git, desfazendo commits
comments: true
header-img: "img/git2/header.png"
og-img: "/img/git2/og_img.png"
meta-description: Como usar git checkout, reset e revert na linha de comando.
subtitle: Usando git checkout, reset, e revert  na linha de comando.
permalink: git-desfazendo-commits
categories: Git
---

Espero que você já tenha lido o [primeiro post sobre Git aqui]({{ site.baseurl }}{% link _posts/2017-03-12-Git primeiros passos.md %}). Neste segundo post vou ensinar como desfazer alterações com Git.

## Checkout

O checkout é o jeito mais simples para desfazer alterações. Supondo que você editou o `arquivo.txt` e quer voltá-lo para seu estado original desde o último commit.
Use:

```sh
git checkout -- arquivo.txt
```

Pronto, alteração desfeita!

### Navegando no repositório

O comando de checkout não é usado apenas para desfazer alterações, ele permite navegar por commits e branchs no repositório.

Por exemplo, podemos ver repositório no penúltimo commit:

```sh
git checkout HEAD~1
```

Este comando muda o HEAD que é basicamente em qual estado o repositório está. Mudando para HEAD~1 estaremos no commit anterior ao HEAD atual.
A cada execução deste comando mudará o repositório para um commit atrás.

Também podemos trocar `HEAD` por `master` e visualizar commits anteriores na branch master. Use `git checkout master` para voltar para a master no último commit.

## Reset

No primeiro post usamos `git add` para adicionar as alterações do repositório para o próximo commit. Mas se quisermos remover esse arquivo de lá, como fazemos?
Use `git reset`!

Vamos preparar um exemplo. Em um repositório Git, faça alterações e use o `git add `. 
Se você quer apenas tirar o arquivo do `stage` (área onde as alterações vão para o próximo commit) use:

```sh
git reset arquivo.txt
```

Pronto, o arquivo saiu do stage.

### Resetando commits

O comando `git reset`, como o próprio nome diz, reseta o repositório para o estado do último commit, ou outro commit. Ou seja, com ele podemos desfazer commits.

Vamos desfazer o último commit de um repositório para exemplificar. Há dois modos de usar o `git reset` aqui.
Use:

```sh
git reset HEAD~1
```
Veja que o commit foi desfeito mas as alterações nos arquivos ainda ficaram. Neste caso você pode fazer um novo commit com o conteúdo do commit desfeito.

### Reset Hard

Ao usar o `git reset` a opção padrão dele é `--soft`, que foi o que aconteceu no exemplo anterior. O reset soft não altera os arquivos, apenas o commit.
O outro modo de desfazer o commit é o modo hard. Não é hard de ser difícil não. Neste caso as alterações nos arquivos também serão desfeitas com o commit.
Para o reset hard use:

```
git reset --hard HEAD~1
```

Perceba que os arquivos estão exatamente como no commit anterior.

## Revert

Pode acontecer o caso de você precisar desfazer um commit que não é o commit mais recente e sim um mais antigo. Nesse caso, fazer um reset até o commit irá apagar também todos os commits na frente dele. Para resolver isso temos o `git revert`. O revert cria um novo commit que faz o reverso do commit especificado. Ou seja, se o commit adicionou um arquivo, o revert remove, se editou uma linha, volta ao que era antes.
Supondo que queremos reverter o commit de ID `11a5b`, usamos:

```
git revert 11a5b
```

Pode haver conflitos nessa operação, pois ao reverter um commit que criou uma linha, pode causar conflito com outro commit que editou aquela linha. Neste caso o git dará um aviso e você terá que resolver os conflitos.

## Continue aprendendo...

Haverá outro post sobre resolver conflitos.

Sabia que eu tenho um curso online gratuito sobre Git e GitHub na Udemy? Acesse meu curso [aqui](https://brorlandi.github.io/curso-git/) e saiba mais sobre ele.

{% include more_categories.html category='Git' %}