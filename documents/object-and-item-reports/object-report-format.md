---
order: "11.4"
title: Object Report Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

An Object Report has a fixed 9-character Object name, which may consist of any printable ASCII characters.

Object names are case-sensitive.

The `;` is the APRS Data Type Identifier for an Object Report, and a `*` or `_` separates the Object name from the rest of the report:
- `*` indicates a live Object.
- `_` indicates a killed Object.

The position may be in lat/long or compressed lat/long format, and the report may also contain Extended Data. An Object always has a timestamp.

The Comment field may contain any appropriate APRS data (see the Comment Field section in Chapter 5: APRS Data in the AX.25 Information Field).

**Object Report Format — with Lat/Long position**

| Field | Description |
|-------|-------------|
| ; | Data Type Identifier |
| Object Name | 9 characters |
| * or _ | Live/Killed indicator |
| Time DHM/HMS | Timestamp |
| Lat | Latitude |
| Sym Table ID | Symbol Table ID |
| Long | Longitude |
| Symbol Code | Symbol Code |
| Area Object | Area Object (optional) |
| Comment | (max 36 chars with Data Extension, or 43 without) |

**Examples:**
```
;LEADERVVV*092345z4903.50N/07201.75W>088/036
;LEADERVVV_092345z4903.50N/07201.75W>088/036
```

**Object Report Format — with Compressed Lat/Long position**

| Field | Description |
|-------|-------------|
| ; | Data Type Identifier |
| Object Name | 9 characters |
| * or _ | Live/Killed indicator |
| Time DHM/HMS | Timestamp |
| Compressed Position Data | /YYYYXXXX$csT |
| Comment | (max 43 chars) |

**Example:**
```
;LEADERVVV*092345z/5L!!<*e7>7P[
```