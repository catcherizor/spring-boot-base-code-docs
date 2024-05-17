---
sidebar_position: 3
authors:
  - name: Yaman
    title: Repository
---
# Repository
## Base Repository

The `BaseRepository` class is designed to provide a base for handling common repository operations. It implements the `IBaseRepository` interface and extends `SimpleJpaRepository`, making it a robust and reusable component for data access. By defining common repository methods such as `findById`, `save`, `getAll`, and `isEmpty`, the `BaseRepository` class simplifies CRUD operations and promotes code reuse.

The goal of the `BaseRepository` class is to increase reusability and maintain tidy, clean code, ensuring that developers do not need to create functions for simple logic repeatedly. It provides a standard way to handle entity management, especially in scenarios involving soft deletion, by encapsulating common operations within a single repository class. This approach fosters a more organized and efficient codebase.
### Interface
```js
public interface IBaseRepository<M> {
    Optional<M> findById(UUID id);
    <S extends M> S save(S entity);
    EntityManager getEntityManager();
    List<M> getAll();
    Boolean isEmpty();
}

```
### Base Class
```js

public class BaseRepository<M> extends SimpleJpaRepository<M, UUID> implements IBaseRepository<M> {
    private final EntityManager em;
    private final Class<M> entityClass;

    public BaseRepository(Class<M> domainClass, EntityManager entityManager) {
        super(domainClass, entityManager);
        this.em = entityManager;
        this.entityClass = domainClass;
    }


    @Override
    public EntityManager getEntityManager() {
        return this.em;
    }

    @Override
    public List<M> getAll() {
        CriteriaBuilder cb = this.getEntityManager().getCriteriaBuilder();
        CriteriaQuery<M> cq = cb.createQuery(entityClass);

        Root<M> usersRoot = cq.from(entityClass);
        List<Predicate> predicates = new ArrayList<>();

        Predicate notDeleted = cb.equal(usersRoot.get("isDeleted"), false);
        predicates.add(notDeleted);
       

        cq.where(predicates.toArray(new Predicate[0]));
        TypedQuery<M> query = this.getEntityManager().createQuery(cq);
        return query.getResultList();
    }


    @Override
    public Boolean isEmpty() {
        CriteriaBuilder cb = this.getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Long> cq = cb.createQuery(Long.class);

        Root<M> root = cq.from(entityClass);
        List<Predicate> predicates = new ArrayList<>();

        Predicate notDeleted = cb.equal(root.get("isDeleted"), false);
        predicates.add(notDeleted);

        cq.where(predicates.toArray(new Predicate[0]));
        cq.select(cb.count(root.get("id")));

        TypedQuery<Long> query = this.getEntityManager().createQuery(cq).setMaxResults(1);
        Long result = query.getSingleResult();

        return result != null ? result == 0 : false;
    }

}

```
## Basic How To Use

### Interface

The `IBankRepository` interface extends the `IBaseRepository` interface, adding specific methods for the `Bank` entity. This allows for custom query methods such as finding a bank by its code or saving multiple bank entities at once.

```js
public interface IBankRepository extends IBaseRepository<Bank> {
    Optional<Bank> findByBankCode(String bankCode);
    List<Bank> findAll();
    <S extends Bank> List<S> saveAll(Iterable<S> entities);
}
```

### Base Class

The `BankRepository` class extends the `BaseRepository` class and implements the `IBankRepository` interface. This setup leverages the common functionalities provided by `BaseRepository` while also allowing for specific implementations related to the `Bank` entity.

```js
@Repository
public class BankRepository extends BaseRepository<Bank> implements IBankRepository {

    public BankRepository(EntityManager entityManager) {
        super(Bank.class, entityManager);
    }

    // Additional custom methods can be implemented here

    ...
}
```

### Explanation

In the example above, we demonstrate how to use a base data repository to create and retrieve data for repository functions. First, you need to define the getter and setter methods using the Lombok library. Then, define the Model Class that will be used for the Data Class.

By extending `BaseRepository` and implementing the custom `IBankRepository` interface, you ensure a clean, reusable, and maintainable approach to data access within your application. This setup promotes code reuse and simplifies the management of entity-specific repository methods.