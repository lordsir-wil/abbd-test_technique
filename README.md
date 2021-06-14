# abbd-test_technique

## Prérequis:
docker doit être installer sur votre poste.

## Construire l'image:
vous pouvez construire l’image Docker avec la commande suivante:

>docker build -t abbd-test/dockerize-vuejs-app .

## Lancement du docker:

>docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 abbd-test/dockerize-vuejs-app

Vous devriez avoir accèder à l'app sur <a name="localhost">localhost:8080</a>.