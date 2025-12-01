### Killian 

**Semaine 1 – Setup & Design System:**
- Clonage et installation du projet

- Configuration .env.local pour Supabase

- Test du projet sur http://localhost:3000/tasks

- Création des composants UI : Button, Card, Input, Textarea

- Commit : feat: create UI design system components

**Semaine 2 – Formulaire & Interface principale:**

Création du formulaire TaskForm pour ajouter des tâches

Création des cartes TaskCard pour gérer état et suppression

Création de la liste TaskList pour afficher les tâches par statut

Page principale tasks/page.tsx intégrant formulaire et liste

Gestion des erreurs et validations côté client

Commit : feat: complete task UI with forms and cards

**Semaine 3 – Realtime & Animations:**
- Implémentation du temps réel avec Supabase Realtime

- Mise à jour automatique des listes lors d’insertion, modification et suppression

- Indicateur de connexion realtime (Live / Connexion)

- Commit : feat: implement Supabase Realtime subscriptions
**Apprentissages principaux:**
- Gestion des Server Actions CRUD et validation côté client

- revalidatePath() pour forcer le rafraîchissement des données

- Importance des types TypeScript pour éviter erreurs

**Difficultés rencontrées:**
- Types TypeScript pour Supabase

- Realtime : gérer l’état et le mapping des événements correctement

**Temps passé:** ~7-8 heures