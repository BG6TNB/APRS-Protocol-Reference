---
order: "10.8"
title: Information Field Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The first 9 bytes of the Information field contain the APRS Data Type Identifier, longitude, speed, course and symbol data.

The APRS Data Type Identifier is one of:

| Value | Meaning |
| --- | --- |
| `‘` | Current GPS data (but not used in Kenwood TM-D700 radios). |
| `'` | Old GPS data (or Current GPS data in Kenwood TM-D700 radios). |
| `0x1c` | Current GPS data (Rev. 0 beta units only). |
| `0x1d` | Old GPS data (Rev. 0 beta units only). |

IMPORTANT NOTE: As explained in detail below, some of the bytes in the Information field are non-printing ASCII characters. In certain circumstances (such as incorrect TNC setup or inappropriate software), some of these non-printing characters may be dropped, making the Information field appear shorter than it really is. This will lead to incorrect decoding. (In particular, if the Information field appears to be less than 9 bytes long, the packet must be ignored).
