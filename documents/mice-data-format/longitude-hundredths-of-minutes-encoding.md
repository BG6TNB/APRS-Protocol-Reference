---
order: "10.11"
title: Longitude Hundredths of Minutes Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In the Mic-E protocol, longitude hundredths of minutes are part of the detailed position encoding, allowing for precise location reporting in APRS packets.

## What is Longitude Hundredths of Minutes Encoding?
- Longitude hundredths of minutes represent the fractional part of the longitude coordinate (e.g., 75 in 07201.75W).
- This value provides fine resolution for the longitude position.

## How is it Encoded?
- The hundredths of minutes are typically encoded as a single character or byte, often using an offset (such as DC+28) to ensure the result is a printable ASCII character.
- The encoding process involves converting the numeric value to its ASCII equivalent after applying the offset.

## Example
For a longitude of 07201.75W:
- The hundredths value (75) is encoded as 75 + 28 = 103.
- ASCII character 103 is "g".
- So, the value 75 is encoded as "g" in the Mic-E packet.

---

Longitude hundredths of minutes encoding in Mic-E enables high-precision position reporting in a compact format.