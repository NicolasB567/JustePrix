//import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Connection {
private static final String PASSWORD = "";
private static final String LOGIN = "root";
private static final String URL = "jdbc:mysql://localhost:3306/justeprix";
private final static String QUERY_FIND_ARTICLES = "SELECT * FROM articles";

public static ArrayList<Articles> getArticlesBdD() {
	
java.sql.Connection con = null;
Statement stmt = null;
ArrayList<Articles> listeArticles = new ArrayList<>();
try {
con = DriverManager.getConnection(URL, LOGIN, PASSWORD);
stmt = con.createStatement();
System.out.println("Je suis connectée. Je vais lancer ma requête");
// Lancer la requête…
ResultSet rset = stmt.executeQuery(QUERY_FIND_ARTICLES);
// Travail sur le resultSet

} catch (final SQLException e) {
e.printStackTrace();
} finally {
if (stmt != null) {
try {stmt.close();// Le stmt.closeferme automatiquement le rset.
System.out.println("Je ferme l'accès à la BdD");
} catch (final SQLException e) {
e.printStackTrace();
}
}
if (con != null) {
try {
con.close();
} catch (final SQLException e) {
e.printStackTrace();
}

}
}
System.out.println(listeArticles.size());
return listeArticles;
}
private static Articles rsetToArticles(final ResultSet rset) throws SQLException {
final Articles articles = new Articles(0, null, 0);
articles.setId(rset.getInt("id"));
articles.setUrl(rset.getString("URL"));
articles.setPrix(rset.getInt("Prix"));

return articles;
}
}
