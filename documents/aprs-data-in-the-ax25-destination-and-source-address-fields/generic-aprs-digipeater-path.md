---
order: "4.8"
title: Generic APRS Digipeater Path
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The SSID in the Destination Address field of all packets is coded to specify the APRS digipeater path.

If the Destination Address SSID is –0, the packet follows the standard AX.25 digipeater (“VIA”) path contained in the Digipeater Addresses field of the AX.25 frame.

If the Destination Address SSID is non-zero, the packet follows one of 15 generic APRS digipeater paths.

The SSID field in the Destination Address (i.e. in the 7th address byte) is encoded as follows:

**APRS Digipeater Paths in Destination Address SSID**

| SSID | Path              | SSID | Path              |
| ---- | ----------------- | ---- | ----------------- |
| -0   | Use VIA path      | -8   | North path        |
| -1   | WIDE1-1           | -9   | South path        |
| -2   | WIDE2-2           | -10  | East path         |
| -3   | WIDE3-3           | -11  | West path         |
| -4   | WIDE4-4           | -12  | North path + WIDE |
| -5   | WIDE5-5           | -13  | South path + WIDE |
| -6   | WIDE6-6           | -14  | East path + WIDE  |
| -7   | WIDE7-7           | -15  | West path + WIDE  |
