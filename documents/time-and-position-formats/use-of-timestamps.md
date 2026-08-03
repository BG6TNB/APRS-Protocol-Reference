---
order: "6.2"
title: Use of Timestamps
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

When a station transmits a report without a timestamp, an APRS receiving station can make an internal record of the time it was received, if required. This record is the receiving station's notion of the time the report was created.

On the other hand, when a station transmits a report with a timestamp, that timestamp represents the transmitting station's notion of the time the report was created.

In other words, reports sent without a timestamp can be regarded as real-time, "current" reports (and the receiving station has to record the time they were received), whereas reports sent with a timestamp may or may not be real-time, and may possibly be (very) "old".

Four APRS Data Type Identifiers specify whether or not a report contains a timestamp, depending on whether the station has APRS messaging capability or not:

| Type of Report | No APRS Messaging | With APRS Messaging |
| :--- | :---: | :---: |
| (Current/real-time) Report without timestamp | ! | = |
| (Old/non-real-time) Report with timestamp | / | @ |

Stations without APRS messaging capability are typically stand-alone trackers or digipeaters. Stations reporting without a timestamp are generally (but not necessarily) fixed stations.
