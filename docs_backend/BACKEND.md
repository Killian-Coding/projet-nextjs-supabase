# Documentation Backend - Next.js 15 + Supabase

## Architecture

Notre application utilise **Next.js 15 Server Actions** pour communiquer directement avec **Supabase PostgreSQL**, éliminant le besoin d'API routes traditionnelles.

### Pourquoi Server Actions?

Les Server Actions (stables depuis Next.js 15) offrent:

1. **Simplicité** - Pas besoin de créer des routes API séparées
2. **Performance** - Exécution directe côté serveur
3. **Type Safety** - TypeScript de bout en bout
4. **Sécurité** - Code serveur jamais exposé au client

*Source: Recherche avec Claude AI - "Avantages Server Actions Next.js 15"*

## Schéma de Base de Données

### Table `tasks`
```sql
tasks (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('todo', 'in_progress', 'done')),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

### Row Level Security (RLS)

Supabase RLS sécurise les données au niveau de PostgreSQL:
```sql
-- Tout le monde peut lire
CREATE POLICY "Anyone can read tasks" ON tasks FOR SELECT USING (true);

-- Tout le monde peut créer
CREATE POLICY "Anyone can create tasks" ON tasks FOR INSERT WITH CHECK (true);
```

*Apprentissage IA: RLS = sécurité DB native vs sécurité applicative seulement*

## API Reference

### `getTasks()`

Récupère toutes les tâches triées par date de création.

**Usage:**
```typescript
const tasks = await getTasks()
```

**Returns:** `Promise<Task[]>`

---

### `createTask(formData: FormData)`

Crée une nouvelle tâche.

**Parameters:**
- `formData.title` - Titre (requis)
- `formData.description` - Description (optionnel)

**Usage:**
```typescript
const formData = new FormData()
formData.append('title', 'Ma tâche')
formData.append('description', 'Description optionnelle')

await createTask(formData)
```

**Validation:**
- Title ne peut pas être vide
- Trim automatique des espaces

---

### `updateTaskStatus(id: string, status: TaskStatus)`

Change le statut d'une tâche.

**Parameters:**
- `id` - UUID de la tâche
- `status` - 'todo' | 'in_progress' | 'done'

**Usage:**
```typescript
await updateTaskStatus('uuid-here', 'done')
```

---

### `deleteTask(id: string)`

Supprime une tâche.

**Usage:**
```typescript
await deleteTask('uuid-here')
```

## Configuration Supabase

### Variables d'environnement
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

### Clients

**Server Client** (`lib/supabase/server.ts`)
- Utilise cookies Next.js
- Pour Server Components et Server Actions
- Sécurisé, jamais exposé au client

**Browser Client** (`lib/supabase/client.ts`)
- Utilise localStorage
- Pour Client Components (Realtime)
- Public, safe avec RLS

*Apprentissage IA: Différence critique pour sécurité et performance*

## Performance

### Optimisations implémentées

1. **revalidatePath()** après mutations
   - Force Next.js à re-fetch les données
   - UI toujours à jour sans refresh manuel

2. **Index PostgreSQL** (via Supabase)
   - Index automatique sur `created_at`
   - Tri rapide des tâches

3. **Server-side rendering**
   - Données fetched côté serveur
   - Pas de loading spinner initial

## Tests

Tests unitaires basiques avec Jest:
```bash
npm test
```

Couvre:
- Validation retour getTasks()
- Structure des objets Task
- Validation des statuts

*Note: Tests simplifiés pour démo pédagogique*

## Améliorations futures

1. Authentication Supabase
2. Assignation de tâches à des users
3. Tags/catégories
4. Dates d'échéance
5. Notifications Realtime

---

**Auteur:** Abdessalam
**Projet:** Exploration Next.js 15 + Supabase
