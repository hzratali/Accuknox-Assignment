import { useDispatch, useSelector } from "react-redux";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { ADD_ICON, CLOSE_ICON } from "../constant";
import { categoryUpdateData } from "../slices/categoryUpdateDataSlice";
import { useEffect, useRef, useState } from "react";
import generateID from "../utils/generateID";

export const AddWidgetCategory = ({ categoryUpdateDataSlice }) => {
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const [searchList, setSearchList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();
	const searchRef = useRef();

	useEffect(() => {
		categoryUpdateDataSlice.map((v1) => {
			if (Object.keys(v1).includes(addWidgetSlice.category)) {
				setSearchList(v1[addWidgetSlice.category]);
			}
		});
	}, [addWidgetSlice.category, categoryUpdateDataSlice]);

	return (
		<div className='w-full h-full flex flex-col justify-start gap-2'>
			<div className='px-2 flex items-center justify-between'>
				<ul className='flex justify-start items-center font-semibold'>
					{categoryUpdateDataSlice?.map((v1, i1) => {
						return (
							<li
								key={i1}
								className={`w-min h-min border-b-2 ${
									Object.keys(v1).includes(addWidgetSlice.category)
										? "text-blue-950 border-blue-950"
										: "text-slate-300 border-slate-300"
								}`}
							>
								<button
									type='button'
									className='p-2'
									onClick={() => {
										dispatch(
											showWidgetPage({ ...addWidgetSlice, category: Object.keys(v1).find((key) => key !== "id") })
										);
									}}
								>
									{Object.keys(v1)
										.find((key) => key !== "id")
										.split(" ")
										.map((word) => word[0])
										.join("")}
								</button>
							</li>
						);
					})}
				</ul>
				<div className='w-max h-max shadow-md'>
					<button
						type='button'
						className='w-full h-full p-2 border-2 border-gray-400 rounded-md'
						onClick={() => {
							dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: true, addChartDisplay: false }));
						}}
					>
						<img src={ADD_ICON} className='w-4 h-4' />
					</button>
				</div>
			</div>
			<div className='px-2'>
				<input
					ref={searchRef}
					type='search'
					placeholder='Search...'
					className='w-full h-full p-2 rounded-md border-2 border-slate-400 bg-slate-100 placeholder:text-sm'
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
			</div>
			<div className='max-h-[40vh] px-2 overflow-y-auto'>
				<ul className='h-full flex flex-col gap-2 justify-start items-center text-xs'>
					{searchList.map((v1) => {
						if (v1.title.toLowerCase().includes(searchText.toLowerCase())) {
							return (
								<li
									key={parseInt(generateID(3)) * parseInt(generateID(2))}
									className='w-full p-2 border-2 flex items-center justify-between gap-2 leading-none'
								>
									<div className='flex items-center gap-2'>
										<input
											type='checkbox'
											defaultChecked={v1.display}
											className='h-3'
											onChange={(e) => {
												dispatch(
													categoryUpdateData(
														categoryUpdateDataSlice.map((v2, i2) => {
															if (Object.keys(v2).includes(addWidgetSlice.category)) {
																return {
																	...v2,
																	[addWidgetSlice.category]: categoryUpdateDataSlice[i2][addWidgetSlice.category].map(
																		(v3) => {
																			if (v3.id === v1.id) {
																				return { ...v3, display: e.target.checked };
																			}
																			return { ...v3 };
																		}
																	),
																};
															}
															return { ...v2 };
														})
													)
												);
											}}
										/>
										<span>{v1.title}</span>
									</div>
									<button
										type='button'
										onClick={() => {
											dispatch(
												categoryUpdateData(
													categoryUpdateDataSlice.map((v2, i2) => {
														if (Object.keys(v2).includes(addWidgetSlice.category)) {
															return {
																...v2,
																[addWidgetSlice.category]: categoryUpdateDataSlice[i2][addWidgetSlice.category].filter(
																	(v3) => {
																		if (v3.id !== v1.id) {
																			return v3;
																		}
																	}
																),
															};
														}
														return { ...v2 };
													})
												)
											);
										}}
									>
										<img src={CLOSE_ICON} className='w-3 h-3 invert' />
									</button>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};
