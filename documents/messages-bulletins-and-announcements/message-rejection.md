---
order: "14.3"
title: Message Rejection
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

If a station is unable to accept a message, it can send a rej message instead of an ack message.

**Message Rejection Format**
```
:Addressee:rejxxxxx
```
- Addressee: 9-character field
- rej: literal string
- xxxxx: Message No being rejected (up to 5 characters)

**Example:**
```
:KB2ICI-14:rej003
```