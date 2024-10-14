//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	var Scenario_GetDoctorById_200_GET_DoctorsById_200=SeS('Scenario_GetDoctorById_200_GET_DoctorsById_200');
	Scenario_GetDoctorById_200_GET_DoctorsById_200.DoExecute();

	var Scenario_GetDoctorById_200_GET_DoctorsById_200=SeS('Scenario_GetDoctorById_200_GET_DoctorsById_200');
	Scenario_GetDoctorById_200_GET_DoctorsById_200.DoExecute();

}

