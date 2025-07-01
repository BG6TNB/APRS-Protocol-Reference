---
order: "13.6"
title: Bit Sense/Project Name Message
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Bit Sense/Project Name message contains two types of information:
- An 8-bit pattern of ones and zeros, specifying the sense of each digital channel that matches the corresponding label.
- The name of the project associated with the telemetry station.

**Telemetry Bit Sense/Project Name Message Data**

Format:
```
BITS.B1,B2,B3,B4,B5,B6,B7,B8^ Project Title
```
Bytes: 5 1 1 1 1 1 1 1 1 0-23

**Example:**
```
:N0QBF-11V:BITS.10110000,N0QBF's Big Balloon
```
Thus in the above message examples, if digital channel B1 is 1, this indicates the camera has clicked. If channel B2 is 0, the parachute has opened, and so on.