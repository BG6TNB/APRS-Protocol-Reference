---
order: "5.2"
title: APRS Data Type Identifier
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Every APRS packet contains an APRS Data Type Identifier (DTI). This determines the format of the remainder of the data in the Information field, as follows:

**APRS Data Type Identifiers**

| Ident | Data Type                                                                    |
| :---: | ---------------------------------------------------------------------------- |
| 0x1c  | Current Mic-E Data (Rev 0 beta)                                              |
| 0x1d  | Old Mic-E Data (Rev 0 beta)                                                  |
| !     | Position without timestamp (no APRS messaging), or Ultimeter 2000 WX Station |
| "     | *[Unused]*                                                                   |
| #     | Peet Bros U-II Weather Station                                               |
| $     | Raw GPS data or Ultimeter 2000                                               |
| %     | Agrelo DFJr / MicroFinder                                                    |
| &     | [Reserved — Map Feature]                                                     |
| '     | Old Mic-E Data (but Current data for TM-D700)                                |
| (     | *[Unused]*                                                                   |
| )     | Item                                                                         |
| *     | Peet Bros U-II Weather Station                                               |
| +     | *[Reserved — Shelter data with time]*                                        |
| ,     | Invalid data or test data                                                    |
| -     | *[Unused]*                                                                   |
| .     | *[Reserved — Space weather]*                                                 |
| /     | Position with timestamp (no APRS messaging)                                  |
| 0-9   | *[Do not use]*                                                               |
| :     | Message                                                                      |
| ;     | Object                                                                       |
| <     | Station Capabilities                                                         |
| =     | Position without timestamp (with APRS messaging)                             |
| >     | Status                                                                       |
| ?     | Query                                                                        |
| @     | Position with timestamp (with APRS messaging)                                |
| A–S   | *[Do not use]*                                                               |
| T     | Telemetry data                                                               |
| U–Z   | *[Do not use]*                                                               |
| [     | Maidenhead grid locator beacon (obsolete)                                    |
| \     | *[Unused]*                                                                   |
| ]     | *[Unused]*                                                                   |
| ^     | *[Unused]*                                                                   |
| _     | Weather Report (without position)                                            |
| '     | Current Mic-E Data (not used in TM-D700)                                     |
| a–z   | *[Do not use]*                                                               |
| {     | User-Defined APRS packet format                                              |
| \|    | *[Do not use — TNC stream switch character]*                                 |
| }     | Third-party traffic                                                          |
| ~     | *[Do not use — TNC stream switch character]*                                 |

**Note:** There is one exception to the requirement for the Data Type Identifier to be the first character in the Information field — this is the Position without Timestamp (indicated by the **!** DTI). The **!** character may occur anywhere up to and including the 40th character position in the Information field. This variability is required to support X1J TNC digipeaters which have a string of unmodifiable text at the beginning of the field.

**Note:** The Kenwood TM-D700 radio uses the **'** DTI for current Mic-E data. The radio does not use the **'** DTI.
