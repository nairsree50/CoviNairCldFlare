---
title: "Trading Desk Quick Reference Cheat Sheet"
description: "Instant lookup matrix for active trading: chart pattern triggers, indicator failure modes, option strategy selection tables, and pre-trade risk checklists."
section: "risk-and-systems"
sectionTitle: "Risk & Trading Systems"
order: 2
difficulty: "Beginner"
tags: ["Cheat Sheet", "Desk Reference", "Matrix", "Execution Rules"]
keyTakeaways:
  - "Quick-reference matrices allow instant verification of entry criteria, stop placement, and invalidation rules."
  - "Always check IV Rank before selecting between naked options, debit spreads, or credit structures."
  - "Every order execution must satisfy the Pre-Trade Risk Checklist before capital is committed."
---

## 1. Classical & Price Action Pattern Quick Matrix

| Pattern Name | Bias | Confirmation Trigger | Invalidation / Stop Loss | Measured Target Formula |
| :--- | :--- | :--- | :--- | :--- |
| **Pin Bar / Hammer** | Bullish | Daily close above candle high | 1 tick below lowest low of wick | Prior swing high or 2:1 R:R |
| **Shooting Star** | Bearish | Daily close below candle low | 1 tick above highest high of wick | Prior swing low or 2:1 R:R |
| **Bullish Engulfing** | Bullish | Close above high of candle 1 | 1 ATR below low of engulfing bar | Prior swing high or 1.618 Fib |
| **Bearish Engulfing** | Bearish | Close below low of candle 1 | 1 ATR above high of engulfing bar | Prior swing low or 1.618 Fib |
| **Head & Shoulders** | Bearish Reversal | Decisive close below Neckline | Above the Right Shoulder peak | Height of Head projected down |
| **Inverse H&S** | Bullish Reversal | Decisive close above Neckline | Below the Right Shoulder trough | Height of Head projected up |
| **Bull Flag** | Bullish Continuation | Breakout above upper flag channel | Below lowest swing of flag channel | Length of Flagpole added to break |
| **Bear Flag** | Bearish Continuation | Breakdown below lower flag channel | Above highest swing of flag channel | Length of Flagpole subtracted |
| **Ascending Triangle** | Bullish | High-volume close above ceiling | Below most recent higher low | Triangle widest height added |
| **Descending Triangle**| Bearish | High-volume close below floor | Above most recent lower high | Triangle widest height subtracted |
| **Fair Value Gap (FVG)**| Trend-aligned | Retest/mitigation into gap zone | Below origin candle of the gap | Opposing liquidity pool / swing |

---

## 2. Technical Indicators Quick Matrix

| Indicator | Type / Category | Best Regime | Primary Bullish Signal | Primary Bearish Signal | Common Trap / Failure Mode |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **20 / 50 EMA** | Trend Following | Strong Trend | 20 EMA > 50 EMA; pullback test | 20 EMA < 50 EMA; rally rejection | Frequent whipsaws during sideways consolidation. |
| **200 SMA** | Macro Trend | Primary Cycle | Daily close clearing above line | Daily close breaking below line | Lagging signal; bad for short-term swing timing. |
| **MACD (12,26,9)** | Momentum | Trending | Line crosses above Signal line | Line crosses below Signal line | False crosses inside flat low-volatility ranges. |
| **RSI (14)** | Oscillator | Range-Bound / Div | Regular Bullish Divergence | Regular Bearish Divergence | Shorting at 70 RSI during a runaway bull trend. |
| **ADX (14)** | Trend Strength | Any | ADX > 25 with +DI > -DI | ADX > 25 with -DI > +DI | ADX does not indicate direction, only strength. |
| **Bollinger Bands**| Volatility | Range / Squeeze | Breakout from 6-month narrow Band | Breakdown from 6-month narrow Band | Assuming upper band tag is an automatic sell. |
| **ATR (14)** | Volatility Size | Any | ATR expansion confirms breakout | Contracting ATR warns of consolidation | Not directional; purely measures price variance. |
| **VWAP** | Institutional | Intraday Trend | Price opens above rising VWAP | Price opens below falling VWAP | Clustered chop around VWAP at lunch sessions. |

---

## 3. Options Strategy Decision Tree Matrix

| Market Direction | Volatility State (IV Rank) | Recommended Strategy | Max Gain | Max Loss | Key Risk / Greek Exposure |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Strongly Bullish** | Low (IVR < 25) | **Long Call / Bull Call Spread** | Substantial / Defined | Net Premium Paid | Theta decay if move stalls; Vega loss. |
| **Moderately Bullish**| High (IVR > 50) | **Bull Put Credit Spread** | Net Credit Received | Spread Width - Net Credit | Downside tail risk if market crashes. |
| **Strongly Bearish** | Low (IVR < 25) | **Long Put / Bear Put Spread** | Substantial / Defined | Net Premium Paid | Theta decay if move takes too long. |
| **Moderately Bearish**| High (IVR > 50) | **Bear Call Credit Spread** | Net Credit Received | Spread Width - Net Credit | Upside gap risk through short strike. |
| **Neutral / Range** | High (IVR > 50) | **Iron Condor** | Total Net Credit | Wing Width - Net Credit | Gamma explosion if one side breached near expiry. |
| **Explosive Move** | Low (IVR < 20) | **Long Straddle / Strangle** | Unlimited | Total Debit Paid | Double Theta decay if asset remains range-bound. |
| **Stock Accumulation**| Elevated (IVR > 40) | **Cash-Secured Put** | Premium Collected | Strike - Premium | Forced assignment of falling stock. |

---

## 4. The Pre-Trade Execution Checklist

Before pressing the buy or sell order button on any terminal, confirm every item on this checklist:

```
[ ] 1. REGIME CONFIRMATION
       Is the broader market (Index) aligned with the trade direction?
       Is the asset trending or range-bound?

[ ] 2. CONFLUENCE CHECK
       Are there at least two distinct technical confirmations?
       (e.g., Support level + Pin bar + 20 EMA + RSI divergence).

[ ] 3. DEFINED STOP LOSS
       Is there a clear, objective structural invalidation level?
       Never enter without an active mechanical stop loss order.

[ ] 4. POSITION SIZING MATH
       Did you calculate share size based on:
       Quantity = (Account Equity * 1%) / (Entry - Stop)?
       Is total potential loss strictly <= 1% to 2% of equity?

[ ] 5. REWARD-TO-RISK RATIO (RRR)
       Is the realistic first target at least 2x the stop loss distance (2.0:1 R:R)?
       If less than 1.5:1, skip the trade.

[ ] 6. EVENT & EARNINGS RISK
       Are there earnings announcements, RBI/Fed interest rate decisions, or CPI 
       prints scheduled in the next 48 hours?
```
