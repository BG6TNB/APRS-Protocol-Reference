---
order: "10.16"
title: Example of Mic-E Speed and Course Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

For a speed of 86 knots and a course of 194 degrees, the encoding is:

- **SP+28**: The speed is in the range 80–89 knots. From the SP+28 encoding table, the SP+28 byte may be either `t` or `$`.
- **DC+28**: The units of speed are 6, and the course is in the range 100–199 degrees. From the DC+28 encoding table, the DC+28 byte may be either `]` or `Y`.
- **SE+28**: The course in tens and units of degrees is 94. From the SE+28 encoding table, the SE+28 byte will be `z`.
