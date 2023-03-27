---
title: "Paradigmes de développement"
linkTitle: "paradigmes"
weight: 2
description: >
  Etudions les différents paradigmes proposés par les frameworks qui ciblent le bureau
---

Voici exemple de programmation déclarative et impérative en TypeScript:

```ts
// typage implicite: la variable infère son type
let i = 10;
i = 20;
// typage statique, on ne peut pas changer le type d'une variable
//i = "Hello";

const items = [10, 34, -1, 44];
// const en TS empêche la réassignation (mais n'interdit pas la mutation)
// items = []

// Style de programmation impératif
const resultItems = [];
for (const item of items) {
  if (item > 0) {
    resultItems.push(item * 2);
  }
}
console.log(resultItems);

// Style déclaratif => sortie = f(entrée)
// Le code va refléter ou exprimer ce qu'on veut faire (et pas comment le faire)

const filterdItems = items.filter((item) => item > 0);
console.log(filterdItems);
const result2Items = filterdItems.map((item) => item * 2);
console.log(result2Items);

const result3Items = items.filter((item) => item > 0).map((item) => item * 2);
console.log(result3Items);
```

- Actuellement, la programmation impérative est généralement plus optimale que la programmation déclarative, mais ça dépend des compilateurs, des langages et du type de programme qu'on écrit.
- La programmation déclarative permet de plus facilement rendre son traitement asynchrone par sa façon de coder (c'est plus facile de rendre asynchrone les fonctions qu'on veut plutôt qu'un ensemble de code impératif)
- La programmation asynchrone consiste à exécuter plusieurs traitements en même temps (en d'autres termes, je peux lancer une fonction et passer à la suite avant qu'elle se termine).
  - En programmation, on écrit du code asynchrone via différntes API selon le langage: async await, promesses, threads, Rx (observables et observers), coroutines etc.
  - Le code asynchrone est géré en bas niveau via le runtime (en software) comme en en JavaScript par exemple, soit via des threads, soit via le parallélisme
  - Le thread peut signifier l'API pour les gérer soit le thread en lui-même sur l'OS. Par exemple: les coroutines de Kotlin maintiennent un pool de threads. La classe Thread de Java permet de gérer un seul thread.
