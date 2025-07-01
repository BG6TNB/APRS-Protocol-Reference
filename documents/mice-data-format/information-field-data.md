---
order: "10.8"
title: Information Field Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Information Field in a Mic-E packet is a critical section that carries the encoded position, speed, course, status, and other relevant data. This field is designed for compactness and efficiency, allowing APRS to transmit essential information within the constraints of packet radio systems.

## What is the Information Field?
- The Information Field is part of the AX.25 packet structure, following the address and control fields.
- In Mic-E, this field is specially formatted to encode multiple pieces of information in a minimal number of bytes.

## Structure
- The field typically includes:
  - Encoded latitude and longitude
  - Symbol table and symbol code
  - Speed and course (using DC+28 encoding)
  - Status bits and status text
- The exact byte layout is defined by the Mic-E protocol specification.

## What Data Does It Contain?
- **Position:** Latitude and longitude, encoded in a compressed format
- **Speed and Course:** Each encoded as a single ASCII character
- **Symbol:** Indicates the type of station or object
- **Status:** Includes status bits and optional status text

## Example
A simplified example of a Mic-E information field:
```
4903.50N/07201.75W>En route
```
- "4903.50N/07201.75W": Encoded position
- ">": Symbol table and code
- "En route": Status text

## Notes
- The actual Mic-E information field is more compact and may use non-printable characters for encoding.
- Decoding requires following the Mic-E specification to extract each piece of information correctly.

---

The Information Field Data in Mic-E packets is essential for conveying all the key details about a station's position, movement, and status in APRS.