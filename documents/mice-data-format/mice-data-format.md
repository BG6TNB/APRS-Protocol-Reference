---
order: "10.1"
title: Mic-E Data Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In Mic-E data format, the station's position, course, speed and display symbol, together with an APRS digipeater path and Mic-E Message Code, are packed into the AX.25 Destination Address and Information fields.

The Information field can also optionally contain either Mic-E telemetry data or Mic-E status. The Mic-E Status can contain the station's Maidenhead locator and altitude.

Mic-E packets can be very short. At the minimum, with no callsigns in the Digipeater Addresses field and no optional telemetry data or Mic-E status text, a complete Mic-E packet is just 25 bytes long (excluding FCS and flags).

Mic-E data format is not only used in the Microphone Encoder unit; it is also used in the PIC Encoder and in the Kenwood TH-D7 and TM-D700 radios.

## Mic-E Data Payload

The Mic-E data format allows a large amount of data to be carried in a very short packet. The data is split between the Destination Address field and the Information field of a standard AX.25 UI-frame.

**Destination Address Field** — The 7-byte Destination Address field contains the following encoded information:

- The 6 latitude digits.
- A 3-bit Mic-E message identifier, specifying one of 7 Standard Mic-E Message Codes or one of 7 Custom Message Codes or an Emergency Message Code.
- The North/South and West/East Indicators.
- The Longitude Offset Indicator.
- The generic APRS digipeater path code.

Although the destination address appears to be quite unconventional, it is still a valid AX.25 address, consisting only of printable 7-bit ASCII values (shifted one bit left) — see the *Amateur Packet-Radio Link-Layer Protocol* specification for full details of the format of standard AX.25 addresses.

**Information Field** — This field contains the following data:

- The encoded longitude.
- The encoded course and speed.
- The display Symbol Code and Symbol Table Identifier.
- An optional field, containing either Mic-E telemetry data or a Mic-E status text string. The status string can contain plain text, Maidenhead locator or the station's altitude.
