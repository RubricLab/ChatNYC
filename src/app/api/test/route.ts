import GtfsRealtimeBindings from 'gtfs-realtime-bindings'
import {NextResponse} from 'next/server'
import {env} from '~/env.mjs'

export async function GET(req) {
	const response = await fetch(
		'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace',
		{
			headers: {
				'x-api-key': env.MTA_API_KEY
			}
		}
	)
	const buffer = await response.arrayBuffer()
	const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
		new Uint8Array(buffer)
	)
	// feed.entity.forEach(entity => {
	// 	if (entity.tripUpdate) console.log(entity.tripUpdate)
	// })
	return new NextResponse(JSON.stringify(feed, null, 2))
}
