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