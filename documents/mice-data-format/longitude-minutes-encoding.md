---
order: "10.10"
title: Longitude Minutes Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Longitude minutes encoding in the Mic-E protocol is part of the compressed position format, allowing for efficient and accurate transmission of location data in APRS packets.

## What is Longitude Minutes Encoding?
- Longitude minutes represent the minutes portion of the longitude coordinate (e.g., 01 in 07201.75W).
- This value, combined with degrees and hundredths, provides a complete longitude position.

## How is it Encoded?
- The minutes value is typically encoded as a single character or byte, often using an offset (such as DC+28) to ensure a printable ASCII character.
- The encoding process involves adding the offset to the numeric value and converting the result to its ASCII equivalent.

## Example
For a longitude of 07201.75W:
- The minutes value (01) is encoded as 1 + 28 = 29.
- ASCII character 29 is a non-printable character, so in practice, values are adjusted or encoded according to the Mic-E specification to ensure printability.
- For a more typical value, minutes = 15: 15 + 28 = 43, ASCII character 43 is "+".

---

Longitude minutes encoding in Mic-E is essential for precise and compact position reporting.