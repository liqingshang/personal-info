## 1. 内容准备

- [x] 1.1 确认 `personinfo.txt` 与 `me.jpg` 已存在于仓库根目录
- [x] 1.2 将 `me.jpg` 复制到 `assets/avatar.jpg`，作为网页版头像资源

## 2. 更新 `index.html`（网页版简历）

- [x] 2.1 将页面标题、Header Logo、Hero 区姓名、Footer 版权中的姓名统一改为“藕杰”
- [x] 2.2 更新 Hero 标语为最终版本
- [x] 2.3 更新“关于我”个人简介
- [x] 2.4 将工作经历替换为翼支付与安耐吉化学的真实经历及职责描述
- [x] 2.5 将“项目作品”改为“项目描述”，替换为生活缴费、通信缴费、民生营销三个项目
- [x] 2.6 更新技能栈，移除不了解的“了解”项
- [x] 2.7 更新教育背景为安庆师范大学 2016–2020
- [x] 2.8 更新 Footer 联系方式为电话 `17375449610` 与邮箱 `2927472601@qq.com`
- [x] 2.9 将 Hero 头像从 `assets/avatar-placeholder.svg` 替换为 `assets/avatar.jpg`

## 3. 更新 `resume.html`（PDF 源文件）

- [x] 3.1 将页眉姓名改为“藕杰”
- [x] 3.2 更新标题与联系信息
- [x] 3.3 更新个人简介
- [x] 3.4 同步工作经历、项目描述、技能栈、教育背景，与 `index.html` 保持一致
- [x] 3.5 确认 `resume.html` 不显示头像

## 4. 生成 PDF

- [x] 4.1 运行 `node scripts/generate-pdf.js` 重新生成 `assets/resume.pdf`
- [x] 4.2 检查生成的 PDF 内容是否正确、无乱码、无截断

## 5. 验证与收尾

- [x] 5.1 在浏览器中打开 `index.html`，检查排版、头像、联系方式、各章节内容
- [x] 5.2 在浏览器中打开 `resume.html` 并预览打印效果，确认 A4 页内无 awkward 分页
- [x] 5.3 确认 `index.html` 与 `resume.html` 的核心信息一致
- [x] 5.4 运行 `openspec validate --changes update-resume-content` 检查变更状态
