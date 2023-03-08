package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Market;
import com.example.demo.Service.ApiService;


@RestController
public class ApiController {
@Autowired
ApiService service;
@CrossOrigin(origins = "*")
@GetMapping ("/super")
public List<Market>read(){
	return service.getProduct();
}
@CrossOrigin(origins = "*")
@PostMapping("/super")
public String addProduct(@RequestBody Market model)
{
return service.addProduct(model);
}
@CrossOrigin(origins = "*")
@PutMapping("/super/{id}")
public Market addput(@PathVariable int id,@RequestBody Market model) {
	return service.addput(model);
}
@CrossOrigin(origins = "*")
@DeleteMapping("/super/{id}")
public String deleteById(@PathVariable int id) {
	return service.deleteById(id);
}
}
