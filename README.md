# bibliothecam

## Run with Docker 
### Prerequisites
- Docker 17.05+.
- Docker Compose 1.17+

1Run project <br>
   `docker-compose -f local.yml up` <br>
    Access backend url: http://127.0.0.1:8000/ <br> frontend url http://localhost:3000/
3. Run interactive mode pdb <br>
   `docker-compose -f local.yml up -d && docker-compose -f local.yml stop backend && docker-compose -f local.yml run --rm --service-ports backend`
## Administrative commands
`docker-compose -f local.yml run --rm backend <<COMMAND>>`
### Exemples

#### create superuser
`docker-compose -f local.yml run --rm backend  python manage.py createsuperuser`
#### shell plus django
`docker-compose -f local.yml run --rm backend  python manage.py shell_plus`
#### Run black
`docker-compose -f local.yml run --rm backend black .`
#### Run flake8
`docker-compose -f local.yml run --rm backend flake8 .`

## Run tests
`docker-compose -f local.yml run --rm backend pytest`
