---
order: "10.22"
title: Maidenhead Locator in the Mic-E Status Text Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In the APRS Mic-E protocol, the status text field can carry not only device status and comments, but also supplementary location information. The Maidenhead Locator (also known as grid square) is a common geographic encoding system used in amateur radio for location reporting.

## Purpose
- Allows precise geographic location to be transmitted in a compact form within Mic-E packets
- Enables APRS devices and software to quickly parse and display location
- Useful for scenarios requiring efficient transmission and compatibility

## Format and Encoding
The Maidenhead Locator is typically a 4- or 6-character alphanumeric string (e.g., "FN31" or "FN31pr") representing a rectangular area on the Earth's surface.

In the Mic-E status text field, the Maidenhead Locator is inserted as plain text. For example:

```
>FN31pr Test message
```
In this status text, "FN31pr" is the Maidenhead grid locator, followed by free text.

## Application Example
A Mic-E packet example:
```
@123456z4903.50N/07201.75W>FN31pr On the air
```
- "@123456z4903.50N/07201.75W": Mic-E position portion
- ">FN31pr On the air": Status text field containing the Maidenhead locator and a comment

## Notes
- Not all Mic-E devices support embedding the Maidenhead Locator in the status text
- Decoding software must be able to recognize and extract the grid locator
- It is recommended to place the locator at the beginning of the status text for easier automatic recognition

---

Using the Maidenhead Locator in Mic-E packets improves geographic accuracy and compatibility in APRS reporting.