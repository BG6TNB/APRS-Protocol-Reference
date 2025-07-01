---
order: "10.14"
title: DC+28 Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

DC+28 encoding is a technique used in the Mic-E protocol to efficiently encode numeric values, such as speed and course, into printable ASCII characters. This method allows for compact transmission of data within the constraints of packet radio systems.

## What is DC+28 Encoding?
- "DC" stands for "Decimal Character," and "+28" refers to the offset added to the numeric value before encoding.
- The result is a printable ASCII character that represents a value in the range needed for Mic-E data fields.

## How Does It Work?
- To encode a value, add 28 to the original number (e.g., a speed or course value).
- Convert the resulting number to its corresponding ASCII character.
- This ensures that the encoded value falls within the printable ASCII range, avoiding control characters that could disrupt packet transmission.

## Why is it Used?
- To maximize data density in APRS packets by using single characters for numeric values.
- To ensure compatibility with packet radio systems that may not handle non-printable characters reliably.
- To maintain a compact and efficient encoding scheme for Mic-E position and telemetry data.

## Example
Suppose you want to encode the value 50:
- Add 28: 50 + 28 = 78
- ASCII character 78 is "N"
- So, the value 50 is encoded as "N" in the Mic-E packet

---

DC+28 encoding is a key part of the Mic-E protocol, enabling efficient and reliable transmission of numeric data in APRS packets.