---
order: APPENDIX 1
title: APRS DATA FORMATS
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

This Appendix contains format diagrams for all APRS data formats. The gray fields are optional. Shaded (yellow) characters are literal ASCII characters.

## AX.25 UI-FRAME FORMAT

| Field | Flag | Destination Address | Source Address | Digipeater Addresses (0-8) | Control Field (UI) | Protocol ID | INFORMATION FIELD | FCS | Flag |
|------|------|---------------------|---------------|----------------------------|--------------------|-------------|-------------------|-----|------|
| Bytes | 1    | 7                   | 7             | 0–56                       | 1                  | 1           | 1–256             | 2   | 2    |

## Generic APRS Information Field

| Field         | Data Type ID | APRS Data^ | APRS Data Extension | Comment |
|--------------|--------------|------------|---------------------|---------|
| Bytes         | 1            | n          | 7                   | n       |

## Lat/Long Position Report Format — without Timestamp

| Field                | ! or = | Lat | Sym Table ID | Long | Symbol Code | Comment (max 43 chars) |
|---------------------|--------|-----|--------------|------|-------------|------------------------|
| Bytes                | 1      | 8   | 1            | 9    | 1           | 0-43                   |

## Lat/Long Position Report Format — with Timestamp

| Field                | / or @ | Time DHM / HMS | Lat | Sym Table ID | Long | Symbol Code | Comment (max 43 chars) |
|---------------------|--------|----------------|-----|--------------|------|-------------|------------------------|
| Bytes                | 1      | 7              | 8   | 1            | 9    | 1           | 0-43                   |

## Lat/Long Position Report Format — with Data Extension (no Timestamp)

| Field                | Course/Speed | Power/Height/Gain/Dir | Radio Range | ! or = | Lat | Sym Table ID | Long | Symbol Code | DF Signal Strength | Comment (max 36 chars) |
|---------------------|--------------|----------------------|-------------|--------|-----|--------------|------|-------------|--------------------|------------------------|
| Bytes                | 1            | 8                    | 1           | 1      | 8   | 1            | 9    | 1           | 7                  | 0-36                   |

## Lat/Long Position Report Format — with Data Extension and Timestamp

| Field                | Course/Speed | Power/Height/Gain/Dir | Radio Range | / or @ | Time DHM / HMS | Lat | Sym Table ID | Long | Symbol Code | DF Signal Strength | Comment (max 36 chars) |
|---------------------|--------------|----------------------|-------------|--------|----------------|-----|--------------|------|-------------|--------------------|------------------------|
| Bytes                | 1            | 8                    | 1           | 1      | 7              | 8   | 1            | 9    | 1           | 7                  | 0-36                   |

## Maidenhead Locator Beacon

| Field         | Beacon | Grid Locator | Comment |
|--------------|--------|-------------|---------|
| Bytes         | 1      | 4 or 6      | n       |

## Raw NMEA Position Report Format

| Field         | NMEA Received Sentence |
|--------------|-----------------------|
| Bytes         | 25-209                |

## DF Report Format — without Timestamp

| Field         | Course/Speed | Power/Height/Gain/Dir | Radio Range | ! or = | Lat | Sym Table ID | / | Long | Symbol Code | \ | DF Signal Strength | /BRG/NRQ | Comment (max 28 chars) |
|--------------|--------------|----------------------|-------------|--------|-----|--------------|---|------|-------------|----|--------------------|----------|------------------------|
| Bytes         | 1            | 8                    | 1           | 1      | 8   | 1            | 1 | 9    | 1           | 1  | 7                  | 8        | 0-28                   |

## DF Report Format — with Timestamp

| Field         | Course/Speed | Power/Height/Gain/Dir | Radio Range | / or @ | Time DHM/HMS | Lat | Sym Table ID | / | Long | Symbol Code | \ | DF Signal Strength | /BRG/NRQ | Comment (max 28 chars) |
|--------------|--------------|----------------------|-------------|--------|---------------|-----|--------------|---|------|-------------|----|--------------------|----------|------------------------|
| Bytes         | 1            | 8                    | 1           | 1      | 7             | 8   | 1            | 1 | 9    | 1           | 1  | 7                  | 8        | 0-28                   |

## Compressed Lat/Long Position Report Format — no Timestamp

| Field         | Compressed Course/Speed | Compressed Radio Range | ! or = | Sym Table ID | Comp Lat YYYY | Comp Long XXXX | Symbol Code | Compressed Altitude | Comp Type T | Comment (max 40 chars) |
|--------------|------------------------|-----------------------|--------|--------------|---------------|----------------|-------------|---------------------|-------------|------------------------|
| Bytes         | 1                      | 1                     | 1      | 1            | 4             | 4              | 1           | 2                   | 1           | 0-40                   |

## Compressed Lat/Long Position Report Format — with Timestamp

| Field         | Compressed Course/Speed | Compressed Radio Range | / or @ | Time DHM/HMS | Sym Table ID | Comp Lat YYYY | Comp Long XXXX | Symbol Code | Compressed Altitude | Comp Type T | Comment (max 40 chars) |
|--------------|------------------------|-----------------------|--------|--------------|--------------|---------------|----------------|-------------|---------------------|-------------|------------------------|
| Bytes         | 1                      | 1                     | 1      | 7            | 1            | 4             | 4              | 1           | 2                   | 1           | 0-40                   |