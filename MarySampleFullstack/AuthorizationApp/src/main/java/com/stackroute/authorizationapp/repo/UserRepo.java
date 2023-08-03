package com.stackroute.authorizationapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.authorizationapp.model.Userprofile;


@Repository
public interface UserRepo extends JpaRepository<Userprofile,String> {

Userprofile findByMailidAndPassword(String mailid,String password);

	
}
