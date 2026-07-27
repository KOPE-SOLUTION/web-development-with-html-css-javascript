# EP03: ตกแต่งหน้าเว็บด้วย CSS Foundations

ใน EP02 เราจัดโครงสร้าง Portfolio ด้วย Semantic HTML แล้ว EP นี้จะตกแต่งหน้าเว็บให้เป็นระบบด้วย Cascade, Inheritance, Box Model, Spacing และ CSS Custom Properties พร้อมสร้าง Profile card จากแนวคิดทั้งหมด

EP นี้ออกแบบเป็น **Code-along** ผู้เรียนจึงไม่ต้องอ่านทฤษฎีทั้งหมดแล้วค่อยกลับมารีวิว Code แต่สามารถทำตามทีละหัวข้อ กดบันทึก และดูผลใน Browser ได้ทันที

## เป้าหมายการเรียนรู้

เมื่อจบ EP นี้ ผู้เรียนจะสามารถ:
- อธิบาย Selector, Property และ Value ใน CSS rule
- คาดเดาได้ว่า Style ใดจะถูกใช้เมื่อหลาย Rule กำหนด Property เดียวกัน
- แยกแยะ Property ที่ถ่ายทอดค่าผ่าน Inheritance ได้
- อธิบาย Content, Padding, Border และ Margin ใน Box Model
- เลือกใช้ `margin` และ `padding` ตามหน้าที่
- สร้างระบบสีและระยะห่างด้วย CSS Custom Properties
- ใช้ Browser Developer Tools ตรวจสอบ Style และขนาดของ Box

## สิ่งที่จะสร้างใน EP นี้

- ระบบสีที่แก้ไขจากจุดเดียว
- Spacing scale สำหรับกำหนดระยะห่างให้สม่ำเสมอ
- Section และ Project card ที่ใช้ Style ร่วมกัน
- Profile card ที่มีรูป ชื่อ และคำอธิบาย
- สถานะ Hover และ Keyboard focus สำหรับ Link และ Button

## ขั้นตอนการทำแบบ Step-by-Step

### Step 1: คัดลอกฐานจาก EP02

สร้างโฟลเดอร์ `ep03-css-foundations` แล้วคัดลอก `index.html`, `styles.css`, `script.js` และโฟลเดอร์ `images` จาก EP02 ส่วน `README.md` คือบทเรียนของตอนนี้จึงไม่ต้องคัดลอกทับ:

```text
ep03-css-foundations/
├── README.md
├── index.html
├── styles.css
├── script.js
└── images/
    └── profile-placeholder.svg
```

ใน `index.html` เปลี่ยน Description และ Title:

```html
<meta name="description" content="Portfolio ที่ตกแต่งด้วย CSS Foundations ระบบสี และ Box Model">
<title>Portfolio ของฉัน | CSS Foundations</title>
```

**บันทึกแล้วดูผล:**

1. เปิด `index.html`
2. หน้าเว็บควรมีหน้าตาเหมือน EP02
3. ชื่อบน Tab ของ Browser จะเปลี่ยนเป็น “Portfolio ของฉัน | CSS Foundations”
4. เปิด Developer Tools และตรวจว่า Console ไม่มี Error

### Step 2: สร้างระบบสีและระยะห่างด้วย Custom Properties

ค่าสีและระยะห่างที่เขียนซ้ำหลายจุดแก้ไขยาก เราจะตั้งชื่อให้ค่าเหล่านี้และเก็บไว้ใน `:root` เพื่อให้ทุก Element เรียกใช้ได้

CSS Custom Property ขึ้นต้นด้วย `--` และอ่านค่าด้วย `var()` ชื่อตัวแปรควรบอกหน้าที่ เช่น `--color-primary` แทนชื่อสีอย่าง `--purple`

เปิด `styles.css` แล้วเพิ่ม Code นี้ไว้บนสุดของไฟล์:

```css
:root {
  --color-primary: #4f46e5;
  --color-primary-dark: #3730a3;
  --color-accent: #047857;
  --color-text: #1f2937;
  --color-text-muted: #4b5563;
  --color-surface: #ffffff;
  --color-surface-soft: #f8faff;
  --color-background: #eef2ff;
  --color-border: #c7d2fe;
  --color-focus: #a5b4fc;

  --space-1: 0.5rem;
  --space-2: 0.75rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;

  --radius-small: 0.625rem;
  --radius-medium: 1rem;
  --radius-large: 1.25rem;
  --shadow-card: 0 1.25rem 3rem rgb(49 46 129 / 12%);
}
```

