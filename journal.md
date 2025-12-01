# Journal de Bord - Projet Next.js 15 + Supabase

## Semaine 1 

### ABDESSALAM 

**Tâches réalisées:**
- Recherche et comparaison technologies (Next.js 15, Astro, SvelteKit)
- Choix: Next.js 15 + Supabase
- Création projet Next.js avec App Router
- Setup GitHub et invitations
- Configuration Supabase complet
- Schéma PostgreSQL avec Row Level Security
- Activation Realtime

**Apprentissages avec l'IA:**

*Prompt 1:* "Compare Next.js 15, Astro et SvelteKit pour un projet collaboratif moderne"
- **Apprentissage:** Next.js 15 le plus récent (oct 2024), Server Components stables, parfait pour explorer

*Prompt 2:* "Explique Server Components vs Client Components Next.js 15 avec exemples"
- **Apprentissage:** Server Components = serveur only, réduit JS client. Client Components = 'use client' pour interactivité

*Prompt 3:* "Crée schéma SQL PostgreSQL pour app gestion tâches avec Row Level Security Supabase"
- **Apprentissage:** RLS sécurise au niveau DB, pas juste code applicatif

**Difficultés rencontrées:**
- Confusion Pages Router vs App Router
  - **Solution:** Claude a expliqué que App Router = nouveau standard avec dossier `app/`
  
- Choix Firebase vs Supabase  
  - **Solution:** IA recommandé Supabase (PostgreSQL standard) meilleur pour apprendre SQL

**Réflexion sur l'IA:**
- **Forces:** Compare rapidement options, explications claires avec exemples
- **Limites:** Parfois confond Next.js 14/15, vérifié avec doc officielle

**Objectifs semaine prochaine:**
- Config clients Supabase server/browser
- Server Actions CRUD complets
- Tests des fonctions
- Documentation code

**Temps passé:** ~5 heures

---

### Killian -

**Tâches réalisées:**
- Clonage du repository et setup local
- Installation des dépendances
- Configuration variables d'environnement
- Création système de composants UI réutilisables:
  - Button (3 variants, 3 sizes)
  - Card (avec hover effects)
  - Input & Textarea (avec labels)
- Tests des composants de base

**Apprentissages avec l'IA:**

*Prompt 1:* "Explique-moi la différence entre 'use client' et 'use server' dans Next.js 15"
- **Apprentissage:** Server Components (défaut) s'exécutent sur serveur, pas de JS envoyé au client. Client Components ('use client') permettent interactivité (useState, onClick).

*Prompt 2:* "Crée un design system moderne avec Tailwind CSS pour app collaborative"
- **Apprentissage:** Importance de variants (primary/secondary/danger) et sizes pour réutilisabilité. Transitions pour meilleure UX.

*Prompt 3:* "Bonnes pratiques pour composants React TypeScript réutilisables"
- **Apprentissage:** Utiliser extends pour hériter props HTML natives. Permet d'utiliser tous les attributs standards (onClick, disabled, etc.)

**Difficultés rencontrées:**
- Confusion initiale Server vs Client Components
  - **Solution:** Claude a expliqué avec exemples. Server = fetch data, Client = interactivité.

- TypeScript errors sur les props
  - **Solution:** IA a montré pattern avec extends HTMLAttributes

**Réflexion sur l'IA:**
- **Forces:** Excellente pour comprendre nouveaux concepts Next.js 15. Exemples concrets très utiles.
- **Limites:** Suggéré des bibliothèques externes au début. Préféré créer composants custom pour apprendre.

**Objectifs semaine prochaine:**
- Créer le formulaire de création de tâches
- Développer les TaskCards avec interactions
- Intégrer les Server Actions de mon coéquipier
- Styling complet de la page /tasks

**Temps passé:** ~5 heures

## Semaine 2 
[À remplir semaine prochaine]