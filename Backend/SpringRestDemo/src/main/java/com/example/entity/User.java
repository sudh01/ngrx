package com.example.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class User {
	
	@Id
	private int userId;
	private String name;
	private String email;
	private String phone;
	private String password;
	private String role;
	private boolean isLogin;
	

}