**บันทึกแล้วดูผล:**

- หน้าตายังไม่เปลี่ยน เพราะเราสร้างตัวแปรแล้วแต่ยังไม่เรียกใช้
- ใน Developer Tools จะเห็น Custom Properties อยู่ภายใต้ `:root`
- นี่เป็นผลที่ถูกต้อง ไม่ใช่ Error

### Step 3: ทำความเข้าใจ Box Model และ `box-sizing`

Browser มองทุก Element เป็นกล่อง 4 ชั้น:

```text
Margin
└── Border
    └── Padding
        └── Content
```

- **Content** คือข้อความ รูปภาพ หรือเนื้อหาภายใน
- **Padding** คือพื้นที่ระหว่าง Content กับ Border
- **Border** คือเส้นรอบกล่อง
- **Margin** คือระยะห่างภายนอกกล่อง

ค่า `border-box` ทำให้ Width รวม Content, Padding และ Border จึงคำนวณขนาดได้ง่ายกว่า `content-box`

แทนที่ Universal selector เดิมที่อยู่ต้น `styles.css` ด้วย:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**บันทึกแล้วดูผล:**

- หน้าตาหลักอาจยังไม่เปลี่ยน เพราะ EP02 ใช้ `border-box` อยู่แล้ว
- เลือก Hero ใน Developer Tools แล้วเปิดแถบ Computed
- ดูแผนภาพ Content, Padding, Border และ Margin
- การเพิ่ม `::before` และ `::after` ทำให้กล่องที่สร้างด้วย Pseudo-element ใช้กติกาเดียวกัน

### Step 4: ใช้ Inheritance กับ Style พื้นฐาน

Property อย่าง `color`, `font-family` และ `line-height` ถ่ายทอดจาก Parent ไปยัง Element ลูกได้ เราจึงกำหนด Typography หลักไว้ที่ `body` เพียงจุดเดียว ส่วน `margin`, `padding`, `border` และ `width` จะไม่ถ่ายทอด เพราะแต่ละกล่องควบคุมขนาดของตัวเอง

แทนที่ Rule ของ `body` เดิมด้วย:

```css
body {
  margin: 0;
  color: var(--color-text);
  background: var(--color-background);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  line-height: 1.7;
}
```

**บันทึกแล้วดูผล:**

- สีและ Font ควรใกล้เคียงเดิม เพราะตัวแปรเก็บค่าเดียวกับที่เคยเขียนโดยตรง
- เปลี่ยน `--color-background` ชั่วคราวเป็น `#fff7ed`
- กดบันทึกแล้วดูว่าสีพื้นหลังทั้งหน้าเปลี่ยน
- คืนค่าเป็น `#eef2ff` ก่อนทำ Step ถัดไป

### Step 5: นำระบบสีไปใช้กับ Link และ Focus

Link มีหลาย State เช่น ปกติ, Hover และ Focus เราจะใช้ตัวแปรสีเพื่อให้ State เหล่านี้สม่ำเสมอ และยังคง Focus outline สำหรับผู้ใช้ Keyboard

แทนที่ Rule ของ `a`, `a:hover` และ Focus เดิมด้วย:

```css
a {
  color: var(--color-primary);
  font-weight: 700;
}

a:hover {
  color: var(--color-primary-dark);
}

a:focus-visible,
button:focus-visible {
  outline: 0.1875rem solid var(--color-focus);
  outline-offset: 0.1875rem;
}
```

**บันทึกแล้วดูผล:**

- เลื่อน Pointer ไปบน Link แล้วสีควรเข้มขึ้น
- กด `Tab` เดินผ่าน Logo, เมนู, Button และ Contact links
- ทุกจุดที่ Focus ต้องมี Outline มองเห็นชัด
- ไม่ควรใช้ `outline: none` โดยไม่มี Style อื่นทดแทน

### Step 6: ปรับ Container, Header และ Navigation

