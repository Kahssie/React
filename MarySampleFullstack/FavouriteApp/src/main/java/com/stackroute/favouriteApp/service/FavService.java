package com.stackroute.favouriteApp.service;

import java.util.List;

import com.stackroute.favouriteApp.model.Favourite;

public interface FavService {

	Favourite	addFavoruite(Favourite fav);
	List<Favourite> getFavouriteByMail(String mailid);
}
