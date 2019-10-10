package com.sample.webapp.entities;

import com.sample.webapp.entities.enums.Status;

import java.util.Date;

public class User {

	public User() {
		super();
	}

	private String firstName;
	private String lastName;
	private Date birthDate;
	private Address address;
	private Status status;
	private String password;
	private Date logInTime;
	private Date logOutTime;

	public Boolean logIn(String userName, String password) {
		//TODO implement LogIn
		return false;
	}

	public Boolean logOut(String userName) {
		//TODO implement LogOut
		return false;
	}



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getLogInTime() {
		return logInTime;
	}

	public void setLogInTime(Date logInTime) {
		this.logInTime = logInTime;
	}

	public Date getLogOutTime() {
		return logOutTime;
	}

	public void setLogOutTime(Date logOutTime) {
		this.logOutTime = logOutTime;
	}
}
