# Docker Compose Command
Docker Compose는 여러 개의 컨테이너(container)로 구성된 애플리케이션을 관리하기 위한 간단한 오케스트레이션도구(Orchestration) 입니다.

## -f 옵션

Docker Compose는 기본적으로 커맨드가 실행하는 디렉토리에 있는 `docker-compose.yml` 또는 `docker-compose.yaml`를 설정 파일로 사용한다.

다른 이름이나 경로의 파일을 Docker Compose 설정 파일로 사용하고 싶다면 -f 옵션으로 명시를 해준다.

```shell
docker-compose f docker-compose-local.yml up
```

`-f` 옵션은 여러 개의 설정 파일을 사용할 때도 사용할 수 있다. 이 때는 나중에 나오는 설정이 앞에 나오는 설정보다 우선하게 된다.

```shell
docker-compose -f docker-compose.yml -f docker-compose-local.yml up
```

## up 옵션

`docker-compose up` 커맨드는 아마도 Docker Composedptj rkwkd wkwn tkdydehlsms zjaosemdlek.

Docker Compose에 정의되어 있는 모든 서비스 컨테이너를 한번에 생성하고 실행하기 위해서 사용한다.

보통 `-d` 옵션을 사용하여 백그라운드에서 컨테이너를 띄우는 경우가 많다.

```shell
docker-compose up -d
```

`-d` 옵션을 사용하지 않으면 현재 터미널이 컨테이너의 로그가 출력되고 `Ctrl + C`를 눌러서 탈출하는 순간 컨테이너가 모두 정지되기 때문이다.

## down
`docker-compose down`은 `docker-compose up`와 반대의 동작을 한다.

Docker Compose에 정의되어 있는 모든 서비스 컨테이너를 한 번에 정지시키고 삭제한다.

```shell
docker-compose down
```

## start

`docker-compose start`는 내려가 있는 특정 서비스 컨ㅌ에ㅣ너를 올리기 위해서 사용한다.

대부분의 경우에는 `docker-compose up` 를 사용해도 내려간 서비스를 알아서 올려주므로 무방하다.

```shell
docker-compose start web
```

## stop
`docker-compose stop`은 `docker-compose`와 반대를 의미한다.

돌아가고 있는 특정 서비스 컨테이너를 정지시키기 위해서 사용한다.

```shell
docker-compose stop web
```

## ps

`docker-compose ps`는 Docker compose에 정의되어 있는 모든 서비스 컨테이너 목록을 조회할 때 사용한다.

```shell
docker-compose ps
```

## logs
`docker-compose logs`는 서비스 컨테이너의 로그를 확인하고 싶을 때 사용하며, 보통 -f 옵션을 붙여서 실시간 로그를 확인한다.

```shell
docker0-compose logs =f web
```

## exec

`docker-compose exec`는 실행 중인 서비스 컨테이너를 대상으로 어떤 명령어를 날릴 때 사용한다.

```shell
docker-compose exec db psql postgres postgres
```

## run

`docker-compose run`은 서비스 컨테이너의 특정 멸영어를 일회성으로 실행할 때 사용한다.

```shell
docker-compose run web env
```

## config

`docker-compose config`는 Docker Compose 설정을 확인할 때 사용한다.

`-f` 옵션으로 여러 개의 설정 파일을 사용할 때, 최종적으로 어떻게 설정이 적용되는지 확인해볼 때 유용하다.

```shell
docker-copmose config

version: 'x.x'
servoces:
  db:
  web:

```
