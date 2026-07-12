# Web Development Step-by-Step by KOPE SOLUTION

Repository นี้เป็นสื่อประกอบ Series สอน Web Development สำหรับผู้เริ่มต้นบน YouTube ของ **KOPE SOLUTION** โดยใช้แนวทาง **เรียนไป ทำไป** และพัฒนาเว็บไซต์ Personal Portfolio ขึ้นมาทีละส่วน

ผู้เรียนจะไม่ได้แยกเรียน HTML, CSS และ JavaScript เป็นหลักสูตรยาวคนละชุด แต่จะเรียนรู้ทั้ง 3 ภาษาไปพร้อมกับงานที่กำลังสร้าง เพื่อให้เห็นว่าแต่ละส่วนทำงานร่วมกันอย่างไร

## เป้าหมายของ Series

- เริ่มจากศูนย์และค่อย ๆ เพิ่มความซับซ้อนทีละขั้น
- เข้าใจหน้าที่ของ Code ไม่ใช่เพียงคัดลอกแล้วใช้งาน
- ฝึกคิดเป็นส่วนย่อย ทดลอง และตรวจสอบผลด้วยตนเอง
- สร้าง Personal Portfolio Website ที่ใช้งานได้จริง
- ใช้แนวทาง Modern Web Development และพื้นฐาน Accessibility
- ใช้เฉพาะ Vanilla HTML, CSS และ JavaScript โดยไม่ใช้ Framework หรือ Library

## สิ่งที่ต้องเตรียม

- Computer และ Web Browser รุ่นปัจจุบัน เช่น Chrome, Edge หรือ Firefox
- Code Editor เช่น Visual Studio Code
- ไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรมมาก่อน

## วิธีใช้งาน Repository

แต่ละโฟลเดอร์แทนเนื้อหา YouTube 1 ตอน ภายในจะมีคำอธิบายบทเรียนและ Source Code ของตอนนั้น

1. อ่านเป้าหมายของ EP ก่อนเริ่มลงมือ
2. พิมพ์ Code ตามวิดีโอด้วยตนเอง
3. เปิดหน้าเว็บและทดลองเปลี่ยนค่าเล็ก ๆ เพื่อสังเกตผล
4. ทำแบบฝึกหัดท้าย EP ก่อนดูตอนถัดไป

> ปัจจุบันมีเนื้อหาและ Source Code แบบละเอียดสำหรับ EP01 และ EP02 ส่วน EP03–EP12 เป็นโครงสร้างสำหรับ Roadmap และจะพัฒนาในลำดับถัดไป

## Roadmap

| EP | ชื่อตอน | สิ่งที่จะสร้าง | แนวคิดหลัก |
|---|---|---|---|
| [EP01](./episodes/ep01-first-web-page/) | เว็บไซต์หน้าแรกของเรา | หน้าแนะนำตัวพร้อมปุ่มทักทาย | HTML document, element, CSS selector, event |
| [EP02](./episodes/ep02-semantic-content/) | จัดโครงสร้างเนื้อหาให้มีความหมาย | About, Projects และ Contact section | Semantic HTML, heading hierarchy, link, image, accessibility |
| EP03 | ตกแต่งหน้าเว็บด้วย CSS | Profile card และระบบสีพื้นฐาน | Cascade, inheritance, box model, spacing, custom properties |
| EP04 | จัด Layout แบบยืดหยุ่น | Navigation และ Projects section | Flexbox, reusable class, component thinking |
| EP05 | ทำเว็บไซต์ให้รองรับทุกหน้าจอ | Mobile-first responsive portfolio | Viewport, media query, responsive units, responsive image |
| EP06 | สร้างฟอร์มติดต่อที่ใช้งานง่าย | Contact form พร้อม validation ของ Browser | Form controls, label, input types, required, accessible feedback |
| EP07 | ทำหน้าเว็บให้โต้ตอบได้ | Mobile menu และปุ่มสลับ Theme | DOM selection, event, class toggle, state |
| EP08 | สร้าง Content จากข้อมูลด้วย JavaScript | Project cards จาก Array | Array, object, function, loop, template literal, DOM rendering |
| EP09 | ค้นหาและกรองผลงาน | Project filter และข้อความเมื่อไม่พบข้อมูล | Input event, filter, condition, derived state |
| EP10 | จดจำการตั้งค่าของผู้ใช้ | Theme ที่คงอยู่หลัง Refresh | localStorage, JSON, initialization, error-aware thinking |
| EP11 | โหลดข้อมูลแบบ Asynchronous | ดึงรายการ Project จากไฟล์ JSON | Fetch API, Promise, async/await, loading/error states |
| EP12 | เก็บรายละเอียดและเผยแพร่เว็บไซต์ | Portfolio ฉบับสมบูรณ์พร้อม Deploy | Refactor, accessibility audit, performance, metadata, deployment checklist |

## โครงสร้าง Repository

```text
.
├── README.md
└── episodes/
    ├── ep01-first-web-page/
    │   ├── README.md
    │   ├── index.html
    │   ├── styles.css
    │   └── script.js
    ├── ep02-semantic-content/
    ├── ep03-css-foundations/
    ├── ep04-flexible-layout/
    ├── ep05-responsive-design/
    ├── ep06-contact-form/
    ├── ep07-dom-interactions/
    ├── ep08-data-driven-projects/
    ├── ep09-project-filter/
    ├── ep10-persistent-preferences/
    ├── ep11-fetch-project-data/
    └── ep12-polish-and-deploy/
```

## หลักการที่ใช้ตลอด Series

- ใช้ HTML ที่สื่อความหมายและมีลำดับหัวข้อชัดเจน
- แยกโครงสร้าง (`.html`), การตกแต่ง (`.css`) และพฤติกรรม (`.js`)
- ออกแบบแบบ Mobile-first และคำนึงถึง Accessibility
- ตั้งชื่อ class และตัวแปรเป็นภาษาอังกฤษให้สื่อความหมาย
- เขียน Code ให้อ่านง่ายก่อนพยายามทำให้สั้น
- ตรวจสอบหน้าเว็บและ Browser Console ทุกครั้งที่แก้ Code

## สถานะเนื้อหา

- [x] EP01 — เนื้อหาและ Source Code สมบูรณ์
- [x] EP02 — เนื้อหาและ Source Code สมบูรณ์
- [ ] EP03–EP12 — รอพัฒนาในลำดับถัดไป

