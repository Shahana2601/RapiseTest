//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	var Scenario_CreateDoctor200_POST_CreateDoctor_200=SeS('Scenario_CreateDoctor200_POST_CreateDoctor_200');
	Scenario_CreateDoctor200_POST_CreateDoctor_200.DoExecute();

}

