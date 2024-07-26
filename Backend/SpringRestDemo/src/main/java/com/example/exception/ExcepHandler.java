package com.example.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.example.entity.ErrorResponse;

@ControllerAdvice
public class ExcepHandler {
	
	@ExceptionHandler(EmployeeNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleException(EmployeeNotFoundException exception) {
		// Create ErrorResponse Obj
		ErrorResponse error = new ErrorResponse();
		
		// update error obj with values
		error.setStatus(HttpStatus.NOT_FOUND.value()); // 404 not found
		error.setMessage(exception.getMessage()); //get message from exception
		error.setTimeStamp(LocalDateTime.now()); // system time

		// return responseEntity obj
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);  //404 Not found
	}
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleException(UserNotFoundException exception) {
		// Create ErrorResponse Obj
		ErrorResponse error = new ErrorResponse();
		
		// update error obj with values
		error.setStatus(HttpStatus.NOT_FOUND.value()); // 404 not found
		error.setMessage(exception.getMessage()); //get message from exception
		error.setTimeStamp(LocalDateTime.now()); // system time

		// return responseEntity obj
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);  //404 Not found
	}
	
	@ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<ErrorResponse> handleException(InvalidCredentialsException exception) {
		// Create ErrorResponse Obj
		ErrorResponse error = new ErrorResponse();
		
		// update error obj with values
		error.setStatus(HttpStatus.NOT_FOUND.value()); // 404 not found
		error.setMessage(exception.getMessage()); //get message from exception
		error.setTimeStamp(LocalDateTime.now()); // system time

		// return responseEntity obj
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);  //404 Not found
	}

}
