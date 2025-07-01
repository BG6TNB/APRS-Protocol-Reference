---
order: "18"
title: USER-DEFINED DATA FORMAT
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS allows users to define their own data formats for special purposes using the '{' (left curly brace) Data Type Identifier. This enables experimental or application-specific data to be transmitted within the APRS network without conflicting with standard formats.

A user-defined APRS packet begins with the '{' character in the Information field, followed by the custom data payload. The interpretation of the payload is left to the application or user; standard APRS software will typically ignore or pass through these packets without processing.

**Example:**
```
{MYDATA:123,456,789
```
In this example, '{' indicates a user-defined format, and 'MYDATA:123,456,789' is the custom data.

Note: Use user-defined formats with care to avoid network congestion and ensure compatibility with other APRS users.