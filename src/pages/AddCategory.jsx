import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showWidgetPage } from "../slices/addWidgetSlice";
import { categoryUpdateData } from "../slices/categoryUpdateDataSlice";
import generateID from "../utils/generateID";

export const AddCategory = () => {
	const addWidgetSlice = useSelector((state) => state.addWidgetReducer.value);
	const categoryUpdateDataSlice = useSelector((state) => state.categoryUpdateDataReducer.value);
	const dispatch = useDispatch();
	const textRef = useRef();

	function submitHandler() {
		if (!textRef.current.value) {
			alert("continuing without adding...");
			dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: false }));
			return;
		}
		if (textRef.current.value === "id") {
			alert("Category name can't be 'id'");
			return;
		}

		let localdata = categoryUpdateDataSlice;
		if (localdata) {
			const tempdata = localdata.filter((v1) =>
				Object.keys(v1)
					.find((key) => key !== "id")
					.toLowerCase()
					.includes(textRef.current.value.toLowerCase())
			);
			if (!tempdata.length) {
				dispatch(categoryUpdateData([...localdata, { [textRef.current.value]: [], id: parseInt(generateID(5)) }]));
				dispatch(showWidgetPage({ ...addWidgetSlice, category: textRef.current.value, addCategoryDisplay: false }));
				textRef.current.value = "";
				return;
			}
			alert("Category already exist!");
			textRef.current.value = "";
			dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: false }));
			return;
		}
		dispatch(categoryUpdateData([{ [textRef.current.value]: [], id: parseInt(generateID(5)) }]));
		dispatch(showWidgetPage({ ...addWidgetSlice, category: textRef.current.value, addCategoryDisplay: false }));
		textRef.current.value = "";
	}

	return (
		<div className='z-30 w-full h-full flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-stone-800/75'>
			<div className='p-4 flex flex-col items-start gap-4 rounded-md bg-stone-200'>
				<span className='text-lg font-semibold'>Add Category : </span>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						submitHandler();
					}}
				>
					<input
						ref={textRef}
						type='text'
						autoFocus={true}
						className='h-6 py-6 px-2 text-lg rounded-md focus:shadow-sm focus:shadow-slate-700 focus:outline-none border-2 border-stone-500 bg-stone-100'
					/>
				</form>
				<div className='w-full flex justify-end gap-2 font-semibold'>
					<button
						type='button'
						className='px-4 py-2 border-2 rounded-md border-gray-600'
						onClick={() => {
							textRef.current.value = "";
							dispatch(showWidgetPage({ ...addWidgetSlice, addCategoryDisplay: false }));
						}}
					>
						Cancle
					</button>
					<button
						type='button'
						className='px-4 py-2 border-2 rounded-md border-gray-600 text-white bg-black'
						onClick={() => {
							submitHandler();
						}}
					>
						ok
					</button>
				</div>
			</div>
		</div>
	);
};
