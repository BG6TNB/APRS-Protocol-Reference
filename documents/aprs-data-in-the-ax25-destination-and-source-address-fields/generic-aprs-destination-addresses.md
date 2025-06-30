---
order: 4.2
title: Generic APRS Destination Addresses
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS uses the following generic beacon-style destination addresses:

    AIR* †  ALL*    AP*    BEACON  CQ*     GPS*   DF*
    DGPS*   DRILL*  DX*    ID*     JAVA*   MAIL*  MICE*
    QST*    QTH*    RTCM*  SKY*    SPACE*  SPC*   SYM*
    TEL*    TEST*   TLM*   WX*     ZIP* †

The asterisk is a wildcard, allowing the address to be extended (up to a total of 6 alphanumeric characters). Thus, for example, *WX1*, *WX12* and *WX12CD* are all valid APRS destination addresses.

† The **AIR*** and **ZIP*** addresses are being phased out, but are needed at present for backward compatibility.

All of these addresses have an SSID of –0. Non-zero SSIDs are reserved for generic APRS digipeating.

These addresses are copied by everyone. All APRS software must accept packets with these destination addresses.

The address **GPS** (i.e. the 3-letter address **GPS**, not **GPS***) is specifically intended for use by trackers sending lat/long positions via digipeaters which have the capability of converting positions to compressed data format.

The addresses **DGPS** and **RTCM** are used by differential GPS correction stations. Most software will not make use of packets using this address, other than to pass them on to an attached GPS unit.

The address **SKY** is used for Skywarn stations.

Packets addressed to **SPCL** are intended for special events. APRS software can display such packets to the exclusion of all others, to minimize clutter on the screen from other stations not involved in the special event.

The addresses **TEL** and **TLM** is used for telemetry stations.
