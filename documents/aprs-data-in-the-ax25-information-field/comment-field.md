---
order: "5.4"
title: Comment Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The **Comment Field** in APRS packets is an optional, free-text area located at the end of the AX.25 Information field. It allows stations to include additional information, operator notes, or any other relevant text that does not fit into the structured data fields of the packet.

## Purpose
The Comment Field is used to convey supplementary information that may be useful to other operators or systems. This can include:
- Operator status or intentions (e.g., "On the way to event site")
- Equipment details (e.g., "Running 5W HT")
- Environmental observations (e.g., "Heavy rain here")
- Contact information
- Any other relevant notes

## Placement
The Comment Field always appears at the end of the Information field, after all structured APRS data and any data extensions. It is separated from the preceding data by a space or, in some cases, by the end of the structured data.

## Usage Notes
- The Comment Field is optional; packets may omit it entirely.
- The content is free-form ASCII text, but should avoid special control characters.
- Some APRS software may use the Comment Field for automated status or telemetry messages.
- The maximum length of the entire Information field (including the comment) is limited by the AX.25 protocol (typically 256 bytes).

## Example
A typical APRS position report with a comment field:

```
APRS>APRS,TCPIP*:!4903.50N/07201.75W>Test station at summit
```

In this example:
- `!4903.50N/07201.75W` is the position data
- `Test station at summit` is the comment field

Another example with weather data and a comment:

```
APRS>APRS,TCPIP*: _080/005g010t069r000p000P000h50b10150 Sunny and warm
```

Here, `Sunny and warm` is the comment field following the weather data.

---

The Comment Field enhances the flexibility and human-readability of APRS packets, allowing operators to share additional context beyond the standard data fields.