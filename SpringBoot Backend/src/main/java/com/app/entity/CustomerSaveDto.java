package com.app.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerSaveDto {

	private String name;
	private String address;
	private int mobile;
	
	public CustomerSaveDto(String name, String address, int mobile) {

		this.name = name;
		this.address = address;
		this.mobile = mobile;
	}

	public CustomerSaveDto() {
		
	}
	@Override
	public String toString() {
		return "CustomerSaveDto [name=" + name + ", address=" + address + ", mobile=" + mobile + "]";
	}
	
	
}
