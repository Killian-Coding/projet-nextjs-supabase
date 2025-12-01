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

**Temps passé:** ~6 heures