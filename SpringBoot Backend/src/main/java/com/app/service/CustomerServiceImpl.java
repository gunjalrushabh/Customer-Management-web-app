package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Customer;
import com.app.entity.CustomerDto;
import com.app.entity.CustomerSaveDto;
import com.app.entity.CustomerUpdateDto;
import com.app.repository.CustomerRepository;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository repo;
	
	
	@Override
	public String saveCustomer(CustomerSaveDto customer) {
		// TODO Auto-generated method stub
		
		Customer cust = new Customer(
				customer.getName(),
				customer.getAddress(),
				customer.getMobile()
				);
		repo.save(cust);
		
		return cust.getName();
	}

	@Override
	public List<CustomerDto> getAllCustomer() {
		// TODO Auto-generated method stub
		
		List<Customer>list = repo.findAll();
		List<CustomerDto> dtolist = new ArrayList<CustomerDto>();
		for(Customer c : list) {
			CustomerDto customerdto = new CustomerDto(
					c.getId(),
					c.getName(),
					c.getAddress(), 
					c.getMobile()
					);
			dtolist.add(customerdto);
		}
		return dtolist; 
	}

	@Override
	public String updateCustomer(CustomerUpdateDto customerupdatedto) {
		// TODO Auto-generated method stub
		
		if(repo.existsById(customerupdatedto.getId())) {
			Customer customer = repo.getById(customerupdatedto.getId());
			
			customer.setName(customerupdatedto.getName());
			customer.setAddress(customerupdatedto.getAddress());
			customer.setMobile(customerupdatedto.getMobile());
			repo.save(customer);
			return "update successfully....!";
		}else {
			return "customer not exist update failed";
		}
		
	}

	@Override
	public String deleteCustomer(int id) {
		// TODO Auto-generated method stub
		if(repo.existsById(id)) {
			repo.deleteById(id);
			return "deleted succefully";
		}
		else {
			return "customer is not present in our database";
		}
		
	}

	@Override
	public boolean getCustomerById(int id) {
	if(repo.existsById(id)) {
		return true;
	}else {
		return false;
	}

	}

}
