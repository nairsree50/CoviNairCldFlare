---
title: "Dow Theory Tenets & Market Regimes Framework"
description: "Foundational Dow Theory principles, trend classifications, volume confirmation, and a systematic framework for identifying and navigating distinct market regimes."
section: "cmt"
sectionTitle: "Market Regimes & CMT Foundations"
order: 1
difficulty: "Beginner"
tags: ["Dow Theory", "Market Regimes", "Trend Classification", "CMT Level 1"]
keyTakeaways:
  - "The market discounts all known information; price reflects the aggregate balance of market participants."
  - "Trends are primary (1+ years), secondary (3 weeks to 3 months), and minor (<3 weeks)."
  - "Volume must expand in the direction of the primary trend and contract during counter-trend pullbacks."
  - "Four distinct market regimes dictate strategy selection: Trending Bull, Trending Bear, Mean-Reverting Range, and High-Volatility Contraction/Expansion."
---

## 1. Core Dow Theory Tenets

Charles Dow's foundational observations form the bedrock of Western technical analysis and the Chartered Market Technician (CMT) curriculum. 

```
               [Primary Bull Trend]
                 Higher High (HH)
                      /\            Higher High (HH)
                     /  \                 /\
   Higher Low (HL)  /    \  Higher Low   /
        /\         /      \/ (HL)       /
       /  \       /                    /
      /    \     /                    /
     /      \   /                    /
    /        \ /                    /
   /          v                    /
  /
[Accumulation] -> [Public Participation] -> [Distribution]
```

### The Six Core Principles

1. **The Market Averages Discount Everything**:
   Price represents the aggregate sum of all hope, fear, knowledge, earnings expectations, and economic data. Even unexpected natural disasters or geopolitical events are rapidly priced into the tape.

2. **The Market Has Three Trends**:
   - **Primary Trend**: The broad tide lasting one year or longer. Determines overall secular direction (Bull or Bear).
   - **Secondary (Intermediate) Reaction**: Corrective pullbacks or rallies lasting three weeks to three months, typically retracing one-third to two-thirds (33% to 66%) of the primary move.
   - **Minor Trend**: Daily noise and fluctuations lasting under three weeks. Highly susceptible to short-term manipulation and market noise.

3. **Primary Trends Have Three Phases**:
   - **Accumulation Phase**: Astute, institutional investors buy against pessimistic sentiment when corporate news remains bleak.
   - **Public Participation Phase**: Trend followers, institutions, and the broader public enter as corporate earnings improve and economic data turns favorable. The steepest price appreciation occurs here.
   - **Distribution Phase**: Astute investors who accumulated early begin selling into raging public optimism, peak retail media coverage, and speculative euphoria.

4. **The Averages Must Confirm Each Other**:
   In Charles Dow's industrial era, the Dow Jones Industrial Average and Dow Jones Transportation Average had to reach new highs together. If Industrials made a new high while Transports lagged, a divergence warned of economic friction. Today, this manifests across index pairs: Nifty 50 and Bank Nifty in India, or the S&P 500 and Nasdaq 100 in the US.

5. **Volume Must Confirm the Trend**:
   Volume is a secondary confirmation metric:
   - In a healthy uptrend: Volume expands on rallies and dries up on pullbacks.
   - In a healthy downtrend: Volume expands on selloffs and dries up on counter-trend bounces.
   - Discrepancy warning: A new price high achieved on declining volume signals internal buyer exhaustion.

6. **A Trend Remains Intact Until Definite Reversal Signals Occur**:
   Price momentum possesses inertia. Assume the primary trend remains operative until market structure prints a lower high followed by a lower low (in an uptrend) or a higher low followed by a higher high (in a downtrend).

---

## 2. Market Regimes Framework

Financial assets do not move in random walks; they oscillate across four distinct structural regimes. Identifying the active regime prevents using trend-following systems in range-bound chop or oscillator fades during runaway trends.

| Regime | Trend Definition | Volatility Profile | Key Indicators Signature | Optimal Strategy Playbook |
| :--- | :--- | :--- | :--- | :--- |
| **1. Trending Bull** | Consecutive HHs & HLs | Low-to-Moderate, steady | Price > 20 EMA > 50 EMA; ADX > 25 | Pullback buying, breakout continuation, trend trailing with ATR |
| **2. Trending Bear** | Consecutive LHs & LLs | High, sharp spikes | Price < 20 EMA < 50 EMA; -DI > +DI | Shorting bear flags, selling rallies into 20/50 EMA, cash preservation |
| **3. Mean-Reverting Range** | Horizontal bounds, no HH/LL | Low-to-Contracting | Flat 50 SMA; ADX < 20; RSI oscillates 35-65 | Range-edge fading, Bollinger Band mean-reversion, iron condors |
| **4. Volatility Expansion / Crisis** | Directionless gaps, wild swings | Extreme ATR, high VIX | Daily range > 2x ATR; wide Bandwidth | Straddles, reduced position sizes, tight time stops or sideline cash |

### Regime Identification Checklist

To classify the active regime, execute this three-step filter on the daily timeframe:

1. **Trend Strength Filter (ADX 14)**:
   - If **ADX > 25**: The market is in a **Trending Regime**. Disable oscillator overbought/oversold fades.
   - If **ADX < 20**: The market is in a **Mean-Reverting Regime**. Trend breakouts frequently fail.
2. **Moving Average Alignment (20 EMA & 50 EMA)**:
   - 20 EMA angled up and above 50 EMA = Bullish bias.
   - 20 EMA angled down and below 50 EMA = Bearish bias.
   - 20 EMA and 50 EMA crisscrossing horizontally = Range-bound chop.
3. **Volatility State (ATR & Bollinger Bandwidth)**:
   - Bandwidth at 6-month lows: **Volatility Compression**. A violent directional breakout regime is imminent.
   - Bandwidth at 6-month highs: **Volatility Exhaustion**. Trend momentum is likely approaching culmination.

---

## 3. Chart Types & Scaling Mechanics

```
Bar Chart       Candlestick        Heikin-Ashi
   High              High              High
   |                 |                 |
Open-+             [Body]            [Body]
   |                 |                 |
   +-Close           Low               Low
```

### Arithmetic vs. Logarithmic Scaling

- **Arithmetic (Linear) Scale**: Each price unit is spaced equally ($10 to $20 has the exact same vertical distance as $100 to $110). 
  - *When to use*: Intraday charts or short-term swing trading where price moves are under 15-20%.
- **Logarithmic (Semi-Log) Scale**: Equal vertical distance represents equal percentage changes ($10 to $20 is a 100% gain and takes the exact same vertical space as $100 to $200).
  - *When to use*: All multi-month, multi-year, and secular trendline analysis. Drawing arithmetic trendlines over multi-year bull runs distorts structural support and causes premature trendline breaks.

### Non-Time-Based Chart Formations

- **Point & Figure (P&F)**: Removes time entirely; only plots price changes that exceed a predefined box size (e.g., 3-box reversal). Filters market noise and emphasizes pure supply vs. demand.
- **Renko Charts**: Construct bricks based purely on price distance (e.g., 20 points). A new brick only prints when price clears the box threshold, clarifying the underlying trend.
