package com.sample.webapp.entities;

public class Admin extends User {

	public Admin() {
		super();
	}

	public Boolean uploadProducts(Product... products) {
		return null;
	}

	public Boolean modifyProduct(Product... products) {
		return false;
	}

	public Boolean deleteProducts(Product... products) {
		return false;
	}

	public Boolean modifyUsers(User... users) {
		return false;
	}

	public Boolean deleteUsers(User... users) {
		return false;
	}

	public Boolean banUsers(User... users) {
		return false;
	}

	public Boolean createUsers(User... users) {
		return false;
	}

	public Boolean orderProducts(Product... products) {
		//TODO implement orders
		return false;
	}

	public Boolean cancelOrder(Product... products) {
		//TODO implement cancelOrders
		return false;
	}

}
