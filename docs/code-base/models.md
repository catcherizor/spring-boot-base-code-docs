---
sidebar_position: 1
authors:
  - name: Yaman
    title: Models
---
# Models
## Base Models
```js
@MappedSuperclass
@Getter
@Setter
public class BaseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id = UUID.randomUUID();

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "Asia/jakarta")
    public Date createdAt = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    @Version
    @Column(name = "updated_at")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "Asia/jakarta")
    public Date updatedAt = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "deleted_at", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "Asia/jakarta")
    public Date deleted_at;

    @Column(name = "is_deleted")
    public boolean isDeleted;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }
}

```

The system has a base model class because tables in the backend follow a standard for soft deletion and logging when data is created, deleted, and updated. By using this class, you don't need to define these columns again.
## Basic How To Use
```js
@Getter
@Setter
@Entity
@Builder
@Table(name = "banks", schema = "master")
@NoArgsConstructor
@AllArgsConstructor
public class Bank extends BaseModel {
    private String name;

    private String bankCode;
}

```

In the example above, we demonstrate how to use a base model and create a model for a table. First, you need to define the getter and setter methods using the Lombok library. Then, define the name of the table and, if required, the schema, especially if the system employs a multiple schemas strategy.Afterward, define other Lombok properties as needed.


## Extra
### Relationship Model
```js
@Getter
@Setter
@Entity
@Builder
@Table(name = "provinces", schema = "master")
@NoArgsConstructor
@AllArgsConstructor
public class Province extends BaseModel {
    private Integer code;
    private String name;
    private String postalCodes;
    private String latitude;
    private String longitude;
}

@Getter
@Setter
@Entity
@Builder
@Table(name = "cities", schema = "master")
@NoArgsConstructor
@AllArgsConstructor
public class City extends BaseModel {
    private Integer code;
    private String name;
    private String postalCodes;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "province_id")
    private Province province;
    private String latitude;
    private String longitude;
}

```
In the example above, the City entity uses the @ManyToOne annotation to define the relationship between City and Province. For best practices, always use the object reference to define relationships instead of using property column names such as private UUID province_id. This ensures a more object-oriented approach and maintains the integrity of the relationship within the entity model.