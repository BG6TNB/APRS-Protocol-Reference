---
order: "11.3"
title: Killing an Object/Item
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

To kill an Object/Item, a station transmits a new Object/Item Report, with a "kill" character following the Object/Item name.

**Implementation Recommendation:** When an Object/Item is killed it should be removed from display on the screen. However, the data associated with the Object/Item should be retained internally in case it is needed later.