---
order: 4.4
title: APRS Software Version Number
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The AX.25 Destination Address field can contain the version number of the APRS software that is running at the station. Knowledge of the version number can be useful when debugging.

The following software version types are reserved (xx and xxx indicate a version number):

    APCxxx   APRS/CE, Windows CE
    APDxxx   Linux aprsd server
    APExxx   PIC-Encoder
    APIxxx   Icom radios (future)
    APICxx   ICQ messaging
    APKxxx   Kenwood radios
    APMxxx   MacAPRS
    APPxxx   pocketAPRS
    APRxxx   APRSdos
    APRS     older versions of APRSdos
    APRSM    older versions of MacAPRS
    APRSW    older versions of WinAPRS
    APSxxx   APRS+SA
    APWxxx   WinAPRS
    APXxxx   X-APRS
    APYxxx   Yaesu radios (future)
    APZxxx   Experimental

This table will be added to by the APRS Working Group.

For example, a station using version 3.2.6 of MacAPRS could use the Chapter 4: APRS Data in the AX.25 Destination and Source Address Fields 15 destination callsign *APM326*.

The Experimental destination is designated for *temporary* use only while a product is being developed, before a special APRS Software Version address is assigned to it.