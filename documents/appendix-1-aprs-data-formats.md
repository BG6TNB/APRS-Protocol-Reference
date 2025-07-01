---
order: APPENDIX 1
title: APRS DATA FORMATS
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

This Appendix contains format diagrams for all APRS data formats. The gray fields are optional. Shaded (yellow) characters are literal ASCII characters.

## AX.25 UI-FRAME FORMAT

| 字段 | Flag | Destination Address | Source Address | Digipeater Addresses (0-8) | Control Field (UI) | Protocol ID | INFORMATION FIELD | FCS | Flag |
|------|------|---------------------|---------------|----------------------------|--------------------|-------------|-------------------|-----|------|
| 字节 | 1    | 7                   | 7             | 0–56                       | 1                  | 1           | 1–256             | 2   | 2    |

## Generic APRS Information Field

| 字段         | Data Type ID | APRS Data^ | APRS Data Extension | Comment |
|--------------|--------------|------------|---------------------|---------|
| 字节         | 1            | n          | 7                   | n       |

## Lat/Long Position Report Format — without Timestamp

| 字段                | ! or = | Lat | Sym Table ID | Long | Symbol Code | Comment (max 43 chars) |
|---------------------|--------|-----|--------------|------|-------------|------------------------|
| 字节                | 1      | 8   | 1            | 9    | 1           | 0-43                   |

## Lat/Long Position Report Format — with Timestamp

| 字段                | / or @ | Time DHM / HMS | Lat | Sym Table ID | Long | Symbol Code | Comment (max 43 chars) |
|---------------------|--------|----------------|-----|--------------|------|-------------|------------------------|
| 字节                | 1      | 7              | 8   | 1            | 9    | 1           | 0-43                   |

## Lat/Long Position Report Format — with Data Extension (no Timestamp)

| 字段                | Course/Speed | Power/Height/Gain/Dir | Radio Range | ! or = | Lat | Sym Table ID | Long | Symbol Code | DF Signal Strength | Comment (max 36 chars) |
|---------------------|--------------|----------------------|-------------|--------|-----|--------------|------|-------------|--------------------|------------------------|
| 字节                | 1            | 8                    | 1           | 9      | 1   | 7            | 0-36 |             |                    |                        |

## Lat/Long Position Report Format — with Data Extension and Timestamp

| 字段                | Course/Speed | Power/Height/Gain/Dir | Radio Range | / or @ | Time DHM / HMS | Lat | Sym Table ID | Long | Symbol Code | DF Signal Strength | Comment (max 36 chars) |
|---------------------|--------------|----------------------|-------------|--------|----------------|-----|--------------|------|-------------|--------------------|------------------------|
| 字节                | 1            | 7                    | 8           | 1      | 9              | 1   | 7            | 0-36 |             |                    |                        |

## Maidenhead Locator Beacon

| 字段         | Beacon | Grid Locator | Comment |
|--------------|--------|-------------|---------|
| 字节         | 1      | 4 or 6      | n       |

## Raw NMEA Position Report Format

| 字段         | NMEA Received Sentence |
|--------------|-----------------------|
| 字节         | 25-209                |

## DF Report Format — without Timestamp

| 字段         | Course/Speed | Power/Height/Gain/Dir | Radio Range | ! or = | Lat | Sym Table ID | / | Long | Symbol Code | \ | DF Signal Strength | /BRG/NRQ | Comment (max 28 chars) |
|--------------|--------------|----------------------|-------------|--------|-----|--------------|---|------|-------------|----|--------------------|----------|------------------------|
| 字节         | 1            | 8                    | 1           | 9      | 1   | 7            | 8  | 0-28 |              |    |                    |          |                        |

## DF Report Format — with Timestamp

| 字段         | Course/Speed | Power/Height/Gain/Dir | Radio Range | / or @ | Time DHM/HMS | Lat | Sym Table ID | / | Long | Symbol Code | \ | DF Signal Strength | /BRG/NRQ | Comment (max 28 chars) |
|--------------|--------------|----------------------|-------------|--------|---------------|-----|--------------|---|------|-------------|----|--------------------|----------|------------------------|
| 字节         | 1            | 7                    | 8           | 1      | 9             | 1   | 7            | 8  | 0-28 |              |    |                    |          |                        |

## Compressed Lat/Long Position Report Format — no Timestamp

| 字段         | Compressed Course/Speed | Compressed Radio Range | ! or = | Sym Table ID | Comp Lat YYYY | Comp Long XXXX | Symbol Code | Compressed Altitude | Comp Type T | Comment (max 40 chars) |
|--------------|------------------------|-----------------------|--------|--------------|---------------|----------------|-------------|---------------------|-------------|------------------------|
| 字节         | 1                      | 4                     | 4      | 1            | 2             | 1              | 0-40        |                     |             |                        |

## Compressed Lat/Long Position Report Format — with Timestamp

| 字段         | Compressed Course/Speed | Compressed Radio Range | / or @ | Time DHM/HMS | Sym Table ID | Comp Lat YYYY | Comp Long XXXX | Symbol Code | Compressed Altitude | Comp Type T | Comment (max 40 chars) |
|--------------|------------------------|-----------------------|--------|--------------|--------------|---------------|----------------|-------------|---------------------|-------------|------------------------|
| 字节         | 1                      | 7                     | 1      | 4            | 4            | 1             | 2              | 1           | n                   | 1           | 0-40                   |