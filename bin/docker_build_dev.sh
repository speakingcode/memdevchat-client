echo "Stopping existing memdevchat-client-dev container (if any)..."
docker container stop memdevchat-client-dev
echo "Removing memdevchat-client-dev image (if any)..."
docker image rm memdevchat-client-dev
echo "Building Dockerfile.dev image with tag 'memdevchat-client-dev'..."
docker build -f Dockerfile.dev -t memdevchat-client-dev .
