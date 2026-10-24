---
title: "Candlestick Anatomy & Reversal Setups Codex"
description: "Master handbook for Japanese candlestick patterns: single-candle rejection bars, multi-candle reversals, inside bars, exact execution triggers, and stop placement rules."
section: "price-action"
sectionTitle: "Price Action & Pattern Codex"
order: 1
difficulty: "Beginner"
tags: ["Candlesticks", "Pin Bar", "Engulfing", "Morning Star", "Price Action"]
keyTakeaways:
  - "Candlestick wicks reveal rejected prices where aggressive limit orders absorbed market momentum."
  - "A pin bar or hammer is only valid when printed at a key structural support/resistance level or moving average."
  - "Bullish/Bearish Engulfing setups represent a complete shift in market dominance within a single session."
  - "An Inside Bar indicates volatility contraction; trade the breakout in the direction of the underlying primary trend."
---

## 1. Candlestick Anatomy & The Auction Footprint

A Japanese candlestick represents the completed auction between buyers and sellers over a specific timeframe.

```
       BULLISH CANDLE                     BEARISH CANDLE
            High                                High
             |   <-- Upper Wick (Rejection)      |
      +--------------+                    +--------------+  <-- Open
      |              |                    |//////////////|
      |  Real Body   |                    |// Real Body//|
      |  (Expansion) |                    |//////////////|
      +--------------+  <-- Close         +--------------+  <-- Close
             |                                   |
             |   <-- Lower Wick (Absorption)     |
            Low                                 Low
```

### Key Interpretations
- **Real Body**: Represents the net distance traveled between the open and close. A large real body indicates decisive institutional commitment in one direction.
- **Wicks (Shadows)**: Represent rejected price levels. A long upper wick indicates that buyers attempted to push prices higher, but institutional limit sell orders absorbed the demand and drove price back down before the close.
- **Close Location**: The position of the close relative to the total high-low range reveals who won the auction. A close in the top 25% of the bar confirms buyer dominance.

---

## 2. High-Probability Single-Candle Patterns

### Pin Bar / Hammer / Shooting Star

```
       HAMMER (Bullish Reversal)          SHOOTING STAR (Bearish Reversal)
                 |                                      High
                 |                                       |
           +-----------+                           +-----------+
           | Real Body |                           | Real Body |
           +-----------+                           +-----------+
                 |                                       |
                 |                                       |
                 | <-- Long Lower Wick                   | <-- Long Upper Wick
                 |     (>= 2/3 of total)                 |     (>= 2/3 of total)
                 v                                       v
```

- **Anatomy Rules**:
  1. The tail (wick) must comprise at least **two-thirds (66%)** of the entire candle's range.
  2. The real body must be small and sit entirely at one end of the candle.
  3. The opposite wick must be tiny or non-existent.
- **Execution Rules**:
  - *Trigger*: Entry upon the break of the candle's nose (e.g. 1 tick above the hammer's high).
  - *Stop Loss*: 1 tick or 0.2 ATR below the extreme low of the tail.
  - *Target*: Minimum 2:1 Reward-to-Risk ratio or the nearest structural swing high.
  - *Filter*: Never trade a hammer in the middle of a consolidating range; it must occur after a multi-bar selloff into a documented support zone or key moving average.

### Marubozu (Decisive Expansion)
- **Anatomy**: Long real body with virtually zero upper or lower wick. Open is the low (or high), and close is the high (or low).
- **Execution**: Signals powerful institutional trend continuation. When price breaks out of a multi-week base with a daily Marubozu, buy on the close or on a 38.2% intraday retracement into the Marubozu body.

### Doji Formations
A Doji prints when the open and close are virtually identical, reflecting market indecision.
- **Dragonfly Doji**: Long lower wick, no upper wick, open/close at the very high. Strong bullish rejection of lower prices.
- **Gravestone Doji**: Long upper wick, no lower wick, open/close at the very low. Powerful bearish rejection of higher prices.

---

## 3. High-Probability Multi-Candle Setups

### Bullish & Bearish Engulfing

```
      BULLISH ENGULFING                          BEARISH ENGULFING
      Candle 1    Candle 2                       Candle 1    Candle 2
         |           |                              |           |
       +---+       +----+                         +----+      +---+
       |///|       |    |                         |    |      |///|
       |///|       |    |                         |    |      |///|
       +---+       |    |                         +----+      |///|
         |         +----+                           |         +---+
                     |                                          |
```

- **Anatomy Rules**:
  1. Candle 1 has a relatively small body aligned with the current pullback.
  2. Candle 2 opens at or below the prior close, and its real body completely covers (engulfs) the entire real body of Candle 1.
  3. Volume on Candle 2 expands significantly relative to Candle 1.
- **Execution Rules**:
  - *Trigger*: Buy on the close of the engulfing candle or on a break of its high next bar.
  - *Stop Loss*: Placed 1 ATR below the low of Candle 2.
  - *Target*: Prior swing high or 1.618 Fibonacci extension of the swing leg.

### Morning Star & Evening Star (Three-Candle Reversal)

```
                     MORNING STAR (Bullish)
            Candle 1 (Bearish)      Candle 3 (Bullish)
                    |                       |
                  +---+                   +---+
                  |///|                   |   |
                  |///|     Candle 2      |   |
                  +---+      (Star)       +---+
                    |         +---+         |
                              |   |
                              +---+
```

1. **Candle 1**: Strong, impulsive bar in the direction of the preceding trend.
2. **Candle 2 (Star)**: Small-bodied candle or doji gapping down (or stalling), showing sudden deceleration of selling pressure.
3. **Candle 3**: Large bullish candle closing deeply inside (at least >50%) the body of Candle 1.
- **Execution Rule**: Buy on the close of Candle 3. Place stop below the lowest low of the 3-candle cluster.

### Inside Bar (Harami) Setup
- **Anatomy**: A candle whose high and low fall completely within the high-to-low range of the preceding bar (the Mother Bar).
- **Execution**: Represents energy coil and volatility contraction. In an uptrend, place a buy stop 1 tick above the Mother Bar's high. Stop loss goes below the Inside Bar's low.
