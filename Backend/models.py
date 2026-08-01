from pydantic import BaseModel
from typing import List


class TranscriptRequest(BaseModel):
    transcript: str


class ActionItem(BaseModel):
    task: str
    owner: str
    deadline: str
    priority: str


class AgentResponse(BaseModel):
    summary: str
    action_items: List[ActionItem]