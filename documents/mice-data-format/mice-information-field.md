---
order: "10.7"
title: Mic-E Information Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Information field is used to complete the Position Report that was begun in the Destination Address field. The encoding used is different from the destination address since the content is not constrained to be printable, shifted 7-bit ASCII, as it is in the address. However, full 8-bit binary is not used — all values are offset by 28 and further operations (described below) are performed on some of the values to make almost all of the data printable ASCII.

The format of the Information field is as follows:

Mic-E Data — INFORMATION FIELD Format

| Longitude | Speed and Course | | | | Symbol Code | Sym Table ID | Mic-E Telemetry Data / Mic-E Status Text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| d+28 | m+28 | h+28 | SP+28 | DC+28 | SE+28 | Symbol Code | Sym Table ID | Mic-E Status Text |
| Bytes: 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | n |
