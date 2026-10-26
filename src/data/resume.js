// All page content in one place. Photos are atmosphere from the dealt
// picsum set (Unsplash licence) — credits listed in the footer.

export const profile = {
  name: '唐浩钧',
  nameLatin: 'Tang Haojun',
  monogram: '唐',
  support:
    '广东海洋大学数据科学与大数据技术在读。做 YOLO 目标检测与 RAG 智能体,已把两套 AI 系统送上企业生产线。',
  email: 'tang.haojun@qq.com',
  phone: '13113351758',
  github: 'https://github.com/DawnJuly',
  githubName: 'DawnJuly'
}

export const nav = [
  { label: '做过什么', href: '#work' },
  { label: '怎么做', href: '#method' },
  { label: '奖项', href: '#proof' }
]

export const intro = {
  heading: '关于我',
  note:
    '人工智能方向本科工程师。过去九个月在广州福罡化工实习,一人贯穿数据、模型、部署与后台:给抗氧剂产品做质检检测,给客户做咨询智能体。此前两年,三台小车在竞赛场地里替我验证过视觉算法的边界。',
  facts: [
    { value: 'GPA 3.5', note: '专业前 20%,校二等奖学金' },
    { value: '2028 届', note: '数据科学与大数据技术,本科在读' },
    { value: '5 项省级奖项', note: '含广东省数学建模竞赛一等奖' },
    { value: '9 个月实习', note: '全栈 AI 开发,广州福罡化工' }
  ],
  photo: {
    src: 'img/containers.jpg',
    alt: '巨大黄色墙面前行走的小人(气氛图)',
    caption: null
  }
}

export const works = {
  opener: '做过:',
  countLine: '五个项目,2024 – 2026,其中两套系统已上线运行。',
  items: [
    { name: '智能救援小车', href: 'https://github.com/DawnJuly/Intelligent_Rescue_Robot' },
    { name: '集装箱残损检测预警系统', href: '#method' },
    { name: '复杂地形多任务小车', href: '#method' },
    { name: '企业官网与 RAG 咨询智能体', href: '#method' },
    { name: '变质产品 YOLO 质检上报系统', href: '#method' }
  ]
}

export const stages = [
  {
    runin: '先看场景。',
    body:
      '抗氧剂结块、变色、包装渗漏,四类外观缺陷,在生产现场采集并标注了 1200 余张样本;救援小车要的是多色目标与复杂光照,复杂地形车要的是全天候识别。每类缺陷长什么样、混在一起怎么分,先在心里过一遍再谈模型。'
  },
  {
    runin: '再训练优化。',
    body:
      'YOLOv8 微调打底,注意力机制增强小尺度缺陷感知,多尺度特征融合提升不同尺寸目标的鲁棒性;OpenCV 传统视觉做基线对照,小目标与遮挡场景单独调参。救援小车的识别准确率做到 95% 以上。'
  },
  {
    runin: '然后部署闭环。',
    body:
      'FastAPI 封装检测接口对接质检管理后台,异常工单实时闭环,质检覆盖度从人工抽检提升到 99%;小车端跑在树莓派、OpenMV、K230 上,轻量化推理加串口通信,识别结果直接变成导航指令。'
  },
  {
    runin: '大模型与全栈一起上。',
    body:
      'LangGraph 与 Agno Agent 框架接 DeepSeek API,混合检索加语义分块,RAG 智能体覆盖 80% 以上的常规客户咨询;外面的官网与后台用 Vue3 和 Spring Boot 3 搭建,产品多维度检索和管理都在上面跑。'
  }
]

export const awards = {
  opener: '拿过:',
  items: [
    '广东省数学建模竞赛一等奖',
    '工创赛智能救援赛道二等奖',
    '大学生创新训练项目省级立项',
    '蓝桥杯省赛 Python 组二等奖',
    'MathorCup 大数据竞赛二等奖'
  ]
}

export const contactRows = [
  { label: '邮箱', value: 'tang.haojun@qq.com', href: 'mailto:tang.haojun@qq.com?subject=来自简历页的联络' },
  { label: '电话', value: '13113351758', href: 'tel:13113351758' },
  { label: 'GitHub', value: 'github.com/DawnJuly', href: 'https://github.com/DawnJuly' },
]

export const credits =
  '照片来自 Unsplash(Unsplash 许可,仅作页面气氛,非本人作品):集装箱码头航拍、港口夜景、主板特写、海滨。'

/* The live thing: a rule-based mini RAG panel, after the product he built
   for Fu Gang Chemical. Plain answers, no ornament. */
export const chat = {
  greeting: '我是他做过的那类 RAG 智能体的极简版,读过这份简历。问一句试试。',
  chips: ['会什么', '实习做了什么', '拿过什么奖', '怎么联系'],
  qa: [
    { k: ['会什么', '技能', '技术', '语言', '框架'], a: 'Python 为主,加 Java、C++、SQL、R;视觉侧 YOLOv8、OpenCV、PyTorch;大模型侧 DeepSeek、GPT、Gemini、Claude 的 API 集成与 RAG;工程侧 Spring Boot、Vue3、FastAPI、Git。' },
    { k: ['实习', '福罡', '做了什么', '工作'], a: '在广州福罡化工做了九个月全栈 AI 开发实习(2025/06 – 2026/03):一套 Vue3 + Spring Boot 3 的企业官网加 RAG 咨询智能体,覆盖 80% 常规咨询;一套 YOLOv8 质检系统,标注 1200 余张样本,质检覆盖度提到 99%。' },
    { k: ['奖', '拿过', '竞赛', '比赛'], a: '广东省数学建模竞赛一等奖;工程实践与创新能力大赛智能救援赛道二等奖;大创省级立项;蓝桥杯省赛 Python 组二等奖;MathorCup 大数据竞赛二等奖。' },
    { k: ['项目', '小车', '救援', '集装箱', '检测'], a: '智能救援小车(识别准确率 95% 以上,仓库开源在 GitHub)、集装箱多尺度残损检测预警系统(进行中)、复杂地形多任务小车,以及实习里的两套上线系统。' },
    { k: ['联系', '邮箱', '电话', '怎么找'], a: '邮箱 tang.haojun@qq.com,电话 13113351758,GitHub 是 DawnJuly。页脚有直達链接。' },
    { k: ['学校', '专业', '哪里', '谁'], a: '唐浩钧,广东海洋大学数据科学与大数据技术,2028 届本科在读,GPA 3.5,专业前 20%。' }
  ],
  fallback: '这个问题的答案不在我的知识库里。换个问法,或直接邮件问他本人。'
}
