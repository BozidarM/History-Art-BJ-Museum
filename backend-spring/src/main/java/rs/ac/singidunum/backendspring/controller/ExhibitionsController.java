package rs.ac.singidunum.backendspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.backendspring.entity.Exhibitions;
import rs.ac.singidunum.backendspring.model.ExhibitionsModel;
import rs.ac.singidunum.backendspring.service.ExhibitionsService;

import java.util.List;

@RestController
@RequestMapping("exhibitions")
public class ExhibitionsController {
    @Autowired
    private ExhibitionsService exhibitionsService;

    @GetMapping("all/{username}")
    @CrossOrigin(origins = "*")
    public List<Exhibitions> findAllPendingExhibitionsByUsername(@PathVariable("username") String username){ return exhibitionsService.findAllPendingExhibitionsByUsername(username); }

    @GetMapping("all-history/{username}")
    @CrossOrigin(origins = "*")
    public List<Exhibitions> findAllHistoryExhibitionsByUsername(@PathVariable("username") String username){ return exhibitionsService.findAllHistoryExhibitionsByUsername(username); }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Exhibitions insert(@RequestBody ExhibitionsModel model){
        return exhibitionsService.insert(model);
    }

    @PostMapping("change-status")
    @CrossOrigin(origins = "*")
    public Exhibitions changeStatus(@RequestBody ExhibitionsModel model) { return exhibitionsService.changeStatus(model); }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Exhibitions update(@RequestBody ExhibitionsModel model) {return exhibitionsService.update(model); }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.exhibitionsService.deleteById(id);
    }
}
