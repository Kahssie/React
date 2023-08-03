package com.stackroute.authorizationapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Userprofile {

	    @Id
		String mailid;
		String password;
		String name;
		String addr;
		public String getMailid() {
			return mailid;
		}
		public void setMailid(String mailid) {
			this.mailid = mailid;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getAddr() {
			return addr;
		}
		public void setAddr(String addr) {
			this.addr = addr;
		}
		
	
}
