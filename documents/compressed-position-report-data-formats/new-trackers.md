---
order: "9.9"
title: New Trackers
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Tracker firmware may compress GPS data directly to APRS compressed format. They would use the `!` Data Type Indicator, showing that the position is real-time and that the tracker is not APRS-capable.

If the Position Report is not real-time, then the `/` Data Type Indicator can be used instead, so that the latest fix time may be included.
