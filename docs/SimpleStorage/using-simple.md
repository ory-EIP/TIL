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

### File remove

버켓명/키명을 명시하여 삭제할 수 있다.

```shell
aws s3 rm s3://버켓 네임/삭제일 파일
```

### File move local to s3

로컬 파일을 S3 버켓에 복사하는 것은 곧 S3에 업로드하는 것

```shell
# 버켓에 파일 업로드
aws s3 cp 테스트 파일 s3://버킷 네임

# 버켓에 파일명을 변경하고 업로드
aws s3 cp 테스트 파일 s3://버켓 네임/저장할 파일 이름

# 버켓의 folder안에 파일 업로드
aws s3 cp 테스트 파일 s3://버켓 네임/저장할 폴더/
 
```

### File move s3 to local

```shell
aws s3 cp s3://버켓 네임/객체명 <저장할 경로>

# 버켓의 파일을 로컬에 현재 디렉토리에 다운
aws s3 cp s3://버켓 네임/파일 ./

# 버켓의 파일을 로컬에 다른 이름으로 변경하고 다운
aws s3 cp s3://버켓 네임/다운로드 받을 파일 ./변경하고 싶은 이름
```

### File move s3 to s3

```shell
# 버켓의 파일을 다른 폴더에 복사
aws s3 cp s3://버켓 네임/이동할 파일 s3://버켓 네임/옮겨질 폴더이름/
```

### Directory Sync

디렉토리에 있는 전체 파일을 옮길 때

```shell
aws s3 sync <동기화 주체> <동기화 대상>

# 버켓의 내용물을 로컬 디렉토리와 동기화 -> 로컬로 다운로드
aws s3 sync s3://버켓 네임/ ./

# 로컬 디렉토리의 내용물을 버킷에 동기화 -> s3에 업로드
aws s3 sync ./ s3://버켓 네임
```

> 다만 동기화는 파일을 업로드/다운로드 할때 동작되고, 파일 삭제 동작은 하지않는다. (빈 버킷과 동기화되도 내 로컬 파일들이 삭제되지 않는다)

## S3 커맨드 옵션

자주 사용하는 cli 명령어 옵션은 --force 강제, --exclude 제외, --include 포함 등이 존재

### 하위 디렉토리 포함(--recursive)

--recursive 옵션과 함께 사용하면 커맨드 적용 범위가 하위 디렉토리까지 적용된다.

예를 들어
aws s3 rm 커맨드를 --recursive 옵션과 함께 사용하면 하위 디렉토리까지 적용되면서 모든 파일과 디렉토리가 삭제된다.
반대로 aws s3 cp 커맨드를 --recursive 옵션과 함께 사용하면 Bucket에 있는 모든 파일이 복사된다.

```shell
aws s3 cp . s3://버켓 네임 --recursive

aws s3 rm . s3://버켓 네임 --recursive
```

> aws s3 sync 커맨드는 기본적으로 하위 디렉토리까지 모두 동기화해주기 때문에 별도로 --recursive 옵션이 적용이 안된다.

### 파일 제외 (--exclude)

--exclude 옵션은 명령에서 객체만 제외하도록 규칙을 설정하고 옵션은 지정된 순서대로 적용된다.

```shell
# 모든 .csv 파일을 제외하고 나머지 파일을 복사
aws s3 cp . s3://버켓 네임/path --exlude "*.txt"

# test1.txt, test2.txt 등을 제외하고 copy
aws s3 cp . s3://버켓 네임/path --exlude "*.txt" --include "test*.txt" 
```

```shell
# 디렉토리 내 파일을 삭제하되 .csv 로 끝나는 파일은 남겨 두기 위해, --exclude 옵션으로 *.csv 패턴을 지정한다.
aws s3 rm --recursive --exclude "*.csv" s3://버켓 네임/폴더 이름/
```

> Information
> 
> **S3 와일드카드 패턴**
> 와일드 카드(wildcard character)는 컴퓨터에서 특정 명령어로 명령을 내릴 때, 여러 파일을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킨다.
> 주로 특정한 패턴이 있는 문자열 혹은 파일을 찾거나, 긴 이름을 생략할 때 쓰인다.
> 
> 기본적으로 aws cli는 와일드 카드 패턴을 지원하지 않는다.
> 예를 들어, `aws s3 rm test*` 실행하면 test1, test2, test3 파일이 지워지지 않는게 아니라 test* 라는 파일이 지워지게 된다.
> 
> 다만 --include 와 --exclude 옵션과 함께 사용하면 와일드 카드 패턴을 지원한다.
> --exclude 옵션에 할당한 문자열을 보면, "*.csv" 와 같이 와일드 카드 문자를 사용한 예이다.

