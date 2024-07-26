package com.example.dto;

import lombok.Data;

@Data
public class RegisterInputDto {
	
	private String name;
	private String email;
	private String phone;
	private String password;
}
