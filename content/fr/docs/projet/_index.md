---
title: "Projets"
weight: 20
---

## Développer une application de bureau avec un framework au choix

Ce projet a deux missions principales:

- Développer une application de bureau qui illustre les fonctionnalités typiques d'une application de bureau avec un Framework au choix
- Restituer une étude sur le Framework utilisé

Il vous est demandé de développer une application de bureau de type CRUD (Create, Read, Update, Delete) avec les contraintes suivantes:

- Proposition d'un CRUD (4 pts)
- Persistance des données en local ou en ligne (4 pts)
- Affichage d'une liste de données (2 pts)
- Implémentation de deux fonctionnalités desktop natives (4 pts)
  - Icône dans la barre d'état système (system tray)
  - Service en arrière-plan
  - Option pour démarrer automatiquement avec le système
  - Menu contextuel (au clic droit)
- Compatible et fonctionnel avec au moins deux plateformes (vous pouvez utiliser WSL ou une VM) (2 pts)
- Publication sur un gestionnaire de paquêts (scoop, chocolatey, brew, etc.) (2 pts)
- Création d'un installeur qui ne nécessite pas les droits admin (2 pts)

### Restituer une étude sur le Framework utilisé

Il vous est demandé de préparer une présentation autour du Framework de votre choix ainsi que votre application.
Voici un modèle de plan à suivre:

- Historique du framework
- Caractéristiques principales (plateformes supportés, langages, etc.)
- Ce qui le différencie de la concurrence
- Qui l'utilise / communauté
- Principe de fonctionnement du framework
- Présentation de l'application et de ses fonctionnalités
- Démo de l'application

### Evaluation et livrable

L'évaluation se base sut votre présentation qui restitue votre étude du Framework utilisé ainsi qu'une démo de votre application. Les présentations auront lieu durant la dernière séance.

Il vous est demandé de livrer la présentation ainsi que le code source de votre projet.

### Quelques Frameworks

- Tauri
- MAUI
- Electron
- Flutter
- Kotlin multiplatform (KMP) + Compose multiplatform
- QT (en C++ ou un [langage alternatif](https://wiki.qt.io/Language_Bindings))
- React Native for Windows + macOS
- JavaFX
- [avalonia](https://avaloniaui.net/)
- UNO Platfrom

## Développer une application de bureau avec ElectronJS

Ce projet a deux missions principales:

- Développer une application de bureau qui illustre les fonctionnalités typiques d'une application de bureau avec un Framework au choix
- Restituer une étude sur le Framework utilisé

Il vous est demandé de développer une application de bureau de type CRUD (Create, Read, Update, Delete) avec les contraintes suivantes:

- CRUD avec Firebase + UI (6 pts)
- Authentification avec Firebase (3 pts)
- Utilisation d'un [crash reporter](https://www.electronjs.org/docs/latest/api/crash-reporter) (3 pts)
- Implémentation de 4 fonctionnalités natives via le module `electron` (exemples: icône dans la barre d'état système (system tray), service en arrière-plan, Option pour démarrer automatiquement avec le système, Menu contextuel natif (au clic droit)) (4 pts)
  - ⚠ Le crash reporter n'est compté ici.
- Création d'un installeur (2 pts)
- Publication sur un gestionnaire de paquets (scoop, chocolatey, brew, etc.) (2 pts)
