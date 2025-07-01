---
order: "6.1"
title: Time Formats
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS supports several time formats to indicate when a position or event was recorded. Time information is typically included in position reports, weather reports, and other APRS packets to provide context for the data.

## Supported Time Formats
| Format | Example   | Meaning                        | Notes                |
|--------|-----------|--------------------------------|----------------------|
| DHM    | 231530z   | Day, Hour, Minute (UTC)        | 23rd day, 15:30 UTC  |
| HMS    | 153045h   | Hour, Minute, Second (local)   | 15:30:45 local time  |
| MDHM   | 112315z   | Month, Day, Hour, Minute (UTC) | 11th month, 23rd day, 15:00 UTC |

- **DHM**: Day of month (2 digits), hour (2 digits), minute (2 digits), followed by 'z' for Zulu (UTC).
- **HMS**: Hour (2 digits), minute (2 digits), second (2 digits), followed by 'h' for local time.
- **MDHM**: Month (2 digits), day (2 digits), hour (2 digits), minute (2 digits), followed by 'z' for Zulu (UTC).

## Usage Notes
- Time formats are optional in some APRS packets but recommended for accuracy.
- 'z' indicates Zulu (UTC) time; 'h' indicates local time.
- The time stamp, if present, usually appears at the start of the information field after the data type identifier.

## Example
A position report with a DHM timestamp:
```
/APRS>APRS,TCPIP*: @231530z4903.50N/07201.75W>Test station
```
Here, `@231530z` means the position was recorded on the 23rd day at 15:30 UTC.

---

Accurate time formats help ensure the relevance and reliability of APRS data.