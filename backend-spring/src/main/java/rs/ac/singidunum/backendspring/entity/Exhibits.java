package rs.ac.singidunum.backendspring.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Document(collection = "exhibits")
public class Exhibits {
    @Id
    private String id;
    @Field("title")
    private String title;
    @Field("culture")
    private String culture;
    @Field("century")
    private String century;
    @Field("classification")
    private String classification;
    @Field("period")
    private String period;
    @Field("image")
    private String image;
    @Field("description")
    private String description;
    @Field("tourTime")
    private int tourTime;
    @Field("price")
    private int price;
    @Field("stars")
    private List<Integer> stars;
    @Field("rating")
    private int rating;
}
