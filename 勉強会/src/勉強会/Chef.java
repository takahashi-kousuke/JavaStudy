package 勉強会;

public class Chef {

public String specialized_field;

public Chef (String specialized_field_data) {
	this.specialized_field=specialized_field_data;
}


public String grill(String ingredients) {
	return ingredients + "のグリル";
}
}
