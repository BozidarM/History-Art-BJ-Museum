package rs.ac.singidunum.backendspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.backendspring.entity.Exhibitions;
import rs.ac.singidunum.backendspring.entity.Exhibits;
import rs.ac.singidunum.backendspring.model.ExhibitsModel;
import rs.ac.singidunum.backendspring.repository.IExhibitionsRepository;
import rs.ac.singidunum.backendspring.repository.IExhibitsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExhibitsService implements IExhibitsService{
    @Autowired
    private IExhibitsRepository exhibitsRepository;

    @Autowired
    private IExhibitionsRepository exhibitionsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Exhibits> findAll() { return exhibitsRepository.findAll();}

    @Override
    public Exhibits findExhibitById(String id){ return exhibitsRepository.findExhibitById(id);}

    @Override
    public List<Exhibits> findAllByTitle(String title){ return exhibitsRepository.findAllByTitle(title);}

    @Override
    public List<Exhibits> findAllByRating(int rating){ return exhibitsRepository.findAllByRating(rating);}

    @Override
    public Exhibits updateStars (ExhibitsModel model){
        Exhibits exhibit = exhibitsRepository.findExhibitById(model.getId());

        exhibit.getStars().add(model.getRating());

        this.exhibitsRepository.save(exhibit);

        double average = exhibit.getStars().stream().mapToInt(val -> val).average().orElse(0.0);
        int intValue = (int) Math.round(average);

        exhibit.setRating(intValue);

        this.exhibitsRepository.save(exhibit);

        if(!model.getId().equals("no")) {
            Exhibitions exhibition = exhibitionsRepository.findExhibitionsById(model.getExhibitionId());

            List<Integer> exhibitionStars = exhibition.getStars();
            int exhibitRating = exhibit.getRating();

            exhibitionStars.add(exhibitRating);
            exhibition.setStars(exhibitionStars);

            this.exhibitionsRepository.save(exhibition);
        }

        return autoMapperService.map(model, Exhibits.class);
    }

    public List<Exhibits> findAllById(List<String> ids){
        List<Exhibits> listToSend = new ArrayList<>();
        for (String id : ids)
        {
           Exhibits exhibit = exhibitsRepository.findExhibitById(id);
           listToSend.add(exhibit);
        }
        return listToSend;
    }
}

