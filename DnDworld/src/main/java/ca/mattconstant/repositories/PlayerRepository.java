package ca.mattconstant.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ca.mattconstant.beans.Player;

public interface PlayerRepository extends MongoRepository<Player, String> {

}
