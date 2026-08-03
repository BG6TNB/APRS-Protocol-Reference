---
order: "7.1"
title: Course and Speed
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A fixed-length 7-byte field may follow APRS position data. This field is an APRS Data Extension. The extension may be one of the following:

- **CSE/SPD** Course and Speed (this may be followed by a further 8 bytes containing DF bearing and Number/Range/Quality parameters)
- **DIR/SPD** Wind Direction and Wind Speed
- **PHGphgd** Station Power and Effective Antenna Height/Gain/Directivity
- **RNGrrrr** Pre-Calculated Radio Range
- **DFSshgd** DF Signal Strength and Effective Antenna Height/Gain
- **Tyy/Cxx** Area Object Descriptor

The 7-byte CSE/SPD Data Extension can be used to represent the course and speed of a vehicle or APRS Object.

The course is expressed in degrees (001-360), clockwise from due north. The speed is expressed in knots. A slash `/` character separates the two.

For example:

```
088/036
```

represents a course 88 degrees, traveling at 36 knots.

If the course and speed are unknown or not relevant, they can be set to `000/000` or `.../...` or `VVVVVV/VVVVVV`.

::: tip Note
In the special case of DF reports, a course of 000 means that the DF station is fixed. If the course is non-zero, the station is mobile.
:::
