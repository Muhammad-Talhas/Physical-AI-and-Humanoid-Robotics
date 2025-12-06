from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "RAG Backend is running!"}

# Future API endpoints will be included here
# from .api import router
# app.include_router(router)
