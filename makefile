cmd=up

default: compose

docker-prune:
	docker system prune

compose:
	docker-compose ${cmd} ${svc}

remove-container:
	docker rm -f $$(docker ps -qa)

remove-image:
	docker rmi $$(docker images -q)

prune-volume:
	docker volume prune

stop-container:
	docker stop $$(docker ps -qa)