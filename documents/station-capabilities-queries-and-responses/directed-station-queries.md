---
order: "15.4"
title: Directed Station Queries
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Queries addressed to individual stations are in APRS message format (except that they never include a message identifier). The addressee is the callsign of the station being queried.

The message text is the Query Type. This is followed optionally by another callsign — this callsign does not need filler spaces as it is at the end of the data.

**Directed Station Query Format**
```
:Addressee:?QueryType[Callsign]
```
Bytes: 1 9 1 1 5 0-9

**Examples:**
- `:KH2ZVVVVV:?APRSD` — A query asking KH2Z what stations he has heard direct.
- `:KH2ZVVVVV:?APRSHVN0QBF` — A query asking for the number of times N0QBF was heard in each of the last 8 hours. (Note the trailing spaces in the callsign following APRSH, padding the callsign to 9 characters).
- `:KH2ZVVVVV:?APRSM` — A query asking KH2Z for any unacknowledged or undelivered messages for him. KH2Z responds with all such messages.
- `:KH2ZVVVVV:?APRSO` — A query asking for KH2Z's APRS Objects.
- `:KH2ZVVVVV:?APRSP` — A query asking for KH2Z's position.
- `:KH2ZVVVVV:?APRSS` — A query asking for KH2Z's status.
- `:KH2ZVVVVV:?APRST` — A query asking KH2Z for a trace of the route taken to reach him.
- `:KH2ZVVVVV:?PING?` — The same query, using PING instead of APRST.