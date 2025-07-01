---
order: "15.2"
title: Queries and Responses
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

There are two types of APRS queries. One is general to all stations and the other is in a message format directed to a single individual station.

Queries always begin with a `?`, are one-time transmissions, do not have a message identifier and should not be acknowledged. Similarly the responses to queries are one-time transmissions that also do not have a message identifier, so that they too are not acknowledged.

Each query contains a Query Type (in upper-case). The following Query Types and expected responses are supported:

| Query Type | Query | Response |
|------------|-------|----------|
| APRS  | General — All stations query | Station's position and status |
| APRSD | Directed — Query an individual station for stations heard direct | List of stations heard direct |
| APRSH | Directed — Query if an individual station has heard a particular station | Position of heard station as an APRS Object, plus heard statistics for the last 8 hours |
| APRSM | Directed — Query an individual station for outstanding unacknowledged or undelivered messages | All outstanding messages for the querying station |
| APRSO | Directed — Query an individual station for its Objects | Station's Objects |
| APRSP | Directed — Query an individual station for its position | Station's position |
| APRSS | Directed — Query an individual station for its status | Station's status |
| APRST or PING? | Directed — Query an individual station for a trace (i.e. path by which the packet was heard) | Route trace |
| IGATE | General — Query all Internet Gateways | IGate station capabilities |
| WX | General — Query all weather stations | Weather report (and the station's position if it is not included in the Weather Report) |

If a queried station has no relevant information to include in a response, it need not respond. A queried station should ignore any query that it does not recognize.