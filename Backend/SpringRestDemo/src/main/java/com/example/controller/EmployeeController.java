package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Employee;
import com.example.exception.EmployeeNotFoundException;
import com.example.service.EmployeeService;

@CrossOrigin
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService empService;

	// ADD employee
	@PostMapping("/employee/add")
	ResponseEntity<Employee> addEmployee(@RequestBody Employee emp) {
		System.out.println(emp);
		Employee newEmp = empService.addEmployee(emp);
		System.out.println(newEmp);
		ResponseEntity<Employee> response = new ResponseEntity<>(newEmp, HttpStatus.CREATED); // 201 Created
		return response;
	}

	// GET employee by id
	@GetMapping("/employee/get/{empId}")
	ResponseEntity<Employee> getEmployeeById(@PathVariable int empId) throws EmployeeNotFoundException {
		Employee emp = empService.getEmployeeById(empId);
		return new ResponseEntity<>(emp, HttpStatus.OK); // 200 Ok
	}

	// DELETE employee by id
	@DeleteMapping("/employee/delete/{empId}")
	ResponseEntity<Employee> deleteEmployeeById(@PathVariable int empId) throws EmployeeNotFoundException {
		Employee emp = empService.deleteEmployeeById(empId);
		return new ResponseEntity<>(emp, HttpStatus.OK); // 200 Ok
	}

	// GET all employees
	@GetMapping("/employee/findAll")
	ResponseEntity<List<Employee>> getAllEmployees() {
		List<Employee> empList = empService.getAllEmployees();
		return new ResponseEntity<>(empList, HttpStatus.OK);
	}
	
	
	// UPDATE employee
	@PutMapping("/employee/update")
	ResponseEntity<Employee> updateEmployee(@RequestBody Employee emp) throws EmployeeNotFoundException {
		Employee updatedEmp = empService.updateEmployee(emp);
		ResponseEntity<Employee> response = new ResponseEntity<>(updatedEmp, HttpStatus.OK); // 200 OK
		return response;
	}
	

}
