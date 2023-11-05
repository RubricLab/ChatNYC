import {NextResponse} from 'next/server'
import {nycAgent} from '~/agents/nyc'

export async function POST(req) {
	const formData = await req.formData()

	// const From = formData.get('From')
	const Body = formData.get('Body')

	const response = await nycAgent({input: Body})

	return new NextResponse(response)
}
