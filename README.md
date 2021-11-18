# Rails practice chapter

This repository is an example of an application run with docker with a server in rails who write in a postgres db and a client in react.js

## Installation
#### Run all services
```sh
cd client && yarn install
docker-compose up
```

#### Run only one service
```sh
make compose svc=<client|server>
```

#### Init db
```sh
docker-compose run server rails db:create db:migrate
curl -X POST 'http://localhost:4000/api/orders/populate'
```
after this command you will be able to go to `http://localhost:3000/` then enjoy

#### Docker command
this command will destroy all concerne of docker element in your machine locally (command run: `docker system prune`)
```sh
make docker-prune
```

this command will remove all containers (command run: `docker rm -f $(docker ps -qa)`)
```sh
make remove-container
```

this command will remove all docker images (command run: `docker rmi $(docker images -q)`)
```sh
make remove-image
```

this command will remove all docker volumes (command run: `docker volume prune`)
```sh
make prune-volume
```

this command will stop all your containers (command run: `docker stop $(docker ps -qa)`)
```sh
make stop-container
```

## Error Pids
```sh
docker-compose run server /bin/bash
rm tmp/pids/server.pid
```
