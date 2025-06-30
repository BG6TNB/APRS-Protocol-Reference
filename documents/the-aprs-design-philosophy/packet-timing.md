---
order: 2.2
title: Packet Timing
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Since APRS packets are error-free, but are not guaranteed delivery, APRS transmits information redundantly. To assure rapid delivery of new or changing data, and to preserve channel capacity by reducing interference from old data, APRS should transmit new information more frequently than old information.

There are several algorithms in use to achieve this:

- **Decay Algorithm** — Transmit a new packet once and n seconds later. Double the value of n for each new transmission. When n reaches the net cycle time, continue at that rate. Other factors besides “doubling” may be appropriate, such as for new message lines.

- **Fixed Rate** — Transmit a new packet once and n seconds later. Transmit it x times and stop.

- **Message-on-Heard** — Transmit a new packet according to either algorithm above. If the packet is still valid, and has not been acknowledged, and the net cycle time has been reached, then the recipient is probably not available. However, if a packet is then subsequently heard from the recipient, try once again to transmit the packet.

- **Time-Out** — This term is used to describe a time period beyond which it is reasonable to assume that a station no longer exists or is off the air if no packets have been heard from it. A period of 2 hours is suggested as the nominal default timeout. This time-out is not used in any transmitting algorithms, but is useful in some programs to decide when to cease displaying stations as “active”. Note that on HF, signals come and go, so decisions about activity may need to be more flexible.
