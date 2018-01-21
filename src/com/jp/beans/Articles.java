package com.jp.beans;

public class Articles {

	
	private String url;
	private int prix;
	
	
	public Articles(String url, int prix) {
		super();
		
		this.url = url;
		this.prix = prix;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}
	
}
