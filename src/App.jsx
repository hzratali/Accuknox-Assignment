import appStyle from "./styles/app.module.css";
import { Navbar } from "./components/Navbar";
import { ChartContainer } from "./components/ChartContainer";
import { AddWidget } from "./pages/AddWidget";
import { useSelector } from "react-redux";
import { AddCategory } from "./pages/AddCategory";
import { AddChart } from "./pages/AddChart";

function App() {
	const ShowModel = useSelector((state) => state.addWidgetReducer.value);
	return (
		<>
			<div className={`${appStyle.container} `}>
				<Navbar />
				<ChartContainer />
				{ShowModel.display && <AddWidget />}
				{ShowModel.addCategoryDisplay && <AddCategory />}
				{ShowModel.addChartDisplay && <AddChart />}
			</div>
		</>
	);
}

export default App;
