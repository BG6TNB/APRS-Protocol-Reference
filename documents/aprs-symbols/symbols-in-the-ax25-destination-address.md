---
order: "20.5"
title: Symbols in the AX.25 Destination Address
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Where it is not possible to include a symbol in the Information field, the symbol may be specified in the AX.25 Destination Address instead, using the following generic destination addresses: `GPSxyz`, `GPSCnn`, `GPSEnn`, `SPCxyz` and `SYMxyz`.

The characters `xy` and `nn` refer to entries in the APRS Symbol Tables. For example, from the Primary Symbol Table, a tracker could use the Destination Address `GPSMV ` or `GPS30` to specify a "car" icon.

The character `z` specifies the overlay character (where permitted), or is a space — the space is a filler character, as all AX.25 addresses must be exactly 6 characters long.

The `GPS`/`SPC`/`SYM` `xy` and `GPSCnn`/`GPSEnn` addresses can be used interchangeably. Thus, for example, `GPSBM `, `SPCBM `, `SYMBM ` and `GPSC12` all specify a "Boy Scouts" icon (from the Primary Symbol Table), and `GPSOM `, `SPCOM `, `SYMOM ` and `GPSE12` all specify a "Girl Scouts" icon (from the Alternate Symbol Table).
