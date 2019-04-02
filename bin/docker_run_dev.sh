#stop and remove client container if running
docker container stop memdevchat-client-dev
docker container rm memdevchat-client-dev

#run the container with terminal, name it, mount src dir, bind ports
docker run -t -i --name memdevchat-client-dev -v `pwd`/src:/memdevchat-client-dev/src -p 8080:8080 memdevchat-client-dev npm start
