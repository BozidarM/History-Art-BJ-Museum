package rs.ac.singidunum.backendspring.model;

import lombok.Data;

import java.util.List;

@Data
public class ExhibitsModel {
    private String id;
    private String title;
    private String culture;
    private String century;
    private String classification;
    private String period;
    private String image;
    private String description;
    private int tourTime;
    private int price;
    private List<Integer> stars;
    private int rating;
}