EP นี้ยังไม่ใช้ Flexbox เพราะจะเรียนใน EP04 เราจะใช้ Normal Flow และ `inline-block` ก่อน เพื่อให้เห็นว่าหน้าเว็บจัดวางได้อย่างไรโดยไม่ใช้ Layout system

ลบ CSS ตั้งแต่ Comment `/* Header */` จนจบส่วน `/* Main */` แล้วแทนที่ด้วย:

```css
/* Header & Main */

.site-header,
main {
  width: min(100% - 2rem, 65rem);
  margin-inline: auto;
}

.site-header {
  padding-block: var(--space-4);
}

.logo {
  display: inline-block;
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 800;
  text-decoration: none;
}

.nav-list {
  margin: var(--space-2) 0 0;
  padding: 0;
  list-style: none;
}

.nav-list li {
  display: inline-block;
  margin: 0 var(--space-3) var(--space-1) 0;
}

.nav-list a {
  text-decoration: none;
}
```

**บันทึกแล้วดูผล:**

- Logo จะอยู่บรรทัดแรกและ Navigation อยู่ด้านล่าง
- จุดนำหน้ารายการเมนูหายไป
- เนื้อหาทั้ง Header และ Main อยู่กลางหน้าและกว้างไม่เกิน `65rem`
- ลดความกว้าง Browser แล้วสังเกตว่า Container ยังเหลือพื้นที่ด้านข้าง

### Step 7: ใช้ Box Model สร้างพื้นผิวของ Hero และ Section

Hero และ Section มีพื้นผิวเหมือนกัน จึงรวม Selector เพื่อใช้ Declaration block ร่วมกัน จากนั้นแยกเฉพาะค่าที่ต่างออกมา

แทนที่ CSS ในส่วน `/* Hero & Section */` ด้วย:

```css
/* Hero & Section */

.hero,
.section {
  padding: var(--space-6);
  border-radius: var(--radius-large);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.hero {
  text-align: center;
}

.section {
  margin-top: var(--space-5);
}
```

**บันทึกแล้วดูผล:**

- ทุก Section มีพื้นหลังสีขาว มุมโค้ง และเงาแบบเดียวกัน
- `padding` สร้างพื้นที่ภายใน Card
- `margin-top` สร้างระยะภายนอกระหว่าง Section
- ลองปิด `padding` และ `margin-top` ใน Developer Tools ทีละค่า แล้วเปรียบเทียบหน้าที่ของทั้งสอง Property

### Step 8: จัดระบบ Typography และ Spacing

Heading ควรเลือกจากลำดับข้อมูลใน HTML ส่วนขนาด สี และระยะห่างควรควบคุมด้วย CSS เราจะใช้ Spacing scale แทนค่าที่กระจัดกระจาย

แทนที่ CSS ในส่วน `/* Typography */` ด้วย:

```css
/* Typography */

.eyebrow {
  margin: 0 0 var(--space-2);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.2;
}

h1 {
  max-width: 16ch;
  margin-inline: auto;
  margin-bottom: 0;
  font-size: 3.5rem;
}

h2 {
  margin-bottom: 0;
  font-size: 2.25rem;
}

h3 {
  margin-bottom: var(--space-2);
}

.intro {
  max-width: 55ch;
  margin: var(--space-4) auto;
  color: var(--color-text-muted);
  font-size: 1.125rem;
}
```

**บันทึกแล้วดูผล:**

- Heading มีลำดับขนาดชัดเจน
- Eyebrow ใช้สี Primary และมีระยะห่างสม่ำเสมอ
- Intro ไม่ยาวเต็ม Card เพราะจำกัดด้วย `55ch`
- เปลี่ยน `--space-4` ชั่วคราว แล้วดูว่า Intro และส่วนอื่นที่ใช้ตัวแปรเดียวกันเปลี่ยนพร้อมกัน

### Step 9: ตกแต่ง Button และข้อความตอบกลับ

Button เป็นกล่องอีกหนึ่งใบ จึงใช้ Padding, Radius และสีจากระบบเดียวกัน ส่วน `font: inherit` ทำให้ Button ใช้ Font จาก Parent

แทนที่ CSS ในส่วน `/* Button */` ด้วย:

