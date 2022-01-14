package rs.ac.singidunum.backendspring.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ExhibitionsModel {
    private String id;
    private String username;
    private int price;
    private int tourTime;
    private List<Object> items;
    private LocalDate orderedAt;
    private String status;
    private String type;
    private String dateVisit;
    private List<Integer> stars;
    private int rating;
}
