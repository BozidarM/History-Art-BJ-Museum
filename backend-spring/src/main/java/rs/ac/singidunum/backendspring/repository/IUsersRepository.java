package rs.ac.singidunum.backendspring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.backendspring.entity.Users;


public interface IUsersRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
    Users findByEmail(String email);
}
