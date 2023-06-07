package com.app.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerUpdateDto {

	private int id;
	private String name;
	private String address;
	private int mobile;
	
	public CustomerUpdateDto(int id, String name, String address, int mobile) {
	
		this.id = id;
		this.name = name;
		this.address = address;
		this.mobile = mobile;
	}
	
	public CustomerUpdateDto() {
		
	}

	@Override
	public String toString() {
		return "CustomerUpdateDto [id=" + id + ", name=" + name + ", address=" + address + ", mobile=" + mobile + "]";
	}
	
}
