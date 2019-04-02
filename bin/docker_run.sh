#stop and remove client container if running
docker container stop memdevchat-client
docker container rm memdevchat-client

#run the container with terminal, name it, mount src dir, bind ports
docker run -t -i --name memdevchat-client -v `pwd`/src:/memdevchat-client/src -p 8090:8090 memdevchat-client npm start
