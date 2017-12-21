Dim test : test = Parameter("GuiAction1Input")

Parameter("GUIActiona1Output") = "no"
Dim Value : Value = DataTable.Value("test", dtLocalSheet)

If test = Value Then

	Parameter("GUIActiona1Output") = "yes"
	ExitAction()
End If
