---
order: "6.8"
title: Maidenhead Locator (Grid Square)
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Maidenhead Locator System (also known as grid squares) is a geographic coordinate system used by radio amateurs to succinctly describe locations. APRS supports the use of grid squares for position reporting, especially in contests or when precise coordinates are not needed.

## Format
- A grid square is typically 4 or 6 characters (e.g., "FN31" or "FN31pr")
- The format alternates letters and numbers: LLNN or LLNNLL
- Each grid square represents a specific area on the Earth's surface

## Example
```
FN31pr
```
This grid square covers a small area in the northeastern United States.

## Usage in APRS
- Some APRS packets may use the Maidenhead locator instead of latitude/longitude
- Conversion tools are available to translate between grid squares and standard coordinates
- Grid squares are especially useful for contests, events, and quick location sharing

## Conversion Notes
- The first two letters (LL) indicate a 20° x 10° area
- The next two digits (NN) indicate a 2° x 1° area
- The optional last two letters (LL) further subdivide the area

---

The Maidenhead Locator System provides a compact way to share locations in APRS and amateur radio.