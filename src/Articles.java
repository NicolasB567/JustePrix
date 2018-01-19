
public class Articles {

	public int id;
	public String url;
	public int prix;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public Articles(int id, String url, int prix) {
		super();
		this.id = id;
		this.url = url;
		this.prix = prix;
	}
	
}
