

cd api && docker build -f Dockerfile-dependency-cache -t dependency-cache .; cd - || exit

docker-compose --env-file .env.prod -f docker-compose.yml -f docker-compose.prod.yml up --no-deps --build -d
