---
order: "10.24"
title: Mic-E Data in Non-APRS Networks
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Some parts of the Mic-E AX.25 Information field may contain binary data (i.e. non-printable ASCII characters). If such a packet is constrained to the APRS network, this should not cause any difficulties.

If, however, the packet is to be forwarded via a network that does not reliably preserve binary data (e.g. the Internet), then it is necessary to convert the data to a format that will preserve it.

Further, if the packet subsequently re-emerges back onto the APRS network, it will then be necessary to re-convert the data back to its original format.
