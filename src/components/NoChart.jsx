import GRAPH_IMG from "../assets/graph.png";
import { ERROR_MSG } from "../constant";

export const NoChart = ({ v1 }) => {
	return (
		<div className='w-[458px] h-full py-2 px-4 rounded-xl flex-none drop-shadow-md snap-start snap-always bg-white'>
			<div className='w-full h-full flex flex-col text-xs font-bold'>
				<span>{v1.title}</span>
				<div className='w-full h-full py-4 flex flex-col gap-1 justify-center items-center font-normal overflow-hidden'>
					<img src={GRAPH_IMG} className='w-12 h-min' />
					<span>{ERROR_MSG}</span>
				</div>
			</div>
		</div>
	);
};
