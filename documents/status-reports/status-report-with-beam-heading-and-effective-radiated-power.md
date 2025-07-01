---
order: "16.1"
title: Status Report with Beam Heading and Effective Radiated Power
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

It is useful to include beam heading and ERP in packets in meteor scatter work. To keep packets as short as possible, these parameters are encoded into two characters, as follows:

- H = beam heading / 10 (H=0–9 for 0–90 degrees, and A–Z for 100–350 degrees).
- P = ERP code.

| ERP | P | ERP | P | ERP | P |
|-----|---|-----|---|-----|---|
| 10w | 1 | 1000w | : | 3610w | C |
| 40  | 2 | 1210  | ; | 4000  | D |
| 90  | 3 | 1440  | < | 4410  | E |
| 160 | 4 | 1690  | = | 4840  | F |
| 250 | 5 | 1960  | > | 5290  | G |
| 360 | 6 | 2250  | ? | 5760  | H |
| 490 | 7 | 2560  | @ | 6250  | I |
| 640 | 8 | 2890  | A | 6760  | J |
| 810 | 9 | 3240  | B | 7290  | K |

The HP value appears as the last two characters of the status text, preceded by the ^ character — for example, ^B7 means a beam heading of 110 degrees and an ERP of 490 watts. The HP value may be combined with the Maidenhead grid locator (as described below), or with any other plain language status text.