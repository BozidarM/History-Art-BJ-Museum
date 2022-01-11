package rs.ac.singidunum.backendspring.service;

public interface IAutoMapperService {
    <T> T map(Object model, Class<T> entity);
}
