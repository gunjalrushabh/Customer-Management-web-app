package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Customer;
import com.app.entity.CustomerDto;
import com.app.entity.CustomerSaveDto;
import com.app.entity.CustomerUpdateDto;
import com.app.exception.CustomerNotFoundException;
import com.app.repository.CustomerRepository;
import com.app.service.CustomerService;

@RestController
@RequestMapping("api/customer")//  api/customer/delete/{id}
@CrossOrigin("http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService customerservice;
	
	@Autowired
	private CustomerRepository repo;
	
	@PostMapping("/save")
	public String saveCustomer(@RequestBody CustomerSaveDto customersavedto) {
		
		String savedname = customerservice.saveCustomer(customersavedto);
		return savedname;
	}
	
	@GetMapping("/getall")
	public List<CustomerDto>getAllCustomers(){
		
		return customerservice.getAllCustomer();
	}
	
	@PostMapping("/update")
	public String updating(@RequestBody CustomerUpdateDto update) {
		String name = customerservice.updateCustomer(update);
	return name;
	}
	
	@PutMapping("/update/{id}")//  api/customer/update/{id}
	public Customer updateCustomer(@RequestBody Customer updateCusomer, @PathVariable(value = "id")int id) {
		
		return repo.findById(id)
		.map(cust -> {
			cust.setName(updateCusomer.getName());
			cust.setAddress(updateCusomer.getAddress());
			cust.setMobile(updateCusomer.getMobile());
			return repo.save(cust);
		})
		.orElseThrow(()->new CustomerNotFoundException(id));
	}
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteCustomer(@PathVariable(value = "id")int id) {
	
		if(!repo.existsById(id)) {
			throw new CustomerNotFoundException(id);
		}else {
			return customerservice.deleteCustomer(id);
		}
	}
	
	
	@GetMapping("/update/{id}")
	public Customer getCustomerById(@PathVariable(value = "id")int id) {
		return repo.findById(id)
				.orElseThrow(()->new CustomerNotFoundException(id));
	}
	
	
	@GetMapping("/{id}")
	public Customer getCustomerByid(@PathVariable(value = "id")Integer id) {
	
		return repo.findById(id)
				.orElseThrow(()-> new CustomerNotFoundException(id));
				
	}
}
