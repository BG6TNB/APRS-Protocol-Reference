---
order: "10.3"
title: Mic-E Destination Address Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The standard AX.25 Destination Address field consists of 7 bytes, containing 6 callsign characters and the SSID (plus a number of other bits that are not of interest here). When used to carry Mic-E data, however, this field has a quite different format:

**Mic-E Data — DESTINATION ADDRESS FIELD Format**

| Byte | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Content | Lat Digit 1 + Message Bit A | Lat Digit 2 + Message Bit B | Lat Digit 3 + Message Bit C | Lat Digit 4 + N/S Lat Indicator | Lat Digit 5 + Longitude Offset | Lat Digit 6 + W/E Long Indicator | APRS Digi Path Code |

The Destination Address field contains:

- Six encoded latitude digits specifying degrees (digits 1 and 2), minutes (digits 3 and 4) and hundredths of minutes (digits 5 and 6).
- 3-bit Mic-E message identifier (message bits A, B and C).
- North/South latitude indicator.
- Longitude offset (adds 0 degrees or 100 degrees to the longitude computation in the Information field).
- West/East longitude indicator.
- Generic APRS digipeater path (encoded in the SSID).
