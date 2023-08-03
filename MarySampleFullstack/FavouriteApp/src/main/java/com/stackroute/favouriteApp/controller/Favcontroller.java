package com.stackroute.favouriteApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.favouriteApp.model.Favourite;
import com.stackroute.favouriteApp.service.FavService;

@RestController
@CrossOrigin

public class Favcontroller {
	
	@Autowired
	FavService favservice;
	
   @PostMapping("/fav/add")
   public ResponseEntity<?> addfav(@RequestBody Favourite fav)
   {
	   fav.setId(fav.getMailid()+Math.random());
	   Favourite favobj=favservice.addFavoruite(fav);
	   return new ResponseEntity<Favourite>(favobj,HttpStatus.CREATED);
	   
   }
	
   @GetMapping("/fav/view/{email}")
   public ResponseEntity<?> getbyemail(@PathVariable("email") String mail)
   {
	   
	   List<Favourite> favlist=favservice.getFavouriteByMail(mail);
	   return new ResponseEntity<List>(favlist,HttpStatus.OK);
   }
	
}
