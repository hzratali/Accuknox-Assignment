import { useEffect, useRef, useState } from "react";
import { CLOSE_ICON } from "../constant";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddWidgetCategory } from "../components/AddWidgetCategory";
import { updateAppData } from "../slices/updateAppDataSlice";
import { categoryUpdateData } from "../slices/categoryUpdateDataSlice";

export const AddWidget = () => {
	const categoryUpdateDataSlice = useSelector((state) => state.categoryUpdateDataReducer.value);
	const APPDATA = useSelector((state) => state.updateAppDataReducer.value);
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const dispatch = useDispatch();
	const blurRef = useRef();

	useEffect(() => {
		dispatch(categoryUpdateData(APPDATA));
	}, []);

	return (
		<div className='z-20 flex fixed top-0 left-0 min-h-screen max-h-screen' style={{ width: "100%" }}>
			<div
				className='w-3/5 h-screen bg-stone-800/75 backdrop-blur-sm'
				ref={blurRef}
				onClick={(e) => {
					if (blurRef.current === e.target) {
						dispatch(categoryUpdateData(APPDATA));
						dispatch(showWidgetPage({ ...addWidgetSlice, display: false, category: "" }));
					}
				}}
			></div>
			<div className='w-2/5 h-screen flex flex-col bg-white'>
				<div className='w-full h-min p-3 flex justify-between items-center text-sm font-medium text-white bg-blue-950'>
					<span>Add Widget</span>
					<button
						type='button'
						onClick={() => {
							dispatch(categoryUpdateData(APPDATA));
							dispatch(
								showWidgetPage({
									...addWidgetSlice,
									display: false,
									category: "",
									addCategoryDisplay: false,
									addChartDisplay: false,
								})
							);
						}}
					>
						<img src={CLOSE_ICON} className='w-4 h-4' />
					</button>
				</div>
				<div className='w-full h-full p-2 flex flex-col gap-2 justify-between text-sm'>
					<span>Personalise your dashboard</span>
					<div className='w-full max-h-full flex-auto'>
						<AddWidgetCategory categoryUpdateDataSlice={categoryUpdateDataSlice} />
					</div>
					<div className='w-full h-max flex justify-between'>
						<div className='w-max h-full'>
							<button
								type='button'
								className='py-2 px-6 text-white bg-blue-950 rounded-lg'
								onClick={() => {
									dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: false, addChartDisplay: true }));
								}}
							>
								Add Chart
							</button>
						</div>
						<div className='w-max h-min flex gap-4 font-semibold'>
							<button
								type='button'
								className='py-2 px-6 border-2 border-black rounded-lg'
								onClick={() => {
									dispatch(categoryUpdateData(APPDATA));
									dispatch(
										showWidgetPage({
											...addWidgetSlice,
											display: false,
											category: "",
											addCategoryDisplay: false,
											addChartDisplay: false,
										})
									);
								}}
							>
								Cancle
							</button>
							<button
								type='button'
								className='py-2 px-6 border-2 border-black text-white bg-black rounded-lg'
								onClick={() => {
									dispatch(updateAppData(categoryUpdateDataSlice));
									dispatch(
										showWidgetPage({
											...addWidgetSlice,
											display: false,
											category: "",
											addCategoryDisplay: false,
											addChartDisplay: false,
										})
									);
								}}
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
