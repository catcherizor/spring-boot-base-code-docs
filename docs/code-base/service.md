---
sidebar_position: 5
authors:
  - name: Yaman
    title: Service
---
# Service
## Base Service

The BaseService class is designed to provide a base for handling common search operations in the repository. It implements the `IBaseService` interface, making it a robust and reusable component for querying data. By defining common specification methods such as `where`, `whereLike`, `whereNot`, and `whereIn`, the BaseService class simplifies search operations and promotes code reuse.
### Interface

The `IBaseService` interface defines the basic CRUD operations for a service. The methods included are `create`, `update`, `list`, `show`, and `delete`, each of which may throw an `ErrorException` for error handling.

```js
public interface IBaseService<R, T, D, M> {
    T create(R request) throws ErrorException;
    T update(R request, UUID id) throws ErrorException;
    List<T> list();
    T show(UUID id) throws ErrorException;
    void delete(UUID id) throws ErrorException;
}
```

#### Explanation of Generics in IBaseService

- `R` is a generic type representing the Request Class.
- `T` is a generic type representing the Data Class.
- `D` is a generic type representing the Data Transfer Object (DTO) Class.
- `M` is a generic type representing the Model Class.

Using these generics allows the `IBaseService` interface to be flexible and reusable across different types of services, accommodating various request, data, and model classes. This design promotes code reuse and ensures consistency in the implementation of service methods.
### Base Class


The `BaseService` class provides a generic implementation of the `IBaseService` interface. It leverages the `BaseData` and `BaseModel` classes to handle common CRUD operations in a reusable manner.

```js
public class BaseService<
        R extends BaseRequest<M>, 
        T extends BaseData<M, T>, 
        D, 
        M extends BaseModel> implements IBaseService<R, T, D, M> {

    private final IBaseRepository<M> repository;
    private T data;

    public BaseService(IBaseRepository<M> repository, T data) {
        this.repository = repository;
        this.data = data;
    }

    @Override
    public T create(R request) throws ErrorException {
        try {
            M model = request.mapToModel();
            M savedModel = repository.save(model);  
            return data.mapToData(savedModel);
        } catch (Exception e) {
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }

    @Override
    public T update(R request, UUID id) throws ErrorException {
        try {
            M current = repository.findById(id).orElseThrow(() -> new ErrorException(ErrorUtils.NotFound));
            M model = request.mapToModelUpdate(current);
            M savedModel = repository.save(model);  
            return data.mapToData(savedModel);
        } catch (ErrorException e) {
            throw e;
        } catch (Exception e) {
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }

    @Override
    public List<T> list() {
        List<M> listModel = repository.getAll();

        return listModel.stream().map(item -> {
            return data.mapToData(item);
        }).toList();
    }

    @Override
    public T show(UUID id) throws ErrorException {
        try {
            M current = repository.findById(id).orElseThrow(() -> new ErrorException(ErrorUtils.NotFound));
           
            return data.mapToData(current);
        } catch (ErrorException e) {
            throw e;
        } catch (Exception e) {
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }

    @Override
    public void delete(UUID id) throws ErrorException {
        try {
            M current = repository.findById(id).orElseThrow(() -> new ErrorException(ErrorUtils.NotFound));
            current.isDeleted = true;
            current.deleted_at = new Date();
            repository.save(current);
        } catch (ErrorException e) {
            throw e;
        } catch (Exception e) {
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }
}

```

#### Explanation

The `BaseService` class is designed to handle common service operations, ensuring that your application has a clean, reusable, and maintainable codebase. Here is a breakdown of its components:

- **Generics**:
  - `R`: The type of the request object, extending `BaseRequest<M>`.
  - `T`: The type of the data object, extending `BaseData<M, T>`.
  - `D`: The type of the Data Transfer Object (DTO).
  - `M`: The type of the model, extending `BaseModel`.

- **Constructor**:
  - Initializes the repository and data mapper.

- **CRUD Methods**:
  - `create`: Converts the request to a model, saves it, and maps the saved model to a DTO.
  - `update`: Finds the existing model by ID, updates it with new data, saves it, and maps the updated model to a DTO.
  - `list`: Retrieves all models, maps each model to a DTO, and returns a list of DTOs.
  - `show`: Finds the model by ID and maps it to a DTO.
  - `delete`: Marks the model as deleted, sets the deletion timestamp, and saves the updated model.

