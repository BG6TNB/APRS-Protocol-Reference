---
order: "12.11"
title: Storm Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS reports can contain data relating to tropical storms, hurricanes and tropical depressions. The format of the data is as follows:

| Field | Description |
|-------|-------------|
| Direction/Speed | Direction and speed of storm |
| Storm Type /ST | TS (Tropical Storm), HC (Hurricane), TD (Tropical Depression) |
| Sustained Wind Speed /www | Sustained wind speed (in knots) |
| Peak Wind Gusts ^GGG | Peak wind speed in knots |
| Central Pressure /pppp | Central pressure (in millibars/hPascal) |
| Radius Hurricane Winds >RRR | Radius of hurricane winds (in nautical miles) |
| Radius Tropical Storm Winds &rrr | Radius of tropical storm winds (in nautical miles) |
| Radius Whole Gale %ggg | Radius of "whole gale" (i.e. 50 knot) winds (in nautical miles, optional) |

**Example:**
```
;BRENDAVVV*092345z4903.50N/07202.75W@088/036/HC/150^200/0980>090&030%040
;BRENDAVVV*100045z4905.50N/07201.75W@101/047/HC/104^123/0980>065&020%040
```