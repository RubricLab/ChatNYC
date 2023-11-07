Context about this product:

[ChatNYC](https://rubric.notion.site/ChatNYC-c62e6eee06424cfc9530700fb6673d50?pvs=4) is a generally helpful public good initiative that aims to give New Yorkers a chatbot to interface with the city. The first use case is `How to get from Rector St and Greenwich St to East 86 and East End ave?` - the service should provide transit directions using reasoning and maps of the city - (no algorithms or external apis)

If we can get reliability close to google maps - it should be pretty cool since you’ll be able to do multi-stop, multi-method transit paths such as `Get me from X to Y but put a stop for pizza on the way - oh and you can use trains, city-bike and / or ubers, whatever makes the most sense` (this is very out of scope for GMaps)

Also a core tenant of this product is that it’s accessible via toll free SMS so u don’t need wifi, data, an account or a credit card.

[Kinda works](https://nyc.rubriclabs.com) - will turn off data and go get lost downtown tomorrow and see if it’s remotely okay!

P.S. Looking for collaborators (everything OS ofc) to [help parse GTFS data](https://nyc.rubriclabs.com/api/test) so we can do realtime transit i.e. `When's the A Train headed Westbound coming to Ralph` -> `4 mins`

This project is bootstrapped with [`create-rubric-app`](https://github.com/RubricLab/create-rubric-app).

## Getting Started
```sh
bun i
bun dev
```

Open [localhost:3000](http://localhost:3000) in your browser to see the result.
