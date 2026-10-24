---
title: "Option Greeks, Pricing Models & Implied Volatility"
description: "Quantitative reference for option pricing, Black-Scholes intuition, the five Greeks (Delta, Gamma, Theta, Vega, Rho), Implied Volatility (IV), IV Rank, and volatility skew."
section: "derivatives"
sectionTitle: "Derivatives & Options"
order: 2
difficulty: "Advanced"
tags: ["Option Greeks", "Delta", "Theta", "Vega", "Implied Volatility", "IV Rank"]
keyTakeaways:
  - "Option Premium = Intrinsic Value + Extrinsic (Time) Value; extrinsic value decays to exactly zero at expiration."
  - "Delta measures directional price sensitivity and serves as a rough proxy for the probability of expiring In-the-Money."
  - "Gamma accelerates Delta; ATM options experience violent Gamma expansion in the final days of expiration."
  - "Theta decay is non-linear; the decay curve accelerates exponentially during the final 30 calendar days."
  - "Sell premium when IV Rank > 50 (elevated pricing); buy options or spreads when IV Rank < 20 (cheap volatility)."
---

## 1. Option Premium Decomposition & Pricing Models

Every option premium is composed of two distinct components:

```
Option Premium = Intrinsic Value + Extrinsic (Time) Value
```

- **Intrinsic Value**: The cash amount an option would yield if exercised immediately.
  - Call Intrinsic: `max(0, Spot - Strike)`
  - Put Intrinsic: `max(0, Strike - Spot)`
- **Extrinsic Value**: The premium paid above intrinsic value for the remaining time until expiration and expected volatility. At expiration (T = 0), Extrinsic Value is precisely zero.

### Black-Scholes-Merton Intuition
The theoretical price of a European option relies on five key inputs:
1. Current Spot Price (S)
2. Strike Price (K)
3. Time to Expiration (T)
4. Risk-Free Interest Rate (r)
5. **Implied Volatility (σ)** (The only unknown variable back-solved from live market prices).

---

## 2. The Option Greeks

The Greeks quantify how an option's market price changes in response to fluctuations in underlying price, time decay, volatility, and interest rates.

```
+--------------------------------------------------------------------------+
| GREEK   MEASURES                        LONG CALL  LONG PUT  SHORT OPTION|
+--------------------------------------------------------------------------+
| Delta   Price sensitivity ($1 move)     0 to +1.0  0 to -1.0 Flips sign  |
| Gamma   Rate of Delta change ($1 move)  Positive   Positive  Negative    |
| Theta   Time decay (1 day passing)      Negative   Negative  Positive    |
| Vega    IV sensitivity (1% IV change)   Positive   Positive  Negative    |
| Rho     Interest rate change (1% shift) Positive   Negative  Flips sign  |
+--------------------------------------------------------------------------+
```

### Delta (Δ)
- **Concept**: Sensitivity of option price to a $1.00 move in the underlying asset.
- **Intuition**: If a stock rises by $1.00, a Call option with a 0.50 Delta will increase in value by approximately $0.50.
- **Rule of Thumb**: Delta serves as a rough mathematical proxy for the market's implied probability that the option will expire In-the-Money (ITM). An ATM option has a Delta of ≈ 0.50 (50% probability). Deep ITM options approach 1.00; deep OTM options approach 0.00.

### Gamma (Γ)
- **Concept**: Rate of change of Delta per $1.00 move in the underlying asset.
- **Intuition**: If an option has Delta 0.50 and Gamma 0.05, a $1.00 increase in the stock raises the option's Delta to 0.55.
- **Gamma Risk**: Gamma peaks for At-the-Money options near expiration. This causes explosive directional Delta swings (the "Gamma Blast") where small spot moves create multi-hundred percent swings in premium.

### Theta (Θ)
- **Concept**: Measures the daily loss of option premium due purely to the passage of time, holding price and volatility constant.
- **The Decay Curve**: Theta decay is non-linear. Between 90 and 45 days to expiration, decay is slow and steady. In the final **30 to 14 days**, the Theta decay slope steepens exponentially. Option sellers position their entries 30 to 45 days before expiration to capture this acceleration.

### Vega (ν)
- **Concept**: The monetary change in option premium for every 1.0% absolute change in Implied Volatility (IV).
- **Practical Rule**: Vega is highest for longer-dated At-the-Money options. If IV drops by 5 points on an option with Vega 2.50, the contract loses $12.50 in extrinsic premium regardless of whether the stock moved.

---

## 3. Implied Volatility (IV) & Volatility Skew

### Historical vs. Implied Volatility
- **Historical Volatility (HV)**: Measures the annualized standard deviation of actual past price changes over a specific lookback period (e.g. 30-day realized volatility).
- **Implied Volatility (IV)**: The market's forward-looking consensus of price volatility over the life of the option contract, priced into current market premiums.

```
  [Volatility Skew / Reverse Smile in Equities]
  Implied
  Volatility (%)
     \
      \  <-- Put Skew (High demand for downside crash protection)
       \
        \______
               \______
                      \______ <-- Call options trade at lower IV
  ---------------------------------------------------> Strike Price
    Deep OTM Puts        ATM Strike        Deep OTM Calls
```

### IV Rank (IVR) vs. IV Percentile (IVP)

Raw IV is meaningless without relative context (a 25% IV on an index is extremely high, while a 25% IV on a biotech stock is extremely low).

```
IV Rank = [(Current IV - 52-Week Low IV) / (52-Week High IV - 52-Week Low IV)] * 100

IV Percentile = (Number of trading days in past year where IV was below Current IV / 252) * 100
```

### Strategic Playbook Based on IV Rank
- **IV Rank > 50 (High Volatility)**: Option premiums are expensive. Edge favors **Option Sellers** using credit spreads, iron condors, and covered calls.
- **IV Rank < 20 (Low Volatility)**: Option premiums are underpriced. Edge favors **Option Buyers** using long calls/puts, debit spreads, or calendar spreads.
- **IV Crush**: Immediately following a known binary event (corporate earnings report, national election, FDA approval), implied volatility collapses violently. Naked option buyers frequently lose capital even when correctly predicting price direction due to the rapid evaporation of Vega.
