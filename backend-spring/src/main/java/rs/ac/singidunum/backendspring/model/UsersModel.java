package rs.ac.singidunum.backendspring.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
public class UsersModel {
    private String id;
    private String fullname;
    private String email;
    private String username;
    private String password;
    private String city;
    private String address;
    private String phone;
    private String birthday;
    private List<Object> favorites;
}
