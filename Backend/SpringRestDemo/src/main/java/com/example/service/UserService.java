package com.example.service;

import com.example.dto.LoginInputDto;
import com.example.dto.LoginOutputDto;
import com.example.dto.RegisterInputDto;
import com.example.dto.RegisterOutputDto;
import com.example.exception.InvalidCredentialsException;
import com.example.exception.UserNotFoundException;

public interface UserService {
	
	RegisterOutputDto register(RegisterInputDto regInputDto);
	LoginOutputDto login(LoginInputDto LoginInputDto) throws UserNotFoundException, InvalidCredentialsException;
	LoginOutputDto logout(String email) throws UserNotFoundException;

}
