---
order: "10.18"
title: Example of Decoding the Information Field Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

This section provides a step-by-step example of decoding a Mic-E information field, illustrating how to extract longitude, speed, course, status, and telemetry data from a sample packet.

## Example Information Field
```
"`l4!>\"Test123,456,789"
```

## Decoding Steps
1. **Extract Longitude**: Decode the first set of characters according to the Mic-E longitude encoding rules
2. **Extract Speed and Course**: Use the appropriate bytes and formulas to recover speed (knots) and course (degrees)
3. **Extract Status**: Read the status message (e.g., "Test")
4. **Extract Telemetry**: Parse any additional numeric values as telemetry data (e.g., 123, 456, 789)

## Explanation
- Each field is packed into specific bytes or character positions
- Decoding requires knowledge of the Mic-E encoding scheme and any custom telemetry scaling

## Usage Notes
- Most APRS software can decode Mic-E information fields automatically
- Manual decoding is useful for troubleshooting or custom applications

---

This example demonstrates the process of extracting detailed information from a Mic-E packet in APRS.