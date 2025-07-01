---
order: "20.3"
title: Symbols in the AX.25 Information Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Symbols are most commonly specified in the AX.25 Information field, which is the preferred method for indicating the display icon for a station or object. The symbol is encoded as two characters: the Symbol Table Identifier and the Symbol Code.

The Symbol Table Identifier (either '/' for the primary table or '\\' for the alternate table) immediately follows the latitude in a position report, and the Symbol Code follows the longitude.

**Example:**
```
!4903.50N/07201.75W>
```
In this example, '/' is the Symbol Table Identifier and '>' is the Symbol Code, indicating a specific icon from the APRS symbol tables.

Refer to the APRS symbol tables for the full list of available symbols and their meanings.