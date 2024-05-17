---
sidebar_position: 2
authors:
  - name: Yaman
    title: Data
---
# Data
## Base Data
The BaseData class is an abstract class designed to provide a base for mapping model objects to data transfer objects (DTOs). By defining the mapToData method as an abstract method, any subclass must provide an implementation for mapping a model object of type M to a data object of type D.
```js
public abstract class BaseData<M, D> {
    public abstract D mapToData(M model);
}
```
The BaseData class simplifies the process of converting entities (models) to data transfer objects (DTOs) by providing a common interface. This is especially useful in service classes where such conversions are frequently needed. You can see the sample of uses funcntion of mapToData in BaseService Class

## Basic How To Use
```js

@Data
@EqualsAndHashCode(callSuper=false)
public class CityData extends BaseData<City, CityData> {
    private UUID id;
    private Integer code;
    private String name;
    private String postalCodes;
    private String latitude;
    private String longitude;
    private ProvinceData province;

    @Override
    public CityData mapToData(City model) {
        CityData data = new CityData();
        data.setId(model.getId());
        data.setName(model.getName());
        data.setCode(model.getCode());
        data.setPostalCodes(model.getPostalCodes());
        data.setLatitude(model.getLatitude());
        data.setLongitude(model.getLongitude());
        data.setProvince(new ProvinceData().mapToData(model.getProvince()));

        return data;
    }
}

```

In the example above, we demonstrate how to use a base data and create a data for a result data in repository function. First, you need to define the getter and setter methods using the Lombok library. Then, define the Model Class that uses for the Data Class.
