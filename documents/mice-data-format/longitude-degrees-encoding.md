---
order: "10.9"
title: Longitude Degrees Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In the Mic-E protocol, longitude degrees are encoded as part of the compressed position information in the information field. This encoding allows for efficient transmission of geographic coordinates in APRS packets.

## What is Longitude Degrees Encoding?
- Longitude degrees represent the whole number part of the longitude coordinate (e.g., 072 in 07201.75W).
- In Mic-E, this value is encoded into specific bytes or characters within the information field, often using a combination of ASCII values and offsets.

## How is it Encoded?
- The longitude degrees are typically encoded by converting the numeric value to a character or byte, sometimes with an offset to ensure the result is a printable character.
- The exact method depends on the Mic-E specification and may involve splitting the longitude into degrees, minutes, and hundredths of minutes, each encoded separately.

## Example
For a longitude of 072 degrees:
- The degrees value (72) is encoded according to the Mic-E format, possibly as a single character or as part of a multi-character sequence.
- The receiving station decodes this character back to the numeric value to reconstruct the longitude.

---

Longitude degrees encoding is a key part of the Mic-E position compression scheme, enabling efficient and compact transmission of location data.