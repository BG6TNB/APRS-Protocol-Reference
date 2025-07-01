---
order: "13.1"
title: Telemetry Report Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The AX.25 Information field can contain telemetry data. The APRS Data Type Identifier is `T`.

The report Sequence Number is a 3-character value — typically a 3-digit number, or the three letters MIC. In the case of MIC, there may or may not be a comma preceding the first analog data value.

There are five 8-bit unsigned analog data values (expressed as 3-digit decimal numbers in the range 000–255), followed by a single 8-bit digital data value (expressed as 8 bytes, each containing 1 or 0).

The Kantronics KPC-3+ TNC and APRS Micro Interface Module (MIM) use this format.

**Telemetry Report Format**

| Field | Description |
|-------|-------------|
| T | Data Type Identifier |
| #xxx, | Sequence Number (3 digits or MIC) |
| aaa, | Analog Value 1 |
| aaa, | Analog Value 2 |
| aaa, | Analog Value 3 |
| aaa, | Analog Value 4 |
| aaa, | Analog Value 5 |
| bbbbbbbb | Digital Value (8 bits, each 1 or 0) |
| Comment | Optional comment |

Bytes: 1 5 4 4 4 4 4 8 n

**Examples:**
```
T#005,199,000,255,073,123,01101001
T#MIC199,000,255,073,123,01101001
```