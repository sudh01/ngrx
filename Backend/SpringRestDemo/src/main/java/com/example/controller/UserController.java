package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.LoginInputDto;
import com.example.dto.LoginOutputDto;
import com.example.dto.RegisterInputDto;
import com.example.dto.RegisterOutputDto;
import com.example.exception.InvalidCredentialsException;
import com.example.exception.UserNotFoundException;
import com.example.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	// Register
	@PostMapping("/register")
	ResponseEntity<RegisterOutputDto> register(@RequestBody RegisterInputDto regInputDto) {
		return new ResponseEntity<>(userService.register(regInputDto), HttpStatus.CREATED);// 201 Created
	}
	
	// Login
	@PostMapping("/login")
	ResponseEntity<LoginOutputDto> login(@RequestBody LoginInputDto loginInputDto) throws UserNotFoundException, InvalidCredentialsException {
		return new ResponseEntity<>(userService.login(loginInputDto), HttpStatus.OK);// 200 Ok
	}
	
	
	// Logout
	@PostMapping("/logout")
	ResponseEntity<LoginOutputDto> logout(@RequestBody String email) throws UserNotFoundException {
		return new ResponseEntity<>(userService.logout(email), HttpStatus.OK);
	}
	

}
