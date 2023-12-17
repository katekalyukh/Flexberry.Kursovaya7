docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya7-java/app ../../..
