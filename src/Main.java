import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection connection = new Connection();

		ArrayList<Articles> listeArticles = connection.getArticlesBdD();
		// Parcours de la liste et affichage des infos
		for (Articles articles : listeArticles) {
			System.out.println("Articles =>" + articles.getId() + " " + articles.getUrl() + " " + articles.getPrix());
		}
	}
}