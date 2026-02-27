from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import asyncio
import random
import datetime

# Application Definition
app = FastAPI(
    title="ViralTube AI Engine",
    description="Premium CTR Predictive Analysis & Title Generator API",
    version="1.0.0"
)

# CORS Settings to allow requests from the Next.js Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # In production, this would be the Vercel project URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- PYDANTIC MODELS ---
class TopicRequest(BaseModel):
    topic: str = Field(..., title="Video Topic", description="The main topic of the YouTube video provided by the user", min_length=2)

class TitleIdea(BaseModel):
    id: int
    title: str
    ctr: float
    seo_score: int
    sentiment: str

class AnalyzeResponse(BaseModel):
    results: list[TitleIdea]


# --- API ENDPOINTS ---

@app.post("/api/v1/analyze", response_model=AnalyzeResponse, summary="Analyze Titles and Estimated CTR")
async def analyze_topic(request: TopicRequest):
    """
    Takes the entered video topic, sends it to an LLM (like GPT/Claude) to generate potential titles,
    and returns a simulated CTR/SEO prediction based on historical data.
    """
    
    if not request.topic.strip():
        raise HTTPException(status_code=400, detail="Topic cannot be empty.")
    
    current_year = datetime.datetime.now().year
    
    # REAL SCENARIO: A call to openai.ChatCompletion would be made here
    # Example AI System Prompt Injection:
    # system_prompt = f"The current year is {current_year}. If you include a year in the titles, you MUST use {current_year}."
    
    # Simulation purpose: Added a 2.5-second delay to mimic AI thinking time
    await asyncio.sleep(2.5)
    
    # Mock AI Generation Results
    formatted_topic = request.topic.title()
    mock_results = [
        TitleIdea(
            id=1,
            title=f"Why Everyone is WRONG About {formatted_topic}",
            ctr=round(random.uniform(9.5, 14.5), 1),
            seo_score=random.randint(85, 95),
            sentiment="Controversial"
        ),
        TitleIdea(
            id=2,
            title=f"The Ultimate Guide to {formatted_topic} in {current_year}",
            ctr=round(random.uniform(6.5, 9.5), 1),
            seo_score=random.randint(92, 100),
            sentiment="Educational"
        ),
        TitleIdea(
            id=3,
            title=f"I Tried {formatted_topic} (And It Was A Mistake)",
            ctr=round(random.uniform(10.0, 16.0), 1),
            seo_score=random.randint(80, 90),
            sentiment="Emotional"
        )
    ]
    
    # Sort results by CTR in descending order so the best result comes first
    mock_results.sort(key=lambda x: x.ctr, reverse=True)
    
    return AnalyzeResponse(results=mock_results)


@app.get("/health", summary="Server Health Check")
async def health_check():
    """Checks if the server is up and running (useful for AWS / Vercel deployment health checks)."""
    return {"status": "healthy", "service": "ViralTube AI Backend"}
