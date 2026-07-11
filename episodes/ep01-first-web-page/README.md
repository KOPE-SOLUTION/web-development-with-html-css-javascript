# EP01: เว็บไซต์หน้าแรกของเรา

ในตอนแรกเราจะสร้างหน้าเว็บแนะนำตัวที่เรียบง่าย เรียนรู้โครงสร้างพื้นฐานของ HTML เพิ่มการตกแต่งด้วย CSS และใช้ JavaScript เล็กน้อยเพื่อทำให้ปุ่มตอบสนองต่อผู้ใช้

## เป้าหมายการเรียนรู้

เมื่อจบ EP นี้ ผู้เรียนจะสามารถ:
- อธิบายหน้าที่ของ HTML, CSS และ JavaScript แบบง่าย ๆ ได้
- สร้าง HTML document ที่มีโครงสร้างถูกต้อง
- เพิ่ม heading, paragraph และ button ลงในหน้าเว็บได้
- เชื่อมไฟล์ CSS และ JavaScript เข้ากับ HTML ได้
- ใช้ CSS selector เพื่อตกแต่ง element พื้นฐานได้
- ใช้ JavaScript รับเหตุการณ์ click และเปลี่ยนข้อความบนหน้าเว็บได้

## สิ่งที่จะสร้างใน EP นี้

หน้าแนะนำตัวขนาดเล็กที่ประกอบด้วย:
- ชื่อเว็บไซต์และข้อความแนะนำตัว
- Card สีขาวอยู่กลางหน้าจอ
- ปุ่ม “ทักทายฉัน”
- ข้อความตอบกลับเมื่อผู้ใช้กดปุ่ม

## Concept ที่ต้องอธิบายในวิดีโอ

### 1. เว็บไซต์ 1 หน้าประกอบด้วยอะไร

- **HTML** สร้างโครงสร้างและเนื้อหา เปรียบเหมือนโครงบ้าน
- **CSS** กำหนดหน้าตา สี ขนาด และตำแหน่ง เปรียบเหมือนการตกแต่งบ้าน
- **JavaScript** เพิ่มพฤติกรรมและการโต้ตอบ เปรียบเหมือนระบบที่ทำให้สิ่งต่าง ๆ ทำงาน

### 2. โครงสร้าง HTML Document

- `<!doctype html>` บอก Browser ว่าเอกสารนี้ใช้มาตรฐาน HTML5
- `<html lang="th">` เป็น element หลัก และ `lang` ระบุภาษาของเนื้อหา
- `<head>` เก็บข้อมูลเกี่ยวกับหน้าเว็บที่ไม่ใช่เนื้อหาหลักบนหน้าจอ
- `<meta charset="UTF-8">` ทำให้แสดงตัวอักษรภาษาไทยได้ถูกต้อง
- `<meta name="viewport">` ช่วยให้หน้าเว็บแสดงผลเหมาะสมบน Mobile
- `<title>` เป็นชื่อที่แสดงบน Tab ของ Browser
- `<body>` เก็บเนื้อหาที่ผู้ใช้มองเห็นและโต้ตอบได้

### 3. Element, Tag และ Attribute

อธิบายผ่านตัวอย่าง `<button id="greetingButton">`:

- `button` คือชนิดของ element
- Tag เปิดและ Tag ปิดครอบข้อความของปุ่ม
- `id` คือ attribute ที่ตั้งชื่อเฉพาะให้ element เพื่ออ้างอิงจาก JavaScript

### 4. CSS Selector และ Property

- Selector เช่น `body` และ `.card` เลือก element ที่ต้องการตกแต่ง
- Declaration เช่น `color: #1f2937;` ประกอบด้วย property และ value
- Class ใช้กับรูปแบบที่นำกลับมาใช้ซ้ำได้
- `box-sizing: border-box` ช่วยให้คำนวณขนาด element ได้เข้าใจง่ายขึ้น

### 5. JavaScript และ Event

- `document.querySelector()` ใช้ค้นหา element ในหน้าเว็บ
- `addEventListener()` ใช้รอฟังเหตุการณ์จากผู้ใช้
- Event `click` เกิดเมื่อผู้ใช้กดปุ่ม
- `textContent` ใช้อ่านหรือเปลี่ยนข้อความอย่างปลอดภัย

## ขั้นตอนการทำแบบ Step-by-Step

### Step 1: สร้างไฟล์ของโปรเจกต์

