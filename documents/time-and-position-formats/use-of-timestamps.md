---
order: "6.2"
title: Use of Timestamps
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Timestamps in APRS packets indicate when a particular event, position, or observation was recorded. They are important for ensuring the relevance and accuracy of the data, especially in dynamic or mobile environments.

## Why Use Timestamps?
- To provide context for position, weather, or status reports
- To allow receivers to determine the freshness of the data
- To synchronize data from multiple sources

## Where Timestamps Appear
- At the beginning of the information field, after the data type identifier (e.g., '@', '/', or '!')
- In position reports, weather reports, and some telemetry packets

## Interpreting Timestamps
- Timestamps may be in UTC (Zulu, 'z') or local time ('h')
- The format (DHM, HMS, MDHM) determines how to read the date and time
- If no timestamp is present, the time of reception is assumed

## When Are Timestamps Required?
- Timestamps are optional in many APRS packets, but are recommended for mobile or time-sensitive data
- Some packet types (e.g., status reports) may omit timestamps if the timing is not critical

## Example
A position report with a timestamp:
```
/APRS>APRS,TCPIP*: @231530z4903.50N/07201.75W>Test station
```
Here, `@231530z` is the timestamp (23rd day, 15:30 UTC).

---

Timestamps help ensure that APRS data is timely and actionable, especially in fast-changing situations.