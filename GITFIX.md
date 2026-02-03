# Eliminare node_modules din Git (push respins de GitHub)

Rulează comenzile în ordine în `F:\Proiecte\siteuri\art-cut-studio`, în PowerShell sau Git Bash.

## Varianta 1 – Istoric curat (un singur commit, recomandat)

Această variantă creează o nouă ramură cu un singur commit care conține tot proiectul, **fără** `node_modules`. Vei pierde istoricul vechi de commit-uri pe `main`.

```powershell
cd F:\Proiecte\siteuri\art-cut-studio

# Creează o ramură nouă, fără istoric
git checkout --orphan temp-branch

# Adaugă toate fișierele (respectă .gitignore, deci exclude node_modules)
git add -A

# Commit cu tot codul, fără node_modules
git commit -m "Initial commit: Art Cut Studio site"

# Înlocuiește ramura main cu cea curată
git branch -D main
git branch -m main

# Push forțat (rescrie main pe GitHub)
git push -u origin main --force
```

După asta, `node_modules` nu mai este în repo; rulezi local `npm install` când clonezi sau schimbi branch-ul.

---

## Varianta 2 – Păstrare istoric cu filter-branch

Dacă vrei să păstrezi toate commit-urile dar să ștergi `node_modules` din fiecare:

```powershell
cd F:\Proiecte\siteuri\art-cut-studio

# Scoate node_modules din toate commit-urile
git filter-branch --force --index-filter "git rm -rf --cached --ignore-unmatch node_modules" --prune-empty HEAD

# Push forțat
git push -u origin main --force
```

Dacă `filter-branch` dă erori, folosește Varianta 1.
