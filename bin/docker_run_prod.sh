#stop and remove client container if running
docker container stop memdev-chat-client-prod
docker container rm memdev-chat-client-prod

#run the container with terminal, name it, mount src dir, bind ports
docker run -t -i --name memdev-chat-client-prod -v `pwd`/src:/memdev-chat-client-prod/src -p 80:80 memdev-chat-client-prod
