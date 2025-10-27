// 創建導航欄HTML內容
const createNavBar = () => {
  const navHTML = `
    <div class="container nav">
        <a href="index.html" class="brand">
          <img src="img/griffithtop.jpeg" alt="Julia Yao" class="nav-avatar"> 
          <span class="brand-text">Julia Yao</span>
        </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="nav__links" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="index.html#about">Favorite</a>
        <a href="projects.html">Experience</a>
      </nav>
    </div>
  `;

  // 找到header元素並插入導航欄
  const header = document.querySelector('.header');
  if (header) {
    header.innerHTML = navHTML;
  }

  // 添加漢堡菜單點擊事件
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 點擊導航連結時關閉菜單
  const navLinks = document.querySelectorAll('.nav__links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      const toggle = document.querySelector('.nav-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

// 當DOM加載完成時初始化導航欄
document.addEventListener('DOMContentLoaded', createNavBar);
