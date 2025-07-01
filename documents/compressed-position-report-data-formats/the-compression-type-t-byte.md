---
order: "9.7"
title: The Compression Type (T) Byte
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Compression Type (T) byte in APRS compressed position reports indicates the type of data compression and the presence of additional data fields in the packet.

## What is the Compression Type (T) Byte?
- A single character in the compressed string that specifies the encoding method and optional extensions
- Determines how the rest of the packet should be interpreted

## Usage in APRS
- The T byte is located at a fixed position in the 13-character compressed string
- Its value indicates whether course, speed, altitude, or other extensions are present

## Example
```
!/5L!<*e>/'6X
```
In this example, the T byte is one of the characters in the compressed string and determines the decoding process

## Usage Notes
- Correct interpretation of the T byte is essential for accurate decoding of compressed reports
- The APRS specification defines the meaning of each possible T byte value

---

The Compression Type (T) byte enables flexible, extensible data encoding in APRS compressed position reports.