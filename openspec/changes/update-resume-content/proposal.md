## Why

当前 `index.html` 与 `resume.html` 仍是占位内容（姓名、公司、项目、教育背景均与实际情况不符），无法真实展示藕杰的个人经历与技术能力。需要基于 `personinfo.txt` 与 `me.jpg` 将两份简历页面同步更新为一致、真实、专业的内容，并重新生成 PDF。

## What Changes

- 将 `index.html` 和 `resume.html` 中的姓名统一为“藕杰”。
- 更新联系方式：电话 `17375449610`、邮箱 `2927472601@qq.com`。
- 替换工作经历为 `翼支付`（2021.05–2026.07）与 `安耐吉化学`（2020.07–2021.05）的真实职责描述。
- 将“项目作品”改为“项目描述”，基于 `personinfo.txt` 重新撰写生活缴费、通信缴费、民生营销三个系统的业务背景、技术架构与职责成果，不暴露代码。
- 同步更新教育背景为 `安庆师范大学 · 计算机科学与技术 · 本科 · 2016–2020`。
- 基于 `personinfo.txt` 重新整理技能栈，移除不熟悉的技能项。
- 将根目录 `me.jpg` 作为网页版头像，PDF 版不显示头像。
- 重新运行 `scripts/generate-pdf.js` 生成 `assets/resume.pdf`。

## Capabilities

### New Capabilities

- `resume-content`：个人简历页面（`index.html` 与 `resume.html`）的内容必须基于 `personinfo.txt` 中的真实信息，并保持网页版与 PDF 版一致。

### Modified Capabilities

（现有 `resume-pdf` 规范仅要求从 `resume.html` 生成 PDF，生成逻辑不变；仅内容变化，不属于规范变更。）

## Impact

- `index.html`：网站版简历内容与样式。
- `resume.html`：PDF 版简历内容。
- `assets/resume.pdf`：重新生成后覆盖旧文件。
- `assets/avatar.jpg`：新增头像资源（从 `me.jpg` 复制）。
- `scripts/generate-pdf.js`：无改动，仅作为生成工具使用。
