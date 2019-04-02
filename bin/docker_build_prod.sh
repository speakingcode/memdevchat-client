echo "Stopping existing memdev-chat-client-prod container (if any)..."
docker container stop memdev-chat-client-prod
echo "Removing memdev-chat-client-prod image (if any)..."
docker image rm memdev-chat-client-prod
echo "Building Dockerfile.dev image with tag 'memdev-chat-client-prod'..."
docker build -f Dockerfile.prod -t memdev-chat-client-prod .
