package rs.ac.singidunum.backendspring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.backendspring.entity.Exhibitions;

import java.util.List;

public interface IExhibitionsRepository extends MongoRepository<Exhibitions, String> {
    @Query(value = "{'status':'pending', 'username': {$regex : ?0, $options: 'i'}}}")
    List<Exhibitions> findAllPendingExhibitionsByUsername(String username);
    @Query(value = "{ $or: [{'status':'completed'}, {'status':'canceled'}], 'username': {$regex : ?0, $options: 'i'}}}")
    List<Exhibitions> findAllHistoryExhibitionsByUsername(String username);
    Exhibitions findExhibitionsById(String id);
}
