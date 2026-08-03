---
order: "8.1"
title: Position Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Lat/Long Position Reports are contained in the Information field of an APRS AX.25 frame.

The following diagrams show the permissible formats of these reports, together with some examples. The gray areas indicate optional fields, and the shaded (yellow) characters are literal ASCII characters. In all cases there is a maximum of 43 characters after the Symbol Code.

## Lat/Long Position Report Format — without Timestamp

```
! or =   Lat   Sym Table ID   Long   Symbol Code   Comment (max 43 chars)
Bytes:    1     8        1        9         1              0-43
```

Examples
```
!4903.50N/07201.75W-Test 001234                               no timestamp, no APRS messaging, with comment.
!4903.50N/07201.75W-Test /A=001234                             no timestamp, no APRS messaging, altitude = 1234 ft.
!49VV.VVN/072VV.VVW-                                          no timestamp, no APRS messaging, location to nearest degree.
TheNet VV X-1J4 VVVV (BFLD)!4903.50N/07201.75Wn               no timestamp, no APRS messaging, with X1J node header string.
```

## Lat/Long Position Report Format — with Timestamp

```
/ or @   Time        Lat   Sym Table ID   Long   Symbol Code   Comment (max 43 chars)
         DHM/HMS
Bytes:    1      7     8        1         9          1              0-43
```

Examples
```
/092345z4903.50N/07201.75W>Test1234   with timestamp, no APRS messaging, zulu time, with comment.
@092345/4903.50N/07201.75W>Test1234   with timestamp, with APRS messaging, local time, with comment.
```

## Lat/Long Position Report Format — with Data Extension (no Timestamp)

The Data Extension may contain one of: Course/Speed, Power/Height/Gain/Dir, Radio Range, or DF Signal Strength.

```
! or =   Lat   Sym Table ID   Long   Symbol Code   Data Extension   Comment (max 36 chars)
Bytes:    1     8        1        9         1              7               0-36
```

Examples
```
=4903.50N/07201.75W#PHG5132                                  no timestamp, with APRS messaging, with PHG.
=4903.50N/07201.75W_225/000g000t050r000p001...h00b10138dU2k  weather report.
```

## Lat/Long Position Report Format — with Data Extension and Timestamp

The Data Extension may contain one of: Course/Speed, Power/Height/Gain/Dir, Radio Range, or DF Signal Strength.

```
/ or @   Time        Lat   Sym Table ID   Long   Symbol Code   Data Extension   Comment (max 36 chars)
         DHM/HMS
Bytes:    1      7     8        1         9          1              7               0-36
```

Examples
```
@092345/4903.50N/07201.75W>088/036                  with timestamp, with APRS messaging, local time, course/speed.
@234517h4903.50N/07201.75W>PHG5132                  with timestamp, APRS messaging, hours/mins/secs time, PHG.
@092345z4903.50N/07201.75W>RNG0050                  with timestamp, APRS messaging, zulu time, radio range.
/234517h4903.50N/07201.75W>DFS2360                  with timestamp, hours/mins/secs time, DF, no APRS messaging.
@092345z4903.50N/07201.75W_090/000g000t066r000p000...dUII   weather report.
```

## Maidenhead Locator Beacon

```
[   Grid Locator   ]   Comment
Bytes: 1    4 or 6      1       n
```

Examples
```
[IO91SX] 35 miles NNW of London
[IO91]
```

## Raw NMEA Position Report Format

```
$   ^ ...,...,...,...,...,...,...
Bytes: 1           25-209
```

Examples
```
$GPGGA,102705,5157.9762,N,00029.3256,W,1,04,2.0,75.7,M,47.6,M,,*62
$GPGLL,2554.459,N,08020.187,W,154027.281,A
$GPRMC,063909,A,3349.4302,N,11700.3721,W,43.022,89.3,291099,13.6,E*52
$GPVTG,318.7,T,,M,35.1,N,65.0,K*69
```
