# Sample front and backend project for study.
## Angular course manager project.
  In this project there are some basic features of Angular. 
  You can try it out and see how it works.
    
   #### Links to some features:    
 - [Angular CLI](https://cli.angular.io/): Angular CLI is a command line interface for Angular.
 - [Angular Router](https://angular.io/guide/router): Angular Router is a routing framework for Angular.
 - [Angular Forms](https://angular.io/guide/forms): Angular Forms is a framework for building forms.
 - [Angular HTTP](https://angular.io/guide/http): Angular HTTP is a framework for building HTTP services.

   ### Angular CLI
   Angular CLI is a command line interface for Angular.
   It is used to create a new project and to build the project.

   ### Angular Router
   Angular Router is a routing framework for Angular.
 - It is used to create a routing system for the application.
 - It is used to define the routes of the application.
 - It is used to navigate between the routes.
 - It is used to load the content of the routes.

   ### Angular Forms
   Angular Forms is a framework for building forms.
 - It is used to create forms.
 - It is used to bind the form data to the model.
 - It is used to validate the form data.
 - It is used to submit the form data.

   ### Angular HTTP
   Angular HTTP is a framework for building HTTP services.
 - It is used to send HTTP requests.
 - It is used to receive HTTP responses.

   ### Angular Material
   Angular Material is a framework for building user interfaces.
            
   ## Spring Framework backend
   ### Spring boot and Spring MVC
   - Spring boot is a Java-based framework for building web applications.

   - There are some endpoints for basic CRUD operations:
     - `/v1/courses: GET, POST, PATCH`
     - `/v1/courses/{id}: GET, DELETE`
     - `/v1/course-image/{id}: PATCH `

   ### Lombok
   - Lombok is a Java library for generating clean, idiomatic Java code.
   - It is used to generate getters, setters, constructors, toString, hashCode, equals, and other code with a single line of code.
   - The annotations are @Data, @Getter, @Setter, @ToString, @EqualsAndHashCode, @NoArgsConstructor, @AllArgsConstructor, @Builder, and @RequiredArgsConstructor.

  ### Spring Data JPA
  - Spring Data JPA is a Java framework for managing data in a database.
 
  ### There is an embedded H2 database to store the data.
  #### Schema :
```sql 
      create table COURSE(
      ID int not null AUTO_INCREMENT,
      CODE varchar(8) not null,
      DESCRIPTION varchar(150),
      DURATION int not null,
      IMAGE BLOB,
      NAME varchar(30) not null,
      PRICE float not null,
      RATING float,
      RELEASE timestamp,
      PRIMARY KEY ( ID )
      ); 
```

### Next steps:
- [ ] Add swagger documentation.
- [ ] Add a login page.
- [ ] Add Spring Security.
- [ ] Add CRUD operations for users.
- [ ] Add a registration page.
- [ ] Add a user management page.