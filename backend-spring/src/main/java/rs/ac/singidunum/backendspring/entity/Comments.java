package rs.ac.singidunum.backendspring.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Data
public class Comments {
    @Id
    private String id;
    @Field("exhibitId")
    private String exhibitId;
    @Field("username")
    private String username;
    @Field("content")
    private String content;
    @Field("postedAt")
    private LocalDate postedAt;
}
