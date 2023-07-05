// import React, { useEffect, useState } from "react";
// import { formDataToCycleData_JSON, formDataMainSpeedPumpData, formSensorData, formCycleTimeData } from "../../../utils/helper";
// import { KeepMountedModal, DashboardGraphsContainer } from "../../atoms";
// import { useDispatch, useSelector } from "react-redux";
// import _ from "lodash";
// import { PRESSURE_LABELS } from "../../../utils/constants";

// const DashboardGraphs = () => {
// 	const dispatch = useDispatch();
// 	const [selectedGraph, setSelectedGraph] = useState("");
// 	const [isGraphModalOpen, setIsGraphModalOpen] = useState(false);
// 	// graph data states
// 	const [inflowPumpSpeed, setInflowPumpSpeed] = useState({});
// 	const [outflowPumpSpeed, setOutflowPumpSpeed] = useState({});
// 	const [inflowSensorData, setInflowSensorData] = useState({});
// 	const [outflowSensorData, setOutflowSensorData] = useState({});
// 	const [batterySOCData, setBatterySOCData] = useState({});
// 	const [cycleTimeData, setCycleTimeData] = useState({});

// 	// data from reducer
// 	const {
// 		loadJSONFileDataResult = {},
// 		mainPumpSpeedResult = {},
// 		sensorInfoResult = {},
// 		timeInfoResult = {},
// 		cyclelogInfoResult = {},
// 		statelogInfoResult={}
// 	} = useSelector((state) => state.dashboard);

// 	// main pump speed data
// 	useEffect(() => {
// 		if (mainPumpSpeedResult) {
// 			setInflowPumpSpeed(formDataMainSpeedPumpData(mainPumpSpeedResult, "Inflow"));
// 			setOutflowPumpSpeed(formDataMainSpeedPumpData(mainPumpSpeedResult, "Outflow"));
// 		}
// 	}, [mainPumpSpeedResult]);

// 	// sensor data
// 	useEffect(() => {
// 		if (sensorInfoResult) {
// 			setInflowSensorData({
// 				INFLOW_BYPASS : formSensorData(sensorInfoResult, "Inflow", PRESSURE_LABELS.INFLOW_BYPASS),
// 				INFLOW_WASHBACK : formSensorData(sensorInfoResult, "Inflow", PRESSURE_LABELS.INFLOW_WASHBACK),
// 				INFLOW_TAN_UF : formSensorData(sensorInfoResult, "Inflow", PRESSURE_LABELS.INFLOW_TAN_UF),
// 			})
// 			setOutflowSensorData({
// 				OUTFLOW_NORMAL : formSensorData(sensorInfoResult, "Outflow", PRESSURE_LABELS.OUTFLOW_NORMAL),
// 				OUTFLOW_SORBENT_BYPASS : formSensorData(sensorInfoResult, "Outflow", PRESSURE_LABELS.OUTFLOW_SORBENT_BYPASS),
// 			});
// 		}
// 	}, [sensorInfoResult]);

// 	// battery data
// 	useEffect(() => {
// 		if (!_.isEmpty(loadJSONFileDataResult) && !_.isEmpty(loadJSONFileDataResult["Batt SOC"]) && !_.isEmpty(cyclelogInfoResult)) {
// 			var data = formDataToCycleData_JSON(loadJSONFileDataResult["Batt SOC"], cyclelogInfoResult, "Battery SOC (%)");
// 			setBatterySOCData(data);
// 		} else {
// 			setBatterySOCData({});
// 		}
// 	}, [loadJSONFileDataResult, cyclelogInfoResult]);

// 	// cycle time data
// 	useEffect(() => {
// 		if (timeInfoResult) {
// 			setCycleTimeData(formCycleTimeData(timeInfoResult));
// 		}
// 	}, [timeInfoResult]);

// 	// modal states
// 	const handleGraphModalClose = () => setIsGraphModalOpen(false);

// 	// graph click handler
// 	const handleOnClickGraph = (selectedGraph) => {
// 		setSelectedGraph(selectedGraph);
// 		setIsGraphModalOpen(true);
// 	};

// 	return (
// 		<>
// 			{/* modal */}
// 			<KeepMountedModal
// 				isGraphModalOpen={isGraphModalOpen}
// 				handleGraphModalClose={handleGraphModalClose}
// 				selectedGraph={selectedGraph}
// 				inflowPumpSpeed={inflowPumpSpeed}
// 				outflowPumpSpeed={outflowPumpSpeed}
// 				inflowSensorData={inflowSensorData}
// 				outflowSensorData={outflowSensorData}
// 				batteryData={batterySOCData}
// 				cycleTimeData={cycleTimeData}
// 			/>
// 			<DashboardGraphsContainer
// 				isGraphModalOpen={isGraphModalOpen}
// 				handleGraphModalClose={handleGraphModalClose}
// 				handleOnClickGraph={handleOnClickGraph}
// 				selectedGraph={selectedGraph}
// 				inflowPumpSpeed={inflowPumpSpeed}
// 				outflowPumpSpeed={outflowPumpSpeed}
// 				inflowSensorData={inflowSensorData}
// 				outflowSensorData={outflowSensorData}
// 				batteryData={batterySOCData}
// 				cycleTimeData={cycleTimeData}
// 			/>
// 		</>
// 	);
// };

// export default DashboardGraphs;
