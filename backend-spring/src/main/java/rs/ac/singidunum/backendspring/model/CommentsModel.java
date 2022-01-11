package rs.ac.singidunum.backendspring.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CommentsModel {
    private String id;
    private String exhibitId;
    private String username;
    private String content;
    private LocalDate postedAt;

}
