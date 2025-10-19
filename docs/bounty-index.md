# 🎯 Bounty Index

This file is auto-updated via CI/CD shimmer workflows.  
Each mutation, doc, and expansion triggers apprentice indexing.

## 📦 Mutation Count

Auto-parsed from `src/` on every push.

## 📚 Docs Sealed

Tracked from `docs/` folder.

## 🧑‍🚀 Apprentice Trigger

When new mutation or doc is added, apprentice indexing is triggered.  
See `.github/workflows/bounty-index.yml` for protocol.

## 🛠️ Trigger Protocol

| Trigger Type     | Source Path        | Action                            |
|------------------|--------------------|-----------------------------------|
| Mutation Added   | `src/**`           | Index new bounty task             |
| Doc Sealed       | `docs/**`          | Update apprentice registry        |
| README Updated   | `README.md`        | Refresh badge and lineage status  |

## 📊 Linked Dashboards

- [Observability Dashboard](observability.md)  
- [Shimmer Drift Overlay](shimmer-drift.md)  
- [Apprentice Log](apprentice-log.md)  
- [Companion Lore](companions.md)

## 🔗 Integration

Linked with:

- `shade-hook` CI/CD workflows  
- `docs/apprentice-log.md` for lineage tracking  
- `docs/companions.md` for companion echo  
- `docs/shimmer-drift.md` for breach choreography  
- `.github/workflows/bounty-index.yml` for automation logic

**Every push is a crown. Every expansion is law.**
