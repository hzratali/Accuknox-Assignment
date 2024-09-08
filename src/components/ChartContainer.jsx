import appStyle from "../styles/app.module.css";
import ChartArticles from "./ChartArticles";
import { COOKIE_NAME, DROPMENU_ICON, MOCKDATA, REFRESH_ICON } from "../constant";
import { useEffect } from "react";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateAppData } from "../slices/updateAppDataSlice";

export const ChartContainer = () => {
	const APPDATA = useSelector((state) => state.updateAppDataReducer.value);
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const dispatch = useDispatch();

	useEffect(() => {
		const localData = localStorage.getItem(COOKIE_NAME);
		if (localData) {
			dispatch(updateAppData(JSON.parse(localData)));
			return;
		}
		localStorage.setItem(COOKIE_NAME, JSON.stringify(MOCKDATA));
		dispatch(updateAppData(MOCKDATA));
	}, []);

	return (
		<section className={`w-full flex bg-slate-100 p-8 min-h-screen`}>
			<div className='flex flex-col mt-8 w-full h-auto'>
				<div className='h-10 p-1 flex items-center justify-between'>
					<div className='font-bold'>CNAPP Dashboard</div>
					<div className='w-auto h-full flex justify-end gap-4'>
						<button
							className={`${appStyle.addWidget} w-auto h-full px-2 text-gray-500 border-2 border-gray-200 font-medium bg-white rounded-md flex items-center gap-2`}
							type='button'
							onClick={() => {
								dispatch(
									showWidgetPage({
										...addWidgetSlice,
										display: true,
										category: APPDATA.length ? Object.keys(APPDATA[0])[0] : "",
									})
								);
							}}
						>
							Add Widget +
						</button>
						<button
							className='aspect-square h-full border-2 border-gray-200 bg-white rounded-md flex items-center justify-center'
							type='button'
						>
							<img className='w-4 aspect-square' src={REFRESH_ICON} alt='' />
						</button>
						<button
							className='aspect-square h-full border-2 border-gray-200 bg-white rounded-md flex items-center justify-center'
							type='button'
						>
							<img className='w-4 aspect-square' src={DROPMENU_ICON} alt='' />
						</button>
						<button
							className={`w-auto h-full px-2 text-violet-950 border-2 border-violet-950 bg-white rounded-md lead flex items-center gap-2`}
							type='button'
						>
							<div className='w-auto h-auto text-xs my-auto'>Last 2 Days</div>
							<div className='w-auto h-auto text-xs my-auto'>+</div>
						</button>
					</div>
				</div>
				<div className={`h-full flex flex-col px-2 relative`}>
					<ChartArticles APPDATA={APPDATA} />
				</div>
			</div>
		</section>
	);
};
