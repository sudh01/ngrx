package com.example.service;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.LoginInputDto;
import com.example.dto.LoginOutputDto;
import com.example.dto.RegisterInputDto;
import com.example.dto.RegisterOutputDto;
import com.example.entity.User;
import com.example.exception.InvalidCredentialsException;
import com.example.exception.UserNotFoundException;
import com.example.respository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public RegisterOutputDto register(RegisterInputDto regInputDto) {

		// Convert RegisterInputDto to User
		// Create User Obj
		User user = new User();
		// Generate 6 digit random number
		int id = 100000 + new Random().nextInt(900000);

		// Update user details
		user.setUserId(id);
		user.setName(regInputDto.getName());
		user.setEmail(regInputDto.getEmail());
		user.setPassword(regInputDto.getPassword());
		user.setPhone(regInputDto.getPhone());
		user.setRole("customer");

		// Save user in db
		User newUser = userRepo.save(user);

		// Convert User to RegisterOutputDto.
		RegisterOutputDto outputDto = new RegisterOutputDto();

		outputDto.setId(user.getUserId());
		outputDto.setName(user.getName());
		outputDto.setEmail(user.getEmail());
		outputDto.setPhone(user.getPhone());

		// return RegisterOutputDto
		return outputDto;
	}

	@Override
	public LoginOutputDto login(LoginInputDto loginInputDto) throws UserNotFoundException, InvalidCredentialsException {

		Optional<User> opt = userRepo.findByEmail(loginInputDto.getEmail());
		if (opt.isPresent()) {
			User user = opt.get();
			
			// Validate password & role if user present in db.
			if (user.getPassword().equals(loginInputDto.getPassword()) &&
					user.getRole().equals(loginInputDto.getRole())) {
				// Update isLogin flag to true
				user.setLogin(true);
				userRepo.save(user);
				
				// return LoginInputDto
				LoginOutputDto outputDto = new LoginOutputDto();
				outputDto.setEmail(user.getEmail());
				outputDto.setLogin(user.isLogin());
				outputDto.setRole(user.getRole());
				return outputDto;
				
			} else {
				
				throw new InvalidCredentialsException("Invalid Credentials!");
			}
		} else {
			
			throw new UserNotFoundException("User not found with email: " + loginInputDto.getEmail());
		}
	}

	@Override
	public LoginOutputDto logout(String email) throws UserNotFoundException {
		Optional<User> opt =  userRepo.findByEmail(email);
		
		if (opt.isPresent()) {
			User user = opt.get();
			
			user.setLogin(false);
			userRepo.save(user);
			
			LoginOutputDto outputDto = new LoginOutputDto();
			outputDto.setEmail(null);
			outputDto.setLogin(false);
			outputDto.setRole(null);
			
			return outputDto;
			
		} else {
			throw new UserNotFoundException("User not found with email: " + email);
		}
		
	}

}
