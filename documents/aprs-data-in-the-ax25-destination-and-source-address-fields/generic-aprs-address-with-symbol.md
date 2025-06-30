---
order: 4.3
title: Generic APRS Address with Symbol
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS uses several of the above-listed generic addresses in a special way, to specify not only an address but also a display symbol. These special addresses are *GPSxyz*, *GPSCnn*, *GPSEnn*, *SPCxyz* and *SYMxyz*, and are intended for use where it is not possible to include the symbol in the AX.25 Information field.

The *GPS* addresses above are for general use.

The *SPC* addresses are intended for special events.

The *SYM* addresses are reserved for future use.

The characters *xy* and *nn* refer to entries in the APRS Symbol Tables. The character *z* specifies a symbol overlay. See Chapter 20: APRS Symbols and Appendix 2 for more information.
