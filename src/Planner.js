const Planner = ({ planner }) => {
	const subjects = JSON.parse(localStorage.getItem('planner'))

	return (
		<div id='planner' className='h-[60vh] overflow-y-scroll'>
			{subjects &&
				subjects.map((subject, index) => (
					<div key={index} className='flex gap-4 mb-4'>
						<p className='w-full max-w-xs'>{subject.subject}</p>
						<p className='w-20'>{subject.hours}</p>
					</div>
				))}
		</div>
	)
}

export default Planner
