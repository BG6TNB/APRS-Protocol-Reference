---
order: "12.7"
title: Positionless Weather Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The format of weather data within a Positionless Weather Report differs according to the type of weather station unit, but generically consists of some or all of the following elements:

| Field | Description |
|-------|-------------|
| cccc | Wind Direction (degrees) |
| ssss | Sustained one-minute wind speed (mph) |
| gggg | Gust (peak wind speed in mph in the last 5 minutes) |
| tttt | Temperature (°F, below zero as -01 to -99) |
| rrrr | Rainfall (hundredths of an inch) in the last hour |
| pppp | Rainfall (hundredths of an inch) in the last 24 hours |
| PPPP | Rainfall (hundredths of an inch) since midnight |
| hhh  | Humidity (%; 00 = 100%) |
| bbbbbb | Barometric pressure (tenths of millibars/tenths of hPascal) |

Other parameters that are available on some weather station units include:
- L = luminosity (in watts per square meter) 999 and below. 1000 and above (L is inserted in place of one of the rain values).
- s = snowfall (in inches) in the last 24 hours.
- # = raw rain counter

Note: The weather report must include at least the MDHM date/timestamp, wind direction, wind speed, gust and temperature, but the remaining parameters may be in a different order (or may not even exist).

Note: Where an item of weather data is unknown or irrelevant, its value may be expressed as a series of dots or spaces. For example, if there is no wind speed/direction/gust sensor, the wind values could be expressed as:
```
c...s...g... or c VVVVVV s VVVVVV g VVVVVV
```
For example, Jim's rain gauge may produce a report like this:
```
_10090556c...s...g...t...P012Jim
```
(The date/timestamp, wind direction/speed/gust and temperature parameters must be included, even though they are not meaningful).