---
order: 10.1
title: Mic-E Data Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}


In Mic-E data format, the station’s position, course, speed and display symbol, together with an APRS digipeater path and Mic-E Message Code, are packed into the AX.25 Destination Address and Information fields.

The Information field can also optionally contain either Mic-E telemetry data or Mic-E status. The Mic-E Status can contain the station’s Maidenhead locator and altitude.

Mic-E packets can be very short. At the minimum, with no callsigns in the Digipeater Addresses field and no optional telemetry data or Mic-E status text, a complete Mic-E packet is just 25 bytes long (excluding FCS and flags).

Mic-E data format is not only used in the Microphone Encoder unit; it is also used in the PIC Encoder and in the Kenwood TH-D7 and TM-D700 radios.
