package rs.ac.singidunum.backendspring.service;

import rs.ac.singidunum.backendspring.entity.Exhibitions;
import rs.ac.singidunum.backendspring.model.ExhibitionsModel;

import java.util.List;

public interface IExhibitionsService {
    List<Exhibitions> findAllPendingExhibitionsByUsername(String username);
    List<Exhibitions> findAllHistoryExhibitionsByUsername(String username);
    void deleteById(String id);
    Exhibitions insert(ExhibitionsModel model);
    Exhibitions update(ExhibitionsModel model);
    Exhibitions changeStatus(ExhibitionsModel model);
    List<Exhibitions> findAllByType();
    Exhibitions findExhibitionsById(String id);
}
