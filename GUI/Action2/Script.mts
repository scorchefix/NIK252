
RunAction "Action1", allIterations, Parameter("GuiAction2Input"), Parameter("GuiAction2Output")
Dim out : out = Parameter("GuiAction2Output")

If Parameter("GuiAction2Output") = "yes" Then
msgbox(out)
	exitAction()
End If
If Parameter("GuiAction2Output") = "no" Then
	msgbox(out)
End If