```css
/* Button */

button {
  padding: var(--space-2) var(--space-4);
  border: 0;
  border-radius: var(--radius-small);
  color: var(--color-surface);
  background: var(--color-primary);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

button:hover {
  background: var(--color-primary-dark);
}

.message {
  min-height: 1.5em;
  margin: var(--space-3) 0 0;
  color: var(--color-accent);
  font-weight: 800;
}
```

**บันทึกแล้วดูผล:**

- Button ใช้สี Primary และเปลี่ยนเป็นสีเข้มเมื่อ Hover
- กดปุ่ม “ทักทายฉัน” แล้วข้อความสีเขียวปรากฏ
- พื้นที่ใต้ Button ไม่กระโดดเมื่อข้อความปรากฏ เพราะ `.message` มี `min-height`

### Step 10: สร้าง Profile Card

Profile card จะรวม Semantic HTML จาก EP02 เข้ากับ Box Model เราใช้ `figure` และ `figcaption` ตามความหมายเดิม แล้วเพิ่ม Class เพื่อเชื่อมกับ CSS

ใน `index.html` หา `<div class="about-content">` แล้วแทนที่ทั้ง Block ด้วย:

```html
<figure class="profile-card">
  <img
    src="images/profile-placeholder.svg"
    alt="ภาพตัวอย่างสำหรับใช้แทนรูปโปรไฟล์"
    width="320"
    height="320"
  >
  <figcaption class="profile-caption">
    <strong>นักพัฒนาเว็บฝึกหัด</strong>
    กำลังเรียนรู้ HTML, CSS และ JavaScript
  </figcaption>
</figure>

<div class="about-text">
  <p>ฉันเป็นผู้เริ่มต้นที่กำลังเรียนรู้ HTML, CSS และ JavaScript โดยฝึกสร้างเว็บไซต์จริงทีละส่วน</p>
  <p>เป้าหมายของฉันคือเข้าใจพื้นฐาน Web Development และสร้างเว็บไซต์ที่อ่านง่าย ใช้งานง่าย และเป็นมิตรกับทุกคน</p>
</div>
```

จากนั้นลบ CSS ในส่วน `/* About */` และ `/* Figure */` เดิม แล้วแทนที่ด้วย:

```css
/* About & Profile Card */

.section-heading {
  margin-bottom: var(--space-4);
}

.profile-card {
  max-width: 22rem;
  margin: 0 auto var(--space-4);
  padding: var(--space-3);
  border: 0.0625rem solid var(--color-border);
  border-radius: var(--radius-medium);
  background: var(--color-surface-soft);
}

.profile-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: calc(var(--radius-medium) - 0.25rem);
}

.profile-caption {
  margin-top: var(--space-3);
  color: var(--color-text-muted);
  text-align: center;
}

.profile-caption strong {
  display: block;
  color: var(--color-text);
  font-size: 1.125rem;
}

.about-text {
  max-width: 42rem;
  margin-inline: auto;
}

.about-text p {
  margin: 0 0 var(--space-3);
}
```

**บันทึกแล้วดูผล:**

- รูปและ Caption รวมกันเป็น Card อยู่กลาง About section
- Card มี Padding ภายใน มี Border และมี Margin ด้านล่าง
- เลือก `.profile-card` ใน Developer Tools แล้วตรวจ Box Model
- ปิด `padding`, `border` และ `margin` ทีละค่าเพื่อดูหน้าที่ของแต่ละชั้น

### Step 11: ปรับ Project, Contact และ Footer

Project card ใช้ระบบสี ระยะห่าง และ Radius ชุดเดียวกับ Profile card ทำให้หน้าเว็บสม่ำเสมอ โดยยังไม่ใช้ Flexbox หรือ Grid ในตอนนี้

ใน `index.html` แทนที่ `<div class="project-list">` ทั้ง Block ด้วย:

```html
<div class="project-list">
  <article class="project-card">
    <h3>Personal Portfolio</h3>
    <p>Portfolio ที่เริ่มจาก Semantic HTML และพัฒนาระบบสี ระยะห่าง และ Card ด้วย CSS Foundations</p>
    <a href="../ep02-semantic-content/index.html">ดูโครงสร้างจาก EP02</a>
  </article>

  <article class="project-card">
    <h3>โปรเจกต์ถัดไป</h3>
    <p>พื้นที่สำหรับผลงานใหม่ที่จะเพิ่มเข้ามา เมื่อฉันเรียนรู้เรื่อง Layout และ Responsive Design มากขึ้น</p>
  </article>
</div>
```

