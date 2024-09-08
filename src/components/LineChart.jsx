import scrollStyle from "../styles/scroll.module.css";

export const LineChart = ({ v1 }) => {
	const total = v1.data.reduce((sum, item) => sum + Object.values(item)[0], 0);
	const percentages = v1.data.map((item) => parseFloat(((Object.values(item)[0] / total) * 100).toFixed(2)));

	const gradientStops = percentages
		.map((item, index) => {
			const prevPercentage = percentages.slice(0, index).reduce((sum, val) => sum + val, 0);
			return `${v1.data[index].color} ${prevPercentage}% ${(prevPercentage + item).toFixed(2)}%`;
		})
		.join(", ");

	return (
		<div className='w-[458px] h-full py-2 px-4 rounded-xl flex-none drop-shadow-md snap-start snap-always bg-white'>
			<div className='w-full h-full flex flex-col text-xs font-bold'>
				<span>{v1.title}</span>
				<div className='w-full h-full py-4 overflow-hidden'>
					<div className='w-full h-full flex flex-col'>
						<div className='w-full h-14 py-1'>
							<div className='w-full h-full grid grid-rows-2'>
								<div className='w-full flex justify-start items-baseline gap-2'>
									<span className='text-base'>{total}</span>
									<span className='font-medium'>{v1.category[0].toUpperCase() + v1.category.slice(1)}</span>
								</div>
								<div className='w-full flex justify-center items-center'>
									<div
										className='w-full h-1/2 rounded-full'
										style={{ background: `linear-gradient(to right, ${gradientStops})` }}
									></div>
								</div>
							</div>
						</div>
						<div className={`w-full h-full flex justify-center items-center`}>
							<ul
								className={`${scrollStyle.scrollData} w-full h-min p-4 ps-8 my-auto ${
									v1.data.length >= 3
										? v1.data.length > 6
											? "grid grid-rows-2 grid-flow-col auto-cols-max gap-x-6 gap-y-1"
											: "grid grid-rows-2 grid-flow-col auto-cols-auto gap-x-3 gap-y-1"
										: "flex justify-around"
								} overflow-x-auto scroll-ps-20`}
							>
								{v1.data.map((v2, i2) => (
									<li key={i2} className='relative font-normal flex items-center'>
										<div
											className={`w-2 h-2 absolute -left-4 rounded-sm`}
											style={{ backgroundColor: `${v2.color}` }}
										></div>
										{Object.keys(v2)
											.filter((key) => key !== "color")[0]
											.replaceAll("_", " ")
											.split(" ")
											.map((keyV) => {
												return (keyV = keyV[0].toUpperCase() + keyV.slice(1));
											})
											.join(" ")
											.concat(" ", "(" + Object.values(v2)[0]) + ")"}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
