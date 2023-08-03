package com.stackroute.favouriteApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.stackroute.favouriteApp.filter.Favfilter;
 
@SpringBootApplication
public class FavouriteAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavouriteAppApplication.class, args);
	}

	
	@Bean
	public FilterRegistrationBean getfilter()
	{
		FilterRegistrationBean fbean=new FilterRegistrationBean();
		fbean.setFilter(new Favfilter());
		fbean.addUrlPatterns("/fav/add");
		return fbean;
	}
	
}
