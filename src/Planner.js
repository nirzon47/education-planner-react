const Planner = ({ setPlanner }) => {
	const subjects = JSON.parse(localStorage.getItem('planner'))
	setPlanner(false)

	const increaseValue = (index) => () => {
		if (subjects[index].hours === 12) {
			return
		}
		subjects[index].hours++
		localStorage.setItem('planner', JSON.stringify(subjects))
		setPlanner(true)
	}

	const decreaseValue = (index) => () => {
		if (subjects[index].hours === 1) {
			return
		}

		subjects[index].hours--
		localStorage.setItem('planner', JSON.stringify(subjects))
		setPlanner(true)
	}

	return (
		<div id='planner' className='lg:h-[60vh] overflow-y-scroll'>
			<div className='overflow-x-auto'>
				<table className='table text-lg text-center'>
					<thead>
						<tr>
							<th>Subject Name</th>
							<th>Hours</th>
						</tr>
					</thead>
					<tbody>
						{subjects?.map((subject, index) => (
							<tr key={index}>
								<td>{subject.subject}</td>
								<td>
									<button
										className='btn btn-sm btn-error mr-2'
										onClick={decreaseValue(index)}
									>
										-
									</button>
									<p className='inline-block w-8'>{subject.hours}</p>
									<button
										className='btn btn-sm btn-success ml-2'
										onClick={increaseValue(index)}
									>
										+
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Planner
