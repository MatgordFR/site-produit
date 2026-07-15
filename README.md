<div align="center">

# 📈 Pouls

### Landing produit d'un outil de surveillance & page de statut — **zéro dépendance.**

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dépendances](https://img.shields.io/badge/d%C3%A9pendances-0-2ea44f?style=flat-square)
![Interactif](https://img.shields.io/badge/board_vivant_%2B_pricing_%2B_FAQ-8957e5?style=flat-square)
![Licence](https://img.shields.io/badge/licence-ISC-2f81f7?style=flat-square)

[![▶ Ouvrir la démo](https://img.shields.io/badge/%E2%96%B6_Ouvrir_la_d%C3%A9mo-5B4BF0?style=for-the-badge)](https://matgordfr.github.io/site-produit/)

<br>

[![Aperçu de Pouls](preview.jpg)](https://matgordfr.github.io/site-produit/)

</div>

> [!NOTE]
> **Projet démo.** Le produit, les prix et les données sont **fictifs** — c'est une vitrine de savoir-faire front-end. Aucun paiement n'est traité, tout tourne dans le navigateur.

---

## ✨ Ce que ça montre

Une **landing produit / SaaS** complète, avec ce qui fait vraiment convertir :

- **Un board de statut vivant** — courbe de latence qui défile en temps réel, barres d'uptime sur 90 jours, pastilles OK / Lent / KO, taux d'uptime — la signature de la page.
- **Un titre animé** — révélation du titre mot à mot au chargement + soulignement du mot-clé.
- **« Comment ça marche »** — les 3 étapes (connecter → surveiller → alerter), en une lecture.
- **Un exemple de page de statut** — l'output réel du produit : composants, statuts et historique d'incidents.
- **Des intégrations** — les canaux d'alerte (Discord, Slack, e-mail, SMS, webhooks) et ce qui est surveillé.
- **Des avis** — témoignages de démonstration (personnages fictifs, annoncés comme tels).
- **Un pricing qui bascule** — mensuel ↔ annuel, les montants et le badge « −2 mois » se mettent à jour au clic.
- **Une FAQ dépliable** — en `<details>` natif (accessible, sans JS superflu).
- **Un bloc terminal** — mise en place « en une ligne », coloration syntaxique en JetBrains Mono.

## 🎨 Le craft

- **Identité produit** — papier froid + indigo de marque ; le vert/ambre/rouge est réservé à la **sémantique de statut**.
- **Polices auto-hébergées** — Space Grotesk (display & UI) + JetBrains Mono (métriques & code).
- **Graphismes dessinés à la main** — icônes de features et courbe de latence en SVG.
- **Accessible & responsive** — navigation clavier, focus visible, `prefers-reduced-motion` respecté, du grand écran au mobile.

## 🛠️ Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black)

Aucun framework, aucune librairie, aucun CDN. ~100 Ko, polices comprises.

## 📁 Structure

```
index.html             → la page
assets/css/statut.css  → design system + board + sections (étapes, statut, intégrations, avis) + pricing + FAQ
assets/js/statut.js    → titre animé + pulse de latence + barres uptime + bascule tarifs
assets/fonts/          → Space Grotesk + JetBrains Mono (auto-hébergées)
```

## 🚀 Lancer en local

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## 👤 Auteur

Réalisé par **[MatgordFR](https://github.com/MatgordFR)** — dev indépendant (bots Discord, sites, IA).
🌐 [matgord.com](https://matgord.com) · 🐦 [@matgordfr](https://x.com/matgordfr) · 🎨 [les autres démos](https://matgordfr.github.io/mes-demos-web/)

## 📄 Licence

[ISC](LICENSE) — libre d'usage.
