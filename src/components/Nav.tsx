import Link from 'next/link'

export default function Nav({title}: {title: string}) {
	return (
		<div className='text:black fixed top-0 z-20 flex w-full items-baseline justify-between px-10 py-5 dark:text-white'>
			<div className='flex flex-col'>
				<Link
					className='text-xl font-bold no-underline'
					href='/'>
					{title}
				</Link>
			</div>
			<div className='flex flex-col'>
				<Link
					className='text-sm font-bold no-underline'
					href='https://rubriclabs.com'
					target='_blank'>
					by Rubric
				</Link>
			</div>
		</div>
	)
}
