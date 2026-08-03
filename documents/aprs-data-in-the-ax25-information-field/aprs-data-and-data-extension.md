---
order: "5.3"
title: APRS Data and Data Extension
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

There are 10 main types of APRS Data:

- Position
- Direction Finding
- Objects and Items
- Weather
- Telemetry
- Messages, Bulletins and Announcements
- Queries
- Responses
- Status
- Other

Some of this data may also have an APRS Data Extension that provides additional information.

The APRS Data and optional Data Extension follow the Data Type Identifier.

The table on the next page shows a complete list of all the different possible types of APRS Data and APRS Data Extension.

|                   | Possible APRS Data                                               | Possible APRS Data Extension                           |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| Position          | Time (DHM or HMS)                                                | Course and Speed                                       |
|                   | Lat / long coordinates                                           | Power, Effective Antenna Height / Gain / Directivity   |
|                   | Compressed lat / long / course / speed / radio range / altitude  | Pre-Calculated Radio Range                             |
|                   | Symbol Table ID and Symbol Code                                  | Omni DF Signal Strength                                |
|                   | Mic-E longitude, speed and course, telemetry or status           | Storm Data (in Comment field)                          |
|                   | Raw GPS NMEA sentence                                            |                                                        |
|                   | Raw weather station data                                         |                                                        |
| Direction Finding | Time (DHM or HMS)                                                | Course and Speed                                       |
|                   | Lat / long coordinates                                           | Power, Effective Antenna Height / Gain / Directivity   |
|                   | Compressed lat / long / course / speed / radio range / altitude  | Pre-Calculated Radio Range                             |
|                   | Symbol Table ID and Symbol Code                                  | Omni DF Signal Strength                                |
|                   |                                                                  | Bearing and Number / Range / Quality(in Comment field) |
| Objects and Items | Object name                                                      | Course and Speed                                       |
|                   | Item name                                                        | Power, Effective Antenna Height/Gain/Directivity       |
|                   | Time (DHM or HMS)                                                | Pre-Calculated Radio Range                             |
|                   | Lat/long coordinates                                             | Omni DF Signal Strength                                |
|                   | Compressed lat/long/course/speed/radio range/altitude            | Area Object                                            |
|                   | Symbol Table ID and Symbol Code                                  | Storm Data (in Comment field)                          |
|                   | Raw weather station data                                         |                                                        |
| Weather           | Time (MDHM)                                                      | Wind Direction and Speed                               |
|                   | Lat/long coordinates                                             | Storm Data (in Comment field)                          |
|                   | Compressed lat/long/course/speed/radio range/altitude            |                                                        |
|                   | Symbol Table ID and Symbol Code                                  |                                                        |
|                   | Raw weather station data                                         |                                                        |
| Telemetry         | Telemetry (non Mic-E)                                            |                                                        |
| Messages, Bulletins and Announcements | Addressee                                |                                                        |
|                   | Message Text                                                     |                                                        |
|                   | Message Identifier                                               |                                                        |
|                   | Message Acknowledgement                                          |                                                        |
|                   | Bulletin ID, Announcement ID                                     |                                                        |
|                   | Group Bulletin ID                                                |                                                        |
| Queries           | Query Type                                                       |                                                        |
|                   | Query Target Footprint                                           |                                                        |
|                   | Addressee (Directed Query)                                       |                                                        |
| Responses         | Position                                                         | Course and Speed                                       |
|                   | Object/Item                                                      | Power, Effective Antenna Height/Gain/Directivity       |
|                   | Weather                                                          | Pre-Calculated Radio Range                             |
|                   | Status                                                           | Omni DF Signal Strength                                |
|                   | Message                                                          | Area Object                                            |
|                   | Digipeater Trace                                                 | Wind Direction and Speed                               |
|                   | Stations Heard                                                   |                                                        |
|                   | Heard Statistics                                                 |                                                        |
|                   | Station Capabilities                                             |                                                        |
| Status            | Time (DHM zulu)                                                  |                                                        |
|                   | Status text                                                      |                                                        |
|                   | Meteor Scatter Beam Heading/Power                                |                                                        |
|                   | Maidenhead Locator (Grid Square)                                 |                                                        |
|                   | Altitude (Mic-E)                                                 |                                                        |
|                   | E-mail message                                                   |                                                        |
| Other             | Third-Party forwarding                                           |                                                        |
|                   | Invalid Data/Test Data                                           |                                                        |
