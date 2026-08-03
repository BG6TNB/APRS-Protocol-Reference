---
order: "10.20"
title: Mic-E Telemetry Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Information field may optionally contain either Mic-E telemetry data values or Mic-E status text.

If the byte following the Symbol Table Identifier is one of the Telemetry Flag characters (`‘` or `0x1d`), then telemetry data follows:

Optional Mic-E Telemetry Data

| Telemetry Flag | Telemetry Data Channels |        |        |        |        |
| ---            | ---                     | ---    | ---    | ---    | ---    |
| F              | Ch 1                    | Ch 2   | Ch 3   | Ch 4   | Ch 5   |
| Bytes:         | 1                       | 1/2    | 1/2    | 1/2    | 1/2    |

The Telemetry Flag F is one of:

| F | Meaning |
| --- | --- |
| `‘` | 2 printable hex telemetry values follow (channels 1 and 3). |
| `'` | 5 printable hex telemetry values follow. |
| `0x1d` | 5 binary telemetry values follow (Rev. 0 beta units only). |

If F is `‘` or `'`, each channel requires 2 bytes, containing a 2-digit printable hexadecimal representation of a value ranging from 0–255. For example, 254 is represented as `FE`.

If F is `0x1d`, each channel requires one byte, containing an 8-bit binary value.

For example, if the telemetry data is `'7200007100`, the `'` indicates that 5 bytes of telemetry follow, coded in hexadecimal:

| Channel | Hex | Decimal |
| --- | --- | --- |
| 1 | 0x72 | 114 |
| 2 | 0x00 | 0 |
| 3 | 0x00 | 0 |
| 4 | 0x71 | 113 |
| 5 | 0x00 | 0 |
