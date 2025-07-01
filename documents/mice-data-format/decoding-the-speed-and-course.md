---
order: "10.17"
title: Decoding the Speed and Course
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In the Mic-E protocol, speed and course information are encoded into specific ASCII characters using the DC+28 encoding method. Decoding these values requires reversing the encoding process to extract the original numeric values.

## Encoding Method
- Both speed and course are encoded as single ASCII characters in the Mic-E information field.
- The value is encoded by adding 28 to the original number (DC+28), then converting the result to its ASCII character equivalent.

## Decoding Process
1. Extract the relevant character from the Mic-E packet (for speed or course).
2. Convert the ASCII character to its decimal value (using an ASCII table).
3. Subtract 28 from the decimal value to obtain the original speed or course.

## Example
Suppose the speed character in the packet is "N":
- ASCII value of "N" is 78
- Subtract 28: 78 - 28 = 50
- The decoded speed is 50 knots

Similarly, if the course character is "d":
- ASCII value of "d" is 100
- Subtract 28: 100 - 28 = 72
- The decoded course is 72 degrees

## Notes
- Speed is typically reported in knots, and course in degrees (0–360).
- Some Mic-E implementations may use additional logic for special cases (e.g., speeds above 127 knots).

---

Decoding speed and course from Mic-E packets is straightforward once the DC+28 encoding method is understood.