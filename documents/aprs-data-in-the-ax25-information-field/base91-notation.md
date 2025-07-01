---
order: "5.5"
title: Base-91 Notation
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Base-91 notation is a compact encoding scheme used in APRS to efficiently represent numeric values using printable ASCII characters. It is primarily used in compressed position reports and other APRS data extensions to minimize packet length while maximizing the range of values that can be encoded.

## Purpose
Base-91 encoding allows large numbers to be represented in fewer characters compared to decimal or hexadecimal, which is important for bandwidth efficiency in packet radio communications.

## How It Works
- Base-91 uses the ASCII characters from 33 ('!') to 123 ('z'), providing 91 possible values per character.
- Each character represents a value from 0 to 90.
- To encode a number, repeatedly divide by 91 and map the remainder to the corresponding ASCII character.
- To decode, reverse the process by converting each character back to its numeric value and combining them.

## Usage in APRS
Base-91 is most commonly used in:
- Compressed position reports (latitude, longitude, course, speed, altitude)
- Some telemetry and data extension fields

## Example
Suppose you want to encode the value 12345 in base-91:
1. 12345 ÷ 91 = 135, remainder 60
2. 135 ÷ 91 = 1, remainder 44
3. 1 ÷ 91 = 0, remainder 1

So the three base-91 digits are: 1, 44, 60
- Add 33 to each to get ASCII: 34 ('"'), 77 ('M'), 93 (']')
- The encoded string is: `"M]`

## Reference
For more details, see the APRS Compressed Position Report specification and the relevant sections in this documentation.

---

Base-91 notation is a key part of APRS's ability to transmit rich data efficiently over limited-bandwidth radio channels.