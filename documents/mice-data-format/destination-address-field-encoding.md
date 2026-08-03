---
order: "10.4"
title: Destination Address Field Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The table below shows the encoding of the first 6 bytes of the Destination Address field, for all combinations of latitude digit, the 3-bit Mic-E message identifier (A/B/C), the latitude/longitude indicators and the longitude offset.

The encoding supports position ambiguity.

The ASCII characters shown in the table are left-shifted one bit position prior to transmission.

**Mic-E Destination Address Field Encoding (Bytes 1–6)**

| ASCII Char | Lat Digit | Message A/B/C | N/S | Long Offset | W/E |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0     | 0     | 0          | South | +0   | East  |
| 1     | 1     | 0          | South | +0   | East  |
| 2     | 2     | 0          | South | +0   | East  |
| 3     | 3     | 0          | South | +0   | East  |
| 4     | 4     | 0          | South | +0   | East  |
| 5     | 5     | 0          | South | +0   | East  |
| 6     | 6     | 0          | South | +0   | East  |
| 7     | 7     | 0          | South | +0   | East  |
| 8     | 8     | 0          | South | +0   | East  |
| 9     | 9     | 0          | South | +0   | East  |
| A     | 0     | 1 (Custom) | —     | —    | —     |
| B     | 1     | 1 (Custom) | —     | —    | —     |
| C     | 2     | 1 (Custom) | —     | —    | —     |
| D     | 3     | 1 (Custom) | —     | —    | —     |
| E     | 4     | 1 (Custom) | —     | —    | —     |
| F     | 5     | 1 (Custom) | —     | —    | —     |
| G     | 6     | 1 (Custom) | —     | —    | —     |
| H     | 7     | 1 (Custom) | —     | —    | —     |
| I     | 8     | 1 (Custom) | —     | —    | —     |
| J     | 9     | 1 (Custom) | —     | —    | —     |
| K     | space | 1 (Custom) | —     | —    | —     |
| L     | space | 0          | South | +0   | East  |
| P     | 0     | 1 (Std)    | North | +100 | West  |
| Q     | 1     | 1 (Std)    | North | +100 | West  |
| R     | 2     | 1 (Std)    | North | +100 | West  |
| S     | 3     | 1 (Std)    | North | +100 | West  |
| T     | 4     | 1 (Std)    | North | +100 | West  |
| U     | 5     | 1 (Std)    | North | +100 | West  |
| V     | 6     | 1 (Std)    | North | +100 | West  |
| W     | 7     | 1 (Std)    | North | +100 | West  |
| X     | 8     | 1 (Std)    | North | +100 | West  |
| Y     | 9     | 1 (Std)    | North | +100 | West  |
| Z     | space | 1 (Std)    | North | +100 | West  |

**Note:** The ASCII characters `A`–`K` are not used in address bytes 4–6.

For example, for a station at a latitude of 33 degrees 25.64 minutes north, in the western hemisphere, with longitude offset +0 degrees, and transmitting standard message identifier bits 1/0/0, the encoding of the first 6 bytes of the Destination Address field is as follows:

| Destination Address Byte | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Latitude Digit          | 3 | 3 | 2 | 5 | 6 | 4 |
| Message Bit A = 1 (Std) | 1 |   |   |   |   |   |
| Message Bit B = 0       |   | 0 |   |   |   |   |
| Message Bit C = 0       |   |   | 0 |   |   |   |
| N/S Indicator           |   |   |   | North |   |   |
| Long Offset             |   |   |   |   | +0 |   |
| W/E Indicator           |   |   |   |   |   | West |
| Dest Address (ASCII Char) | S | 3 | 2 | U | 6 | T |
