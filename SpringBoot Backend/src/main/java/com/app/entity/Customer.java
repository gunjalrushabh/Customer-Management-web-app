package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "customer")
@Getter
@Setter
public class Customer {
	
	@Column(name ="id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name" ,length = 60)
	private String name;
	
	@Column(name = "address" ,length = 60)
	private String address;
	
	
	@Column(name = "mobile")
	private int mobile;

	public Customer(int id, String name, String address, int mobile) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.mobile = mobile;
	}
	
	public Customer(String name, String address, int mobile) {
	
		this.name = name;
		this.address = address;
		this.mobile = mobile;
	}
	public Customer() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", address=" + address + ", mobile=" + mobile + "]";
	}

	

}
