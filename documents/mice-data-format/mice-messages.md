---
order: "10.5"
title: Mic-E Messages
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Mic-E messages in APRS are short status or alert codes encoded within the Mic-E data format. They allow stations to quickly communicate predefined or custom statuses.

## What Are Mic-E Messages?
- Encoded as a 3-bit message code in the destination address field
- Indicate standard statuses (e.g., "In Service", "En Route", "Emergency") or custom user-defined messages
- Some codes are reserved for emergency or high-priority alerts

## Types of Mic-E Messages
- **Standard**: Predefined codes for common statuses
- **Custom**: User-defined codes for specific needs
- **Emergency**: Reserved codes for distress or urgent situations

## Example
A Mic-E packet with an emergency code:
```
DEST: "S1S1S1" (encodes emergency)
SRC: "CALL-9"
INFO: "`l4!>\"Test"
```

## Usage Notes
- The meaning of each code is defined in the APRS Mic-E specification
- Most APRS software can decode and display Mic-E messages automatically
- Emergency codes trigger special handling in many systems

---

Mic-E messages enable rapid, efficient status and alert reporting in APRS.