ลบ CSS ตั้งแต่ `/* Projects */` จนจบส่วน `/* Footer */` แล้วแทนที่ด้วย:

```css
/* Projects */

.project-list {
  margin-top: var(--space-4);
}

.project-card {
  margin-bottom: var(--space-3);
  padding: var(--space-4);
  border: 0.0625rem solid var(--color-border);
  border-radius: var(--radius-medium);
  background: var(--color-surface-soft);
}

.project-card p {
  margin: 0 0 var(--space-3);
  color: var(--color-text-muted);
}

/* Contact */

.contact-links {
  font-style: normal;
}

.contact-links a {
  display: inline-block;
  margin: 0 var(--space-3) var(--space-1) 0;
}

/* Footer */

footer {
  padding: var(--space-5) var(--space-3);
  color: var(--color-text-muted);
  text-align: center;
}

footer p {
  margin: 0;
}
```

**บันทึกแล้วดูผล:**

- Project เรียงลงมาตาม Normal Flow
- Card ทั้งสองใบใช้ Border, Background และ Spacing ชุดเดียวกัน
- Contact links อยู่บรรทัดเดียวกันเมื่อพื้นที่พอและขึ้นบรรทัดใหม่ได้เมื่อพื้นที่แคบ
- Footer ใช้สีข้อความรองจากระบบสี

### Step 12: เก็บการแสดงผลหน้าจอเล็ก

Responsive Design จะเรียนโดยละเอียดใน EP05 แต่เราจะเก็บกติกาสำหรับหน้าจอเล็กไว้ก่อน เพื่อไม่ให้ Heading และ Padding ใหญ่เกินพื้นที่

แทนที่ `@media` เดิมที่ท้าย `styles.css` ด้วย:

```css
/* เก็บการแสดงผลหน้าจอเล็กจาก EP02 ไว้ และจะเรียนเรื่อง Responsive โดยละเอียดใน EP05 */

@media (max-width: 640px) {
  .hero,
  .section {
    padding: var(--space-5) var(--space-4);
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}
```

**บันทึกแล้วดูผล:**

- เปิด Device Toolbar ใน Developer Tools
- ทดลองความกว้างประมาณ `375px`
- Padding ของ Section และขนาด Heading จะลดลง
- หน้าเว็บไม่ควรมี Horizontal scrollbar

### Step 13: ทดลอง Cascade และตรวจงาน

Cascade คือกติกาที่ Browser ใช้เลือก Declaration เมื่อหลาย Rule กำหนด Property เดียวกัน โดยพื้นฐาน Class selector เฉพาะเจาะจงกว่า Type selector และเมื่อ Specificity เท่ากัน Rule ที่เขียนทีหลังจะชนะ

เพิ่ม Rule ทดลองนี้ไว้ท้าย `styles.css`:

```css
p {
  color: red;
}
```

**บันทึกแล้วดูผล:**

- Paragraph ทั่วไปบางส่วนเปลี่ยนเป็นสีแดง
- `.intro`, `.message` และ `.project-card p` ยังใช้สีจาก Rule ที่เฉพาะเจาะจงกว่า
- เปิดแถบ Styles เพื่อดูว่า Declaration ใดถูกขีดทับ
- ลบ Rule ทดลองออกก่อนจบ EP

ตรวจงานรอบสุดท้าย:

1. กด Navigation ทุก Link
2. ใช้ `Tab` ตรวจ Focus ของ Interactive elements
3. Hover Link และ Button
4. กดปุ่มทักทาย
5. ตรวจ Profile card ด้วย Box Model
6. ทดลองหน้าจอกว้างและหน้าจอแคบ
7. ตรวจว่า Console ไม่มี Error

## Source Code ที่สมบูรณ์

ไฟล์เหล่านี้เป็นผลลัพธ์หลังทำครบทุก Step ใช้สำหรับเปรียบเทียบเมื่อ Code ของผู้เรียนไม่ตรง ไม่จำเป็นต้องคัดลอกทั้งหมดตั้งแต่เริ่ม:

