### Aabdessalam 

**Tâches réalisées:**
- Création clients Supabase (server/browser)
- Server Actions CRUD complets:
  - getTasks() - récupération
  - createTask() - création avec validation
  - updateTaskStatus() - changement statut
  - deleteTask() - suppression
- Types TypeScript
- Page test backend
- Validation fonctionnement

**Apprentissages avec l'IA:**

*Prompt 1:* "Explique revalidatePath() Next.js 15. Quand l'utiliser?"
- **Apprentissage:** Force re-fetch données après mutation. Essentiel pour voir changements sans refresh manuel.

*Prompt 2:* "Bonnes pratiques gestion erreurs Server Actions?"
- **Apprentissage:** Toujours try-catch, console.error côté serveur, throw erreurs claires pour client.

*Prompt 3:* "Différence createServerClient vs createBrowserClient Supabase?"
- **Apprentissage:** Server utilise cookies Next.js (sécurisé). Browser utilise localStorage (Client Components).

**Difficultés rencontrées:**
- Erreur "cookies is not a function"
  - **Solution:** Oublié `await` devant cookies(). Next.js 15 = async

- TypeScript errors types Supabase
  - **Solution:** Créé types.ts avec interfaces explicites

- revalidatePath ne marchait pas
  - **Solution:** Fallait chemin exact '/tasks' pas juste '/'

**Réflexion sur l'IA:**
- **Forces:** Excellente pour nouvelles APIs Next.js 15. Évité heures de lecture docs.
- **Limites:** Exemple avec ancienne syntaxe cookies() (sans await). Dû checker doc officielle.

**Objectifs semaine prochaine:**
- Aider Killian intégration UI
- Tests unitaires 3-4 fonctions
- Documentation technique backend
- Optimisation requêtes SQL

### [Date semaine 3]

**Tâches réalisées:**
- Installation et configuration Jest
- Création de 3 tests unitaires pour Server Actions
- Rédaction documentation technique complète (BACKEND.md)
- Aide à Killian pour intégration UI
- Review du code frontend

**Apprentissages avec l'IA:**

*Prompt 1:* "Comment tester des Server Actions Next.js 15 avec Jest?"
- **Apprentissage:** Besoin de mocker Supabase client pour tests isolés. Version simplifiée suffit pour démo.

*Prompt 2:* "Structure idéale pour documenter une API backend moderne?"
- **Apprentissage:** Inclure: architecture, exemples code, apprentissages, améliorations futures.

*Prompt 3:* "Optimisations PostgreSQL pour app temps réel?"
- **Apprentissage:** Index sur colonnes triées (created_at), RLS policies efficaces.

**Difficultés rencontrées:**
- Tests avec vraie DB vs mocks
  - **Solution:** Utilisé tests basiques sur vraie DB. IA suggéré mocks pour production.

- Documentation trop technique au début
  - **Solution:** IA aidé simplifier avec exemples concrets

**Réflexion sur l'IA:**
- **Forces:** Excellente pour structure documentation, exemples tests
- **Limites:** Suggéré setup complexe Jest. Simplifié manuellement.

**Objectifs semaine prochaine:**
- Finaliser déploiement Vercel
- Préparer section backend rapport final
- Répéter démo avec Killian
