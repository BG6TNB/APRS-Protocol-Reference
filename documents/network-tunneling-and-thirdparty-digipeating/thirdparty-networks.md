---
order: "17.1"
title: Third-Party Networks
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS provides a mechanism for formatting packets that are to be transported through third-party (i.e. non AX.25) networks, such as the Internet, an Ethernet LAN or a direct wire connection.

These networks do not understand APRS source, destination and digipeater addresses, so it is necessary to send them as data, along with the original data being transmitted.