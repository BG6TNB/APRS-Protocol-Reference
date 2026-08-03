---
order: "17.5"
title: An Example of Sending a Message through the Internet
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

**The Scenario:**

- WB4APR-14 wants to send a message via the Internet to G3NRW.
- The nearest Internet gateway to WB4APR-14 is K4HG, reachable via a RELAY,WIDE path.
- The nearest Internet gateway to G3NRW is G9RXG.

**The Process:**

- In the normal way, WB4APR-14 builds a message packet that contains:
```
:G3NRW **VVVVVVVV** :Hi Ian{001
```
- WB4APR-14 transmits the packet via his UNPROTO path RELAY,WIDE.
- The Internet gateway K4HG happens to receive this packet from the RELAY digipeater in the path.
- K4HG builds a new packet that contains the source path and the original message:
```
WB4APR-14>APRS,RELAY*,WIDE::G3NRW **VVVVVVVV** :Hi Ian{001
```
- K4HG sends this packet (using telnet) to an APRServer on the Internet.
- All Internet gateways throughout the world that are connected to the APRServe network (including G9RXG) receive the packet.
- G9RXG converts the packet into a Third-Party packet:
```
}WB4APR-14>APRS,RELAY,TCPIP,G9RXG*::G3NRW **VVVVVVVV** :Hi Ian{001
```

Note that the WIDE digipeater was stripped out of the header because it was unused.

- G9RXG transmits the packet over the local APRS network.
- G3NRW receives the packet, strips out the Third-Party Header, and discovers that the packet contains a message for him. From the header, G3NRW then establishes that the acknowledgement is to go back to WB4APR-14.
