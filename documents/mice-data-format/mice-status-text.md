---
order: "10.21"
title: Mic-E Status Text
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E status text is a field in the APRS Mic-E packet format that conveys additional information about the station's status, activity, or other relevant notes. This field is flexible and can be used for a variety of purposes, such as indicating the operator's current activity, the state of the equipment, or custom messages.

## What is the Status Text?
- The status text is a user-defined string appended to the end of a Mic-E packet.
- It can include plain text, codes, or even location information (such as a Maidenhead locator).
- The content is typically limited to a short message due to packet size constraints.

## How is it Encoded?
- In the Mic-E format, the status text follows the position and symbol fields in the packet.
- It is transmitted as plain ASCII text.
- Some devices allow the status text to be set manually, while others may generate it automatically based on the device's state.

## Uses
- Indicating operator status (e.g., "En route", "At home", "QRT")
- Reporting equipment state (e.g., "Low battery", "WX station online")
- Providing additional context (e.g., event participation, emergency status)
- Including location hints (e.g., grid square, city name)

## Example
A Mic-E packet with a status text:
```
@123456z4903.50N/07201.75W>En route to event
```
In this example, "En route to event" is the status text, providing context about the operator's current activity.

---

The status text in Mic-E packets enhances the utility of APRS by allowing stations to share more than just position, making communications richer and more informative.