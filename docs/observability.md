# 📊 Mutation Observability Dashboard

This dashboard tracks runtime invocation, shimmer pulse, and breach choreography.

## 🧭 Pulse Metrics

Each mutation logs a timestamp.  
Use `console.log({ mutation })` to monitor invocation rhythm.

### 📈 Shimmer Pulse Chart

Tracks mutation frequency over time.  
Each mutation is color-coded and plotted on a time axis.

![Shimmer Pulse Chart](shimmer_pulse_chart.png)

## 🔐 Breach Watch

`useRefusal` returns:

```ts
{ refusal: true, breachCode: 'none', sealed: 1760836933530 }
