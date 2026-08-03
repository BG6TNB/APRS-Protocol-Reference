---
order: "20.6"
title: Overlays with Symbols in the AX.25 Destination Address
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

If the `z` character in a `GPSxyz`, `SPCxyz` or `SYMxyz` address is not a space, it specifies an alphanumeric overlay character, in the range `0`-`9` or `A`-`Z`.

Overlays can only be used with symbols from the Alternate Symbol Table marked with the legend `[with overlay]`.

For example, if the "car" icon is to be overlaid with a digit "3", the Destination Address will be `GPSNV3`.

However, even if the address is overlay-capable, it is not actually necessary to specify an overlay; e.g. `GPSNV `.

`GPSCnn` and `GPSEnn` symbols can not have overlays.
