package ca.mattconstant.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mattconstant.beans.Monster;
import ca.mattconstant.repositories.MonsterRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/monster")
public class MonsterController {
	
	private MonsterRepository monsterRepo;
	
	   @GetMapping(value={"/", ""}) 
	    public List<Monster> findMonsters() {
	    return monsterRepo.findAll();
	}
	   
	   @GetMapping(value={"/{id}"}, headers="Content-type=application/json")
		public Optional<Monster> getMonsterById(@PathVariable String id) {
			return monsterRepo.findById(id); 
		}
	   
		@PostMapping(value={"/", ""}, headers="Content-type=application/json")
		public String postMonster(@RequestBody Monster monster) {
		    monster.setId(null);
		    Monster m = monsterRepo.save(monster);
		    System.out.println("test");
		    return "Record was added at index" + m.getId();
		}
		
		@DeleteMapping(value={"/{id}"}, headers="Content-type=application/json")
		public String deleteById(@PathVariable String id) {
					monsterRepo.deleteById(id);
					return "deleted";
		}
	}

