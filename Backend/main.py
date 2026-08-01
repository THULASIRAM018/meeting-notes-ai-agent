from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import TranscriptRequest
from llm_service import analyze_meeting

app = FastAPI(title="Meeting Notes AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "Meeting Notes AI Agent Running"
    }


@app.post("/analyze")
def analyze(request: TranscriptRequest):

    result = analyze_meeting(request.transcript)

    return result