---
order: "13.2"
title: On-Air Definition of Telemetry Parameters
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In principle, received telemetry data may be interpreted in any appropriate way. In practice, however, an APRS user can define the telemetry parameters (such as quadratic coefficients for the analog values, or the meaning of the binary data) at any time, and then send these definitions as APRS messages. Other stations receiving these messages will then know how to interpret the data.

This is achieved by sending four messages:
- A Parameter Name message.
- A Unit/Label message.
- An Equation Coefficients message.
- A Bit Sense/Project Name message.

The messages addressee is the callsign of the station transmitting the telemetry data. For example, if N0QBF launches a balloon with the callsign N0QBF-11, then the four messages are addressed to N0QBF-11.

See Chapter 14: Messages, Bulletins and Announcements for full details of message formats.