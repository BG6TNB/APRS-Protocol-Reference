---
order: "9.1"
title: The Advantages of Data Compression
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Data compression in APRS is used to reduce the size of transmitted packets, allowing more information to be sent in less bandwidth. This is especially important in radio communications, where channel capacity is limited.

## Why Use Data Compression?
- Increases the number of stations and messages that can be transmitted in a given time
- Reduces channel congestion and packet collisions
- Allows for the inclusion of more data fields (e.g., altitude, course, speed) without exceeding packet size limits

## Where is Compression Applied?
- Compressed position reports (latitude, longitude, course, speed, altitude)
- Some telemetry and data extension fields

## Example
A standard position report:
```
!4903.50N/07201.75W>
```
A compressed position report:
```
!/5L!<*e>/'6X
```
The compressed format encodes the same information in fewer characters.

---

Data compression in APRS enables efficient, high-density communication on crowded radio channels.