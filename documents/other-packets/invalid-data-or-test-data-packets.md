---
order: "19.1"
title: Invalid Data or Test Data Packets
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

To indicate that a packet contains invalid data, or test data that does not conform to any standard APRS format, the `,` Data Type Identifier is used.

For example, the Mic-E unit will generate such a packet if it detects that a received GPS sentence is not valid.

## Invalid Data / Test Data Format

| Field | Description |
|-------|-------------|
| `,`   | Data Type Identifier |
| ...   | Invalid Data or Test Data |

**Bytes:** 1 n

### Example
```
,191146,V,4214.2466,N,07303.5181,W,417.238,114.5,091099,14.7,W/GPS FIX
```
Invalid GPS data from a Mic-E unit. The unit has interpreted the `V` character in the received sentence to mean the data is invalid, and has stripped out the `$GPRMC` header.