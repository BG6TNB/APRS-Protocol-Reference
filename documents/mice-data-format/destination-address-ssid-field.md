---
order: "10.6"
title: Destination Address SSID Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Destination Address SSID (Secondary Station Identifier) field is a component of the AX.25 protocol used in APRS and Mic-E packet formats. In Mic-E, the SSID field plays a special role in conveying additional information about the transmitting station.

## What is the SSID Field?
- The SSID is a 4-bit value appended to the end of the destination or source callsign in an AX.25 address.
- It is typically written as a hyphen followed by a number (e.g., "CALL-9").

## How is it Used in Mic-E?
- In Mic-E encoding, the destination address and its SSID are used to encode status, type, and sometimes symbol information.
- The SSID value can indicate:
  - The type of station (e.g., mobile, fixed, weather)
  - The specific function or status of the station
  - Additional data such as the symbol overlay
- The combination of destination address and SSID is interpreted according to the Mic-E specification to extract this information.

## Significance
- The use of the SSID field in Mic-E allows for more efficient and compact transmission of station information without requiring extra fields in the packet.
- It enables APRS and Mic-E decoders to quickly identify the nature and status of the transmitting station.

## Example
A typical Mic-E destination address with SSID:
```
APMI06-9
```
In this example, "APMI06" is the destination address, and "-9" is the SSID. The combination encodes specific information about the station's type and status, as defined by the Mic-E protocol.

---

The Destination Address SSID Field is an essential part of Mic-E encoding, enabling efficient communication of station attributes in APRS networks.