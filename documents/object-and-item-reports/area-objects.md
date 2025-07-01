---
order: "11.6"
title: Area Objects
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Using the `\ll` symbol (i.e. the lower-case letter "L" symbol from the Alternate Symbol Table) it is possible to define circle, line, ellipse, triangle and box objects in all colors, either open or filled in, any size from 60 feet to 100 miles.

These Objects are useful for real-time events such as for a search-and-rescue, or adding a special road or route for a special event.

The Object format is specified as a 7-character APRS Data Extension:

**Tyy/Cxx** immediately following the ll Symbol Code. For example:
```
;OBJECTVVV*ddmm.hhN\dddmm.hhW ll Tyy/Cxx
```
where:
- T is the type of object shape.
- /C is the color of the object.
- yy is the square root of the latitude offset in 1/100ths of a degree.
- xx is the square root of the longitude offset in 1/100ths of a degree.

**Object type and color codes:**
| T | Object Type         | /C | Object Color Intensity |
|---|---------------------|----|-----------------------|
| 0 | Open circle         | 0  | Black High            |
| 1 | Line (down/right)   | 1  | Blue High             |
| 2 | Open ellipse        | 2  | Green High            |
| 3 | Open triangle       | 3  | Cyan High             |
| 4 | Open box            | 4  | Red High              |
| 5 | Color-filled circle | 5  | Violet High           |
| 6 | Line (down/left)    | 6  | Yellow High           |
| 7 | Color-filled ellipse| 7  | Gray High             |
| 8 | Color-filled triangle| 8 | Black Low             |
| 9 | Color-filled box    | 9  | Blue Low              |
|10 |                    |10  | Green Low             |
|11 |                    |11  | Cyan Low              |
|12 |                    |12  | Red Low               |
|13 |                    |13  | Violet Low            |
|14 |                    |14  | Yellow Low            |
|15 |                    |15  | Gray Low              |

The latitude/longitude position is the upper left corner of the object, and the offsets are relative to this position — the yy offset is down from this position and the xx offset is to the right of this position. (An exception is the special case of a Type 6 line which is drawn down and to the left).

**Examples:**
```
;SEARCHVVV*092345z4903.50N\07201.75W ll 710/310
;SEARCHVVV*092345z4903.50N\07201.75W ll 8101310
;FLIGHTPTH*4903.50N\07201.75W ll 610/310{100}
```