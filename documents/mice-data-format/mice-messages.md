---
order: "10.5"
title: Mic-E Messages
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E message identifier is a 3-bit code (message bits A, B and C) that specifies one of 7 Standard Mic-E Message Codes, one of 7 Custom Mic-E Message Codes, or an Emergency Message Code.

| Message Bits A/B/C | Standard Mic-E Message Type | Custom Mic-E Message Type |
| --- | --- | --- |
| 1 1 1 | M0: Off Duty | C0: Custom-0 |
| 1 1 0 | M1: En Route | C1: Custom-1 |
| 1 0 1 | M2: In Service | C2: Custom-2 |
| 1 0 0 | M3: Returning | C3: Custom-3 |
| 0 1 1 | M4: Committed | C4: Custom-4 |
| 0 1 0 | M5: Special | C5: Custom-5 |
| 0 0 1 | M6: Priority | C6: Custom-6 |
| 0 0 0 | Emergency | Emergency |

The Standard messages and the Emergency message have the same meaning for all APRS stations. The Custom messages may be assigned any arbitrary meaning.

Note: Support for Custom messages is optional. Original Mic-E units do not support Custom messages.

Note: If the A/B/C message identifier bits contain a mixture of Standard 1s and Custom 1s, the message type is "unknown".

Some examples of message type encoding:

| First 3 Destination Address Bytes | Message Identifier Bits A/B/C | Message Type |
| --- | --- | --- |
| `S32` | Standard 1 / 0 / 0 | Standard M3: Returning |
| `F2D` | Custom 1 / 0 / Custom 1 | Custom C2: Custom-2 |
| `234` | 0 / 0 / 0 | Emergency |
