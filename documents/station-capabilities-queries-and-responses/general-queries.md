---
order: "15.3"
title: General Queries
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The format of a general query is as follows:

**General Query Format**
```
?QueryType
? Lat,Long,Radius
```
Bytes: 1 n 1 n 1 n 1 4

**Examples:**
- `?APRS?` — General query, with standard posit and status reply.
- `?APRS? 34.02,-117.15,0200` — General query for stations within a target footprint of radius 200 miles centered on 34.02 degrees north, 117.15 degrees west, with standard posit and status reply. (Note the leading space in the latitude, as its value is positive, see below).
- `?IGATE?` — General query for IGate stations, with a Station Capabilities reply.
- `?WX?` — Query for weather stations, with a standard Weather Report reply (without a position), followed by a standard posit.

In the case of an `?APRS?` query for stations within a particular target footprint, the latitude and longitude parameters are in floating point degrees (not in APRS lat/long position format).
- North and east coordinates are positive values, indicated by a leading space.
- South and west coordinates are negative values.
- The radius of the footprint is in miles, expressed as a fixed 4-digit number in whole miles.

All stations inside the specified coverage circle should respond with a Position Report and a Status Report.