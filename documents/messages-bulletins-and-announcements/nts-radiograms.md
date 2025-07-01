---
order: "14.10"
title: NTS Radiograms
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS can be used to transport NTS radiograms. This uses the existing APRS message format for backwards compatibility, by adding a 3-character NTS format identifier Nx\ at the start of the APRS Message Text, as follows:

N#\number\precedence\handling\originator\check\place\time\date
NA\address_line1\address_line2\address_line3\address_line4
NP\phone number
N1\line 1 of NTS message text
N2\line 2 of NTS message text
N3\line 3 of NTS message text
N4\line 4 of NTS message text
N5\line 5 of NTS message text
N6\line 6 of NTS message text
NS\Signature block
NR\Received from\date_time\sent_to\date_time

All of these fields comes from the ARRL NTS Radiogram form and are described in the NTS handbook. Each message line is addressed to the same station. The N#\, NA\ and NR\ lines are multiple fields combined for APRS transmission efficiency. The backslash separator is used so that conventional forward slashes may be embedded in messages. (The backslash does not exist in the RTTY or CW alphabets, so it therefore cannot appear in an NTS radiogram).

Each line may be up 67 characters long, including the 3-character NTS format identifier. Lines in excess of 67 characters will be truncated. There is a maximum of 6 lines of NTS message text.

Note: The N#\, NA\, NS\ and NR\ fields are required. The others are optional. Serialization of each line is handled by the normal APRS Message ID {xxxxx. An APRS application is not required to understand or generate these messages. The information can be read and understood in the normal message display.