import { useRef, useState } from "react";
import { ADD_ICON } from "../constant";
import generateID from "../utils/generateID";
import { useDispatch, useSelector } from "react-redux";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { categoryUpdateData } from "../slices/categoryUpdateDataSlice";
import getRandomColorHex from "../utils/coloeHex";

export const AddChart = () => {
	const [rowNum, setRowNum] = useState(1);
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const categoryUpdateDataSlice = useSelector((state) => state.categoryUpdateDataReducer.value);
	const textRef = useRef();
	const chartVal = useRef();
	const dispatch = useDispatch();

	function addValueList() {
		let liList = [];
		for (let i = 0; i < rowNum; i++) {
			liList.push(
				<li key={generateID(6)} className='w-min flex gap-5'>
					<input
						type='text'
						className='max-w-52 h-3 py-3 px-2 text-base rounded-md focus:shadow-sm focus:shadow-slate-700 focus:outline-none border-2 border-stone-500 bg-stone-100'
					/>
					<input
						type='number'
						className='max-w-20 h-3 py-3 px-2 text-base rounded-md focus:shadow-sm focus:shadow-slate-700 focus:outline-none border-2 border-stone-500 bg-stone-100'
					/>
				</li>
			);
		}
		return liList;
	}

	return (
		<div className='z-30 w-full h-full flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-stone-800/75'>
			<div className='max-h-[90vh] p-4 flex flex-col items-start gap-2 rounded-md bg-stone-200'>
				<span className='text-lg font-semibold leading-none'>Chart Name : </span>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input
						ref={textRef}
						type='text'
						autoFocus={true}
						className='h-4 py-4 px-2 text-lg rounded-md focus:shadow-sm focus:shadow-slate-700 focus:outline-none border-2 border-stone-500 bg-stone-100'
					/>
				</form>
				<span className='text-base font-semibold'>Chart Type</span>
				<div className='w-full flex justify-start items-center gap-4'>
					<div className='flex gap-2'>
						<input type='radio' name='chartType' value='round' defaultChecked />
						<span>Circle</span>
					</div>
					<div className='flex gap-2'>
						<input type='radio' name='chartType' value='line' />
						<span>Line</span>
					</div>
				</div>
				<div className='w-full flex justify-between'>
					<span className='text-base font-semibold'>keys</span>
					<span className='text-base font-semibold'>values</span>
				</div>
				<div className='w-full h-full flex items-center justify-between gap-2'>
					<ul className='w-min max-h-[30vh] overscroll-y-contain overflow-y-auto flex flex-col gap-2' ref={chartVal}>
						{addValueList()}
					</ul>
					<div className='flex-1 '>
						<button
							type='button'
							className='w-full h-full mb-auto'
							onClick={() => {
								setRowNum((prev) => ++prev);
							}}
						>
							<img src={ADD_ICON} className='w-4 h-4' />
						</button>
					</div>
				</div>
				<div className='w-full flex justify-end gap-2 font-semibold'>
					<button
						type='button'
						className='px-4 py-2 border-2 rounded-md border-gray-600'
						onClick={() => {
							dispatch(showWidgetPage({ ...addWidgetSlice, addChartDisplay: false }));
						}}
					>
						Cancle
					</button>
					<button
						type='button'
						className='px-4 py-2 border-2 rounded-md border-gray-600 text-white bg-black'
						onClick={() => {
							if (!textRef.current.value) {
								alert("please fill chart name");
								return;
							}

							const newChart = {};
							const chartF = [];

							const firstLvl = chartVal.current.children;
							for (let i = 0; i < chartVal.current.children.length; i++) {
								const secondLvl = firstLvl[i].children;
								for (let j = 0; j < secondLvl.length; j++) {
									if (secondLvl[j].value) {
										if (j) {
											if (isNaN(secondLvl[j].value)) {
												alert("please enter number value only in 'value'");
												return;
											}
											chartF.push({
												[secondLvl[j - 1].value.replaceAll(" ", "_")]: parseInt(secondLvl[j].value),
												color: getRandomColorHex(),
											});
										}
									} else {
										alert("please fill all values");
										return;
									}
								}
							}

							Object.assign(newChart, {
								id: parseInt(generateID(4)),
								title: textRef.current.value,
								type: document.querySelector("input[name=chartType]:checked").value,
								display: true,
								category: "total",
								data: chartF,
							});

							textRef.current.value = "";
							dispatch(
								categoryUpdateData(
									categoryUpdateDataSlice.map((v1) => {
										if (Object.keys(v1).includes(addWidgetSlice.category)) {
											return {
												...structuredClone(v1),
												[addWidgetSlice.category]: [...v1[addWidgetSlice.category], newChart],
											};
										}
										return { ...v1 };
									})
								)
							);
							dispatch(showWidgetPage({ ...addWidgetSlice, addChartDisplay: false }));
						}}
					>
						ok
					</button>
				</div>
			</div>
		</div>
	);
};
