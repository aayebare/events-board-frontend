# Eventsboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SETTING UP WITH DOCKER

Before booting up the environment (`docker build -t <dockerimagename> .`) ensure that you have [docker](https://docs.docker.com/) **installed** and **running** on your machine.
If you are using mac this [install](https://docs.docker.com/docker-for-mac/install/) should get you started.


To start the build, run:

```
docker build -t <imagename> .
```

After the build is complete, you can view the available images with:

```
docker images
```
Spin up a container using the command 
```
docker run -p <PORT>T:4200 --name <containername> <imagename>
```
Then you can access the application; served at `http://localhost:<PORT>` by the node server.
To stop the application, you can pull down the containers with:

```
docker stop <containername>
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
