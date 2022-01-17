package rs.ac.singidunum.backendspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.backendspring.entity.Exhibitions;
import rs.ac.singidunum.backendspring.entity.Users;
import rs.ac.singidunum.backendspring.model.ExhibitionsModel;
import rs.ac.singidunum.backendspring.repository.IExhibitionsRepository;
import rs.ac.singidunum.backendspring.repository.IUsersRepository;

import java.util.List;

@Service
public class ExhibitionsService implements IExhibitionsService {
    @Autowired
    private IExhibitionsRepository exhibitionsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public List<Exhibitions> findAllPendingExhibitionsByUsername(String username){
        return exhibitionsRepository.findAllPendingExhibitionsByUsername(username);
    }

    @Override
    public List<Exhibitions> findAllHistoryExhibitionsByUsername(String username){
        return exhibitionsRepository.findAllHistoryExhibitionsByUsername(username);
    }

    @Override
    public Exhibitions insert(ExhibitionsModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        return exhibitionsRepository.insert(autoMapperService.map(model, Exhibitions.class));
    }

    @Override
    public Exhibitions update(ExhibitionsModel model){
        Exhibitions exhibition = exhibitionsRepository.findExhibitionsById(model.getId());

        exhibition.setDateVisit(model.getDateVisit());

        this.exhibitionsRepository.save(exhibition);

        return autoMapperService.map(model, Exhibitions.class);
    }

    @Override
    public Exhibitions changeStatus(ExhibitionsModel model){
        Exhibitions exhibition = exhibitionsRepository.findExhibitionsById(model.getId());

        exhibition.setStatus(model.getStatus());

        this.exhibitionsRepository.save(exhibition);

        return autoMapperService.map(model, Exhibitions.class);
    }

    @Override
    public void deleteById(String id){
        this.exhibitionsRepository.deleteById(id);
    }

    @Override
    public List<Exhibitions> findAllByType(){
        return this.exhibitionsRepository.findAllByType();
    }

    @Override
    public Exhibitions findExhibitionsById(String id){
        return this.exhibitionsRepository.findExhibitionsById(id);
    }

//    public int updateRating(String exhibitionId){
//        Exhibitions exhibition = exhibitionsRepository.findExhibitionsById(exhibitionId);
//
//        List<Object> items = exhibition.getItems();
//        for (Object item : items)
//        {
//            for(const id in item)
//            Exhibits exhibit = exhibitsRepository.findExhibitById(item[id]);
//
//        }
//        return
//    }
}
