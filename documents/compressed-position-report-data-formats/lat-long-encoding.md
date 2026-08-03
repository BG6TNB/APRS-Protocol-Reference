---
order: "9.4"
title: Lat/Long Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The values of `YYYY` and `XXXX` are computed as follows:

```
YYYY is 380926 x (90 – latitude) [base 91]
latitude is positive for north, negative for south, in degrees.
```

```
XXXX is 190463 x (180 + longitude) [base 91]
longitude is positive for east, negative for west, in degrees.
```

For example, for a longitude of 72° 45' 00" west (i.e. -72.75 degrees), the math is `190463 x (180 – 72.75) = 20427156`. Because this is to base 91, it is then necessary to progressively divide this value by reducing powers of 91, to obtain the numerical values of X:

```
20427156 / 91^3 = 27 , remainder 80739
80739 / 91^2 = 9 , remainder 6210
6210 / 91 = 68 , remainder 22
```

To obtain the corresponding ASCII characters, 33 is added to each of these values, yielding 60 (i.e. 27+33), 42, 101 and 55. From the ASCII Code Table (in Appendix 3), this corresponds to `<*e7` for `XXXX`.
