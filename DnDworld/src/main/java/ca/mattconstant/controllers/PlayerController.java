package ca.mattconstant.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mattconstant.beans.Player;
import ca.mattconstant.repositories.PlayerRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/player")
public class PlayerController {
	
	private PlayerRepository playerRepo;
	   @CrossOrigin
	   @GetMapping(value={"/", ""}) 
	    public List<Player> findPlayers() {
	    return playerRepo.findAll();
	    }
	   @CrossOrigin
	   @GetMapping(value={"/{id}"}, headers="Content-type=application/json")
		public Optional<Player> getPlayerById(@PathVariable String id) {
			return playerRepo.findById(id); 
		}
	    @CrossOrigin
		@PostMapping(value={"/", ""}, headers="Content-type=application/json")
		public String postPlayer(@RequestBody Player player) {
		    player.setId(null);
		    Player p = playerRepo.save(player);
		    System.out.println("test");
		    return "Record was added at index" + p.getId();
		}
	    @CrossOrigin
		@DeleteMapping(value={"/{id}"}, headers="Content-type=application/json")
		public String deleteById(@PathVariable String id) {
					playerRepo.deleteById(id);
					return "deleted";
		}

}
