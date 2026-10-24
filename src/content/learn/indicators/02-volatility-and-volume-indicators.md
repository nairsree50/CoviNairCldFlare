---
title: "Volatility & Volume Indicators Reference Manual"
description: "Quantitative manual for Bollinger Bands, Average True Range (ATR), VWAP, Volume Profile, and OBV: formulas, mathematical logic, and execution rules."
section: "indicators"
sectionTitle: "Technical Indicators Reference"
order: 2
difficulty: "Intermediate"
tags: ["Bollinger Bands", "ATR", "VWAP", "Volume Profile", "OBV", "Volatility"]
keyTakeaways:
  - "Bollinger Bands measure statistical dispersion; a Bandwidth squeeze indicates imminent volatility expansion."
  - "Average True Range (ATR) captures gaps and price extremes; use ATR multiples to set volatility-adjusted stops."
  - "Volume Weighted Average Price (VWAP) serves as the institutional liquidity benchmark; price above VWAP reflects intraday buyer control."
  - "Volume Profile identifies where actual business took place: Point of Control (POC) represents maximum institutional consensus."
---

## 1. Bollinger Bands & Volatility Squeezes

Developed by John Bollinger, Bollinger Bands enclose price within statistical standard deviation envelopes around a moving average.

```
Upper Band (20 SMA + 2 StdDev) -----------------/\---------------------------
                                               /  \   [Volatility Squeeze]
Middle Band (20 SMA) =========================/====\========----========----=
                                             /      \      /    \      /
Lower Band (20 SMA - 2 StdDev) -------------/--------v----/------\----/------
```

### Mathematical Construction
1. **Middle Band**: 20-period Simple Moving Average (`SMA_20`).
2. **Upper Band**: `SMA_20 + (2 * σ_20)`
3. **Lower Band**: `SMA_20 - (2 * σ_20)`
   Where `σ` is the 20-day sample standard deviation of closing prices.
4. **Bollinger Bandwidth**: Measures percentage spread between bands:
   ```
   Bandwidth = ((Upper Band - Lower Band) / Middle Band) * 100
   ```
5. **%B**: Quantifies where current price sits relative to the bands:
   ```
   %B = (Price - Lower Band) / (Upper Band - Lower Band)
   ```

### Actionable Setup: The Bollinger Squeeze Breakout
- **Market Regime**: Volatility Compression (Bandwidth reaches its lowest level in 6 months).
- **Trigger**: First daily bar closing completely outside the upper band (for long) or lower band (for short), accompanied by rising volume and an expanding Bandwidth line.
- **Stop Loss**: The 20 SMA (Middle Band) or 1 ATR below the breakout candle.
- **Target**: Ride the trend until a candle closes back inside the opposite side of the 20 SMA.
- **Common Trap**: Assuming that touching an upper band is automatically a sell signal. In a strong trending regime, price will "walk the upper band" for weeks.

---

## 2. Average True Range (ATR)

J. Welles Wilder developed the Average True Range to measure market volatility without directional bias, accounting for gaps between trading sessions.

### Mathematical Construction

The **True Range (TR)** is the greatest of three values:
- Current High minus Current Low: `High - Low`
- Absolute value of Current High minus Previous Close: `|High - Close_prev|`
- Absolute value of Current Low minus Previous Close: `|Low - Close_prev|`

```
TR  = max(High - Low, |High - Close_prev|, |Low - Close_prev|)
ATR = [(Prior ATR * 13) + Current TR] / 14
```

### Practical Applications
1. **Volatility-Adjusted Stop Placement (Chandelier Exit)**:
   - For long trades: `Stop Loss = Highest High(n) - (2.5 * ATR_14)`.
   - Eliminates getting stopped out by standard random market noise while protecting against structural breakdowns.
2. **Dynamic Volatility Position Sizing**:
   ```
   Shares = (Account Capital * Risk %) / (2 * ATR_14)
   ```
   Higher volatility automatically scales down position size, equalizing risk across different market assets.

---

## 3. Volume-Weighted Average Price (VWAP)

VWAP represents the true average price an asset traded at throughout the session, weighted by volume at each transaction price.

```
VWAP = Sum(Typical Price * Volume) / Sum(Volume)
where Typical Price = (High + Low + Close) / 3
```

```
+2 StdDev Band --------------------------------------------------------------
+1 StdDev Band --------------------------------------------------------------
VWAP ======================================================================== (Fair Value)
-1 StdDev Band --------------------------------------------------------------
-2 StdDev Band --------------------------------------------------------------
```

### Strategic Rules
- **Institutional Benchmark**: Institutional algorithms execution desks are measured against VWAP. Buying below VWAP is considered value accumulation; buying above VWAP indicates momentum aggression.
- **Intraday Trend Filter**: If price is above rising VWAP, focus strictly on long pullbacks. If price is below descending VWAP, focus on short rallies.
- **Anchored VWAP (AVWAP)**: Anchored to a significant catalyst (earnings release, swing low, RBI/Fed interest rate announcement, market open of month). Measures whether participants who bought since that event are in profit or loss.

---

## 4. Volume Profile & On-Balance Volume (OBV)

Volume indicators evaluate the degree of institutional conviction behind price movements.

```
[Volume Profile]                [Price Chart]
  VAH (Value Area High) --------|-----------/\----------
                                |          /  \
  POC (Point of Control) =======|=========/====\========= (Maximum Traded Volume)
                                |   /\   /      \
  VAL (Value Area Low) ---------|--/--\-/--------v-------
```

### Volume Profile Architecture
- **Point of Control (POC)**: The single price level where the highest volume of shares/contracts traded during the specified timeframe. Serves as a magnet and primary support/resistance.
- **Value Area (VA)**: The price range where 70% of total volume was transacted.
  - **Value Area High (VAH)**: Top boundary of the fair value zone.
  - **Value Area Low (VAL)**: Bottom boundary of the fair value zone.
- **Execution Rule**: When price opens outside the Value Area and re-enters, it has an 80% statistical probability of rotating across the entire value range to test the opposite boundary (The 80% Rule).

### On-Balance Volume (OBV)

Developed by Joe Granville, OBV calculates a cumulative total of volume:
- If today's Close > yesterday's Close: `OBV = Prior OBV + Today's Volume`
- If today's Close < yesterday's Close: `OBV = Prior OBV - Today's Volume`
- If today's Close == yesterday's Close: `OBV = Prior OBV`

**Divergence Signal**: If price creates a new swing high but OBV fails to exceed its prior peak, smart-money distribution is occurring beneath the surface.
