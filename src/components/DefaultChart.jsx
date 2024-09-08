import { useDispatch, useSelector } from "react-redux";
import { showWidgetPage } from "../slices/addWidgetSlice";
import appStyle from "../styles/app.module.css";

export const DefaultChart = ({ category }) => {
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const dispatch = useDispatch();

	return (
		<div className='w-[458px] h-full py-2 px-4 rounded-xl flex-none drop-shadow-md snap-end snap-always bg-slate-50'>
			<div className='w-full h-full flex flex-col text-xs font-bold'>
				<div className='w-full h-full py-4 flex flex-col gap-1 justify-center items-center overflow-hidden'>
					<button
						className={`${appStyle.addWidget} w-auto h-8 px-2 text-gray-500 border-2 border-gray-200 text-sm font-medium bg-white rounded-md flex items-center gap-2`}
						type='button'
						onClick={() => {
							document.body.style.overflow = "hidden";
							dispatch(showWidgetPage({ ...addWidgetSlice, display: true, category }));
						}}
					>
						<div className='w-auto h-auto my-auto'>Add Widget</div>
						<div className='w-auto h-auto my-auto'>+</div>
					</button>
				</div>
			</div>
		</div>
	);
};
