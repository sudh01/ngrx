package com.example.service;

import java.util.List;

import com.example.entity.Employee;
import com.example.exception.EmployeeNotFoundException;

public interface EmployeeService {
	
	Employee addEmployee(Employee emp);
	Employee deleteEmployeeById(int empId) throws EmployeeNotFoundException ;
	Employee getEmployeeById(int empId) throws EmployeeNotFoundException ;
	List<Employee> getAllEmployees();
	Employee updateEmployee(Employee emp) throws EmployeeNotFoundException ;
	

}
