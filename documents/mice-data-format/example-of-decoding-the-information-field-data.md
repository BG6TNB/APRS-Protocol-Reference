---
order: "10.18"
title: Example of Decoding the Information Field Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

If the first 9 bytes of the Information field contain `‘(_fn"Oj/`, and the destination address specifies that the station is in the western hemisphere with a longitude offset of +100 degrees, then the data is decoded as follows:

- `‘` is the APRS Data Type Identifier for a Mic-E packet containing current GPS data.
- `(` is the d+28 byte. The `(` character has the value 40 decimal. Subtracting 28 gives 12. The longitude offset (in the destination address) is +100 degrees, so the longitude is 100 + 12 = 112 degrees.
- `_` is the m+28 byte. The `_` character has the value 95 decimal. Subtracting 28 gives 67. This is ≥ 60, so subtracting 60 gives a value of 7 minutes longitude.
- `f` is the h+28 byte. The `f` character has the value 102 decimal. Subtracting 28 gives 74 hundredths of a minute.

Thus the longitude is 112 degrees 7.74 minutes west.

The speed and course are calculated as follows:

- `n` is the SP+28 byte. The `n` character has the value 110 decimal. After subtracting 28, the result is 82. As this is ≥ 80, a further 80 is subtracted, leaving a result of 2 tens of knots.
- `"` is the DC+28 byte. The `"` character has the value 34 decimal. Subtracting 28 gives 6. Dividing this by 10 gives a quotient of 0 (units of speed). Adding the first part of the speed, multiplied by 10 (i.e. 20) to the quotient (0) gives a final computed speed of 20 knots. The remainder from the division is 6. Subtracting 4 gives the course in hundreds of degrees; i.e. 2.
- `O` (upper-case letter "O") is the SE+28 byte. The `O` character has the value 79 decimal. Subtracting 28 gives 51. Adding this to the remainder calculated above, multiplied by 100 (i.e. 200), gives the final value of 251 degrees for the course.

The last two characters (`j/`) represent the jeep symbol from the Primary Symbol Table.
