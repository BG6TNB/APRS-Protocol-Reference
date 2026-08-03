---
order: "9.10"
title: Old Trackers
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Some digipeaters have the ability to convert raw NMEA strings from existing trackers to compressed data format for further forwarding.

These digipeaters will compress the data if the tracker Destination Address is `GPS`. (Note: This is the 3-letter address `GPS`, not `GPS*`).

Trackers desiring for their packets to not be modified by the APRS network will use any other valid generic APRS Destination Address.