This structure promotes reusability and ensures that developers do not need to write redundant code for common service operations. It leverages the power of generics to handle different types of requests, models, and data objects in a flexible and efficient manner.
## Basic How To Use

### Interface

The `ICityService` interface extends the `IBaseService` interface, adding specific methods for the `City` entity. This allows for custom query methods tailored to the `City` entity, such as retrieving a city by its ID and listing cities with pagination.

```js
public interface ICityService extends IBaseService<CityRequest, CityData, City, UUID> {
    CityData show(UUID id) throws ErrorException;
    PaginateResponse<CityData> list(CityPageRequest request) throws ErrorException;
}
```

#### Explanation

The `ICityService` interface builds upon the generic CRUD operations defined in `IBaseService` by including methods specific to the `City` entity:

- **`show(UUID id)`**: Retrieves the details of a city by its ID, throwing an `ErrorException` if any issues occur.
- **`list(CityPageRequest request)`**: Retrieves a paginated list of cities based on the criteria defined in the `CityPageRequest`, throwing an `ErrorException` if any issues occur.

By extending `IBaseService`, the `ICityService` interface promotes code reuse and maintains a clean, organized approach to defining service methods for the `City` entity. This ensures consistency and efficiency in managing city-related operations within your application.

### Base Class

The `CityService` class extends the common functionalities provided by `BaseService` and implements the `ICityService` interface. This setup leverages the reusable CRUD operations from `BaseService` while allowing for specific implementations related to the `City` entity.

```js

@Service
@Slf4j
public class CityService implements ICityService {
    private final ICityRepository cityRepository;
    private final IProvinceRepository provinceRepository;

    public CityService(ICityRepository cityRepository, IProvinceRepository provinceRepository) {
        this.cityRepository = cityRepository;
        this.provinceRepository = provinceRepository;
    }

    @Override
    public PaginateResponse<CityData> list(CityPageRequest request) throws ErrorException {
        try {
            request.setPageNumber(request.getPageNumber() - 1);

            Province province = provinceRepository.findById(request.getProvinceId()).orElseThrow(() -> new ErrorException(ErrorUtils.provinceNotFound));

            PaginateData<City> provinces = cityRepository.list(request, province);
            
            PaginateResponse<CityData> resultPaginate = new PaginateResponse<>(new MetaData("true", "success get data", "200"));

            List<CityData> datas = provinces.getItems().stream().map(item -> {
                CityData data = new CityData().mapToData(item);
                return data;
            }).collect(Collectors.toList());

            resultPaginate.setPageData(provinces.getPageData());

            resultPaginate.setData(datas);

            return resultPaginate;
        } catch (ErrorException e) {
            throw e;
        } catch (Exception e) {
            log.error("ERROR DATABASE: ", e);
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }

    @Override
    public CityData show(UUID id) throws ErrorException {
        try {
            City city = cityRepository.findById(id).orElseThrow(() -> new ErrorException(ErrorUtils.cityNotFound));

            return new CityData().mapToData(city);
        } catch (ErrorException e) {
            throw e;
        } catch (Exception e) {
            log.error("ERROR DATABASE: ", e);
            throw new ErrorException(ErrorUtils.DatabaseGenericError);
        }
    }
}
```

#### Explanation

The `CityService` class handles city-specific operations by extending the common service functionalities provided by `BaseService`. Here’s a breakdown of its components:

- **Extending BaseService**:
  - The class extends `BaseService<CityRequest, CityData, City, UUID>`, inheriting the common CRUD operations.
  - It implements `ICityService`, ensuring that it adheres to the contract defined for city-specific services.

- **Constructor**:
  - Initializes the `cityRepository` and `provinceRepository`.
  - Calls the `super` constructor of `BaseService` to initialize the base repository and data mapper.

- **Custom Methods**:
  - `list(CityPageRequest request)`: Retrieves a paginated list of cities based on the given request and province ID. It maps the city entities to `CityData` objects and returns them in a `PaginateResponse`.
  - `show(UUID id)`: Retrieves the details of a city by its ID and maps it to a `CityData` object.

This setup ensures that city-specific operations are handled efficiently while leveraging the reusable CRUD operations from `BaseService`. It promotes code reuse, consistency, and maintainability within your application.


By extending `BaseService` and implementing the  `IBaserService` interface, you ensure a clean, reusable, and maintainable approach to data access within your application. This setup promotes code reuse and simplifies the management of entity-specific service methods.
