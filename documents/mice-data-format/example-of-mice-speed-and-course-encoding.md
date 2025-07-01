---
order: "10.16"
title: Example of Mic-E Speed and Course Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

This section provides a step-by-step example of how speed and course values are encoded into a Mic-E packet using the DC+28 encoding method.

## Example: Encoding Speed and Course
Suppose we want to encode the following values:
- Speed: 65 knots
- Course: 123 degrees

### Step 1: Add 28 to Each Value
- Speed: 65 + 28 = 93
- Course: 123 + 28 = 151

### Step 2: Convert to ASCII Characters
- ASCII character 93 is "]"
- ASCII character 151 is "	7" (Note: ASCII 151 is not a standard printable character; in practice, course values above 99 are handled with special logic or split into two characters. For this example, let's use a course of 72 degrees for a printable result.)

#### Revised Example for Course
- Course: 72 + 28 = 100
- ASCII character 100 is "d"

### Step 3: Insert Encoded Characters into the Packet
The encoded speed and course characters are placed in their respective positions in the Mic-E information field.

#### Example Packet Fragment
```
... ]d ...
```
Here, "]" represents a speed of 65 knots, and "d" represents a course of 72 degrees.

## Notes
- Only printable ASCII characters are used in actual packets; values resulting in non-printable characters are avoided or handled specially.
- The exact placement of these characters depends on the Mic-E packet structure.

---

This example demonstrates the process of encoding speed and course in Mic-E using the DC+28 method.