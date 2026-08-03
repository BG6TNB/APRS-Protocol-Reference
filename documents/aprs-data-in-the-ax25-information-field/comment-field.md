---
order: "5.4"
title: Comment Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In general, any APRS packet can contain a plain text comment (such as a beacon message) in the Information field, immediately following the APRS Data or APRS Data Extension.

There is no separator between the APRS data and the comment unless otherwise stated.

The comment may contain any printable ASCII characters (except `|` and `~`, which are reserved for TNC channel switching).

The maximum length of the comment field depends on the report — details are included in the description of each report.

## Special Cases

In special cases, the Comment field can also contain further APRS data:

- Altitude in comment text (see Chapter 6: Time and Position Formats), or in Mic-E status text (see Chapter 10: Mic-E Data Format).
- Maidenhead Locator (grid square), in a Mic-E status text field (see Chapter 10: Mic-E Data Format) or in a Status Report (see Chapter 16: Status Reports).
- Bearing and Number/Range/Quality parameters (`/BRG/NRQ`), in DF reports (see Chapter 7: APRS Data Extensions).
- Area Object Line Widths (see Chapter 11: Object and Item Reports).
- Signpost Objects (see Chapter 11: Object and Item Reports).
- Weather and Storm Data (see Chapter 12: Weather Reports).
- Beam Heading and Power, in Status Reports (see Chapter 16: Status Reports).
