package com.example.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Employee;
import com.example.exception.EmployeeNotFoundException;
import com.example.respository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeRepository empRepo;
	
	
	// ADD employee
	@Override
	public Employee addEmployee(Employee emp) {
		
		// Generate 6 digit random number
		int id =  100000 + new Random().nextInt(900000);
		emp.setEmpId(id);
		return empRepo.save(emp);
	}

	// DELETE emp by id
	@Override
	public Employee deleteEmployeeById(int empId) throws EmployeeNotFoundException {
		Optional<Employee> opt = empRepo.findById(empId);
		
		if (opt.isPresent()) {
			// Read Employee from Optional
			Employee emp = opt.get();
			empRepo.deleteById(empId);
			return emp;
		} else {
			throw new EmployeeNotFoundException("Employee not found with given id: " + empId);
		}

		
		
	}
	
	// GET emp by id
	@Override
	public Employee getEmployeeById(int empId) throws EmployeeNotFoundException  {
		Optional<Employee> opt = empRepo.findById(empId);
		Employee emp = null;
		if (opt.isPresent()) {
			// Read Employee obj from Optional
			emp = opt.get();
			return emp;
		} else {
			throw new EmployeeNotFoundException("Employee not found with given id: " + empId);
		}
	}

	// GET all employees
	@Override
	public List<Employee> getAllEmployees() {
		List<Employee> empList = empRepo.findAll();
		return empList;
	}

	// UPDATE employee
	@Override
	public Employee updateEmployee(Employee emp) throws EmployeeNotFoundException {
		Optional<Employee> opt = empRepo.findById(emp.getEmpId());

		if (opt.isPresent()) {
			// update employee
			return empRepo.save(emp);
		} else {
			throw new EmployeeNotFoundException("Employee not found with id: " + emp.getEmpId());
		}
	}

	
}
