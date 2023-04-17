---
title: "Programmation asynchrone"
linkTitle: "Programmation asynchrone"
weight: 2
description: >
  Programmation asynchrone
---

## Introduction

Tout application démarre avec un seul processus et un seul thread d'exécution. Dans une application graphique, ce thread s'appelle le thread principal ou le thread UI et c'est lui qui gère l'affichage et les interactions avec l'utilisateur.

![](/img/ui-thread.drawio.svg)

Si on effectue des traitements longs (calcul d'un Fibonacci ou des nombres premiers) ou bloquants (attente de la réponse d'un serveur HTTP) dans le thread principal, il sera bloqué dans la partie _"mise à jour de l'état de l'application"_, causant ainsi un blocage de l'affichage et des interaction (les fameux **freeze**).
C'est pour cela qu'on va effectuer ces traitements dans des threads.
Ces derniers permettent de lancer des traitements en même temps sans bloquer le thread UI.

![](/img/threads.drawio.svg)

La programmation avec les threads fait partie d'un concept plus général appelé **programmation asynchrone**.

## La programmation asynchrone

- La programmation asynchrone consiste à exécuter plusieurs traitements en même temps (en d'autres termes, je peux lancer une fonction et passer à la suite avant qu'elle se termine).
- En programmation, on écrit du code asynchrone via différntes API selon le langage: async await, promesses, threads, Rx (observables et observers), coroutines etc.
- Beaucoup des ces API créent ce qu'on peut qualifier des Thread virtuels. Ce sont des threads gérées par le programme et non par l'OS. Ceci permet de lancer plusieurs threads virtuels au sein d'un seul thread OS (on parle aussi de thread porteur).
  - En Kotlin: les thread virtuel sont appelés **coroutines**.
  - En c#: **taches asynchrones**
  - En java: **Thread virtuels**
- Pourquoi faire des threads virtuels ? Car le coût d'un thread OS est élevé est on est limité par le nombre de thread OS qu'on peut créer à la fois.
- Cas particulier de JavaScript: un seul thread est utilisé pour faire de la programmation asynchrone (via un even Loop). On peut créer un équivalent de thread via les WebWorkers.
