package Bot.JavaBot;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Message;
import net.dv8tion.jda.core.entities.MessageChannel;
import net.dv8tion.jda.core.entities.User;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class App extends ListenerAdapter {

	String[] jokes = { "Thurston is tall",
			"TrOlLeD", 
			"I manufactured clown shoes…\nWhich was no small feat.",
			"Where are my shoes?",
			"I hate Eli!",
			"Can you do my project for me, Eric?",
			"I am a clown",
			"Fuck you Parker", 
			"!joke", 
			"hi oshika",
			"im gonna scramble your eggs!",
			"You can't just make stuff up",
			"Parker sucks at java" };

	public static void main(String[] args) throws LoginException, IllegalArgumentException, InterruptedException,
			RateLimitedException, FileNotFoundException {

		JDA jdaBot = new JDABuilder(AccountType.BOT)
				.setToken("MzcwNzM4ODkzOTAzMTAxOTU0.DMrdDA.uGdYfGaa4IIeFvQW6vD0Uvxihlo").buildBlocking();
		jdaBot.addEventListener(new App());

	}

	@Override
	public void onMessageReceived(MessageReceivedEvent e) {
		Message objMsg = e.getMessage();
		MessageChannel objChannel = e.getChannel();
		User objUser = e.getAuthor();

		if (objMsg.getContent().equalsIgnoreCase("!joke")) {
			 double m = Math.random();
			objChannel.sendMessage(jokes[(int) (jokes.length * Math.random())]).complete();
		}
	}
}
