const Inputs = () => {
	return (
		<div className='flex gap-4'>
			<input
				type='text'
				id='subject'
				name='subject'
				className='input input-bordered w-full max-w-xs'
				placeholder='Enter Subject'
			/>
			<input
				type='number'
				inputMode='numeric'
				name='hours'
				id='hours'
				className='input input-bordered w-20'
				placeholder='HH'
				min={1}
				max={12}
			/>
			<button className='btn btn-accent'>Add</button>
		</div>
	)
}

export default Inputs
