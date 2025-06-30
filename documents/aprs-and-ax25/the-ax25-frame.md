---
order: 3.2
title: The AX.25 Frame
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

All APRS transmissions use AX.25 UI-frames, with 9 fields of data:

| AX.25 UI-FRAME FORMAT |||||||||
| Flag | Destination Address | Source Address | Digipeater Addresses (0-8) | Control Field (UI) | Protocol ID | INFORMATION FIELD | FCS | Flag |
| ---- | ------------------- | -------------- | ---------------------------| ------------------ | ----------- | ----------------- | --- | ---- |
| 1    | 7                   | 7              | 0-56                       | 1                  | 1           | 1-256             | 2   | 1    |

- **Flag** — The flag field at each end of the frame is the bit sequence 0x7e that separates each frame.

- **Destination Address** — This field can contain an APRS destination callsign or APRS data. APRS data is encoded to ensure that the field conforms to the standard AX.25 callsign format (i.e. 6 alphanumeric characters plus SSID). If the SSID is non-zero, it specifies a generic APRS digipeater path.

- **Source Address** — This field contains the callsign and SSID of the transmitting station. In some cases, if the SSID is non-zero, the SSID may specify an APRS display Symbol Code.

- **Digipeater Addresses** — From zero to 8 digipeater callsigns may be included in this field. Note: These digipeater addresses may be overridden by a generic APRS digipeater path (specified in the Destination Address SSID).

- **Control Field** — This field is set to 0x03 (UI-frame).

- **Protocol ID** — This field is set to 0xf0 (no layer 3 protocol).

- **Information Field** — This field contains more APRS data. The first character of this field is the APRS Data Type Identifier that specifies the nature of the data that follows.

- **Frame Check Sequence** — The FCS is a sequence of 16 bits used for checking the integrity of a received frame.
