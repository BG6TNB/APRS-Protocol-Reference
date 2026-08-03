---
order: "9.11"
title: Compressed Report Formats
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Compressed data is contained in the AX.25 Information field, in these formats:

**Compressed Lat/Long Position Report Format — no Timestamp**

| ! or = | Sym Table ID | Comp Lat `YYYY` | Comp Long `XXXX` | Symbol Code | Compressed Course/Speed / Compressed Radio Range / Compressed Altitude | Comp Type `T` | Comment (max 40 chars) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 4 | 4 | 1 | 2 | 1 | 0-40 |

**Examples**

```
=/5L!!<*e7>  sTComment
```

with APRS messaging. Note the space character following the `>` Symbol Code, indicating that there is no course/speed, radio range or altitude. The `sT` characters are fillers and have no significance here.

```
=/5L!!<*e7>7P[
```

with APRS messaging, RMC sentence, with course/speed.

```
=/5L!!<*e7>{?!
```

with APRS messaging, with radio range.

```
=/5L!!<*e7OS]S
```

with APRS messaging, GGA sentence, altitude.

**Compressed Lat/Long Position Report Format — with Timestamp**

| / or @ | Time DHM/HMS | Sym Table ID | Comp Lat `YYYY` | Comp Long `XXXX` | Symbol Code | Compressed Course/Speed / Compressed Radio Range / Compressed Altitude | Comp Type `T` | Comment (max 40 chars) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 7 | 1 | 4 | 4 | 1 | 2 | 1 | 0-40 |

**Example**

```
@092345z/5L!!<*e7>{?!
```

with APRS messaging, timestamp, radio range.