- [`index.html`](./index.html) — โครงสร้าง Portfolio และ Profile card
- [`styles.css`](./styles.css) — ระบบสี Spacing, Cascade, Inheritance และ Box Model
- [`script.js`](./script.js) — พฤติกรรมปุ่มทักทายจาก EP ก่อนหน้า
- [`images/profile-placeholder.svg`](./images/profile-placeholder.svg) — ภาพตัวอย่างโปรไฟล์

## คำอธิบาย Code ที่สำคัญ

- `:root` เป็นตำแหน่งสำหรับ Custom Properties ส่วนกลาง
- `var(--color-primary)` อ่านค่าจาก Custom Property
- `box-sizing: border-box` ทำให้ Width รวม Padding และ Border
- `margin-inline: auto` จัด Block ที่มี Width จำกัดให้อยู่กึ่งกลาง
- `font: inherit` ทำให้ Button ใช้ Font จาก Parent
- Selector ที่คั่นด้วย Comma ใช้ Declaration block ร่วมกัน
- `.profile-card img` เลือก `img` ภายใน Element ที่มี Class `profile-card`
- `calc()` คำนวณค่าจากตัวแปร เช่น Radius ของรูปที่เล็กกว่า Radius ของ Card

## Common Mistakes

- คัดลอก Code ข้าม Step ทำให้เรียกใช้ตัวแปรที่ยังไม่ได้สร้าง
- วาง `:root` ซ้อนอยู่ภายใน Selector อื่น
- ลืมเขียน `--` หน้าชื่อ Custom Property
- ใช้ `var(color-primary)` แทน `var(--color-primary)`
- สับสนระหว่าง Padding ภายในกล่องกับ Margin ภายนอกกล่อง
- เพิ่ม Code ใหม่โดยไม่ลบ Rule เดิมที่ Step ระบุให้แทนที่
- เพิ่ม Selector ให้ Specificity สูงขึ้นเรื่อย ๆ แทนการตรวจ Cascade
- ใช้ `!important` เป็นทางแก้แรก
- ลบ Focus outline แล้วไม่ได้สร้าง Style ทดแทน
- ทดลองเปลี่ยนค่าแล้วลืมคืนค่าก่อนทำ Step ถัดไป

## แบบฝึกหัดท้าย EP

ให้ทำทีละข้อ บันทึก และดูผลหลังจบแต่ละข้อ:

1. เปลี่ยน `--color-primary` และ `--color-primary-dark` เป็นชุดสีที่ชอบ
2. ปรับ `--space-4` แล้วสังเกตทุก Component ที่ใช้ค่านี้
3. เปลี่ยน Border และ Background ของ Profile card โดยยังใช้ Custom Properties
4. เพิ่ม `--color-heading` และนำไปใช้กับ `h1`, `h2` และ `h3`
5. ใช้ Developer Tools วัดขนาดรวมของ Profile card แล้วอธิบายว่าแต่ละส่วนมาจากค่าใด
6. เพิ่ม Class `featured` ให้ Project หนึ่งรายการ และเขียน `.project-card.featured` เพื่อเปลี่ยน Border
7. ตรวจ Contrast ของข้อความกับ Background ด้วยเครื่องมือใน Browser
8. **Challenge:** สร้าง Theme สีใหม่โดยแก้เฉพาะค่าภายใน `:root`

## สรุปสิ่งที่เรียนรู้

- ผู้เรียนสามารถเขียน บันทึก และดูผลได้หลังทุก Step
- Cascade ตัดสิน Style ที่ใช้งานจริงจากกติกาและลำดับของ Rule
- Inheritance ส่งต่อค่าข้อความจาก Parent และช่วยลด Code ซ้ำ
- ทุก Element เป็นกล่องที่มี Content, Padding, Border และ Margin
- `border-box` ทำให้การคำนวณขนาดกล่องตรงไปตรงมา
- Margin ใช้สร้างระยะภายนอก ส่วน Padding ใช้สร้างพื้นที่ภายใน
- Custom Properties ทำให้สีและระยะห่างมีระบบและแก้ไขได้จากจุดเดียว
- Hover และ Focus เป็น State สำคัญของ Interactive element

EP04 จะนำ Component เหล่านี้ไปจัด Layout แบบยืดหยุ่นด้วย Flexbox และเริ่มคิด Style เป็นส่วนที่นำกลับมาใช้ซ้ำได้
