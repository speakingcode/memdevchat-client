echo "Stopping existing memdevchat-client container (if any)..."
docker container stop memdevchat-client
echo "Removing memdevchat-client image (if any)..."
docker image rm memdevchat-client
echo "Building Dockerfile.dev image with tag 'memdevchat-client'..."
docker build -f Dockerfile -t memdevchat-client .
