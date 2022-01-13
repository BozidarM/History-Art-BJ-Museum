package rs.ac.singidunum.backendspring.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Document(collection = "users")
public class Users {
    @Id
    private String id;
    @Field("fullname")
    private String fullname;
    @Field("email")
    private String email;
    @Field("username")
    private String username;
    @Field("password")
    private String password;
    @Field("city")
    private String city;
    @Field("address")
    private String address;
    @Field("phone")
    private String phone;
    @Field("birthday")
    private String birthday;
    @Field("favorites")
    private List<Object> favorites;
}