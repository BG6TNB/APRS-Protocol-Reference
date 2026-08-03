---
order: "7.3"
title: Power, Effective Antenna Height/Gain/Directivity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The 7-byte PHGphgd Data Extension specifies the transmitter power, effective antenna height-above-average-terrain, antenna gain and antenna directivity. APRS uses this information to plot radio range circles around stations.

The 7 characters of this Data Extension are encoded as follows:

| Characters | Encoding |
| :--- | :--- |
| 1–3 | PHG (fixed) |
| 4 | p — Power code |
| 5 | h — Height code |
| 6 | g — Antenna gain code |
| 7 | d — Directivity code |

The PHG codes are listed in the table below:

**PHG Codes**

| phgd Code | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Units |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| Power | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | watts |
| Height | 10 | 20 | 40 | 80 | 160 | 320 | 640 | 1280 | 2560 | 5120 | feet |
| Gain | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | dB |
| Directivity | omni | 45 NE | 90 E | 135 SE | 180 S | 225 SW | 270 W | 315 NW | 360 N | | deg |

The height code represents the effective height of the antenna above average local terrain, not above ground or sea level — this is to provide a rough indication of the antenna's effectiveness in the local area.

The height code may in fact be any ASCII character 0–9 and above. This is so that larger heights for balloons, aircraft or satellites may be specified. For example:

- `:` is the height code for 10240 feet (approximately 1.9 miles).
- `;` is the height code for 20480 feet (approximately 3.9 miles), and so on.

The Directivity code offsets the PHG circle by one third in the indicated direction. This means a front-to-back ratio of 2 to 1. Most often this is used to indicate a favored direction or a null, even if an omni antenna is at the site.

An example of the PHG Data Extension:

```
PHG5132
```

means a power of 25 watts, an antenna height of 20 feet above the average local terrain, an antenna gain of 3 dB, and maximum gain due east.
