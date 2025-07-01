---
order: "11.5"
title: Item Report Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

An Item Report has a variable-length Item name, 3–9 characters long. The name may consist of any printable ASCII characters except `!` or `_`.

Item names are case-sensitive.

The `)` is the APRS Data Type Identifier for an Item Report, and a `!` or `_` separates the Item name from the rest of the report:
- `!` indicates a live Item.
- `_` is the Item "kill" character.

The position may be in lat/long or compressed lat/long format. There is no provision for a timestamp. The report may also contain Extended Data.

The Comment field may contain any appropriate APRS data (see the Comment Field section in Chapter 5: APRS Data in the AX.25 Information Field).

**Item Report Format — with Lat/Long position**

| Field | Description |
|-------|-------------|
| ) | Data Type Identifier |
| Item Name | 3–9 characters |
| ! or _ | Live/Killed indicator |
| Lat | Latitude |
| Sym Table ID | Symbol Table ID |
| Long | Longitude |
| Symbol Code | Symbol Code |
| Area Object | Area Object (optional) |
| Comment | (max 36 chars with Data Extension, or 43 without) |

**Examples:**
```
)AIDV#2!4903.50N/07201.75WA
)G/WB4APR! 53 VV.VVN\ 002 VV.VVWd
)AIDV#2_4903.50N/07201.75WA
```

**Item Report Format — with Compressed Lat/Long position**

| Field | Description |
|-------|-------------|
| ) | Data Type Identifier |
| Item Name | 3–9 characters |
| ! or _ | Live/Killed indicator |
| Compressed Position Data | /YYYYXXXX$csT |
| Comment | (max 43 chars) |

**Example:**
```
)MOBIL!\5L!!<*e7 9 VsT
```