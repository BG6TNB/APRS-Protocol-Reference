---
order: "14.9"
title: National Weather Service Bulletins
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Standard APRS message formats can be used for a variety of other applications. For example, in the United States, special formatted messages addressed to the generic callsign NWS-xxxxx are used to highlight map areas involved in weather warnings, using the following format:

**National Weather Service Bulletin Format**
```
:NWS-xxxxx:NWS Bulletin Text
```
- NWS-xxxxx: generic callsign for weather warnings
- NWS Bulletin Text: content of the weather warning

**Example:**
```
:NWS-WARNV:092010z,THUNDER_STORM,AR_ASHLEY,{S9JbA
```