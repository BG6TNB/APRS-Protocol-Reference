---
order: "12.4"
title: Positionless Weather Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Generic raw weather data from a stand-alone weather station is contained in the Information Field of an APRS AX.25 frame:

**Positionless Weather Report Format**
```
_
Time MDHM
Positionless Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 8 n 1 2-4

**Example:**
```
_10090556c220s004g005t077r000p000P000h50b09900wRSW
```
Report derived from Radio Shack WX station data.