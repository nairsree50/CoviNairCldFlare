---
title: "Core Option Strategies Handbook & Payoff Mechanics"
description: "Desk reference for essential option structures: Covered Calls, Spreads, Straddles, and Iron Condors with exact formulas for max profit, max loss, and breakevens."
section: "derivatives"
sectionTitle: "Derivatives & Options"
order: 3
difficulty: "Intermediate"
tags: ["Option Strategies", "Spreads", "Iron Condor", "Covered Call", "Straddle"]
keyTakeaways:
  - "Vertical spreads define risk and eliminate overnight ruin by buying an offsetting further OTM wing."
  - "Covered Calls and Cash-Secured Puts generate recurring cash flow in neutral-to-moderately bullish markets."
  - "Iron Condors capture time decay in range-bound regimes when IV Rank is elevated above 50."
  - "Long Straddles profit from massive volatility expansion independent of direction; short straddles capture theta decay."
---

## 1. Income & Capital Preservation Strategies

```
      COVERED CALL PAYOFF                      PROTECTIVE PUT (COLLAR)
Profit                                  Profit
  |        /====== (Capped Max Gain)      |             / (Unlimited Gain)
  |       /                               |            /
--+------/------------                  --+-----------/-------
  |     /                                 |  ========/ (Capped Floor / Zero Downside)
  |    /                                  |
Loss v                                  Loss v
```

### Covered Call
- **Structure**: Long 100 Shares of Stock + Short 1 OTM Call (Strike K_call).
- **Market Bias**: Neutral to Moderately Bullish.
- **Payoff Formulas**:
  - `Max Profit = (Strike Call - Stock Purchase Price) + Net Premium Received`
  - `Max Loss = Stock Purchase Price - Net Premium Received` (downside open to zero).
  - `Breakeven = Stock Purchase Price - Net Premium Received`
- **Optimal Regime**: Low-to-moderate volatility in an asset consolidating near resistance.

### Cash-Secured Put (CSP)
- **Structure**: Sell 1 OTM Put (Strike K_put) while holding 100% of strike cash collateral in high-yield cash equivalents.
- **Market Bias**: Neutral to Bullish; willingness to own the asset at a discounted strike price.
- **Payoff Formulas**:
  - `Max Profit = Net Premium Collected`
  - `Max Loss = Strike Put - Net Premium Collected`
  - `Breakeven = Strike Put - Net Premium Collected`

---

## 2. Directional Vertical Spreads

Vertical spreads combine a long option and a short option of the same expiration date at different strike prices.

```
      BULL CALL DEBIT SPREAD                  BEAR PUT DEBIT SPREAD
Profit                                  Profit
  |          /===== (Max Profit)          |  =====\ (Max Profit)
  |         /                             |        \
--+--------/--------                    --+---------\---------
  |  =====/ (Max Loss = Net Debit)        |          \===== (Max Loss = Net Debit)
Loss v                                  Loss v
```

### Bull Call Spread (Debit Call Spread)
- **Structure**: Buy Lower Strike Call (K1) + Sell Higher Strike Call (K2).
- **Market Bias**: Moderately Bullish.
- **Payoff Formulas**:
  - `Max Loss = Net Debit Paid`
  - `Max Profit = (Strike K2 - Strike K1) - Net Debit Paid`
  - `Breakeven = Strike K1 + Net Debit Paid`
- **Advantage**: The short call finances part of the long call and offsets Theta decay and Vega risk.

### Bull Put Spread (Credit Put Spread)
- **Structure**: Sell Higher Strike Put (K2) + Buy Lower Strike Put (K1) for downside tail protection.
- **Market Bias**: Bullish to Neutral.
- **Payoff Formulas**:
  - `Max Profit = Net Credit Received`
  - `Max Loss = (Strike K2 - Strike K1) - Net Credit Received`
  - `Breakeven = Strike K2 - Net Credit Received`
- **Optimal Regime**: High IV Rank (>50) where underlying price is above key structural support.

---

## 3. Non-Directional & Volatility Strategies

```
         IRON CONDOR                            LONG STRADDLE
Profit                                  Profit
  |     /============\ (Max Profit)       | \                /
  |    /              \                   |  \              /
--+---/----------------\----            --+---\------------/--
  |==/                  \=== (Max Loss)   |    \==========/ (Max Loss = Premium)
Loss v                                  Loss v
```

### Iron Condor (Range-Bound Volatility Seller)
- **Structure**: 
  1. Bull Put Credit Spread: Buy OTM Put (K1) + Sell higher OTM Put (K2).
  2. Bear Call Credit Spread: Sell OTM Call (K3) + Buy higher OTM Call (K4).
- **Market Bias**: Neutral (expecting price to stay contained between short strikes K2 and K3).
- **Payoff Formulas**:
  - `Max Profit = Total Net Credit Collected`
  - `Max Loss = Wing Width - Total Net Credit Collected` (where Wing Width = K2 - K1).
  - **Upper Breakeven**: `Strike K3 + Net Credit`
  - **Lower Breakeven**: `Strike K2 - Net Credit`
- **Execution Rule**: Open 30-45 days before expiration when IV Rank is >50. Close position at 50% of maximum profit to eliminate tail risk.

### Long Straddle (Pure Volatility Buyer)
- **Structure**: Buy 1 ATM Call (Strike K) + Buy 1 ATM Put (Strike K) of the same strike and expiration.
- **Market Bias**: Aggressively Volatile (direction agnostic; expecting a massive move).
- **Payoff Formulas**:
  - `Max Loss = Total Premium Paid for Call + Put`
  - `Max Profit = Unlimited`
  - **Upper Breakeven**: `Strike K + Total Premium`
  - **Lower Breakeven**: `Strike K - Total Premium`
- **Execution Rule**: Open only when IV Rank is extremely low (<15) prior to an unexpected news cycle or severe volatility compression.
