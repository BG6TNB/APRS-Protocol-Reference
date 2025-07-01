---
order: "10.13"
title: SP+28 Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

SP+28 encoding is a method used in the Mic-E protocol to encode numeric values, such as position or telemetry data, into printable ASCII characters. It is similar to DC+28 and SE+28 encoding, with "SP" referring to a specific field or context within the Mic-E format.

## What is SP+28 Encoding?
- "SP" stands for a specific encoding context (e.g., Speed or Special Purpose) in the Mic-E protocol.
- The "+28" means that 28 is added to the original value before converting it to an ASCII character.

## How is it Used?
- The value to be encoded is incremented by 28.
- The resulting number is converted to its ASCII character equivalent.
- This ensures the encoded value is a printable character, suitable for packet transmission.

## Example
Suppose you want to encode the value 55:
- Add 28: 55 + 28 = 83
- ASCII character 83 is "S"
- So, the value 55 is encoded as "S" in the Mic-E packet.

---

SP+28 encoding is used in Mic-E to efficiently and reliably transmit numeric data fields as printable characters.