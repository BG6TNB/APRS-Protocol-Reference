---
order: "6.7"
title: Default Null Position
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A default or null position in APRS is used when a station does not have a valid or known location to report. This can occur for fixed stations, non-GPS devices, or when location information is intentionally omitted.

## Representation
- The default null position is typically:
```
0000.00N/00000.00E
```
- This represents the intersection of the Equator and Prime Meridian (0°N, 0°E), but in APRS it is understood as "no valid position."

## Usage Notes
- Null positions should be avoided unless necessary, as they can clutter maps with meaningless points.
- Some software may filter or ignore packets with null positions.
- If a station cannot provide a valid position, it is better to omit the position report or use ambiguity if appropriate.

---

The default null position is a placeholder and should not be interpreted as a real geographic location.