---
order: "13.4"
title: Unit/Label Message
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Unit/Label message specifies the units (U) for the analog values, and the labels (L) associated with the digital channels:

**Telemetry Unit/Label Message Data**

Note the different byte counts, which include commas where shown. The list may stop at any field.

Format:
```
UNIT.A1,U...[,U...][,U...][,U...][,U...][,L...][,L...][,L...][,L...][,L...][,L...][,L...][,L...]
```
Bytes: 5 1-7 1-7 1-6 1-6 1-5 1-6 1-5 1-4 1-4 1-4 1-3 1-3 1-3

**Example:**
```
:N0QBF-11V:UNIT.v/100,deg.F,deg.F,Mbar,Kft,Click,OPEN,on,on,hi
```
The list can terminate after any field.