# 🎨 FlowBoard – Real-Time Collaborative Whiteboard
⏳ Duration: 10 Days

💻 Built For: Remote teams, educators, students, designers, and collaborators who need a shared creative space.

# 🧠 Project Brief: Draw, Write, Create—Together.

🚀 FlowBoard is your go-to real-time collaborative whiteboard that enables multiple people to create, annotate, and brainstorm together—no matter where they are. Whether you’re planning a project, teaching a class, designing wireframes, or just doodling with friends, FlowBoard makes collaboration instant and fun.

🌐 The platform enables you to:
- 🖌️ Draw & Annotate — Use pens, highlighters, shapes, and colors to bring ideas to life.

- 👥 Live Presence — See where and what your teammates are working on in real time.

- ✍️ User Attribution — Instantly know who is drawing, erasing, or editing.

- 🛠️ Multiple Tools — Choose between freehand drawing, text input, sticky notes, shapes, and erasers.

- 📤 Instant Sharing — Share a simple link and collaborate instantly—no sign-up required.

- 🔄 Live Sync — Every stroke, note, and change appears instantly for all participants.

- 💬 In-Board Chat — Talk with collaborators while creating.

- 📜 Board History — Undo/redo with real-time history tracking.

# 🧩 Core Features – FlowBoard

- Realtime Multi-User Drawing via WebRTC (peer-to-peer)

- User Presence & Identity (name + cursor color)

- Interactive Tool Panel (pen, highlighter, shapes, eraser, text)

- Live Collaboration Without Refresh

- Download as Image or PDF

- Invite Link Sharing

- Optional Authentication for private boards

- Cross-Device Support (desktop, tablet, stylus-enabled devices)

# 🛠️ Tech Stack – FlowBoard
🔧 Purpose
To build a real-time collaborative whiteboard that feels instant, intuitive, and powerful—perfect for both structured planning and creative brainstorming.

⚙️ Tech Overview
💻 Frontend

- React.js

- Tailwind CSS

- Zustand (state management)

- Fabric.js / Konva.js for canvas drawing

🧠 Realtime Layer

- Yjs (CRDT-based data sync)

- y-webrtc for peer-to-peer updates

🗄️ Backend (optional)

- Node.js + Express.js for authentication & board persistence

- MongoDB Atlas for board storage

🔐 Auth

- JWT

- Google OAuth 2.0

☁️ Deployment

- Vercel or Netlify (frontend)

- Render (backend, if using auth/storage)

🧰 Tools

- GitHub

- GitHub Actions (CI/CD)

- Figma (UI Design)

- Postman (API Testing)

🗓️ 10-Day Timeline – FlowBoard
📅 Days 1–3 – Design + Canvas Setup 🎨
- Finalize features, wireframes, and tool UI in Figma

- Set up React + Tailwind, basic canvas rendering, and tool panel UI

- Implement pen, highlighter, eraser tools

- Test responsive layout and touch/stylus support

✅ Deliverables:

- UI wireframes

- Canvas with drawing tools

- Basic color and thickness controls

- Responsive frontend

📅 Days 4–7 – Real-Time Collaboration ⚡
- Integrate Yjs + y-webrtc for real-time sync

- Add live cursors with user names/colors

- Implement presence tracking (“Arnav is drawing…”)

- Invite link sharing and session joining

- Add undo/redo and save/load board state

✅ Deliverables:

- Fully working multi-user sync

- User presence

- Persistent session links

📅 Days 8–10 – Advanced Features + Final Touches ✨

- Implement text tool, sticky notes, shapes

- Add chat feature within the board

- Add export as PNG/PDF option

- Final QA testing, bug fixes, polish UI

- Prepare README, walkthrough video, deploy final app

✅ Deliverables:

- Full feature set

- Live deployed FlowBoard

- Documentation + video demo
