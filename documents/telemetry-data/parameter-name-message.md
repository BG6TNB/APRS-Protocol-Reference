---
order: "13.3"
title: Parameter Name Message
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Parameter Name message contains the names (N) associated with the five analog channels and the 8 digital channels. Its format is as follows:

**Telemetry Parameter Name Message Data**

Note the different byte counts, which include commas where shown. The list may stop at any field.

Format:
```
PARM.A1,N...[,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...][,N...]
```
Bytes: 5 1-7 1-7 1-6 1-6 1-5 1-6 1-5 1-4 1-4 1-4 1-3 1-3 1-3

**Example:**
```
:N0QBF-11V:PARM.Battery,Btemp,ATemp,Pres,Alt,Camra,Chut,Sun,10m,ATV
```
The list can terminate after any field.