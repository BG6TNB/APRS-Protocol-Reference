---
order: "20.7"
title: Symbol in the Source Address SSID
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In APRS, the SSID (Secondary Station Identifier) in the AX.25 Source Address can be used to specify a display symbol for the station. This method is primarily intended for stand-alone trackers or devices that cannot specify a symbol in the Information or Destination Address fields.

If the SSID is non-zero, APRS interprets it as a symbol code according to the APRS symbol tables. For example, a callsign of N0QBF-11 may indicate a balloon symbol, as -11 is commonly used for balloons.

This method is less flexible than specifying the symbol in the Information field and should only be used when other methods are not available. Refer to the APRS symbol tables for the mapping between SSID values and symbols.