## Context

当前仓库包含两份简历页面：

- `index.html`：面向访问者的网页版简历，包含多主题、响应式布局和交互导航。
- `resume.html`：专门用于生成 PDF 的 A4 打印版简历。

两份页面目前均使用占位内容（姓名、公司、项目、教育背景等），与 `personinfo.txt` 中的真实信息不一致。`scripts/generate-pdf.js` 已提供从 `resume.html` 生成 `assets/resume.pdf` 的能力。本次变更不涉及新的架构或外部依赖，重点是将内容与联系方式统一为真实信息，并重新生成 PDF。

## Goals / Non-Goals

**Goals：**
- `index.html` 与 `resume.html` 内容一致，均基于 `personinfo.txt` 与 `me.jpg` 更新。
- 姓名、联系方式、工作经历、项目描述、教育背景、技能栈全部替换为真实信息。
- 项目描述采用“业务成果 + 技术架构”风格，不暴露代码与敏感实现细节。
- 网页版使用 `me.jpg` 作为头像，PDF 版不显示头像。
- 更新后重新生成 `assets/resume.pdf`。

**Non-Goals：**
- 不新增页面结构或主题。
- 不改动机交互、导航、主题切换、PDF 生成脚本。
- 不引入新的第三方依赖。

## Decisions

- **同时维护两份页面**：`index.html` 面向线上展示，`resume.html` 面向打印/PDF。两份文件的内容需保持同步，避免下载的 PDF 与网页不一致。
- **头像仅在网页版使用**：PDF 版追求简洁、一页优先，且用户明确不需要头像，因此 `resume.html` 不引入头像。
- **项目作品改为项目描述**：去掉“查看代码”链接与项目缩略图占位，改为纯文字描述，突出业务价值与技术架构。
- **技能栈按熟练度分层**：基于 `personinfo.txt` 中实际使用的技术，归入“熟练”与“熟悉”，移除原占位中的“了解”项。
- **生成 PDF 作为最后一步**：在 `index.html` 与 `resume.html` 都确认无误后，再运行 `scripts/generate-pdf.js` 覆盖 `assets/resume.pdf`。

## Risks / Trade-offs

- **内容过长导致 PDF 超出一页**：`resume.html` 当前设计为 A4 打印，新增真实内容后可能超过一页。缓解措施：先填充内容，生成 PDF 后检查页数，必要时微调行距、边距或文案长度。
- **头像图片尺寸过大**：`me.jpg` 可能不适合直接作为网页头像。缓解措施：复制到 `assets/avatar.jpg` 后，使用 CSS 控制显示尺寸（`width`/`height: 160px`，`object-fit: cover`）。
- **真实信息泄露风险**：联系方式与真实姓名会进入公开仓库。缓解措施：已由用户确认公开，无需额外处理。