สร้างไฟล์ 3 ไฟล์ไว้ในโฟลเดอร์เดียวกัน:

```text
index.html
styles.css
script.js
```

การแยกไฟล์ตามหน้าที่ทำให้ Code อ่านง่ายและดูแลต่อได้สะดวก

### Step 2: สร้างโครงสร้าง HTML Document

เริ่ม `index.html` ด้วยโครงสร้างมาตรฐาน:

```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เว็บไซต์แรกของฉัน</title>
  </head>
  <body></body>
</html>
```

ลองเปิดไฟล์ใน Browser และสังเกตชื่อบน Tab แม้ใน `body` จะยังไม่มีเนื้อหา

### Step 3: เพิ่ม Content ลงใน body

เพิ่ม `<main>` เพื่อบอกว่านี่คือเนื้อหาหลักของหน้า จากนั้นเพิ่ม heading, paragraph และ button:

```html
<main class="card">
  <p class="eyebrow">KOPE SOLUTION · WEB DEVELOPMENT</p>
  <h1>สวัสดี นี่คือเว็บไซต์แรกของฉัน</h1>
  <p class="intro">
    ฉันกำลังเรียนรู้ว่า HTML สร้างเนื้อหา CSS ช่วยตกแต่ง
    และ JavaScript ทำให้หน้าเว็บโต้ตอบได้
  </p>
  <button id="greetingButton" type="button">ทักทายฉัน</button>
  <p id="greetingMessage" class="message" aria-live="polite"></p>
</main>
```

`h1` ควรอธิบายหัวข้อหลักของหน้า และ `type="button"` ระบุพฤติกรรมของปุ่มอย่างชัดเจน ส่วน `aria-live="polite"` ช่วยให้ Screen Reader แจ้งเมื่อข้อความเปลี่ยน

### Step 4: เชื่อมและเขียน CSS

เพิ่มบรรทัดนี้ใน `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

จากนั้นเขียน Style ใน `styles.css` เริ่มจากสีพื้นหลัง, Font, Card และปุ่ม ทดลองเปลี่ยนค่าสีหรือ `padding` แล้ว Refresh เพื่อดูผล

### Step 5: เชื่อมและเขียน JavaScript

เพิ่มบรรทัดนี้ก่อน Tag ปิด `</body>`:

```html
<script src="script.js"></script>
```

การวาง Script หลังเนื้อหาทำให้ Browser สร้าง HTML elements ก่อน JavaScript จะค้นหา elements เหล่านั้น

ใน `script.js` ให้ค้นหาปุ่มกับพื้นที่ข้อความ แล้วรอฟังการ click:

```js
const greetingButton = document.querySelector("#greetingButton");
const greetingMessage = document.querySelector("#greetingMessage");

