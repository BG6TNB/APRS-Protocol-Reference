---
order: "14.7"
title: Announcements
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Announcements are similar to general bulletins, except that the letters BLN are followed by a single upper-case letter announcement identifier. Announcements are transmitted much less frequently than bulletins (but perhaps for several days), and although possibly timely in nature they are usually not time critical.

Announcements are typically made for situations leading up to an event, in contrast to bulletins which are typically used within the event.

Users should be alerted on arrival of a new bulletin or announcement.

**Announcement Format**
```
:BLNXVVVVV:Announcement Text
```
- BLN: literal string
- X: single upper-case letter announcement identifier
- VVVVV: 5 filler spaces
- Announcement Text: up to 67 characters

**Example:**
```
:BLNQVVVVV:Mt St Helen digi will be QRT this weekend
```