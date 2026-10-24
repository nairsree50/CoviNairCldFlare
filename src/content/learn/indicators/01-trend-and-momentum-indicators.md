---
title: "Trend & Momentum Indicators Reference Manual"
description: "In-depth quantitative manual for Moving Averages, MACD, RSI, Stochastics, and ADX: mathematical construction, formulas, market regimes, and execution rules."
section: "indicators"
sectionTitle: "Technical Indicators Reference"
order: 1
difficulty: "Intermediate"
tags: ["Moving Averages", "MACD", "RSI", "ADX", "Momentum", "Indicators"]
keyTakeaways:
  - "Moving averages lag price; use EMAs for dynamic momentum and SMAs for institutional multi-month benchmarks."
  - "MACD measures the convergence and divergence of two moving averages; histogram divergences precede price reversals."
  - "RSI momentum ranges shift by regime: 40-80 in bull trends and 20-60 in bear trends."
  - "ADX quantifies trend strength independent of direction; ADX above 25 confirms a trending regime, below 20 confirms range-bound chop."
---

## 1. Moving Averages (SMA, EMA, WMA)

Moving averages smooth raw price data to filter short-term market noise and identify trend direction.

### Mathematical Construction

- **Simple Moving Average (SMA)**: Unweighted arithmetic mean of closing prices over *n* periods:
  ```
  SMA = (P[t] + P[t-1] + ... + P[t-n+1]) / n
  ```
- **Exponential Moving Average (EMA)**: Applies exponentially decreasing weights, prioritizing recent price data:
  ```
  EMA[t] = (P[t] * k) + (EMA[t-1] * (1 - k))   where k = 2 / (n + 1)
  ```
- **Weighted Moving Average (WMA)**: Linearly weights recent prices higher by multiplying each day by its day rank.

### Indicator Matrix & Regime Usage

| Moving Average | Type | Best Regime | Primary Function |
| :--- | :--- | :--- | :--- |
| **9 / 20 EMA** | Fast Trend | Strong Trending Bull/Bear | Short-term momentum guide and dynamic trailing stop. |
| **50 EMA / SMA** | Intermediate Trend | Primary Trending Cycle | Institutional pullback entry zone for secondary reactions. |
| **200 SMA** | Macro Benchmark | Secular Bull/Bear Divider | Global institutional risk-on / risk-off threshold. |

### Concrete Trade Setup: The 20/50 EMA Trend Pullback
- **Market Regime**: Strong Trending Bull (Price > 20 EMA > 50 EMA; both lines sloping upward).
- **Trigger**: Price pulls back to touch the dynamic zone between the 20 EMA and 50 EMA, followed by a bullish reversal candlestick (e.g., pin bar or hammer) closing back above the 20 EMA.
- **Stop Loss**: 1 ATR below the swing low formed during the test of the 50 EMA.
- **Target**: Retest of the prior swing high (1st target), then trail with the 20 EMA until a daily close below it.
- **Common Trap**: Taking moving average crossover signals in a sideways, flat regime (whipsaw guaranteed).

---

## 2. Moving Average Convergence Divergence (MACD)

Developed by Gerald Appel, the MACD turns two trend-following moving averages into a momentum oscillator.

```
MACD Line (12 EMA - 26 EMA) ------------------/\--------/\------------------
Signal Line (9 EMA of MACD) -------------\---/--\------/--\-----------------
                                          \ /    \    /    \
Zero Line =================================X======\==/======X================
                                                  Histogram Divergence
```

### Mathematical Construction
1. **MACD Line**: `12 EMA - 26 EMA`
2. **Signal Line**: 9-period EMA of the MACD Line: `EMA_9(MACD Line)`
3. **MACD Histogram**: `MACD Line - Signal Line`

### Signal Types & Interpretation
- **Signal Line Crossover**: MACD line crossing above Signal line indicates accelerating upward momentum; crossing below indicates downside momentum.
- **Zero-Line Crossover**: Confirms that the 12 EMA has crossed the 26 EMA. Above zero = net bullish short-term trend; below zero = net bearish short-term trend.
- **Histogram Momentum Shift**: When the histogram peaks and prints a smaller bar, momentum is decelerating before price has actually reversed.

---

## 3. Relative Strength Index (RSI)

Developed by J. Welles Wilder Jr., the RSI measures the speed and change of price movements on an index scaled from 0 to 100.

### Mathematical Construction
```
RSI = 100 - [100 / (1 + RS)]
RS  = Smoothed Average Gain (14 periods) / Smoothed Average Loss (14 periods)
```
Wilder used *n = 14* and applied modified exponential smoothing (Wilder's smoothing).

```
Overbought (70) -------------------------------------------------------------
                              /\ [Regular Bearish Divergence]
                             /  \         /\
                            /    \       /  \
Midpoint (50) =============/======\=====/====\================================
                          /        \   /
                         /          \ /
Oversold (30) ----------/------------v---------------------------------------
```

### Regime-Dependent RSI Ranges (Andrew Cardwell Framework)
The standard 70 overbought / 30 oversold thresholds fail during persistent trends. Modern CMT analysis applies regime-shifted ranges:
- **Bullish Regime**: RSI oscillates between **40 and 80**. 40-50 acts as support on pullbacks; reaching 70-80 reflects trend strength, not an immediate shorting signal.
- **Bearish Regime**: RSI oscillates between **20 and 60**. 50-60 acts as overhead resistance on bounces; reaching 20-30 reflects dominant selling pressure.

### Regular vs. Hidden Divergence Guide

| Divergence Type | Price Action | RSI Indicator Action | Market Implication |
| :--- | :--- | :--- | :--- |
| **Regular Bearish Divergence** | Higher High (HH) | Lower High (LH) | Trend reversal: Buyer exhaustion. |
| **Regular Bullish Divergence** | Lower Low (LL) | Higher Low (HL) | Trend reversal: Seller exhaustion. |
| **Hidden Bullish Divergence** | Higher Low (HL) | Lower Low (LL) | Trend continuation: Underlying trend strength. |
| **Hidden Bearish Divergence** | Lower High (LH) | Higher High (HH) | Trend continuation: Trend resumption downward. |

---

## 4. Average Directional Index & DMI (ADX)

Also created by J. Welles Wilder, the ADX system separates **trend strength** from **trend direction**.

### Construction & Components
- **+DI (Positive Directional Indicator)**: Quantifies upward price movement.
- **-DI (Negative Directional Indicator)**: Quantifies downward price movement.
- **Directional Movement Index (DX)**: `DX = (|+DI - -DI| / (+DI + -DI)) * 100`
- **ADX**: 14-period smoothed moving average of DX.

### Practical Regime Interpretation
- **ADX > 25**: Strong trending regime. Trade strictly with trend-following continuation setups.
- **ADX > 40**: Overextended / parabolic trend. Tighten trailing stops; avoid opening fresh breakout positions.
- **ADX < 20**: Weak trend or sideways trading range. Disable trend-following systems; deploy range-bound mean-reversion tactics.
- **Direction Confirmation**: If **ADX > 25** and **+DI > -DI**, the trend is strongly bullish. If **ADX > 25** and **-DI > +DI**, the trend is strongly bearish.
