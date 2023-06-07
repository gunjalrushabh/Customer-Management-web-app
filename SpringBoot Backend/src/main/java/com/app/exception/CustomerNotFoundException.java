package com.app.exception;

public class CustomerNotFoundException extends RuntimeException {

	public CustomerNotFoundException(int id) {
		
		super("Customer not found with id number : "+id);
		System.out.println("inside exception handler");
	}
}
