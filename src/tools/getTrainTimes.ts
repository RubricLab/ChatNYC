import {DynamicStructuredTool} from 'langchain/tools'
import z from 'zod'

export const helloTool = new DynamicStructuredTool({
	name: 'getTrainTimes',
	description: 'Calls the Train Times API',
	func: async () => {
		return JSON.stringify({message: 'Hello World'})
	},
	schema: z.object({})
})
