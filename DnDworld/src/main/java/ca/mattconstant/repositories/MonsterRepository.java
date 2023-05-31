package ca.mattconstant.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ca.mattconstant.beans.Monster;

public interface MonsterRepository extends MongoRepository<Monster, String> {

}
