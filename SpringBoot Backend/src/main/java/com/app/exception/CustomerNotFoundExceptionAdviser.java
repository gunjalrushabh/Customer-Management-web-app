package com.app.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class CustomerNotFoundExceptionAdviser {

	@ResponseBody
	@ExceptionHandler(CustomerNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String>exceptionHandler(CustomerNotFoundException exception){
		System.out.println("inside adviser");
		Map<String, String> errormap = new HashMap<String, String>();
		errormap.put("errormessage", exception.getMessage());
		return errormap;
		
	}
}
