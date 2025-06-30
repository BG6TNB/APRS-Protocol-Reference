---
order: 3.1
title: Protocols
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Protocols At the link level, APRS uses the AX.25 protocol, as defined in Amateur Packet-Radio Link-Layer Protocol (see Appendix 6 for details), utilizing Unnumbered Information (UI) frames exclusively. This means that APRS runs in connectionless mode, whereby AX.25 frames are transmitted without expecting any response, and reception at the other end is not guaranteed.

At a higher level, APRS supports a messaging protocol that allows users to send short messages (one line of text) to nominated stations, and expects to receive acknowledgements from those stations.
