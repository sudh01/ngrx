package com.example.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, Integer> {

}
