---
order: "9.1"
title: The Advantages of Data Compression
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Compressed data format may be used in place of the numeric lat/long coordinates already described, such as in the `!`, `/`, `@` and `=` formats.

Data compression has several important benefits:

- Fully backwards compatible with all existing formats.
- Fully supports any comment string.
- Speed is accurate to +/-1 mph up to about 40 mph and within 3% at 600 mph.
- Altitude in feet is accurate to +/- 0.4% from 1 foot to 3000 miles.
- Consistent one-algorithm processing of compressed latitude and longitude.
- Improved position to 1 foot worldwide.
- Pre-calculated radio range, compressed to one byte.
- Potential 50% compression of every position format on the air.
- Potential 40% reduction of raw GPS NMEA data length.
- Additional 7-byte reduction for NEMA GGA altitudes.
- Support for TNC compression at the NMEA source (from the GPS receiver).
- Digipeater compression of old NMEA trackers on the fly.
- Usage is optional in all cases.

The only minor disadvantages are that the course only resolves to +/- 2 degrees, and this format does not support PHG.
