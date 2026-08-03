---
order: "19.2"
title: All Other Packets
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Packets that do not meet any of the formats described in this document are assumed to be non-APRS beacons. Programs can decide to handle these, or ignore them, but they must be able to process them without ill effects.

APRS programs may treat such packets as APRS Status Reports. This allows APRS to accept any UI packet addressed to the typical beacon address to be captured as a status message. Typical TNC ID packets fall into this category.

Once a proper Status Report (with the APRS Data Type Identifier `>`) has been received from a station it will not be overwritten by other non-APRS packets from that station.
