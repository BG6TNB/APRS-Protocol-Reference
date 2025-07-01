---
order: "12.3"
title: Raw Weather Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Raw weather data from a stand-alone weather station is contained in the Information Field of an APRS AX.25 frame:

**Raw Weather Report Format**
```
! or # or $ or *
Raw Weather Data
```
Bytes: 1 n

**Examples:**
```
!!006B005803500000----03E9--------002105140000005D  Ultimeter 2000
#50B7500820082  Peet Bros U-II
$ULTW0031003702CE0069----000086A00001----011901CC00000005  Ultimeter 2000
*7007600000000  Peet Bros U-II
```