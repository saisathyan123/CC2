package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Market;
import com.example.demo.Repository.ApiRepository;


@Service
public class ApiService {

@Autowired
ApiRepository rep;
public List<Market>getProduct(){
	return rep.findAll();
}
public String addProduct(Market model)
{
rep.save(model);
return "Added" ;
}
public Market addput(Market model)
{
	rep.save(model);
	return model ;
}
public String deleteById(int id)
{
	rep.deleteById(id);
	return "Deleted" ;
}

}
