---
order: "11.8"
title: Obsolete Object Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Some stations transmit Object reports without the `;` APRS Data Type Identifier. This format is obsolete. Some software may still decode such data as an Object, but it should now be interpreted as a Status Report.