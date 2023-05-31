package ca.mattconstant.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mattconstant.beans.BotRequest;
import ca.mattconstant.requests.ChatGptResponse;
import ca.mattconstant.services.BotServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/bot")
@RequiredArgsConstructor
public class BotController {

	private final BotServiceImpl botService;
	
	@PostMapping("/send")
	public ChatGptResponse sendMessage(@RequestBody BotRequest botRequest) {
		return botService.askQuestion(botRequest);
	}
	
}
