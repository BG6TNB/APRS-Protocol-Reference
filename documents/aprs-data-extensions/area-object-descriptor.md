---
order: "7.8"
title: Area Object Descriptor
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

An area object descriptor is an optional data extension in APRS used to describe the shape, size, and type of an area object (such as a circle, line, or polygon) on the map.

## What is an Area Object Descriptor?
- Encodes information about an area of interest, such as an event perimeter, hazard zone, or coverage area
- Can specify the type (circle, line, etc.), dimensions, and other attributes

## Encoding in APRS
- The descriptor is typically included as a field in the packet, such as "AREA=CIRCLE,R=5km" or similar
- The format may vary depending on the application and software

## Example
```
4903.50N/07201.75W>AREA=CIRCLE,R=5km
```
This represents:
- An area object centered at the given coordinates
- Shape: circle
- Radius: 5 kilometers

## Usage Notes
- Area object descriptors are useful for event management, emergency response, and tactical mapping
- The format should be documented for interoperability
- Not all APRS software supports area objects

---

Area object descriptors in APRS enable the representation of complex geographic features and event zones.