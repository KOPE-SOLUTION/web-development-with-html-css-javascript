# EP02: จัดโครงสร้างเนื้อหาให้มีความหมายด้วย Semantic HTML

ใน EP01 เราสร้างหน้าเว็บแรกและปุ่มทักทายแล้ว EP นี้จะต่อยอดให้เป็น Personal Portfolio ที่มี About, Projects และ Contact พร้อมเลือก HTML element ตามความหมายของข้อมูล

## เป้าหมายการเรียนรู้

- อธิบาย Semantic HTML และ Page landmarks ได้
- ใช้ `header`, `nav`, `main`, `section`, `article` และ `footer` ตามหน้าที่
- จัดลำดับหัวข้อด้วย `h1`, `h2` และ `h3`
- สร้างลิงก์ภายในหน้า Email และเว็บไซต์ภายนอก
- เพิ่มรูปภาพพร้อม `alt`, `width` และ `height`
- เข้าใจ Accessibility พื้นฐานของ Navigation, Heading และ Image

## สิ่งที่จะสร้างใน EP นี้

- Header และ Navigation
- Hero ที่ต่อยอดจาก EP01
- About พร้อมรูปโปรไฟล์
- Projects ที่แยกผลงานด้วย Article
- Contact พร้อม Email และ GitHub
- Footer และลิงก์ภายในหน้า

## Concept

### Semantic HTML

Semantic HTML คือการเลือก element ตามความหมาย ไม่ใช่เลือกจากหน้าตา เช่น `nav` สำหรับกลุ่มลิงก์นำทาง และ `main` สำหรับเนื้อหาหลัก ช่วยให้ Developer, Search Engine และเทคโนโลยีช่วยเหลือเข้าใจหน้าเว็บได้ดีขึ้น

`div` ยังเหมาะกับกลุ่มที่ใช้เพื่อ Layout แต่ไม่มีความหมายเฉพาะ ส่วน `section` ควรเป็นกลุ่มเนื้อหาที่มีหัวข้อ และ `article` เหมาะกับเนื้อหาที่เป็นชิ้นสมบูรณ์ เช่น Project card

### Heading hierarchy

```text
h1 Portfolio ของฉัน
├── h2 เกี่ยวกับฉัน
├── h2 ผลงานของฉัน
│   ├── h3 เว็บไซต์หน้าแรก
│   └── h3 โปรเจกต์ถัดไป
└── h2 ติดต่อฉัน
```

เลือก Heading ตามระดับข้อมูล ไม่ใช่ขนาดตัวอักษร เพราะขนาดควรกำหนดด้วย CSS

### Link และ Image

- `href="#about"` ไปยัง element ที่มี `id="about"`
- `mailto:` เปิดโปรแกรม Email
- ลิงก์ที่ใช้ `target="_blank"` ควรมี `rel="noopener noreferrer"`
- `alt` อธิบายสาระของภาพตามบริบท หากเป็นภาพตกแต่งล้วนใช้ `alt=""`
- `width` และ `height` ช่วยให้ Browser จองพื้นที่ก่อนภาพโหลด

### Accessibility

ใช้ Native HTML ก่อน ARIA เมื่อมี element ที่เหมาะสม ใน EP นี้เราเพิ่ม `aria-label` ให้ Navigation, ใช้ `aria-labelledby` เชื่อม Section กับ Heading, เขียน `alt` และทำ Keyboard focus ให้มองเห็นได้

## ขั้นตอนการทำแบบ Step-by-Step

### Step 1: คัดลอกฐานจาก EP01

คัดลอก `index.html`, `styles.css` และ `script.js` มาไว้ในโฟลเดอร์ EP02 โดยเก็บ EP01 ไว้เหมือนเดิมเพื่อเปรียบเทียบพัฒนาการ

### Step 2: เพิ่ม Header และ Navigation

```html
<header class="site-header">
  <a class="logo" href="#home">My Portfolio</a>
  <nav aria-label="เมนูหลัก">
    <ul class="nav-list">
      <li><a href="#about">เกี่ยวกับฉัน</a></li>
      <li><a href="#projects">ผลงาน</a></li>
      <li><a href="#contact">ติดต่อ</a></li>
    </ul>
  </nav>
</header>
```

ลิงก์ที่เริ่มด้วย `#` ต้องตรงกับ `id` ของปลายทางทุกตัวอักษร

### Step 3: เปลี่ยน Card เดิมเป็น Hero

ให้ `main` ครอบเนื้อหาหลักทั้งหมด และนำ Content จาก EP01 ไว้ใน `<section class="hero">` โดยคงปุ่มและพื้นที่ข้อความเดิมไว้

### Step 4: สร้าง About

เพิ่ม Section ที่มี `h2` ใช้ `figure`, `img` และ `figcaption` สำหรับรูปโปรไฟล์ แล้วเพิ่มข้อความแนะนำตัวสอง Paragraph สร้างโฟลเดอร์ `images` และตั้งชื่อไฟล์เป็นภาษาอังกฤษโดยไม่มี Space

### Step 5: สร้าง Projects

เพิ่ม Projects section และใช้ `article` แยกแต่ละผลงาน แต่ละ Article มี `h3`, คำอธิบาย และลิงก์ที่สื่อความหมาย เช่น “ดูผลงาน EP01”

