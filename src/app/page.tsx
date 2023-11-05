import {env} from '~/env.mjs'

export default function Page() {
	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-10 p-5 sm:p-20'>
			<a
				href={`sms:${env.TWILIO_NUMBER}`}
				className='text-blue-500 no-underline'>
				+1 {env.TWILIO_NUMBER.slice(0, 3)} {env.TWILIO_NUMBER.slice(3, 6)}-
				{env.TWILIO_NUMBER.slice(6)}
			</a>
		</div>
	)
}
