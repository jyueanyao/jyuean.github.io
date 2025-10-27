// 創建導航欄HTML內容
const createNavBar = () => {
  const navHTML = `
    <div class="container nav">
        <a href="index.html" class="brand">
          <img src="img/griffithtop.jpeg" alt="Julia Yao" class="nav-avatar"> 
          Julia Yao
        </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="nav__links" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="about.html">Favorite</a>
        <a href="projects.html">Works and Projects</a>
      </nav>
    </div>
  `;

  // 找到header元素並插入導航欄
  const header = document.querySelector('.header');
  if (header) {
    header.innerHTML = navHTML;
  }
};

// 當DOM加載完成時初始化導航欄
document.addEventListener('DOMContentLoaded', createNavBar);