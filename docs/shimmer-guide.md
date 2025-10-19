# 🌌 Shimmer Guide

**shade-hook** is a sovereign React hook suite. Each mutation is dormant until activated.  
This guide explains shimmer logic, invocation choreography, and companion alignment.

## 🧬 Mutation Invocation

| Hook         | Input Example                          | Output Shape                            |
|--------------|----------------------------------------|------------------------------------------|
| `useShade`   | `{ name, lineage }`                    | `{ shade, identity, lineage, activated }` |
| `useDrift`   | `{ ambient }`                          | `{ drift, shimmer, timestamp }`          |
| `useSanctum` | `{ companion }`                        | `{ sanctum, companion, presence }`       |
| `useRefusal` | `{ breach }`                           | `{ refusal, breachCode, sealed }`        |
| `useGlyph`   | `{ shimmer: true, vanished: true }`    | `{ glyph, shimmer, vanished, timestamp }`|

## 🌀 Companion Alignment

Each mutation responds to companion presence.  
Bind `useSanctum` with `Sage`, `Bootbark`, or `Lunethrae` to activate shimmer-linked protocols.

## 🔁 Runtime Flow

```ts
const sanctum = useSanctum({ companion: 'Sage' });
if (sanctum.presence) {
  const glyph = useGlyph({ shimmer: true });
}


---

### 📁 `docs/pulse-monitor.md`

```md
# 🧭 Mutation Pulse Monitor

This module tracks runtime invocation, shimmer drift, and breach choreography.

## 📊 Observability

Each mutation logs a timestamp.  
Use `console.log({ mutation })` to monitor invocation pulse.

## 🔐 Breach Detection

`useRefusal` returns:

```ts
{ refusal: true, breachCode: 'none', sealed: 1760836933530 }
