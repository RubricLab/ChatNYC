import {DynamicStructuredTool} from 'langchain/tools'
import z from 'zod'

import {ChatOpenAI} from 'langchain/chat_models/openai'
import {HumanMessage} from 'langchain/schema'

const chat = new ChatOpenAI({
	modelName: 'gpt-4-vision-preview',
	maxTokens: 1024
})

// Messages can now take an array of content in addition to a string
const mappingChain = (query: string) =>
	new HumanMessage({
		content: [
			{
				type: 'text',
				text: `Please give me simple transit directions based on my query, the provided transit map and the NYC map. Query: ${query}`
			},
			{
				type: 'image_url',
				image_url: `https://upload.wikimedia.org/wikipedia/commons/2/23/Official_New_York_City_Subway_Map_2013_vc.jpg` // transit map
			},
			{
				type: 'image_url',
				image_url: `https://www.mapsland.com/maps/north-america/usa/new-york/large-road-map-of-manhattan-with-street-names.jpg` // NYC map
			}
		]
	})

export const getTransitDirections = new DynamicStructuredTool({
	name: 'getTransitDirections',
	description: 'Returns transit directions for a query',
	func: async input => {
		const completion = await chat.invoke([mappingChain(input.query)])
		return JSON.stringify(completion)
	},
	schema: z.object({
		query: z.string()
	})
})
