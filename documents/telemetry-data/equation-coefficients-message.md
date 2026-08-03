---
order: "13.5"
title: Equation Coefficients Message
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Equation Coefficients message contains three coefficients (a, b and c) for each of the five analog channels.

**Telemetry Equation Coefficients Message Data**

The list may stop at any field. Value = a x v^2 + b x v + c

Format:
```
EQNS.a,b,c,a,b,c,a,b,c,a,b,c,a,b,c
```
Bytes: 5 n n n n n n n n n n n n n n n

**Example:**
```
:N0QBF-11V:EQNS.0,5.2,0,0,.53,-32,3,4.39,49,-32,3,18,1,2,3
```
To obtain the final value of an analog channel, these coefficients are substituted into the equation: a x v^2 + b x v + c, where v is the raw received analog value.

For example, analog channel A1 in the above beacon examples relates to the battery voltage, expressed in hundredths of volts, and a = 0, b = 5.2, c = 0. If the raw received value v is 199, then the voltage is calculated as:

```
voltage = 0 × 199² + 5.2 × 199 + 0
        = 1034.8 hundredths of a volt
        = 10.348 volts
```