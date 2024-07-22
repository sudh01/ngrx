package com.example.entity;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Employee {

	@Id
	private int empId;
	private String name;
	private String email;
	private String phone;
	private String password;

	
}
