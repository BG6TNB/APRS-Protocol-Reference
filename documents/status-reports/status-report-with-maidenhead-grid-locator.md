---
order: "16.2"
title: Status Report with Maidenhead Grid Locator
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A status report can include a Maidenhead Grid Locator to indicate the station's position in a compact form. The grid locator is typically included in the status text field, either at the beginning or within the text, to allow easy parsing by receiving software.

**Standard APRS Example:**
```
>FN31pr Operating portable
```
Here, 'FN31pr' is the Maidenhead grid locator, followed by a free-text comment.

**Mic-E Example:**
```
@123456z4903.50N/07201.75W>FN31pr On the air
```
In this Mic-E packet, the status text '>FN31pr On the air' contains the grid locator.

It is recommended to place the grid locator at the start of the status text for easier recognition by software. Not all devices support this feature, so check your equipment documentation.