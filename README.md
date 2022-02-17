# 제품판매 웹앱 반응형 페이지 만들기 완료 (밀키트 판매 사이트 (밀수업자들) 페이지)

<br/>
<br/>

## Boiler Plate 기반으로 MongoDB를 베이스 사용자 로그인, 제품등록 및 삭제, 장바구니, Paypal 이용 결제 및 결제정보 저장 기능 구현 완료

<br/><br/>

> ## Verison Update Date - 220215
>
> > ### 장바구니 페이지
> >
> > > - 총금액 FontSize 변경장바구니 4개이상 제품 등록시 Footer UI 와 총금액 및 Paypal결제 버튼 겹침 버그현상 Paypal 결제 버튼 및 총금액 위치 변경 (float -> text-align)으로 변경장바구니 제거 버튼 클릭시 alert창 생성

> > ### 결제 정보 페이지
> >
> > > - 테이블에 결제된 상품이름 테이블 추가 생성

> > ### 상품 등록 페이지
> >
> > > - 등록된 사진 삭제시 alert 안내문구 생성제품 태그 select 박스 크기 변경
<br/><br/>

> ## Verison Update Date - 220217
>
> > ### 전체페이지 CODE REFACTORING
> >
> > > - 페이지 이동 기능이 있는 a 태그 전부 => Link 태그로 변경
> > > - 각 파일마다 import 기능별로 구분

<br/><br/><br/>

### Tool & Stack

- Boiler Plate
- MongoDB
- Antd
- React Dropzone
- Multer
- Axios
- React-image-gallery
- Redux
- React-paypal-express-checkout
- Async library

<br/><br/><br/>

## 1. index 메인페이지 구성 및 기능

- 슬라이더 기능으로 제품이미지 및 페이지상단에 광고 구현
- 초기화면 제품나열 갯수는 8개, 하단의 더보기 버튼을 누르면 나머지 제품들이 나오고 8개이상 제품이 없다면 더보기버튼 사라지게 구성
- 제품태그 체크박스기능으로 해당태그 제품 나열
- 가격 Radio박스 기능으로 해당 가격대의 제품들 나열
- 검색어 Input 기능으로 해당검색어 제품들 나열 ![1 메인메뉴기능](https://user-images.githubusercontent.com/88263576/153749781-d41904f3-91b6-4c80-85e2-5b3fee3455fc.gif)

<br/><br/>

## 2. 로그인 페이지 및 회원가입

- 로그인 화면에서 email과 비밀번호를 입력하지않으면 경고메시지 노출
- 회원가입 화면에서 각 항목들이 하나라도 입력되지않으면 경고메시지 노출
- 각 항목마다 최소입력 및 양식에 맞게 작성해야만 회원가입 완료가능
- 회원가입 및 로그인시 MongoDB로 사용자 데이터 전송 ![2 로그인및회원가입](https://user-images.githubusercontent.com/88263576/153749789-bad708e2-455a-40e1-b5d8-cdfa3585bb5b.gif) <br/><br/> <br/><br/>

## 3. 장바구니 담기 및 결제 화면 기능 및 구성

- 로그인 된 사용자만 볼수있는 결제정보, 상품등록하기 상단메뉴 생성
- 메인화면에서 제품이미지를 눌러서 상세페이지로 이동후 장바구니담기 버튼구성
- 장바구니담기 버튼 클릭시 오른쪽 상단에 위치한 카트아이콘에 장바구니 갯수만큼 변경 이벤트
- 장바구니페이지에서 장바구니 제거 버튼 클릭시 해당메뉴 삭제
- 총액을 계산하여 Paypal 결제 API에 호출 및 결제기능 구현
- 결제완료 되면 장바구니에 있던 제품 리스트 제거 및 결제완료 화면 이벤트
- MongoDB에 결제정보 history 및 결제완료한 로그인된 사용자 정보 전송
- 결제정보 페이지에 결제내역 화면 구현 ![3 장바구니담기및결제](https://user-images.githubusercontent.com/88263576/153749794-9b49535f-1990-4258-9065-b5221a3af228.gif)

<br/><br/>

## 4. 제품등록 및 로그아웃 화면 구성 및 구현

- +아이콘을 클릭시 제품이미지를 넣을수있는 파일업로드화면 구현
- 제품이미지파일은 갯수제한없이 업로드 가능하고 이미지들은 Slider로 화면구현
- 이미지파일들 중 마지막 파일은 제품상세페이지에서 제품상세이미지로 구성 (업로드한 이미지파일들을 배열에 넣고 배열의 마지막 값을 찾아서 상세이미지 구성에 넣기)
- 업로드한 이미지파일의 미리보기는 + 아이콘의 오른쪽에 구성
- 업로드한 이미지는 해당 이미지를 클릭시 삭제되는 기능 구현
- 각 항목들을 채워야 상품등록을 완료저장 가능
- 로그아웃 버튼 클릭시 결제정보 및 상품등록하기 메뉴 안보이게 구성 ![4 제품등록및로그아웃](https://user-images.githubusercontent.com/88263576/153749798-76c883de-6048-40e2-938e-93b3fe73fe7b.gif)

<br/><br/>

## 5. MongoDB 데이터베이스 구성

- MongoDB에 payments(결제정보), products(제품정보), users(사용자정보) 테이블 구성
- payment는 결제한 user정보, 결제된 data정보, 결제된 product정보, 결제시간 정보로 구성
- products는 상품에대한 정보로써 상품id, 가격, 이미지, 결제완료된 sold횟수, 제품태그, 등록한user, 상품이름, 상품설명, 등록시간 으로 구성
- users는 id, email, password, name, image, token(로그인기억하기), cart(카트에 담아놓은 제품이 있는지 기억), history(결제한 내용 기억) 으로 구성  
  ![5 몽고DB데이터베이스](https://user-images.githubusercontent.com/88263576/153749799-0131aca4-867a-477a-abc5-d785d34e1beb.gif)
