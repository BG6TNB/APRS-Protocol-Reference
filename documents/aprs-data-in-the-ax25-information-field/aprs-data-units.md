---
order: "5.6"
title: APRS Data Units
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS uses a variety of data units to represent position, speed, altitude, temperature, and other measurements in its packets. Understanding these units is essential for correctly interpreting APRS data.

## Common Units in APRS
| Field         | Unit                | Notes                                 |
|--------------|---------------------|---------------------------------------|
| Latitude     | Degrees, Minutes    | N/S hemisphere indicated by 'N'/'S'   |
| Longitude    | Degrees, Minutes    | E/W hemisphere indicated by 'E'/'W'   |
| Speed        | Knots               | 1 knot = 1.852 km/h                   |
| Course       | Degrees (0–359)     | Relative to true north                |
| Altitude     | Feet                | Above mean sea level                  |
| Temperature  | Degrees Fahrenheit  | Some packets use Celsius (see notes)  |
| Pressure     | Millibars           |                                      |
| Humidity     | Percent (%)         |                                      |
| Rainfall     | Inches (hundredths) | Since midnight local time             |
| Wind Speed   | Knots               |                                      |
| Wind Gust    | Knots               |                                      |
| Wind Dir     | Degrees (0–359)     |                                      |

## Notes on Ambiguity
- Some fields (e.g., temperature) may be reported in different units depending on the device or packet type. Always check the context or documentation for the specific format.
- Weather packets may use different units for rainfall or pressure depending on the reporting station.

## Example
A weather report packet:
```
APRS>APRS,TCPIP*: _080/005g010t069r000p000P000h50b10150
```
- `080` = Wind direction (degrees)
- `005` = Wind speed (knots)
- `g010` = Wind gust (knots)
- `t069` = Temperature (Fahrenheit)
- `r000` = Rainfall in last hour (inches, hundredths)
- `p000` = Rainfall in last 24 hours (inches, hundredths)
- `P000` = Rainfall since midnight (inches, hundredths)
- `h50`  = Humidity (%)
- `b10150` = Barometric pressure (millibars)

## Reference
For more details, see the relevant APRS weather and position report specifications.

---

Correct interpretation of APRS data units ensures accurate display and analysis of received information.