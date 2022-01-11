package rs.ac.singidunum.backendspring.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "exhibitions")
public class Exhibitions {
    @Id
    private String id;
    @Field("username")
    private String username;
    @Field("price")
    private int price;
    @Field("tourTime")
    private int tourTime;
    @Field("items")
    private List<Object> items;
    @Field("orderedAt")
    private LocalDate orderedAt;
    @Field("status")
    private String status;
    @Field("stars")
    private List<Integer> stars;
    @Field("rating")
    private int rating;
}
