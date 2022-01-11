package rs.ac.singidunum.backendspring.service;

import rs.ac.singidunum.backendspring.entity.Users;
import rs.ac.singidunum.backendspring.model.UsersModel;

public interface IUsersService {
    Users insert(UsersModel model);
    Users login(UsersModel model);
    Users update(UsersModel model);
    Users findByUsername(String username);
}
