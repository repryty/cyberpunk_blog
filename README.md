# Backend
## 기능
- [ ] 관리자 로그인 / 로그아웃
- [ ] 글 쓰기
- [ ] 글 조회
- [ ] 글 목록 조회
- [ ] 글 수정
- [ ] 글 삭제
## 데이터
- 글 테이블
	- ID (Primary Key, 정수)
	- title (제목, 문자열)
	- content (내용, 긴 텍스트)
	- created_at (작성일, 날짜/시간)
	- updated_at (수정일, 날짜/시간)
	- attachment_path (첨부파일 위치, 문자열, 선택사항)
## API
- 인증 API
	- POST /api/auth/login - 관리자 로그인
	- POST /api/auth/logout - 관리자 로그아웃
- 글 API
	- GET /api/posts - 전체 게시글 목록
	- POST /api/posts - 게시글 업로드
	- GET /api/posts/{post_id} : 특정 게시글 상세 조회
	- PUT /api/posts/{post_id} : 특정 게시글 수정
	- DELETE /api/posts/{post_id} : 특정 게시글 삭제
## 기타
- 관리자 정보는 .env에 저장