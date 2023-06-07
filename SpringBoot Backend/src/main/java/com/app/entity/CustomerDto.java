package com.app.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDto {

	private int id;
	private String name;
	private String address;
	private int mobile;

	public CustomerDto() {
		
	}

	public CustomerDto(int id, String name, String address, int mobile) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "CustomerDto [id=" + id + ", name=" + name + ", address=" + address + ", mobile=" + mobile + "]";
	}
	
	
	
	
}
