---
order: "14.1"
title: Messages
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS messages, bulletins and announcements are packets containing free format text strings, and are intended to convey human-readable information. A message is intended for reception by a single specified recipient, and an acknowledgement is usually expected. Bulletins and announcements are intended for reception by multiple recipients, and are not acknowledged.

**Message Format**
```
:Addressee:Message Text{Message No
```
- Addressee: 9-character field (padded with spaces if necessary)
- Message Text: up to 67 characters, any printable ASCII except |, ~ or {
- Message No: (optional) up to 5 alphanumeric characters, no spaces, identifies the message

Messages without a message identifier are not to be acknowledged. Messages with a message identifier are intended to be acknowledged by the addressee. The sending station will repeatedly send the message until it receives an acknowledgement, or it is canceled, or it times out.

**Examples:**
```
:WU2ZVVVVV:Testing
:WU2ZVVVVV:Testing{003
:EMAILVVVV:msproul@ap.org Test email
```