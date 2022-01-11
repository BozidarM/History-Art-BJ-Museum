package rs.ac.singidunum.backendspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.backendspring.entity.Comments;
import rs.ac.singidunum.backendspring.model.CommentsModel;
import rs.ac.singidunum.backendspring.service.CommentsService;

import java.util.List;

@RestController
@RequestMapping("comments")
public class CommentsController {

    @Autowired
    private CommentsService commentsService;

    @GetMapping ("all-comments/{candiesId}")
    @CrossOrigin(origins = "*")
    public List<Comments> findAllByCandiesId(@PathVariable("candiesId") String candiesId){
        return commentsService.findAllByExhibitsId(candiesId);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Comments insert(@RequestBody CommentsModel model){
        return commentsService.insert(model);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Comments update(@RequestBody CommentsModel model){ return commentsService.update(model); }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.commentsService.deleteById(id);
    }
}
