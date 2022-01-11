package rs.ac.singidunum.backendspring.service;

import rs.ac.singidunum.backendspring.entity.Exhibits;
import rs.ac.singidunum.backendspring.entity.Comments;
import rs.ac.singidunum.backendspring.model.CommentsModel;

import java.util.List;

public interface ICommentsService {
    List<Comments> findAllByExhibitsId(String exhibitsId);
    Comments insert(CommentsModel model);
    Comments update(CommentsModel model);
    void deleteById(String id);
}
