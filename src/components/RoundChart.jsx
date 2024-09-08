import scrollStyle from "../styles/scroll.module.css";

export const RoundChart = ({ v1 }) => {
	const total = v1.data.reduce((sum, item) => sum + item[Object.keys(item).find((key) => key !== "color")], 0);
	const percentages = v1.data.map((item) =>
		parseFloat(((item[Object.keys(item).find((key) => key !== "color")] / total) * 100).toFixed(2))
	);

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
					<div className='w-full h-full flex'>
						<div className='h-full aspect-square flex flex-col gap-y-0 justify-center items-center relative'>
							<div
								className={`${scrollStyle.roundChart} w-full h-full rounded-full absolute overflow-hidden`}
								style={{ background: `conic-gradient(at 50% 50%, ${gradientStops})` }}
							></div>
							<div className='w-min h-min p-0 m-0 text-lg leading-none font-bold'>{total}</div>
							<div className='w-min h-min p-0 m-0 text-xxs font-medium'>
								{v1.category[0].toUpperCase() + v1.category.slice(1)}
							</div>
						</div>
						<div
							className={`${scrollStyle.scrollData} w-full h-full flex flex-col justify-start overflow-y-auto scroll-smooth`}
						>
							<ul className={`w-full h-min my-auto grid auto-rows-auto gap-y-1 gap-x-8 justify-center`}>
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
