import {DynamicStructuredTool} from 'langchain/tools'
import z from 'zod'

export const helloTool = new DynamicStructuredTool({
	name: 'hello',
	description: 'Calls the Hello World API',
	func: async () => {
		return JSON.stringify({message: 'Hello World'})
	},
	schema: z.object({})
})
