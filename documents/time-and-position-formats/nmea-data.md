---
order: "6.9"
title: NMEA Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS recognizes raw ASCII data strings conforming to the NMEA 0183 Version 2.0 specification, originating from navigation equipment such as GPS and LORAN receivers. It is recommended that APRS stations interpret at least the following NMEA Received Sentence types:

| Sentence | Description |
| :--- | :--- |
| GGA | Global Positioning System Fix Data |
| GLL | Geographic Position, Latitude/Longitude Data |
| RMC | Recommended Minimum Specific GPS/Transit Data |
| VTG | Velocity and Track Data |
| WPT | Way Point Location |
