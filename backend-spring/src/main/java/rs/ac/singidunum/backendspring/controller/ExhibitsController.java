package rs.ac.singidunum.backendspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.backendspring.entity.Exhibits;
import rs.ac.singidunum.backendspring.model.ExhibitsModel;
import rs.ac.singidunum.backendspring.service.ExhibitsService;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("exhibits")
public class ExhibitsController {
    @Autowired
    private ExhibitsService exhibitsService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Exhibits> findAll(){
        return exhibitsService.findAll();
    }

    @GetMapping("candy/{id}")
    @CrossOrigin(origins = "*")
    public Exhibits findExhibitsById(@PathVariable("id") String id){
        return this.exhibitsService.findExhibitsById(id);
    }

    @GetMapping("search/{title}")
    @CrossOrigin(origins = "*")
    public List<Exhibits> findAllByName(@PathVariable("title") String title){
        return  exhibitsService.findAllByTitle(title);
    }

    @GetMapping("searchRating/{rating}")
    @CrossOrigin(origins = "*")
    public List<Exhibits> findAllByRating(@PathVariable("rating") int rating){
        return  exhibitsService.findAllByRating(rating);
    }

    @PostMapping("update-stars")
    @CrossOrigin(origins = "*")
    public Exhibits updateStars(@RequestBody ExhibitsModel model){
        return exhibitsService.updateStars(model);
    }
}
