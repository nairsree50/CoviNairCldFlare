---
title: "Market Structure, Support & Resistance, and Trendlines"
description: "Systematic price geometry: identifying swing highs and lows, structural shifts (BOS vs. CHoCH), the Polarity Principle, and rigorous trendline construction."
section: "cmt"
sectionTitle: "Market Regimes & CMT Foundations"
order: 2
difficulty: "Intermediate"
tags: ["Market Structure", "Support & Resistance", "BOS", "CHoCH", "Polarity Principle"]
keyTakeaways:
  - "Market structure defines trend state through sequences of Higher Highs (HH) / Higher Lows (HL) or Lower Highs (LH) / Lower Lows (LL)."
  - "Break of Structure (BOS) indicates trend continuation; Change of Character (CHoCH) indicates the first structural shift signaling trend reversal."
  - "The Polarity Principle states that broken support transforms into valid resistance, and broken resistance becomes support."
  - "Valid trendlines require three distinct touchpoints; two points establish a tentative line, the third confirms validity."
---

## 1. Market Structure Geometry

Market structure forms the foundation of pure price action. Regardless of indicators, price moves through cycles of structural expansion and contraction.

```
       BULLISH STRUCTURE                      BEARISH STRUCTURE
              HH3                                    LH1
             /\                                     /\
            /  \       BOS                         /  \
      HH2  /    \      -->                        /    \      BOS
      /\  /      \                          LL1  /      \     -->
     /  \/        \                         /\  /        \
    /   HL2        \                       /  \/          \
   /                \                     /   LH2          \
  /                  \                   /                  \
HL1                   \                 /                    \
                       \               /                      \
                        \             /                        v
                         v           v                        LL3
                    [CHoCH Alert]   LL2
```

### Swing Points & Structural Labeling

1. **Swing High (SH)**: A candle peak with at least two lower highs to its immediate left and two lower highs to its immediate right (a 5-bar fractal).
2. **Swing Low (SL)**: A candle trough with at least two higher lows to its immediate left and two higher lows to its immediate right.
3. **Uptrend Definition**: A verified sequence of Higher Highs (HH) followed by Higher Lows (HL). The trend remains bullish as long as the most recent HL holds on a daily closing basis.
4. **Downtrend Definition**: A verified sequence of Lower Lows (LL) followed by Lower Highs (LH). The trend remains bearish until the most recent LH is breached by a decisive daily close.

### BOS vs. CHoCH: Reading Structural Transitions

| Structural Event | Definition | Market Implication | Execution Rule |
| :--- | :--- | :--- | :--- |
| **Break of Structure (BOS)** | Price breaks beyond the prior swing high (in an uptrend) or prior swing low (in a downtrend) in the same direction. | Confirms continuation of the dominant trend. | Look for pullbacks into the origin of the impulse leg to join the trend. |
| **Change of Character (CHoCH)** | In an uptrend, price breaks below the most recent Higher Low (HL). In a downtrend, price clears the prior Lower High (LH). | First structural warning that order flow has shifted. Trend reversal or deep consolidation imminent. | Cease trading continuation setups; await retest of broken level or new confirmation. |

---

## 2. Support & Resistance Mechanics

Support and resistance are horizontal price zones where supply and demand reach temporary equilibrium or sharp reversal.

```
Resistance Zone --------------------------------------------- (Sellers / Supply)
                        /\            /\
                       /  \          /  \
                      /    \        /    \
                     /      \      /      \
                    /        \    /        \
                   /          \  /          \
Support Zone ------------------\/------------\--------------- (Buyers / Demand)
                                              \
                                               \ [Breakdown]
                                                v
Old Support -> NEW RESISTANCE -------------------/\---------- (Polarity Principle)
                                                /  \
                                               /    \
```

### The Polarity Principle

When a support level is decisively broken by a high-volume closing bar, that same level flips to become future resistance upon retest. Conversely, once an overhead resistance ceiling is broken, it acts as a floor of support.

**Economic Logic**:
1. Traders who bought at support and suffered an unexpected breakdown find themselves underwater.
2. When price rallies back to their original breakeven price, they eagerly sell to recover capital without a loss.
3. Short sellers who missed the initial breakdown place new short orders at the prior support level, reinforcing supply.

### Static vs. Dynamic S&R

- **Static S&R**: Horizontal price levels derived from prior swing highs/lows, multi-year peaks, round psychological numbers (e.g., 20,000 / 25,000 on indices), or high-volume consolidation nodes.
- **Dynamic S&R**: Trailing trendlines, exponential moving averages (20 EMA, 50 EMA, 200 SMA), and Bollinger Band envelopes that adjust continuously as price progresses.

---

## 3. Trendlines and Regression Channels

A trendline is a straight line connecting a series of ascending troughs in an uptrend or descending peaks in a downtrend.

### Rules of Construction

1. **The Three-Point Rule**:
   - **Tentative Line**: Two points are required to draw a provisional trendline.
   - **Confirmed Line**: A third distinct reaction touchpoint confirms that the market recognizes this boundary.
2. **Angle of Ascent (The 45-Degree Rule)**:
   - A sustainable primary trend typically rises at roughly a 45-degree angle.
   - Steeper lines (>60 degrees) indicate unsustainable speculative mania and lead to violent vertical breakdowns.
   - Flatter lines (<20 degrees) indicate weak momentum and frequently turn into sideways trading ranges.
3. **Internal Trendlines**:
   - Drawn through the dense body clusters of candlesticks rather than extreme outlier wicks caused by illiquid spikes or news-driven flash crashes. Useful during choppy trends.

```
       [Regression / Parallel Trend Channel]
Upper Channel Line (Overbought / Take Profit Target)
       --------------------------------------------
      /        /        /        /        /
     /   /\   /   /\   /   /\   /   /\   /
    /   /  \ /   /  \ /   /  \ /   /  \ /
   /   /    v   /    v   /    v   /    v
  /---/--------/--------/--------/----------
Lower Channel Line (Support / Trend Entry Zone)
```

### Fan Lines (Trend Deceleration)

When an initial steep trendline breaks, price often pulls back and forms a slightly flatter trendline. Charles Dow and CMT technical theory identify the **Three-Fan-Line Principle**:
1. Line 1 breaks: Indicates initial momentum exhaustion.
2. Line 2 breaks: Indicates secondary trend deterioration.
3. Line 3 breaks: Confirms a complete structural reversal of the primary trend.
