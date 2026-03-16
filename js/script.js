// 极简测试版 script.js
const languages = {
  zh: {
    zodiacs: [
      { id: 'rat', name: '鼠', en: 'RAT', desc: '机智灵敏', personality: '机智', img: 'images/zodiacs/zodiac-rat.png', character: '', skill: '' },
      { id: 'ox', name: '牛', en: 'OX', desc: '勤勉坚韧', personality: '勤勉', img: 'images/zodiacs/zodiac-ox.png', character: '', skill: '' },
      { id: 'tiger', name: '虎', en: 'TIGER', desc: '勇敢无畏', personality: '勇敢', img: 'images/zodiacs/zodiac-tiger.png', character: '', skill: '' },
      { id: 'rabbit', name: '兔', en: 'RABBIT', desc: '温柔敏捷', personality: '温柔', img: 'images/zodiacs/zodiac-rabbit.png', character: '', skill: '' },
      { id: 'dragon', name: '龙', en: 'DRAGON', desc: '气宇轩昂', personality: '创新', img: 'images/zodiacs/zodiac-dragon.png', character: '', skill: '' },
      { id: 'snake', name: '蛇', en: 'SNAKE', desc: '智慧神秘', personality: '智慧', img: 'images/zodiacs/zodiac-snake.png', character: '', skill: '' },
      { id: 'horse', name: '马', en: 'HORSE', desc: '自由奔放', personality: '自由', img: 'images/zodiacs/zodiac-horse.png', character: '', skill: '' },
      { id: 'goat', name: '羊', en: 'GOAT', desc: '温和善良', personality: '温和', img: 'images/zodiacs/zodiac-goat.png', character: '', skill: '' },
      { id: 'monkey', name: '猴', en: 'MONKEY', desc: '聪明活泼', personality: '聪明', img: 'images/zodiacs/zodiac-monkey.png', character: '', skill: '' },
      { id: 'rooster', name: '鸡', en: 'ROOSTER', desc: '自信守时', personality: '自信', img: 'images/zodiacs/zodiac-rooster.png', character: '敏感', skill: '唱歌' },
      { id: 'dog', name: '狗', en: 'DOG', desc: '忠诚正直', personality: '忠诚', img: 'images/zodiacs/zodiac-dog.png', character: '', skill: '' },
      { id: 'pig', name: '猪', en: 'PIG', desc: '豁达乐观', personality: '乐观', img: 'images/zodiacs/zodiac-pig.png', character: '', skill: '' }
    ]
  },
  en: {
    zodiacs: [
      { id: 'rat', name: 'Rat', en: 'RAT', desc: 'Witty', personality: 'Witty', img: 'images/zodiacs/zodiac-rat.png', character: 'Show-off', skill: 'Food radar' },
      { id: 'ox', name: 'Ox', en: 'OX', desc: 'Diligent', personality: 'Diligent', img: 'images/zodiacs/zodiac-ox.png', character: '', skill: '' },
      { id: 'tiger', name: 'Tiger', en: 'TIGER', desc: 'Brave', personality: 'Brave', img: 'images/zodiacs/zodiac-tiger.png', character: '', skill: '' },
      { id: 'rabbit', name: 'Rabbit', en: 'RABBIT', desc: 'Gentle', personality: 'Gentle', img: 'images/zodiacs/zodiac-rabbit.png', character: '', skill: '' },
      { id: 'dragon', name: 'Dragon', en: 'DRAGON', desc: 'Majestic', personality: 'Innovative', img: 'images/zodiacs/zodiac-dragon.png', character: '', skill: '' },
      { id: 'snake', name: 'Snake', en: 'SNAKE', desc: 'Wise', personality: 'Wise', img: 'images/zodiacs/zodiac-snake.png', character: '', skill: '' },
      { id: 'horse', name: 'Horse', en: 'HORSE', desc: 'Free', personality: 'Free', img: 'images/zodiacs/zodiac-horse.png', character: '', skill: '' },
      { id: 'goat', name: 'Goat', en: 'GOAT', desc: 'Mild', personality: 'Artistic', img: 'images/zodiacs/zodiac-goat.png', character: '', skill: '' },
      { id: 'monkey', name: 'Monkey', en: 'MONKEY', desc: 'Clever', personality: 'Clever', img: 'images/zodiacs/zodiac-monkey.png', character: '', skill: '' },
      { id: 'rooster', name: 'Rooster', en: 'ROOSTER', desc: 'Confident', personality: 'Confident', img: 'images/zodiacs/zodiac-rooster.png', character: 'Sensitive', skill: 'Singing' },
      { id: 'dog', name: 'Dog', en: 'DOG', desc: 'Loyal', personality: 'Loyal', img: 'images/zodiacs/zodiac-dog.png', character: '', skill: '' },
      { id: 'pig', name: 'Pig', en: 'PIG', desc: 'Optimistic', personality: 'Optimistic', img: 'images/zodiacs/zodiac-pig.png', character: '', skill: '' }
    ]
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function renderZodiacs(selector = '.zodiac-grid') {
  const container = document.querySelector(selector);
  if (!container) return;
  if (!languages[currentLang] || !languages[currentLang].zodiacs) {
    container.innerHTML = '<p style="color:red">数据加载失败</p>';
    return;
  }
  const zodiacs = languages[currentLang].zodiacs;
  container.innerHTML = zodiacs.map(animal => `
    <a href="zodiac-detail.html?name=${animal.id}" class="zodiac-card">
      <div class="card-icon"><img src="${animal.img}" alt="${animal.name}"></div>
      <h3>${animal.name} <span>${animal.en}</span></h3>
      <p>${animal.desc}</p>
      <div class="card-tag">${animal.name} · ${currentLang === 'zh' ? '个性' : 'Personality'}</div>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderZodiacs();
});