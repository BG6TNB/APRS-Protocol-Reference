---
order: "10.6"
title: Destination Address SSID Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The SSID in the Destination Address field of a Mic-E packet is coded to specify either a conventional digipeater VIA path (contained in the Digipeater Addresses field of the AX.25 frame), or one of 15 generic APRS digipeater paths. See Chapter 4: APRS Data in the AX.25 Destination and Source Address Fields.

The SSID field in the Destination Address (i.e. in the 7th address byte) is encoded as follows:

APRS Digipeater Paths in Destination Address SSID

| SSID | Path | SSID | Path |
| --- | --- | --- | --- |
| -0 | Use VIA path | -8 | North path |
| -1 | WIDE1-1 | -9 | South path |
| -2 | WIDE2-2 | -10 | East path |
| -3 | WIDE3-3 | -11 | West path |
| -4 | WIDE4-4 | -12 | North path + WIDE |
| -5 | WIDE5-5 | -13 | South path + WIDE |
| -6 | WIDE6-6 | -14 | East path + WIDE |
| -7 | WIDE7-7 | -15 | West path + WIDE |
