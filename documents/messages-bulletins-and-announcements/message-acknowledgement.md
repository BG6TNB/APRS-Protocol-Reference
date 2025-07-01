---
order: "14.2"
title: Message Acknowledgement
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A message acknowledgement is similar to a message, except that the message text field contains just the letters ack, and this is followed by the Message Number being acknowledged.

**Message Acknowledgement Format**
```
:Addressee:ackxxxxx
```
- Addressee: 9-character field
- ack: literal string
- xxxxx: Message No being acknowledged (up to 5 characters)

**Example:**
```
:KB2ICI-14:ack003
```