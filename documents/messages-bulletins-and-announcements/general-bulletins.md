---
order: "14.6"
title: General Bulletins
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

General bulletins are messages where the addressee consists of the letters BLN followed by a single-digit bulletin identifier, followed by 5 filler spaces. General bulletins are generally transmitted a few times an hour for a few hours, and typically contain time sensitive information (such as weather status).

Bulletin text may be up to 67 characters long, and may contain any printable ASCII characters except | or ~.

**General Bulletin Format**
```
:BLNnVVVVV:Bulletin Text
```
- BLN: literal string
- n: single-digit bulletin identifier
- VVVVV: 5 filler spaces
- Bulletin Text: up to 67 characters

**Example:**
```
:BLN3VVVVV:Snow expected in Tampa RSN
```