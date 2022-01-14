package rs.ac.singidunum.backendspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.backendspring.entity.Users;
import rs.ac.singidunum.backendspring.model.UsersModel;
import rs.ac.singidunum.backendspring.repository.IUsersRepository;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsersService implements IUsersService{

    @Autowired
    private IUsersRepository usersRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public Users findByUsername(String username){
        return usersRepository.findByUsername(username);
    }

    @Override
    public Users insert(UsersModel model){

        model.setEmail(validateEmail(model.getEmail()));
        model.setPassword(validatePassword(model.getPassword()));
        model.setUsername(validateUsername(model.getUsername()));

        if (model.getPassword() != null) {
            model.setPassword(model.getPassword());
        }

        if (model.getEmail() == null || model.getUsername() == null || model.getPassword() == null){
            return null;
        }else {
            return usersRepository.insert(autoMapperService.map(model, Users.class));
        }
    }

    @Override
    public Users login(UsersModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        if (user == null) {
            return null;
        }
        else{
            if (!model.getPassword().equals(user.getPassword())){

                return null;
            }

            return autoMapperService.map(model, Users.class);
        }
    }

    @Override
    public Users update(UsersModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        user.setFullname(model.getFullname());
        user.setEmail(model.getEmail());
        user.setUsername(model.getUsername());
        if ( model.getPassword() != null && model.getPassword() != ""){
            user.setPassword(model.getPassword());
        }
        user.setAddress(model.getAddress());
        user.setCity(model.getCity());
        user.setPhone(model.getPhone());
        user.setBirthday(model.getBirthday());
        user.setFavorites(model.getFavorites());

        this.usersRepository.save(user);

        return autoMapperService.map(model, Users.class);
    }

    public String validateEmail(String email){
        Pattern pattern = Pattern.compile("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        boolean matchFound = matcher.find();

        Users user = usersRepository.findByEmail(email);

        if(matchFound && user == null) {
            return email;
        } else {
            return null;
        }
    }

    public String validatePassword(String password){
        if (password.length() < 8){
            return null;
        }else
            return password;
    }

    public String validateUsername(String username){
        Users user = usersRepository.findByUsername(username);

        if(user == null){
            return username;
        }else{
            return null;
        }
    }
}