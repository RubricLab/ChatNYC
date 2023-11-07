import {NextResponse} from 'next/server'
import twilio from 'twilio'
import {nycAgent} from '~/agents/nyc'
import {env} from '~/env.mjs'

const myPhone = `+1${env.TWILIO_NUMBER}`

const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN)

export async function POST(req) {
	const formData = await req.formData()

	const From = formData.get('From')
	const Body = formData.get('Body')

	const response = await nycAgent({input: Body})

	await client.messages.create({
		body: response,
		from: myPhone,
		to: From
	})

	return new NextResponse('ok')
}
