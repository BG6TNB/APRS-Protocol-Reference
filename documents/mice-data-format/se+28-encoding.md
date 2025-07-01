---
order: "10.15"
title: SE+28 Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

SE+28 encoding is a technique used in the Mic-E protocol to encode certain numeric values, such as position or telemetry data, into printable ASCII characters. It is similar to the DC+28 method, with "SE" typically referring to a specific field or context within the Mic-E format.

## What is SE+28 Encoding?
- "SE" stands for a specific encoding context (e.g., Symbol Encoding or Special Encoding) in the Mic-E protocol.
- The "+28" indicates that 28 is added to the original value before converting it to an ASCII character.

## How is it Used?
- The value to be encoded is incremented by 28.
- The resulting number is converted to its ASCII character equivalent.
- This ensures the encoded value is a printable character, suitable for packet transmission.

## Example
Suppose you want to encode the value 40:
- Add 28: 40 + 28 = 68
- ASCII character 68 is "D"
- So, the value 40 is encoded as "D" in the Mic-E packet.

---

SE+28 encoding is used in Mic-E to ensure efficient and reliable transmission of numeric data fields.