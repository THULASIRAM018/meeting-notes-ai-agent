from openai import OpenAI
from dotenv import load_dotenv
import os
import json

from prompts import SYSTEM_PROMPT

# Load environment variables
load_dotenv()

# Initialize Groq client
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)


def analyze_meeting(transcript: str):
    """
    Analyze meeting transcript and return structured JSON.
    """

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": transcript
                }
            ],
            temperature=0,
            response_format={"type": "json_object"}   # Force JSON output
        )

        text = response.choices[0].message.content.strip()

        print("\n========== RAW LLM RESPONSE ==========")
        print(text)
        print("======================================\n")

        result = json.loads(text)

        return result

    except json.JSONDecodeError as e:
        print("JSON Parsing Error")
        print(e)
        print("Raw Response:")
        print(text)

        return {
            "summary": "Unable to parse model response.",
            "action_items": [],
            "error": str(e)
        }

    except Exception as e:
        print("LLM Error:")
        print(e)

        return {
            "summary": "LLM request failed.",
            "action_items": [],
            "error": str(e)
        }