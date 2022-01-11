package rs.ac.singidunum.backendspring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.backendspring.entity.Comments;


import java.util.List;

public interface ICommentsRepository extends MongoRepository<Comments, String> {
    List<Comments> findAllByExhibitsId(String candiesId);
    Comments findCommentsById(String id);
}
