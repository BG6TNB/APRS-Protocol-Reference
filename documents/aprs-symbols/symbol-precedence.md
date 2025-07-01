---
order: "20.8"
title: Symbol Precedence
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

When more than one symbol is specified in an APRS packet, the following precedence applies:

1. The symbol in the AX.25 Information field takes highest precedence and should be used for display.
2. If no symbol is present in the Information field, the symbol in the AX.25 Destination Address is used.
3. If neither of the above is present, the symbol specified by the SSID in the AX.25 Source Address is used (typically for trackers or devices with limited capabilities).

This precedence ensures that the most explicit and up-to-date symbol is displayed for each station or object.