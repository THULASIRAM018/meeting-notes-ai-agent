# 🧠 Meeting Notes AI Agent

An AI-powered Meeting Notes Assistant that automatically summarizes meeting transcripts and extracts actionable tasks using Large Language Models (LLMs).

---

## 🚀 Features

- 📄 AI-generated meeting summary
- ✅ Automatic action item extraction
- 👤 Task owner identification
- 📅 Deadline extraction
- 🔥 Priority assignment (High / Medium / Low)
- ⚡ FastAPI backend
- ⚛️ React + Vite frontend
- 🤖 LLM integration (Groq/Gemini/OpenAI)

---

## 📂 Project Structure

```
meeting-notes-agent/

├── backend/
│   ├── main.py
│   ├── llm_service.py
│   ├── prompts.py
│   ├── models.py
│   ├── requirements.txt
│   ├── .env
│   └── sample_transcript.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
└── README.md
```

---

# 🏗 Architecture

```
              User

                │

                ▼

      React Frontend (Vite)

                │

                ▼

          FastAPI Backend

                │

                ▼

         Prompt Engineering

                │

                ▼

        Large Language Model

                │

                ▼

      Structured JSON Output

                │

                ▼

Summary + Action Items Table
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios

## Backend

- FastAPI
- Python
- Pydantic

## AI

- Groq / Gemini
- Prompt Engineering

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/THULASIRAM018/meeting-notes-ai-agent.git

cd meeting-notes-ai-agent
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create `.env`

```
GROQ_API_KEY=YOUR_API_KEY
```

Run

```bash
python -m uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Open

```
http://localhost:5173
```

---

# 📸 Screenshots

## Home Page

!(<screenshots/Home Page.png>)

---

## AI Summary

!(<screenshots/AI Summary.png>)

---

## Action Items

!(<screenshots/Action Items.png>)

---

# Example Input

```
Rahul will prepare the sales report by Friday.

Anita will update the website.

Marketing team will launch the campaign next Monday.

Everyone agreed to improve customer onboarding.
```

---

# Example Output

## Summary

The meeting focused on assigning responsibilities for report preparation, website updates, marketing activities, and improving customer onboarding.

### Action Items

| Task | Owner | Deadline | Priority |
|------|-------|----------|----------|
| Prepare Sales Report | Rahul | Friday | High |
| Update Website | Anita | Not Mentioned | Medium |
| Launch Marketing Campaign | Marketing Team | Next Monday | High |

---

# Future Enhancements

- PDF Upload
- DOCX Upload
- Audio to Text
- Email Meeting Summary
- Export to Excel
- Export to PDF
- Authentication
- Dashboard
- Meeting History

---

# Author

**Vadivelu Lokaiah Thulasiram**

Computer Science Engineer

AI | Python | FastAPI | React | Prompt Engineering

GitHub:
https://github.com/THULASIRAM018

LinkedIn:
(Add LinkedIn URL)

---

# License

MIT License