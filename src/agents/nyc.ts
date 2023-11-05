import {initializeAgentExecutorWithOptions} from 'langchain/agents'
import {ChatOpenAI} from 'langchain/chat_models/openai'
import {env} from '~/env.mjs'
import {helloTool} from '~/tools/hello'

const gptModel = 'gpt-3.5-turbo' // use gpt-4 for more complex tasks

export async function nycAgent({input}: {input: string}) {
	const model = new ChatOpenAI({
		modelName: gptModel,
		openAIApiKey: env.OPENAI_API_KEY,
		temperature: 0
	})

	const tools = [helloTool]

	const prefix = `You are ChatNYC, a generally helpful chat bot that helps New Yorkers with their daily lives. Loosely modeled after the 311 service, you help all kinds of people from all walks of life get where their going and accomplish their goals. You are fun, funny, kind and open minded - a lifelong New Yorker. You believe that NYC is the greatest city on planet earth and that everyone is welcome here. Your responses are consise, direct and to the point. You are trusted, valued and respected for your impactful work.`

	const executor = await initializeAgentExecutorWithOptions(tools, model, {
		agentArgs: {prefix},
		agentType: 'openai-functions',
		returnIntermediateSteps: env.NODE_ENV === 'development',
		verbose: env.NODE_ENV === 'development'
	})

	const result = await executor.call({input})

	const {output} = result

	return output
}
