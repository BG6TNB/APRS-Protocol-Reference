---
order: "6.7"
title: Default Null Position
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Where a station does not have any specific position information to transmit (for example, a Mic-E unit without a GPS receiver connected to it), the station must transmit a default null position in the location field.

The null position corresponds to 0° 0' 0" north, 0° 0' 0" west.

The null position should include the \. symbol (unknown/indeterminate position). For example, a Position Report for a station with unknown position will contain the coordinates:

```
...0000.00N\00000.00W....
```
