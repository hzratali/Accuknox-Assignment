import { useSelector } from "react-redux";
import scrollStyle from "../styles/scroll.module.css";
import generateID from "../utils/generateID";
import { DefaultChart } from "./DefaultChart";
import { LineChart } from "./LineChart";
import { NoChart } from "./NoChart";
import { RoundChart } from "./RoundChart";
import { useEffect, useState } from "react";

function ChartArticles({ APPDATA }) {
	const searchText = useSelector((state) => state.globalSearchReducer.value);
	const [searchData, setSearchData] = useState([]);

	useEffect(() => {
		setSearchData(
			APPDATA.map((v) => {
				// Extract the key that is not "id"
				const dataKey = Object.keys(v).find((key) => key !== "id");

				// Filter the items based on the search text
				const filteredData = v[dataKey].filter((v1) => {
					if (v1.title.toLowerCase().includes(searchText.toLowerCase())) {
						console.log(v1.title);
						return v1;
					}
				});

				// Return the new object with the filtered data and the original id
				if (filteredData.length) {
					return {
						[dataKey]: filteredData,
						id: v.id,
					};
				}
			}).filter((v) => v)
		);
	}, [searchText, APPDATA]);

	return (
		<>
			{!searchData.length && (
				<div className='w-full h-full flex justify-center items-center text-center'>
					<span>Can't find that data...</span>
				</div>
			)}
			{searchData.map((v) => {
				return (
					<article key={v?.id || parseInt(generateID(5))} className={`w-full mt-2`}>
						<span className='font-bold'>{Object.keys(v).filter((key) => key !== "id")[0]}</span>
						<div
							className={`${scrollStyle.scroll} w-full h-[200px] ps-4 pe-8 py-2 flex flex-nowrap items-center justify-start gap-4 overflow-x-auto`}
						>
							{v[Object.keys(v).filter((key) => key !== "id")[0]].map((v1, i1) => {
								if (v1?.display)
									if (v1?.type === "round" && v1?.data.length) {
										return <RoundChart key={v1?.id || parseInt(generateID(4))} v1={v1} />;
									} else if (v1?.type === "line" && v1?.data.length) {
										return <LineChart key={v1?.id || parseInt(generateID(4))} v1={v1} />;
									} else {
										return <NoChart key={parseInt(generateID(4))} v1={v1} />;
									}
							})}
							<DefaultChart category={Object.keys(v).filter((key) => key !== "id")[0]} />
						</div>
					</article>
				);
			})}
		</>
	);
}

export default ChartArticles;
