---
order: "10.17"
title: Decoding the Speed and Course
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

To decode the speed and course:

- **SP+28**: To obtain the speed in tens of knots, subtract 28 from the SP+28 value and multiply by 10.
- **DC+28**: Subtract 28 from the DC+28 value and divide the result by 10. The quotient is the units of speed. The remainder is the course in hundreds of degrees.
- **SE+28**: To obtain the tens and units of degrees, subtract 28 from the SE+28 value.

Finally, make these speed and course adjustments:

- If the computed speed is ≥ 800 knots, subtract 800.
- If the computed course is ≥ 400 degrees, subtract 400.
