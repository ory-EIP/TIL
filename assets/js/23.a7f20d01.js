(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{300:function(v,_,e){"use strict";e.r(_);var r=e(13),t=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"using-docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[v._v("#")]),v._v(" Using Docker")]),v._v(" "),_("h2",{attrs:{id:"docker-container"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-container"}},[v._v("#")]),v._v(" docker container")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("CONTAINER ID\n"),_("ul",[_("li",[v._v("컨테이터에게 자동으로 할당되는 고유한 ID")]),v._v(" "),_("li",[v._v("출력은 고유 ID의 12자리만 나오지만, 전체 정보를 확인하기 위해서 "),_("code",[v._v("docker inspect")]),v._v("를 사용하면 전체 ID를 확인할 수 있다.")])])]),v._v(" "),_("li",[v._v("IMAGE\n"),_("ul",[_("li",[v._v("컨테이너를 생성할 때 사용된 이미지 이름")]),v._v(" "),_("li",[v._v("[이미지 이름]:[이미지 버전] 형식으로 출력됨")])])]),v._v(" "),_("li",[v._v("COMMAND\n"),_("ul",[_("li",[v._v("컨테이너가 시작될 때 실행되는 명령어")]),v._v(" "),_("li",[v._v("대부분 이미지에 미리 내장돼있어 별도로 설정할 필요는 없음")]),v._v(" "),_("li",[v._v("이미지에 내장된 커맨드는 docker run이나 create 명령어의 맨 끝에 입력해서 컨테이너를 생성할 때 덮어 쓸 수 있음")])])]),v._v(" "),_("li",[v._v("CREATED\n"),_("ul",[_("li",[v._v("컨테이너가 실행되고 난 뒤 흐른 시간을 나타냄")])])]),v._v(" "),_("li",[v._v("STATUS\n"),_("ul",[_("li",[v._v("컨테이너의 상태를 나태냄")]),v._v(" "),_("li",[v._v('실행중이면, "Up", 종료된 상태면 "Exited", 일시 중지된 상태면 "Pause"등을 나타냄')])])]),v._v(" "),_("li",[v._v("PORTS\n"),_("ul",[_("li",[v._v("컨테이너가 개뱅한 포트와 호스트에 연결된 포트를 나열함")]),v._v(" "),_("li",[v._v("컨테이너를 생성할 때 외부에 노출하도록 설정하지 않으면 ps에서 나타나지 않음")])])]),v._v(" "),_("li",[v._v("NAMES\n"),_("ul",[_("li",[v._v("컨테이너의 고유한 이름")]),v._v(" "),_("li",[v._v("--name 옵션으로 이름을 설정하지 않으면 도커 엔진이 임의로 형용사와 명사를 무작위로 조합해 이름을 설정함")]),v._v(" "),_("li",[v._v("컨테이너의 이름은 중복될 수는 없지만 docker rename 명령어로 이름을 변경할 수 있음")])])])])]),v._v(" "),_("h2",{attrs:{id:"docker-container를-외부에-노출"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-container를-외부에-노출"}},[v._v("#")]),v._v(" docker container를 외부에 노출")]),v._v(" "),_("p",[v._v("컨테이너는 vm과 마찬가지로 가상 IP주소를 부여받는데, 기본적으로 도커 컨테이너에 172.17.0.x의 IP를 순차적으로 할당한다.")]),v._v(" "),_("p",[v._v("컨테이너를 생성할 때 다른 설정을 하지 않았으면 외부에서 컨테이너에 접근할 수 없으며, 도커가 설치된 호스트에서만 접근할 수 있다.(예외로 Docker Desktop for Mac에서는 호스트에서 컨테이너 IP로의 접근이 불가능하다.)\n외부에 컨테이너의 애플리케이션을 노출하기 위해서는 "),_("code",[v._v("eth0")]),v._v("의 IP와 포트를 호스트의 IP와 포트에 "),_("strong",[v._v("바인")]),v._v("딩해야 한다.")]),v._v(" "),_("p",[v._v("포트 바인딩 하는 방법은 컨테이너를 실행할 때 "),_("code",[v._v("-p")]),v._v(" 옵션으로 IP와 포트를 바인딩 해 연결할 수 있게 설정한다.")]),v._v(" "),_("p",[v._v("docker run -i -t -p [호스트의 포트]:[컨테이너의 포트] [이미지 이름]:[이미지 버전]\n호스트의 7777번 포트를 컨테이너의 80번 포트와 연결하려면 -p [port]:80과 같이 입력한다.\n특정 IP를 사용하려면 -p 192.xxx.x.xxx:[port]:80과 같이 바인딩할 IP와 포트를 명시한다.")]),v._v(" "),_("p",[v._v("docker run -i -t -p 3306:3306 -p 192.xxx.x.xxx:[port]:80 ubuntu:14.04\n위와 같이 -p 옵션은 여러번 사용이 가능하다.")]),v._v(" "),_("blockquote",[_("p",[v._v("-p 80과 같이 입력하면 컨테이너의 80번 포트를 쓸 수 있는 호스트의 포트 중 하나와 연결한다.\n그러나 이와 같이 입력하면 컨테이너를 생성하는 시점에서 호스트의 어느 포트와 연결됐는지 알 수 없으므로 docker ps 명령어를 통해 포트 항목을 확인해야 한다.")])])])}),[],!1,null,null,null);_.default=t.exports}}]);