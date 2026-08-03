---
order: "8.2"
title: DF Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

DF Reports are contained in the Information field of an APRS AX.25 frame. The Bearing and Number/Range/Quality (BRG/NRQ) parameters follow the Data Extension field.

**Note:** The BRG/NRQ parameters are only meaningful when the report contains the DF symbol (i.e. the Symbol Table ID is `/` and the Symbol Code is `\`).

**Note:** If the DF station is fixed, the Course value is zero. If the station is moving, the Course value is non-zero.

## DF Report Format — without Timestamp

The Data Extension may contain one of: Course/Speed, Power/Height/Gain/Dir, or Radio Range.

```
! or =   Lat   Sym Table ID   Long   Symbol Code   Data Extension   /BRG/NRQ   Comment (max 28 chars)
                  (/)                   (\)              7                8              0-28
Bytes:    1     8        1        9         1              7                8             0-28
```

Examples
```
=4903.50N/07201.75W\088/036/270/729    no timestamp, course/speed/bearing/NRQ, with APRS messaging. DF station moving (CSE is non-zero).
=4903.50N/07201.75W\ 000 /036/270/729  Same report, DF station fixed (CSE= 000 ).
```

## DF Report Format — with Timestamp

The Data Extension may contain one of: Course/Speed, Power/Height/Gain/Dir, or Radio Range.

```
/ or @   Time        Lat   Sym Table ID   Long   Symbol Code   Data Extension   /BRG/NRQ   Comment (max 28 chars)
         DHM/HMS           (/)                   (\)              7                8              0-28
Bytes:    1      7     8        1        9         1              7                8             0-28
```

Examples
```
@092345z4903.50N/07201.75W\088/036/270/729   with timestamp, course/speed/bearing/NRQ, with APRS messaging.
/092345z4903.50N/07201.75W\000/000/270/729   with timestamp, bearing/NRQ, no course/speed, no APRS messaging.
```