### 파일 포함(--include)

--include 옵션은 명령에 지정된 객체만 포함하도록 규칙을 설정하며 옵션을 지정된 순서대로 적용된다.

```shell
# 모든 .csv 형식의 파일을 포함하여 복사
aws s3 cp . s3://버켓 네임/폴더 이름 --include "*.csv"

# 모든 .csv 형식의 파일을 포함, 그러나 test(특정이름)으로 시작하는 파일명은 제외, 하지만 test1.csv만은 제외하지 않고 포함해서 복사
aws s3 cp . s3://버켓 네임/폴더 이름 --include "*.csv" --exclude "test*.csv" --include "test1.csv"
```

```shell
# .log 파일만 제외한 모든 파일과 하위 디렉토리 파일이 로컬에 복사
aws s3 cp s3://버켓 네임/ ./ --recursive --exclude "*.log" --include "*"

# 특정 날짜의 nginx 로그를 다운로드
aws s3 cp s3://버켓 네임/nginx/ . --recursive --exclude "*" --include "access*2022-11-30*"
```

```shell
# 'image-숫자' 로 시작되는 복수 파일만 업로드
aws s3 cp /Images s3://버켓 네임/폴더 이름/ --recursive --exclude "*" --include "image-*"
```

### 커맨드 테스트(--dryrun)

명령어 조합이 애매하여, 수행 결과 말고 동작만 확인 하고 싶을 때, --dryrun 옵션을 이용해 동작 수행만 실행할 수 있다.

실수로 파일을 삭제하는 것을 방지하기 위한 테스트 방법이다.

```shell
# 결과 출력 시, dryrun 임을 표시하여 실제로 수행되지 않았음을 알려준다.
aws s3 rm s3://버켓 네임/폴더 이름/ --dryrun

예시
(dryrun) delete: s3://버켓 네임/폴더 이름/
```

## S3 권한 커맨드

### 파일에 권한 주기(--acl)

S3는 ACL이라고 하는 미리 정의된 권한 부여 세트를 지원한다.

이는 객체에 권한을 설정할 수 있게 도와준다.

```shell
aws s3 sync [이전 s3버켓 주소][이전할 s3 버켓 주소] --acl public-read
```

| ACL 옵션            | 설명                     |
|-------------------|------------------------|
| private           | 아무도 액세스 할 수 없음(default |
| public-read       | READ 액세스               |
| public-read-write | READ, WRITE 액세스        |

```shell
aws s3 cp test.copy s3://버켓 네임 --acl public-read
```
위와 같이 명령어를 사용할 경우 이전 주소에서 이후 주소로 복사를 하게되고 public-read 권한을 주게 된다.

객체 URL로 접속하면 권한 경고 없이 파일을 바로 확인할 수 있다.

### 파일에 권한 주기(--grants)

객체에 대한 권한을 부여한다.

```shell
--grants Permission=Generatee_Type=Grantee_ID
```

- Permission: 권한 지정(read, readacl, writeacl, full)
- Grantee_Type: 피부여자를 식별하는 방법을 지정(uri, emailaddress, id)
- Grantee_ID: Grantee_Type에 따라 피부여자를 지정 (uri, emailaddress, id)

```shell
# 모든 사람이 읽을 수 있게 권한을 부여하고 업로드
aws s3 cp filename s3://버켓 네임/폴더 이름/파일 이름 --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
```

## S3 커맨드 응용

### s3 특정 파일 다운받기
```shell
# 버킷 목록을 가져와서 날짜별로 정렬 후 awk 명령어를 이용하여 첫번째 필드($1)이 yyyy-mm-dd 이상 일경우 그리고 네 번째 필드($4)가 공백이 아닌 경우 $4만 출력( 파일 명 출력)

for f in $(aws s3 ls s3://bucket-name/ | sort | awk '$1 > "2021-01-20" && $4 > "" {print $4}'); do
    aws s3 cp s3://bucat-name/"$f" ./ # 그리고 그 파일명으로 현재 디렉토리에 다운
done;
```

## S3 advaned 커맨드

### aws s3 vs aws s3api

| aws s3                             | aws s3api                         |
|------------------------------------|-----------------------------------|
| 커맨드를 통해 Aws s3를 파일 시스템처럼 접근할 수 있다. | 커맨드를 통해서 Restful API 처럼 버킷에 접근 가능 |

```shell
# aws s3 명령어
aws s3 ls s3://버켓 네임/폴더 이름/
```

```shell
# aws s3api 명령어
aws s3api list-objects-v2 --bucket 버켓 네임 -prefix 폴더 이름
```

### s3api 커맨드

```shell
# 버켓 생성하기
aws s3api create-bucket \
--bucket 
````

