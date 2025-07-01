---
order: "11.1"
title: Objects and Items
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Any APRS station can manually report the position of an APRS entity (e.g. another station or a weather phenomenon). This is intended for situations where the entity is not capable of reporting its own position.

APRS provides two types of report to support this:
- Object Reports
- Item Reports

Object Reports specify an Object's position, can have an optional timestamp, and can include course/speed information or other Extended Data. Object Reports are intended primarily for plotting the positions of moving objects (e.g. spacecraft, storms, marathon runners without trackers).

Item Reports specify an Item's position, but cannot have a timestamp. While Item reports may also include course/speed or other Extended Data, they are really intended for inanimate things that are occasionally posted on a map (e.g. marathon checkpoints or first-aid posts). Otherwise they are handled in the same way as Object Reports.

Objects are distinguished from each other by having different Object names. Similarly, Items are distinguished from each other by having different Item names.

**Implementation Recommendation:** When an APRS Object/Item is displayed on the screen, the callsign of the station sending the report should be associated with the Object/Item.