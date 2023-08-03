package com.stackroute.authorizationapp.service;

import com.stackroute.authorizationapp.model.Userprofile;

public interface UserService {

		Userprofile registerUser(Userprofile userobj);
		boolean validateUser(String mailid,String password);
}
