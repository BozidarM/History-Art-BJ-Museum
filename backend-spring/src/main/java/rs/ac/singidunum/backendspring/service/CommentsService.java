package rs.ac.singidunum.backendspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.backendspring.entity.Comments;
import rs.ac.singidunum.backendspring.model.CommentsModel;
import rs.ac.singidunum.backendspring.repository.ICommentsRepository;

import java.util.List;

@Service
public class CommentsService implements ICommentsService {

    @Autowired
    private ICommentsRepository commentsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Comments> findAllByExhibitsId(String exhibitsId){
        return commentsRepository.findAllByExhibitsId(exhibitsId);
    }

    @Override
    public Comments insert(CommentsModel model){ return commentsRepository.insert(autoMapperService.map(model, Comments.class)); }

    @Override
    public Comments update(CommentsModel model){

        Comments comment = commentsRepository.findCommentsById(model.getId());

        comment.setContent(model.getContent());
        comment.setPostedAt(model.getPostedAt());

        this.commentsRepository.save(comment);

        return autoMapperService.map(model, Comments.class);
    }

    @Override
    public void deleteById(String id){
        this.commentsRepository.deleteById(id);
    }
}