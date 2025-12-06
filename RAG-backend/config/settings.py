import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql+asyncpg://user:password@host:port/dbname")
    QDRANT_HOST: str = os.getenv("QDRANT_HOST", "localhost")
    QDRANT_PORT: int = int(os.getenv("QDRANT_PORT", "6333"))
    QDRANT_API_KEY: str = os.getenv("QDRANT_API_KEY", "")

    class Config:
        env_file = ".env"

settings = Settings()
