<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>간성치킨 - 최고의 프리미엄 치킨</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link rel="stylesheet" href="간성.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  </head>
  <body>
    <header>
      <nav>
        <div class="logo">🍗 간성치킨</div>
        <div class="menu-toggle">
          <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links">
          <li><a href="#ceo">대표 소개</a></li>

          <li><a href="#home">홈</a></li>
          <li><a href="#brand">브랜드 소개</a></li>
          <li><a href="#menu">메뉴</a></li>
          <li><a href="#locations">매장찾기</a></li>
          <li><a href="#franchise">창업문의</a></li>
          <li><a href="#order" class="order-btn">주문하기</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="ceo" class="ceo-section">
        <div class="container" data-aos="fade-up">
          <h2>간성치킨 대표님 소개</h2>
          <div class="ceo-content">
            <img
              src="제목을 입력해주세요_-001 (2).png"
              alt="간성 대표님"
              class="ceo-img"
            />
            <div class="ceo-text">
              <h3>간성이 대표님</h3>
              <p>
                치킨계의 유재석! 간성치킨을 만든 열정의 아이콘 간성이
                대표님입니다. 닭보다 빠른 배달, 미친 맛을 약속드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="home" class="hero">
        <div class="hero-content" data-aos="fade-up">
          <h1>맛있는 치킨의 새로운 기준</h1>
          <p>프리미엄 치킨의 자부심, 간성치킨</p>
          <div class="hero-buttons">
            <button onclick="location.href='#order'" class="primary-btn">
              주문하기
            </button>
            <button onclick="location.href='#menu'" class="secondary-btn">
              메뉴보기
            </button>
          </div>
        </div>
      </section>

      <section id="brand" class="brand-section">
        <div class="container">
          <h2 data-aos="fade-up">브랜드 스토리</h2>
          <div class="brand-content">
            <div class="brand-text" data-aos="fade-right">
              <h3>최고의 맛을 향한 열정</h3>
              <p>
                2025년 설립된 간성치킨은 프리미엄 치킨의 새로운 기준을
                제시합니다. 최고급 국내산 닭고기와 특제 비법 소스로 만든 우리의
                치킨은 단순한 음식이 아닌 특별한 경험을 선사합니다.
              </p>
              <div class="brand-features">
                <div class="feature">
                  <i class="fas fa-check-circle"></i>
                  <span>HACCP 인증 시설</span>
                </div>
                <div class="feature">
                  <i class="fas fa-check-circle"></i>
                  <span>100% 국내산 닭고기</span>
                </div>
                <div class="feature">
                  <i class="fas fa-check-circle"></i>
                  <span>특제 비법 소스</span>
                </div>
              </div>
            </div>
            <div class="brand-image" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
                alt="브랜드 이미지"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" class="menu-section">
        <div class="container">
          <h2 data-aos="fade-up">메뉴</h2>
          <div class="menu-grid" id="menuGrid"></div>
        </div>
      </section>

      <section id="locations" class="locations-section">
        <div class="container">
          <h2 data-aos="fade-up">매장찾기</h2>
          <div class="location-search">
            <input
              type="text"
              id="locationSearch"
              placeholder="지역명을 입력하세요"
            />
            <button onclick="searchLocations()">검색</button>
          </div>
          <div id="locationList" class="location-grid"></div>
        </div>
      </section>

      <section id="franchise" class="franchise-section">
        <div class="container">
          <h2 data-aos="fade-up">창업문의</h2>
          <div class="franchise-content">
            <div class="franchise-info" data-aos="fade-right">
              <h3>함께 성장하는 간성치킨</h3>
              <div class="franchise-steps">
                <div class="step">
                  <div class="step-number">01</div>
                  <div class="step-content">
                    <h4>상담신청</h4>
                    <p>기본 정보 상담</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">02</div>
                  <div class="step-content">
                    <h4>상권분석</h4>
                    <p>입지 및 상권 분석</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">03</div>
                  <div class="step-content">
                    <h4>계약체결</h4>
                    <p>가맹계약 진행</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">04</div>
                  <div class="step-content">
                    <h4>점포오픈</h4>
                    <p>교육 후 오픈</p>
                  </div>
                </div>
              </div>
            </div>
            <form
              id="franchiseForm"
              class="franchise-form"
              data-aos="fade-left"
            >
              <h3>창업 상담 신청</h3>
              <div class="form-group">
                <input type="text" id="name" placeholder="이름" required />
              </div>
              <div class="form-group">
                <input type="tel" id="phone" placeholder="연락처" required />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="location"
                  placeholder="희망지역"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  id="message"
                  placeholder="문의사항"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" class="primary-btn">상담 신청하기</button>
            </form>
          </div>
        </div>
      </section>
      <div
        id="customMapContainer"
        class="custom-map-container"
        style="display: none"
      >
        <h3>배달 현황</h3>
        <div id="deliveryStatus">배달 준비 중...</div>
        <div class="custom-map">
          <div class="road"></div>
          <div class="destination">🏠</div>
          <img
            src="제목을 입력해주세요_-001 (2).png"
            alt="배달 대표님"
            class="rider"
            id="riderIcon"
          />
        </div>
      </div>
      <section id="order" class="order-section">
        <div class="container">
          <h2 data-aos="fade-up">주문하기</h2>
          <div class="order-options">
            <div
              class="order-option"
              data-aos="fade-right"
              onclick="startOrder('delivery')"
            >
              <i class="fas fa-motorcycle"></i>
              <h3>배달 주문</h3>
              <p>편리한 배달 서비스</p>
            </div>
            <div
              class="order-option"
              data-aos="fade-left"
              onclick="startOrder('pickup')"
            >
              <i class="fas fa-shopping-bag"></i>
              <h3>포장 주문</h3>
              <p>가까운 매장에서 픽업</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>고객센터</h3>
          <p>전화: 1588-0000</p>
          <p>이메일: info@ganseong.com</p>
        </div>
        <div class="footer-section">
          <h3>영업시간</h3>
          <p>매일 11:00 - 23:00</p>
        </div>
        <div class="footer-section">
          <h3>소셜 미디어</h3>
          <div class="social-links">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 간성치킨. All rights reserved.</p>
      </div>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="간성.js"></script>
  </body>
</html>
