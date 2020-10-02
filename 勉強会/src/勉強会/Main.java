package 勉強会;

public class Main {
	public static void main (String[] args) {
		Chef meatdish = new Chef("肉料理");
		String meat_dish = meatdish.grill("米沢牛");
		Waiter waiter = new Waiter();
		waiter.serving(meat_dish);
 }
}


class Waiter {
	void serving(String dish) {
		System.out.println(dish + "が運ばれてきた");
	}
}