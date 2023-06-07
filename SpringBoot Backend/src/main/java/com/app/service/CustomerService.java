package com.app.service;

import java.util.List;

import com.app.entity.Customer;
import com.app.entity.CustomerDto;
import com.app.entity.CustomerSaveDto;
import com.app.entity.CustomerUpdateDto;

public interface CustomerService {

	public String saveCustomer(CustomerSaveDto customer);
	
	public List<CustomerDto> getAllCustomer();
	
	public String updateCustomer(CustomerUpdateDto customerupdatedto);
	
	public String deleteCustomer(int id);
	
	public boolean getCustomerById(int id);
}
