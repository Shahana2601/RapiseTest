//Put your custom functions and variables in this file

function createDoctor(/**String*/ fName, /**String*/ lName,/**String*/ dept,/**String*/aadhaar){
	var Scenario_CreateDoctor200_POST_CreateDoctor_200=SeS('Scenario_CreateDoctor200_POST_CreateDoctor_200');
	Scenario_CreateDoctor200_POST_CreateDoctor_200.SetParameter("firstName", fName);
	Scenario_CreateDoctor200_POST_CreateDoctor_200.SetParameter("lastName", lName);
	Scenario_CreateDoctor200_POST_CreateDoctor_200.SetParameter("department", dept);
	Scenario_CreateDoctor200_POST_CreateDoctor_200.SetParameter("aadhaarNumber", aadhaar);
	Scenario_CreateDoctor200_POST_CreateDoctor_200.DoExecute();
	var response = Scenario_CreateDoctor200_POST_CreateDoctor_200.Response;
	return response;
}

function convertJson(/**String*/ jsonData){
	return JSON.parse(jsonData.Body);
}

function getDoctorById(/**String*/ id){
	var Scenario_GetDoctorById_200_GET_DoctorsById_200=SeS('Scenario_GetDoctorById_200_GET_DoctorsById_200');
	Scenario_GetDoctorById_200_GET_DoctorsById_200.SetParameter("id",id);
	Scenario_GetDoctorById_200_GET_DoctorsById_200.DoExecute();
	var response=Scenario_GetDoctorById_200_GET_DoctorsById_200.Response;
	return response;
}

function getDoctorById_400(/**String*/ id){
	var GetDoctorById_400_Get_DoctorById_400=SeS('GetDoctorById_400_Get_DoctorById_400');
	GetDoctorById_400_Get_DoctorById_400.SetParameter("id",id);
	GetDoctorById_400_Get_DoctorById_400.DoExecute({}, true);
	var response = GetDoctorById_400_Get_DoctorById_400.Response;
	return response;
}

function getDoctorById_404(/**String*/ id){
	var GetDoctorById_400_Get_DoctorById_400=SeS('GetDoctorById_400_Get_DoctorById_400');
	GetDoctorById_400_Get_DoctorById_400.SetParameter("id",id);
	GetDoctorById_400_Get_DoctorById_400.DoExecute({}, true);
	var response = GetDoctorById_400_Get_DoctorById_400.Response;
	return response;
}