---
order: "9.3"
title: Symbol
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The symbol in APRS compressed position reports identifies the type of station, object, or event being reported. Symbols help users quickly interpret the nature of a station on a map.

## What is a Symbol?
- A graphical icon or character representing the station type (e.g., car, house, weather station)
- Encoded as two characters: a symbol table identifier and a symbol code

## Encoding in Compressed Reports
- In compressed position reports, the symbol table identifier and symbol code are included as specific characters in the 13-character compressed string
- The symbol table identifier selects the symbol set (primary or alternate)
- The symbol code selects the specific icon

## Example
```
!/5L!<*e>/'6X
```
In this example, the symbol table identifier and symbol code are embedded in the compressed string

## Usage Notes
- The choice of symbol helps other users understand the station's purpose or status
- A full list of APRS symbols is available in the APRS symbol tables
- Consistent use of symbols improves map readability and situational awareness

---

Symbols in APRS compressed reports provide essential context for interpreting position data.