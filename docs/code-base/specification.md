---
sidebar_position: 4
authors:
  - name: Yaman
    title: Specification
---
# Specification
## Base Specification

The `BaseSpecification` class is designed to provide a base for handling common search operations in the repository. It implements the `IBaseSpecification` interface, making it a robust and reusable component for querying data. By defining common specification methods such as `where`, `whereLike`, `whereNot`, and `whereIn`, the BaseSpecification class simplifies search operations and promotes code reuse.

The goal of the `BaseSpecification` class is to increase reusability and maintain clean, organized code, ensuring that developers do not need to create functions for simple search logic repeatedly. It provides a standard way to handle query specifications, especially in scenarios involving complex search criteria, by encapsulating common operations within a single specification class. This approach fosters a more organized and efficient codebase.
### Interface
```js
public interface IBaseSpecification<T> {
    Path<String> toExpression(Root<T> root, String field);
    Specification<T> where(String field, Object value);
    Specification<T> whereLike(String field, String value);
    Specification<T> whereNot(String field, Object value);
    Specification<T> whereIn(String field, Object[] values);
    Specification<T> notDeleted();
}
```
### Base Class

The `BaseSpecification` class provides a standardized way to construct dynamic query specifications for entities in a repository. It implements the `IBaseSpecification` interface and includes methods for common query operations such as equality, like, negation, and inclusion checks. This class simplifies the process of building criteria queries, promoting reusability and maintainability in your data access layer.

```js
@Component
public class BaseSpecification<T> implements IBaseSpecification<T> {

    @Override
    public Specification<T> where(String field, Object value) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(toExpression(root, field), value);
        };
    }

    @Override
    public Specification<T> whereLike(String field, String value) {
        return (root, query, criteriaBuilder) -> {
            
            return criteriaBuilder.like(criteriaBuilder.lower(toExpression(root, field)),
            "%" + value.toLowerCase() + "%");
        };
    }

    @Override
    public Specification<T> notDeleted() {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("isDeleted"), false);
        };
    }

    @Override
    public Specification<T> whereNot(String field, Object value) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.notEqual(toExpression(root, field), value);
        };
    }

    @Override
    public Specification<T> whereIn(String field, Object[] values) {
        return (root, query, criteriaBuilder) ->{
            return toExpression(root, field).in(values);
        };
    }

    @Override
    public Path<String> toExpression(Root<T> root, String field) {
        String[] fields = field.split("\\.");
        Path<String> path = root.get(fields[0]);
        for (int i = 1; i < fields.length; i++) {
            
            path = path.get(fields[i]);
        }

        return path;
        
    }
}

```

#### Explanation

- **`where`**: Constructs a specification for equality check.
- **`whereLike`**: Constructs a specification for a case-insensitive partial match.
- **`notDeleted`**: Constructs a specification to filter out soft-deleted records.
- **`whereNot`**: Constructs a specification for inequality check.
- **`whereIn`**: Constructs a specification to check if a field value is within a set of values.
- **`toExpression`**: Converts a dot-notated field name into a `Path` expression for nested fields.

The `BaseSpecification` class allows for flexible and dynamic querying, making it easier to handle complex search criteria within your application. This promotes a clean and maintainable codebase, reducing the need for repetitive query logic.
## Basic How To Use

### Interface

The `IBankRepository` interface extends the `IBaseRepository` interface, adding specific methods for the `Bank` entity. This allows for custom query methods such as finding a bank by its code or saving multiple bank entities at once.

```js
public interface ICitySpecifications extends IBaseSpecification<City> {
    
}
```

### Base Class

The `CitySpecifications` class extends the `BaseSpecification` class and implements the `ICitySpecifications` interface. This setup leverages the common functionalities provided by `BaseSpecification` while also allowing for specific implementations related to the `Bank` entity.

```js
// Sample component of Base Class Specification to use it in repository
@Component
public class CitySpecifications extends BaseSpecification<City> implements ICitySpecifications {
    
}

// Uses Case in City Repository For search data
@Repository
public class CityRepository extends BaseRepository<City> implements ICityRepository {

    private final ICitySpecifications citySpecifications;

    public CityRepository(EntityManager entityManager, ICitySpecifications citySpecifications) {
        super(City.class, entityManager);
        this.citySpecifications = citySpecifications; 
    }

    @Override
    public PaginateData<City> list(PageRequest pageRequest, Province province) {
        Specification<City> spec = Specification.where(null);
        spec = spec.and(citySpecifications.notDeleted())
                .and(citySpecifications.where("province", province))
                .and(
                    spec.or(citySpecifications.whereLike("name", pageRequest.getSearch()))
                    .or(citySpecifications.whereLike("postalCodes", pageRequest.getSearch()))
                    .or(citySpecifications.whereLike("province.name", pageRequest.getSearch()))
                );
        Sort sort = Sort.by(pageRequest.getSortBy());

        if(pageRequest.getSortDirection().equals("asc")) {
            sort = sort.ascending();
        } else {
            sort = sort.descending();
        }
                
        Page<City> data = findAll(spec, org.springframework.data.domain.PageRequest.of(
            pageRequest.getPageNumber().intValue(), pageRequest.getPageSize().intValue(), sort
        ));
        
        List<City> result = data.getContent();
        
        PaginateData<City> resultData = new PaginateData<>();
        resultData.setItems(result);

        Long totalElements = data.getTotalElements();

        resultData.setPageData(new PageData(
            pageRequest.getPageSize(), 
            PaginateUtils.getTotalPages(pageRequest.getPageSize(), totalElements), 
            totalElements
        ));

        return resultData;
    }
    
}

```


here the more explaination of sample Using the `whereLike` function class is straightforward. For example:

```java
loanSpecifications.whereLike("code", pageRequest.getSearch());
```

If you need to query a field within a related entity, simply append the field with a dot notation:

```java
loanSpecifications.whereLike("province.name", pageRequest.getSearch());
```

This method allows for flexible and dynamic querying, making it easier to handle complex search criteria within your application.

### Explanation

In the example above, we demonstrate how to use the BaseSpecification class for basic search operations within repository functions. The BaseSpecification class provides a standard way to handle various query specifications, such as equality checks, like queries, negations, and collections.

By implementing BaseSpecification, you ensure a clean, reusable, and maintainable approach to querying data within your application. This setup promotes code reuse and simplifies the management of entity-specific query logic, enabling flexible and dynamic search capabilities.