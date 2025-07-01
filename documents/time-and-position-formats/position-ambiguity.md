---
order: "6.6"
title: Position Ambiguity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Position ambiguity in APRS allows a station to intentionally reduce the precision of its reported location. This is useful for privacy, uncertainty, or when only an approximate location is known.

## How Ambiguity is Represented
- Ambiguity is indicated by replacing the least significant digits of the latitude and/or longitude with spaces.
- The number of spaces determines the level of ambiguity (e.g., nearest 1 minute, 10 minutes, 1 degree, etc.).
- Some software may use zeros instead of spaces, but spaces are the standard.

## Example
```
4903.  N/07201.  W
```
This position is ambiguous to the nearest minute (the hundredths are blank).

## Usage Notes
- Ambiguity is often used for mobile or sensitive stations.
- Mapping software will typically display an area or circle rather than a precise point.
- The more spaces, the greater the ambiguity.

---

Position ambiguity helps balance privacy and utility in APRS reporting.