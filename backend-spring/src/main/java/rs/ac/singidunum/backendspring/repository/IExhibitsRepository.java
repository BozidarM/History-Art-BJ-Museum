package rs.ac.singidunum.backendspring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.backendspring.entity.Exhibits;

import java.util.List;

public interface IExhibitsRepository extends MongoRepository<Exhibits, String>{
    Exhibits findExhibitById(String id);
    @Query(value = "{'title': {$regex : ?0, $options: 'i'}}")
    List<Exhibits> findAllByTitle(String title);
    @Query(value = "{'culture': {$regex : ?0, $options: 'i'}}")
    List<Exhibits> findAllByCulture(String culture);
    @Query(value = "{'century': {$regex : ?0, $options: 'i'}}")
    List<Exhibits> findAllByCentury(String century);
    @Query(value = "{'culture': {$regex : ?0, $options: 'i'}}")
    List<Exhibits> findAllByClassification(String classification);
    @Query(value = "{'period': {$regex : ?0, $options: 'i'}}")
    List<Exhibits> findAllByPeriod(String period);
    List<Exhibits> findAllByRating(int rating);
}
