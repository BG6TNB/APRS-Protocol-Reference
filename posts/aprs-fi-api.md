## Basic location query using JSON:

Whitespace and indentation has been added to the response to increase readability in this document.

Timestamps are returned in the Unix time format. All other variables are returned in metric units, where applicable. Speed is measured in kilometers per hour, altitude in meters, temperature in degrees Celsius. Latitude and Longitude are given in decimal degrees, positive values being north for latitude and east for longitude. The responses only contain keys for data which is known.

Please note that this API is for querying specific stations. It intentionally does not support searching by wildcard.

https://api.aprs.fi/api/get?name=OH7RDA&what=loc&apikey=APIKEY&format=json

{
	"command":"get",
	"result":"ok",
	"what":"loc",
	"found":1,
	"entries": [
		{
			"name":"OH7RDA",
			"type":"l",
			"time":"1267445689",
			"lasttime":"1270580127",
			"lat":"63.06717",
			"lng":"27.66050",
			"symbol":"\/#",
			"srccall":"OH7RDA",
			"dstcall":"APND12",
			"phg":"44603",
			"comment":"\/R,W,Wn,Tn Siilinjarvi",
			"path":"WIDE2-2,qAR,OH7AA"
		}
	]
}
Description of common fields:

command - the API command which was called
what - what was being queried
result - the result of the query, either ok or fail
found - the number of entries returned
Description of location record fields:

class - class of station identifier (a: APRS, i: AIS, w: Web ...)
name - name of station, object, item or vessel
showname - displayed name of station (may differ from the unique name)
type - type of target: a for AIS, l for APRS station, i for APRS item, o for APRS object, w for weather station
time - the time when the target first reported this (current) position (the time of arrival at current coordinates)
lasttime - the time when the target last reported this (current) position
lat - latitude in decimal degrees, north is positive
lng - longitude in decimal degrees, east is positive
course - Course over ground / COG, in degrees
speed - Speed, in kilometers per hour
altitude - Altitude, in meters
symbol - APRS symbol table and code
srccall - Source callsign - either APRS source callsign or AIS vessel callsign
dstcall - APRS packet destination callsign
comment - APRS comment or AIS destination and estimated time of arrival
path - APRS or AIS packet path
phg - APRS PHG value
status - Last status message transmitted by station
status_lasttime - The time when the last status message was received
Additional fields for AIS targets:

mmsi - AIS vessel MMSI number
imo - AIS vessel IMO number
vesselclass - AIS vessel class code
navstat - AIS navigational status code
heading - Heading
length - AIS vessel length in meters
width - AIS vessel width in meters
draught - AIS vessel draught in meters
ref_front - AIS vessel position reference distance from the front
ref_left - AIS vessel position reference distance from the left
Basic location query using XML:

https://api.aprs.fi/api/get?name=OH7RDA&what=loc&apikey=APIKEY&format=xml

<?xml version="1.0" encoding="utf-8"?>
<xml>
<command>get</command>
<result>ok</result>
<what>loc</what>
<found>1</found>
<entries>
	<entry>
		<name>OH7RDA</name>
		<type>l</type>
		<time>1267445689</time>
		<lasttime>1270580127</lasttime>
		<lat>63.06717</lat>
		<lng>27.66050</lng>
		<symbol>/#</symbol>
		<srccall>OH7RDA</srccall>
		<dstcall>APND12</dstcall>
		<phg>44603</phg>
		<comment>/R,W,Wn,Tn Siilinjarvi</comment>
		<path>WIDE2-2,qAR,OH7AA</path>
	</entry>
</entries>
</xml>

## Querying multiple targets using a single request:

You can request data for up to 20 targets by separating the callsigns using a comma. The rate limiting limits the amount of API queries over time, not the amount of targets queried. Batch queries of multiple stations are faster for you and generate less load on the server.

https://api.aprs.fi/api/get?name=OH7RDA,OH7AA&what=loc&apikey=APIKEY&format=json

{
	"command":"get",
	"result":"ok",
	"what":"loc",
	"found":2,
	"entries": [
		{
			"name":"OH7RDA",
			... other data ...
		},
		{
			"name":"OH7AA"
			... other data ...
		}
	]
}

## Querying weather data:

Again, all data is returned in metric format: temperatures in degrees Celsius, wind speed in meters per second. Multiple stations may be requested by separating callsigns using the comma character, like in location queries described above.

https://api.aprs.fi/api/get?name=OH2TI&what=wx&apikey=APIKEY&format=json

{
	"command":"get",
	"result":"ok",
	"what":"wx",
	"found":1,
	"entries": [
		{
			"name":"OH2TI",
			"time":"1270580978",
			"temp":"2.8",
			"pressure":"1022.1"
			"humidity":"88",
			"wind_direction":"270",
			"wind_speed":"2.7"
		}
	]
}
Fields:

temp - Temperature in degrees Celsius
time - Time of the last weather report
pressure - Atmospheric pressure, in millibars (mbar)
humidity - Relative air humidity, %
wind_direction - Average wind direction
wind_speed - Average wind speed, in meters per second
wind_gust - Wind gust, m/s
rain_1h - Rainfall over past 1 hour, in millimeters
rain_24h - Rainfall over past 24 hours, in mm
rain_mn - Rainfall since midnight, in mm
luminosity - Luminosity, watts / square meter (W/m^2)

## Querying text messages:

This API call returns at most 10 latest APRS messages for the given recipient(s). Up to 10 recipients can be queried in a single call by separating the callsigns with a comma. The returned message ID can be used at your end to check whether new messages have been received since the last call.

https://api.aprs.fi/api/get?what=msg&dst=OH2TI&apikey=APIKEY&format=json

{
	"command":"get",
	"result":"ok",
	"found":2,
	"what":"msg",
	"entries": [
		{
			"messageid":"1271366",
			"time":"1272453795",
			"srccall":"OH5KUY-4",
			"dst":"OH2TI",
			"message":"foo bar"
		},
		{
			"messageid":"1271368",
			"time":"1272454795",
			"srccall":"OH5KUY-4",
			"dst":"OH2TI",
			"message":"bar foo"
		}
	]
}
Fields:

messageid - an incrementing id of the message (will wrap to 0 some day)
time - Time when the message was received
srccall - Source callsign
dst - APRS message destination
message - The message contents

Error reporting:

When a request fails, result is set to fail and a human-readable error message is returned in description. Please make sure your application handles errors gracefully, reports them back to the user, and writes them to a log file so that you can inspect them later. aprs.fi uses UTC time in log files, and so should you.

https://api.aprs.fi/api/get?name=OH2TI&what=wx&apikey=WRONGAPIKEY&format=json

{
	"command":"get",
	"result":"fail",
	"description":"authentication failed: wrong API key"
}