---
order: "10.12"
title: Speed and Course Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Speed and course encoding in Mic-E is a method of packing these values into specific bytes of the information field, allowing for compact and efficient transmission.

## How are Speed and Course Encoded?
- Speed (in knots) and course (in degrees) are encoded as two bytes in the information field
- The encoding uses a formula to convert the values to byte values

## Example
A portion of a Mic-E information field:
```
"`l4!>\"Test"
```
The relevant bytes encode speed and course

## Usage Notes
- Decoding requires applying the Mic-E speed and course decoding formulas
- Most APRS software can decode these values automatically
- Accurate speed and course reporting is important for mobile and tracking applications

---

Speed and course encoding in Mic-E enables efficient, real-time movement reporting in APRS.