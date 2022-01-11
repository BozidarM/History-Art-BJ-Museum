package rs.ac.singidunum.backendspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.backendspring.entity.Users;
import rs.ac.singidunum.backendspring.model.UsersModel;
import rs.ac.singidunum.backendspring.service.UsersService;

@RestController
@RequestMapping("users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping("user/{username}")
    @CrossOrigin(origins = "*")
    public Users findByUsername(@PathVariable String username){ return usersService.findByUsername(username); }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Users insert(@RequestBody UsersModel model){
        return usersService.insert(model);
    }

    @PostMapping("login")
    @CrossOrigin(origins = "*")
    public Users login(@RequestBody UsersModel model){ return usersService.login(model); }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Users update(@RequestBody UsersModel model){ return usersService.update(model); }
}
