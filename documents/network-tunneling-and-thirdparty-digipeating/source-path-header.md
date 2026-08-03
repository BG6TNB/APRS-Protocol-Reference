---
order: "17.2"
title: Source Path Header
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

**Data with Source Path Header**

```
[Source Path Header] [Data Type ID] [Rest of the original data]
Bytes: n 1 n
```

The Source Path Header may be in either of two formats, known as the "TNC-2" format and the "AEA" format (so called because when TNC-2 or AEA-compatible TNCs are operating in terminal MONitor mode they automatically produce headers in these formats).

The APRS Working Group has agreed to move towards standardization on the "TNC-2" format in future implementations.

In most cases, AEA TNCs will produce Source Path Headers in "TNC-2" format when BBSMSGS is set to ON.

**Source Path Header — "TNC-2" Format**

An asterisk follows the digipeater callsign heard.

```
        0-8 Digipeaters
Source Callsign  >  Destination Callsign  ,  Digipeater Callsign  :
    (-SSID)             (-SSID)               (-SSID)(*)

Bytes: 1-9  1  1-9  0-81  1
```

Example:
```
WB4APR-14>APRS,RELAY*,WIDE:
```
(WIDE digipeater "unused")

**Source Path Header — "AEA" Format**

An asterisk follows the source or digipeater callsign heard.

```
        0-8 Digipeaters
Source Callsign  >  Digipeater Callsign  >  Destination Callsign  :
    (-SSID)(*)          (-SSID)(*)              (-SSID)

Bytes: 1-10  0-81  1  1-9  1
```

Example:
```
WB4APR-14>RELAY*>WIDE>APRS:
```
(WIDE digipeater "unused")

In both formats, the SSID may be omitted if it is –0.

In both formats, the callsign of the digipeater from which the incoming packet was heard is indicated with an asterisk. (Alternatively, for "AEA" format only, the asterisk will follow the source callsign if the packet was heard direct from there).

Any digipeaters following the callsign of the station from which the packet was heard are termed "unused". These unused digipeaters are stripped out when building a Third-Party Header (see below).