### Step 6: สร้าง Contact และ Footer

ใช้ `address` ครอบข้อมูลติดต่อ เพิ่ม `mailto:` และลิงก์ GitHub แล้วเพิ่ม `footer` หลัง `main` อย่าลืมเปลี่ยนข้อมูลตัวอย่างก่อนเผยแพร่จริง

### Step 7: ปรับ CSS

นำรูปแบบ Card จาก EP01 มาใช้กับ `.hero` และ `.section` เพิ่ม Style ขั้นต้นให้ Navigation, About และ Project list ใน EP นี้เน้นความสัมพันธ์ระหว่าง Class กับโครงสร้าง ส่วน Box Model และ Layout จะอธิบายละเอียดในตอนถัดไป

### Step 8: เก็บ JavaScript เดิม

```js
greetingButton.addEventListener("click", () => {
  greetingMessage.textContent = "ยินดีต้อนรับสู่ Portfolio ของฉัน! 🎉";
});
```

Code เดิมยังใช้ต่อได้ เพราะเราแยกโครงสร้าง การตกแต่ง และพฤติกรรมออกจากกัน

### Step 9: ทดลอง

1. เปิด `index.html`
2. กด Navigation ทุกลิงก์
3. ใช้ `Tab` เดินผ่าน Logo, เมนู, ปุ่ม และ Contact links
4. ตรวจว่า Focus มองเห็นได้
5. เปิด Developer Tools และตรวจว่า Console ไม่มี Error
6. ตรวจลำดับ Heading ใน Elements panel

## Source Code ที่สมบูรณ์

- [`index.html`](./index.html) — Semantic structure และ Content
- [`styles.css`](./styles.css) — Style สำหรับหลาย Section
- [`script.js`](./script.js) — ปุ่มทักทายจาก EP01
- [`images/profile-placeholder.svg`](./images/profile-placeholder.svg) — ภาพตัวอย่างโปรไฟล์

## คำอธิบาย Code ที่สำคัญ

- `aria-labelledby="about-title"` เชื่อมชื่อ Section กับ Heading ที่มี ID ตรงกัน
- `aria-label="เมนูหลัก"` ตั้งชื่อ Navigation landmark
- `href="#projects"` พาไปยัง element ที่มี `id="projects"`
- `target="_blank"` เปิด Tab ใหม่ และ `rel="noopener noreferrer"` จำกัดความสัมพันธ์กับหน้าต้นทาง
- `font-style: normal` เปลี่ยนหน้าตาเริ่มต้นของ `address` โดยไม่เสียความหมาย HTML

## Common Mistakes

- ใช้ `section` แทน `div` ทุกจุด แม้กลุ่มนั้นมีไว้จัด Layout อย่างเดียว
- เลือก `h3` เพราะต้องการตัวเล็ก แทนที่จะเลือกตามระดับข้อมูล
- `href="#about"` ไม่ตรงกับ `id="about"` หรือใช้ ID ซ้ำ
- รูปไม่แสดงเพราะ Path, นามสกุล หรือตัวพิมพ์เล็กใหญ่ไม่ตรง
- เขียน `alt` เป็นชื่อไฟล์แทนคำอธิบายภาพ
- ใช้ข้อความลิงก์ว่า “คลิกที่นี่” ซึ่งไม่บอกจุดหมาย
- เปิด Tab ใหม่โดยไม่ใส่ `rel="noopener noreferrer"`
- ลืมเปลี่ยน Email และ GitHub ตัวอย่างก่อนเผยแพร่

## แบบฝึกหัดท้าย EP

1. เปลี่ยน Heading และ About ให้เป็นข้อมูลของตนเอง
2. เปลี่ยนรูป Placeholder เป็นรูปของตนเองและเขียน `alt` ใหม่
3. เพิ่ม Project อีกหนึ่งรายการด้วย `article`, `h3`, `p` และ `a`
4. เปลี่ยน Email และ GitHub เป็นข้อมูลจริง
5. เพิ่ม Skills section พร้อม `h2` และรายการ `ul`
6. เพิ่ม Skills เข้า Navigation และทดลองลิงก์
7. ใช้ Keyboard ตรวจ Interactive elements ทั้งหน้า
8. **Challenge:** เพิ่ม Skip link ที่พาผู้ใช้ข้ามไปยัง `main`

## สรุปสิ่งที่เรียนรู้

- Semantic HTML ทำให้โครงสร้างสื่อความหมาย
- Landmark แบ่งบริเวณสำคัญของหน้า
- `section` แบ่งตามหัวข้อ ส่วน `article` เป็นเนื้อหาหนึ่งชิ้น
- Heading เลือกตามลำดับข้อมูล ไม่ใช่ตามขนาด
- Anchor เชื่อมได้ทั้งตำแหน่งในหน้า Email ไฟล์อื่น และเว็บไซต์ภายนอก
- `alt` อธิบายความหมายของภาพตามบริบท
- Native HTML ที่เหมาะสมเป็นพื้นฐานสำคัญของ Accessibility

EP03 จะนำ Portfolio นี้มาตกแต่งอย่างเป็นระบบด้วย Cascade, Inheritance, Box Model, Spacing และ CSS Custom Properties
