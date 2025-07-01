---
order: "12.10"
title: Complete Weather Reports with Timestamp and Position
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

An APRS Complete Weather Report can contain a timestamp and location information, using any of the legal lat/long and compressed lat/long position formats described earlier. An APRS Object may also have weather information associated with it.

Examples of report formats are shown below. Note that the Symbol Code in every case is the _ (underscore). Also, the 7-byte Wind Direction and Wind Speed Data Extension replace the cccc and ssss fields of a Positionless Weather Report.

**Complete Weather Report Format — with Lat/Long position, no Timestamp**
```
! or =
Lat
Sym Table ID
Long
Symbol Code _
Wind Directn/Speed
Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 8 1 9 1 7 n 1 2-4

**Examples:**
```
!4903.50N/07201.75W_220/004g005t077r000p000P000h50b09900wRSW
!4903.50N/07201.75W_220/004g005t077r000p000P000h50b.....wRSW
```

**Complete Weather Report Format — with Lat/Long position and Timestamp**
```
/ or @
Time DHM/HMS
Lat
Sym Table ID
Long
Symbol Code _
Wind Directn/Speed
Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 7 8 1 9 1 7 n 1 2-4

**Example:**
```
@092345z4903.50N/07201.75W_220/004g005t-07r000p000P000h50b09900wRSW
```

**Complete Weather Report Format — with Compressed Lat/Long position, no Timestamp**
```
! or =
Sym Table ID
Comp Lat YYYY
Comp Long XXXX
Symbol Code _
Comp Wind Directn/Speed
Comp Type T
Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 1 4 4 1 2 1 n 1 2-4

**Example:**
```
=/5L!!<*e7> _7P[g005t077r000p000P000h50b09900wRSW
```

**Complete Weather Report Format — with Compressed Lat/Long position, with Timestamp**
```
/ or @
Time DHM/HMS
Sym Table ID
Comp Lat YYYY
Comp Long XXXX
Symbol Code _
Comp Wind Directn/Speed
Comp Type T
Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 7 1 4 4 1 2 1 n 1 2-4

**Example:**
```
@092345z/5L!!<*e7 _7P[g005t077r000p000P000h50b09900wRSW
```

**Complete Weather Report Format — with Object and Lat/Long position**
```
;
Object Name
*
Time DHM/HMS
Lat
Sym Table ID
Long
Symbol Code _
Wind Directn/Speed
Weather Data
S (APRS Software Type)
uuuu (WX Unit)
```
Bytes: 1 9 1 7 8 1 9 1 7 n 1 2-4

**Examples:**
```
;BRENDAVVV*4903.50N/07201.75W_220/004g005t077r000p000P000h50b09900wRSW
;BRENDAVVV*092345z4903.50N/07201.75W_220/004g005b0990
```