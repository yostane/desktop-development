---
title: "Installer le programme"
linkTitle: "installeur"
weight: 4
description: >
  Création d'un installeur
---

## Introduction

Une fois l'application développée, testée et prête à partir en production, il faudra la fournir aux utilisateurs. Plusieurs moyens s'offrent à nous:

- Fournir une archive compressée
- Fournir une application portable: comme un dmg sur mac ou une archive auto extractable sur windows.
- Fournir un installeur comme Wix pour windows
- Mettre à disposition sur un gestionnaire de paquêts
  - Windows: Scoop, Chocolatey ou winget
  - Ubuntu: apt
  - Javascript: npm
  - Python: PyPi (pour installation avec pip). [Voici un tuto](https://medium.com/@joel.barmettler/how-to-upload-your-python-package-to-pypi-65edc5fe9c56)
- Mettre à disposition sur un magasin d'applications (Windows store, App Store, etc.)
