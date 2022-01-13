package rs.ac.singidunum.backendspring.service;

import rs.ac.singidunum.backendspring.entity.Exhibits;
import rs.ac.singidunum.backendspring.model.ExhibitsModel;

import java.util.List;

public interface IExhibitsService {
    List<Exhibits> findAll();
    Exhibits findExhibitById(String id);
    List<Exhibits> findAllByTitle(String title);
    List<Exhibits> findAllByRating(int rating);
    Exhibits updateStars(ExhibitsModel model);
}