greetingButton.addEventListener("click", () => {
  greetingMessage.textContent = "ยินดีต้อนรับสู่โลกของ Web Development! 🎉";
});
```

### Step 6: ทดลองและตรวจสอบ

1. เปิด `index.html` ใน Browser
2. ตรวจว่าหัวข้อ Card และปุ่มแสดงครบ
3. กดปุ่มและตรวจว่ามีข้อความปรากฏ
4. เปิด Developer Tools แล้วดู Console ว่าไม่มี Error
5. ลองใช้ปุ่ม `Tab` บน Keyboard เพื่อเลือกปุ่ม และกด `Enter`

## Source Code ที่สมบูรณ์

Source Code พร้อมใช้งานอยู่ในโฟลเดอร์นี้:

- [`index.html`](./index.html) — โครงสร้างและเนื้อหา
- [`styles.css`](./styles.css) — รูปแบบการแสดงผล
- [`script.js`](./script.js) — การโต้ตอบเมื่อกดปุ่ม

สามารถเปิด `index.html` ใน Browser ได้ทันที โดย EP นี้ยังไม่ต้องใช้ Development Server

## คำอธิบาย Code ที่สำคัญ

### `lang="th"`

ช่วยให้ Browser, Search Engine และเทคโนโลยีช่วยเหลือเข้าใจว่าเนื้อหาหลักเป็นภาษาไทย

### `class` และ `id`

- `class="card"` ใช้เลือก element สำหรับการตกแต่ง และสามารถนำ class เดียวกันไปใช้ซ้ำได้
- `id="greetingButton"` เป็นชื่อเฉพาะในหน้านี้ ใช้อ้างอิงปุ่มจาก JavaScript

### `min-height: 100vh`

กำหนดให้ `body` สูงอย่างน้อยเท่ากับความสูงของหน้าจอ จึงสามารถจัด Card ให้อยู่กลางพื้นที่หน้าจอได้

### `addEventListener`

แยก JavaScript ออกจาก HTML และบอก Browser ว่าเมื่อเกิด `click` ให้เรียก function ที่กำหนด วิธีนี้ขยายต่อไปยังเหตุการณ์อื่นได้ง่าย

### `textContent`

ใช้เปลี่ยนข้อความของ element โดยตรง เหมาะกับข้อความธรรมดาและปลอดภัยกว่าการสร้าง HTML จากข้อความที่ไม่จำเป็น

## Common Mistakes

### เปิดหน้าเว็บแล้วภาษาไทยเป็นตัวอักษรแปลก ๆ

ตรวจว่ามี `<meta charset="UTF-8">` และไฟล์ถูกบันทึกด้วย UTF-8

### CSS ไม่ทำงาน

- ตรวจชื่อไฟล์ว่าเป็น `styles.css` ตรงกับค่า `href`
- ตรวจว่าไฟล์อยู่ในโฟลเดอร์เดียวกับ `index.html`
- ตรวจว่าใช้ `.` หน้า class selector เช่น `.card`
- ตรวจวงเล็บปีกกา `{ }` และเครื่องหมาย `;`

### กดปุ่มแล้วไม่มีอะไรเกิดขึ้น

- ตรวจชื่อ `script.js` และค่า `src`
- ตรวจว่า `id` ใน HTML ตรงกับ selector ใน JavaScript ทุกตัวอักษร
- เปิด Console เพื่ออ่านข้อความ Error และดูเลขบรรทัด
- ตรวจว่า Script อยู่หลัง Content หรือใช้ `defer` หากย้ายไปไว้ใน `<head>`

### ใช้ `<br>` หลายครั้งเพื่อสร้างระยะห่าง

`<br>` ใช้สำหรับขึ้นบรรทัดใหม่ในเนื้อหา ไม่ควรใช้จัด Layout ให้ใช้ `margin`, `padding` หรือ `gap` ใน CSS

### ตั้งชื่อไฟล์มี Space หรือใช้ตัวพิมพ์ใหญ่สลับกัน

ตั้งชื่อด้วยตัวพิมพ์เล็กและใช้เครื่องหมาย `-` เมื่อมีหลายคำ เช่น `first-page.html` เพื่อหลีกเลี่ยงปัญหาเมื่อเผยแพร่ขึ้น Server

## แบบฝึกหัดท้าย EP

1. เปลี่ยน heading และข้อความแนะนำให้เป็นข้อมูลของตนเอง
2. เปลี่ยนสีพื้นหลัง สีปุ่ม และค่า `border-radius`
3. เพิ่ม paragraph อีกหนึ่งย่อหน้าเพื่อบอกเป้าหมายในการเรียน Web Development
4. เปลี่ยนข้อความที่ JavaScript แสดงหลังการ click
5. **Challenge:** ทำให้ปุ่มเปลี่ยนข้อความของตัวเองจาก “ทักทายฉัน” เป็น “ทักทายแล้ว!” หลังถูกกด โดยใช้ `greetingButton.textContent`

หลังแก้แต่ละข้อ ให้ Refresh และอธิบายกับตัวเองว่า Code บรรทัดใดทำให้หน้าเว็บเปลี่ยนไป

## สรุปสิ่งที่เรียนรู้

- HTML กำหนดโครงสร้างและความหมายของเนื้อหา
- CSS เลือก element แล้วกำหนดรูปแบบการแสดงผล
- JavaScript รับเหตุการณ์และเปลี่ยนหน้าเว็บได้
- `head` เก็บข้อมูลของเอกสาร ส่วน `body` เก็บสิ่งที่ผู้ใช้เห็น
- การแยก HTML, CSS และ JavaScript ทำให้แต่ละไฟล์มีหน้าที่ชัดเจน
- Browser Developer Tools และ Console เป็นเครื่องมือสำคัญสำหรับค้นหาข้อผิดพลาด

เมื่อพร้อมแล้ว EP02 จะต่อยอดหน้าเดิมด้วย Semantic HTML เพื่อแบ่ง About, Projects และ Contact ให้มีโครงสร้างที่ชัดเจนขึ้น

