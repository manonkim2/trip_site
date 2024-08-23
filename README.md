# Trip Web

[Trip Web](https://trip-web-rho.vercel.app/)은 여행지의 호텔 추천 웹 애플리케이션으로, 사용자가 다양한 여행지를 탐색하고, 정보와 리뷰를 확인할 수 있습니다.  
(웹 성능 최적화를 스터디하기위한 간단한 프로젝트입니다.)

## 설치 및 실행 방법

1. 리포지토리를 클론합니다.

   ```bash
   git clone git@github.com:manonkim2/trip_site.git
   cd trip-web
   ```

2. 패키지 설치

   ```bash
   yarn install
   yarn build
   ```

3. 실행
   ```bash
   yarn start
   ```

## 기술 스택

- **프론트엔드**: React, TypeScript, Emotion, Recoil, React-Query, firebase
- **배포**: Vercel

## 기능

- 구글 로그인
- 다양한 여행지 리스트
- 여행지 hotel 대한 상세 정보 제공
- 찜하기 기능
- 사용자가 남긴 리뷰 확인
- 반응형 디자인으로 모바일 및 데스크탑에서 최적화된 UI 제공

## 성능 최적화

- `code splitting` : 초기에 구동될 필요없는 코드를 분리하여 lazy loading을 통해 초기 로딩속도 개선
- `대용량 데이터 최적화` : 가상화 library [react-virtuoso](https://virtuoso.dev/) 활용하여 대용량 리스트중 화면에 보이는 부분만 DOM트리를 생성
- `애니메이션 최적화` : css 속성 외의 복잡한 animation은 js로 구현하고 이를 최적화하기 위해 [requestAnimationFrame](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame) method를 사용하여 디스플레이 주사율에 맞게 호출 횟수를 최적화하고 백그라운드 동작 중지로 최적화
- `SEO` : [react-helmet-async](https://github.com/staylor/react-helmet-async) 라이브러리를 활용하여 검색엔진 최적화
- `이미지 최적화` : [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component) 라이브러리를 활용하여 화면에 보여지지 않은 이미지들의 로딩을 미루어 웹성능 최적화
