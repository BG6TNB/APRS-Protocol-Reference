---
order: "9.7"
title: The Compression Type (T) Byte
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The `T` byte follows the `cs` bytes. The `T` byte contains several bit fields showing the GPS fix status, the NMEA source of the position data and the origin of the compression.

The `T` byte is not meaningful if the `c` byte is ` ` (space).

**Compression Type (T) Byte Format**

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  | Not used | Not used | GPS Fix | NMEA Source |  | Compression Origin |  |  |

**GPS Fix (bit 5)**

| Value | Meaning |
| :---: | :--- |
| 0 | old (last) |
| 1 | current |

**NMEA Source (bits 4-3)**

| Value | Meaning |
| :---: | :--- |
| 00 | other |
| 01 | GLL |
| 10 | GGA |
| 11 | RMC |

**Compression Origin (bits 2-1-0)**

| Value | Meaning |
| :---: | :--- |
| 000 | Compressed |
| 001 | TNC BText |
| 010 | Software (DOS/Mac/Win/+SA) |
| 011 | [tbd] |
| 100 | KPC3 |
| 101 | Pico |
| 110 | Other tracker [tbd] |
| 111 | Digipeater conversion |

For example, if the compressed position was derived from an RMC sentence, the fix is current, and the compression was performed by APRSdos software, then the value of `T` in binary is `0 0 1 11 010`, which equates to 58 decimal. Adding 33 to this value gives the ASCII code for the `T` byte (i.e. 91), which corresponds to the `[` character.

Thus, using data from all the earlier examples, if the RMC sentence contains (among other parameters) the following data:

```
Latitude = 49° 30' 00" north
Longitude = 72° 45' 00" west
Speed = 36.2 knots
Course = 88°
```

and:

- the fix is current
- compression is performed by APRSdos software
- the display symbol is a "car"

then the complete 13-character compressed location field is transmitted as:

```
/ YYYY XXXX $ csT
/ 5L!! <*e7 > 7P[
```
