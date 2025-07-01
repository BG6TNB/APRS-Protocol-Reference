---
order: "10.19"
title: Mic-E Position Ambiguity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Position ambiguity in Mic-E refers to the intentional reduction of position precision in APRS packets. This feature allows a sender to obscure the exact location, either for privacy or to indicate uncertainty in the reported position.

## What is Position Ambiguity?
- Position ambiguity means that some digits of the latitude and/or longitude are replaced with spaces or zeros, making the reported position less precise.
- It is commonly used when the exact location is not known or when the sender wishes to provide only an approximate area.

## How is it Encoded in Mic-E?
- In Mic-E encoding, ambiguity is indicated by replacing certain digits in the latitude and longitude fields with spaces or zeros.
- The number of ambiguous digits determines the size of the area represented:
  - 1 digit ambiguous: ~18 km
  - 2 digits ambiguous: ~180 km
  - 3 digits ambiguous: ~1,800 km
- The ambiguity is typically set in the latitude field, but can also be applied to longitude.

## Why Use Position Ambiguity?
- **Privacy:** To avoid revealing the exact location of a station or operator.
- **Uncertainty:** When the precise position is not available (e.g., manual entry, estimated location).
- **Group Reporting:** To represent a group or event location rather than a single point.

## Example
A Mic-E packet with position ambiguity:
```
@123456z490 .  N/07201.75W>Test message
```
In this example, the space in the latitude field indicates ambiguity in the last digit, so the actual position could be anywhere within a certain area.

---

Position ambiguity is a useful feature in Mic-E for balancing information sharing with privacy and uncertainty.