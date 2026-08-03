---
order: "10.21"
title: Mic-E Status Text
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

As an alternative to telemetry data, the packet may include Mic-E status text. The status text may be any length that fits in the rest of the Information field.

The Mic-E status text must not start with `‘` or `0x1d`, otherwise it will be confused with telemetry data.

It is possible to include a standard APRS-formatted position in the Mic-E status text field. A suitable position will cause the APRS display software to override any position data the Mic-E has encoded. This is useful if using a Mic-E without a GPS receiver.

Note: The Kenwood radios automatically insert a special type code at the front of the status text string (i.e. in the 10th character of the Information field):

| Radio | Type Code |
| --- | --- |
| Kenwood TH-D7 | `>` |
| Kenwood TM-D700 | `]` |

These characters should not be confused with the APRS Data Type Identifier that appears at the start of reports.

It is envisaged that other Mic-E-compatible devices will be allocated their own type codes in future.

Note: When Kenwood radios receive the status, they can only display a small number of text characters:

| Radio | Character Limit |
| --- | --- |
| Kenwood TH-D7 | 20 characters |
| Kenwood TM-D700 | 28 characters |

Note: The Kenwood TM-D700 radio uses the `'` (apostrophe) instead of the `‘` (grave) APRS Data Type Identifier to represent current GPS data. A suggested way of detecting this situation is to examine the first and 10th characters of the Information field; if they are `'` and `]` respectively, then the packet is almost certainly from a TM-D700.
