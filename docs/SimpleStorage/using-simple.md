# Using SimpleStorageSystem(S3)

## Bucket Command

### Bucet Create

```shell
aws s3 mb s3://버켓 네임

aws s3 mb s3://
```

### Bucket List Command

```shell
aws s3 ls
```

### Bucket Remove

```shell
aws s3 rb s3://버켓 네임
```

만일 S3 버켓 안에 내용물이 비어 있지 않을 경우 버킷 제거가 되지 않는다.
이럴 경우 `--force` 옵션을 주면, S3 버켓 내의 모든 파일을 강제로 삭제하고 그 다음 S3 버켓을 제거하게 된다.

```shell
aws s3 rb s3://버켓 네임 --force
```


## Bucket File command

### File list Search

```shell
aws s3 ls s3://버켓 네임
```

### File move

```shell
aws s3 mv test.tar s3://버켓 네임
```

## File remove

버켓명/키명을 명시하여 삭제할 수 있다.

```shell
aws s3 rm s3://버켓 네임/삭제일 파일
```

## File move local to s3

로컬 파일을 S3 버켓에 복사하는 것은 곧 S3에 업로드하는 것

```shell
# 버켓에 파일 업로드
aws s3 cp 테스트 파일 s3://버킷 네임

# 버켓에 파일명을 변경하고 업로드
aws s3 cp 테스트 파일 s3://버켓 네임/저장할 파일 이름

# 버켓의 folder안에 파일 업로드
aws s3 cp 테스트 파일 s3://버켓 네임/저장할 폴더/
 
```

## File move s3 to local

```shell
aws s3 cp s3://버켓 네임/객체명 <저장할 경로>

# 버켓의 파일을 로컬에 현재 디렉토리에 다운
aws s3 cp s3://버켓 네임/파일 ./

# 버켓의 파일을 로컬에 다른 이름으로 변경하고 다운
aws s3 cp s3://버켓 네임/다운로드 받을 파일 ./변경하고 싶은 이름
```

## File move s3 to s3

```shell
# 버켓의 파일을 다른 폴더에 복사
aws s3 cp s3://버켓 네임/이동할 파일 s3://버켓 네임/옮겨질 폴더이름/
```

## Directory Sync

디렉토리에 있는 전체 파일을 옮길 때

```shell
aws s3 sync <동기화 주체> <동기화 대상>

# 버켓의 내용물을 로컬 디렉토리와 동기화 -> 로컬로 다운로드
aws s3 sync s3://버켓 네임/ ./

# 로컬 디렉토리의 내용물을 버킷에 동기화 -> s3에 업로드
aws s3 sync ./ s3://버켓 네임
```

> 다만 동기화는 파일을 업로드/다운로드 할때 동작되고, 파일 삭제 동작은 하지않는다. (빈 버킷과 동기화되도 내 로컬 파일들이 삭제되지 않는다)

