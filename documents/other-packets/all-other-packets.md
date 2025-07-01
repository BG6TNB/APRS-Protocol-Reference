---
order: "19.2"
title: All Other Packets
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

All other packets that do not conform to the standard APRS formats described in this specification are generally ignored by APRS software. These packets may be passed through the network but are not interpreted or displayed. Implementations should ensure that only recognized APRS packet types are processed for display or mapping, while unknown or non-APRS packets are safely ignored to maintain network efficiency and data integrity.