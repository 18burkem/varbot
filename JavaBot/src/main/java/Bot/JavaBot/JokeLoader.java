package Bot.JavaBot;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.URISyntaxException;
import java.util.Scanner;

public class JokeLoader {

	private static Scanner sc;

	public static void loadJokes() throws URISyntaxException {
//		try {
//			sc = new Scanner(new File("jokes.txt"));
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		System.out.println(sc.hasNextLine());
		File testf = new File(JokeLoader.class.getClass().getResource( "/jokes.txt").toURI());
		System.out.println(testf.exists());
	}

	public static void main(String[] args) throws FileNotFoundException, URISyntaxException {
		loadJokes();
	}
}
