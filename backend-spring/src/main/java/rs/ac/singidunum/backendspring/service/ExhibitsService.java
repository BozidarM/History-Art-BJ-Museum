package rs.ac.singidunum.backendspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.backendspring.entity.Exhibits;
import rs.ac.singidunum.backendspring.model.ExhibitsModel;
import rs.ac.singidunum.backendspring.repository.IExhibitsRepository;

import java.util.List;

@Service
public class ExhibitsService implements IExhibitsService{
    @Autowired
    private IExhibitsRepository exhibitsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Exhibits> findAll() { return exhibitsRepository.findAll();}

    @Override
    public Exhibits findExhibitsById(String id){ return exhibitsRepository.findExhibitsById(id);}

    @Override
    public List<Exhibits> findAllByTitle(String title){ return exhibitsRepository.findAllByTitle(title);}

    @Override
    public List<Exhibits> findAllByRating(int rating){ return exhibitsRepository.findAllByRating(rating);}

    @Override
    public Exhibits updateStars (ExhibitsModel model){
        Exhibits exhibit = exhibitsRepository.findExhibitsById(model.getId());

        exhibit.getStars().add(model.getRating());

        this.exhibitsRepository.save(exhibit);

        double average = exhibit.getStars().stream().mapToInt(val -> val).average().orElse(0.0);
        int intValue = (int) average;

        exhibit.setRating(intValue);

        this.exhibitsRepository.save(exhibit);

        return autoMapperService.map(model, Exhibits.class);
    }
}

