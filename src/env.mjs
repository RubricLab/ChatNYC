import {createEnv} from '@t3-oss/env-nextjs'
import z from 'zod'

export const env = createEnv({
	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		DATABASE_PRISMA_URL: process.env.DATABASE_URL,
		DATABASE_URL_NON_POOLING: process.env.DATABASE_URL_NON_POOLING,
		NODE_ENV: process.env.NODE_ENV,
		TWILIO_NUMBER: process.env.TWILIO_NUMBER,
		TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
		TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
		MTA_API_KEY: process.env.MTA_API_KEY
	},

	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		OPENAI_API_KEY: z.string().min(1),
		DATABASE_PRISMA_URL: z.string().min(1),
		DATABASE_URL_NON_POOLING: z.string().min(1),
		NODE_ENV: z.string(),
		TWILIO_NUMBER: z.string().min(1),
		TWILIO_ACCOUNT_SID: z.string().min(1),
		TWILIO_AUTH_TOKEN: z.string().min(1),
		MTA_API_KEY: z.string().min(1)
	}
})
