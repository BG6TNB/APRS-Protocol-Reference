---
order: "17.3"
title: Third-Party Header
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

After a packet emerges from a third-party network, the receiving gateway station modifies it (by inserting a `}` Third-Party Data Type Identifier and modifying the Source Path Header) before transmitting it on the local APRS network.

The modified Source Path Header is called the Third-Party Header.

**Third-party Format**

```
}
```

**Third-Party Header**

```
} [Third-Party Header] [Rest of the original data]
Bytes: 1 n n
```

In a similar way to the Source Path Header, The Third-Party Header can be in either of two formats: "TNC-2" or "AEA" format.

**Third Party Header — "TNC-2" format**

```
Source Path Header  ,  Third-Party Network Identifier  ,  Callsign of Receiving Gateway Station  *  :
(without "unused"       ("callsign")                       (-SSID)
 digipeaters, * or :)

Bytes: 3-99  1  1-9  1  1-9  1  1
```

Example:
```
WB4APR-14>APRS,RELAY,TCPIP,G9RXG*:
```

**Third Party Header — "AEA" format**

```
Source Path Header  >  Third-Party Network Identifier  >  Callsign of Receiving Gateway Station  *  >  Destination Callsign  :
(without "unused"       ("callsign")                       (-SSID)                                     from Source Path Header
 digipeaters,                                                                                          (-SSID)
 destination, * or :)

Bytes: 2-90  1-9  1  1-9  1  1  1-9  1
```

Example:
```
WB4APR-14>RELAY>TCPIP>G9RXG*>APRS:
```

In both cases, the "unused" digipeater callsigns (i.e. those digipeater callsigns after the asterisk) in the original Source Path Header are stripped out. The asterisk itself is also stripped out of the Source Path Header.

Then two additional callsigns are inserted:

- The Third-Party Network Identifier (e.g. TCPIP). This is a dummy "callsign" that identifies the nature of the third-party network.
- The callsign of the receiving gateway station, followed by an asterisk.
