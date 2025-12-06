# RAG Backend for Physical AI & Humanoid Robotics Textbook

This directory contains the FastAPI application that serves as the Retrieval-Augmented Generation (RAG) backend for the Physical AI & Humanoid Robotics Textbook. It is responsible for:

*   Processing user queries.
*   Retrieving relevant information from the indexed textbook content.
*   Generating concise and accurate answers.
*   Integrating with PostgreSQL (Neon) for metadata and Qdrant for vector embeddings.

## Project Structure

```text
RAG-backend/
├── README.md              # This file
├── app/                   # FastAPI application code
│   ├── main.py            # Main FastAPI application
│   ├── api/               # API endpoints
│   ├── services/          # Business logic and RAG specific services
│   └── models/            # Pydantic models for data validation
├── config/                # Configuration files (e.g., database settings)
├── models/                # Database models (e.g., SQLAlchemy/SQLModel)
└── requirements.txt       # Python dependencies
```

## Setup and Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd physical-ai-humanoid-robotics-textbook/RAG-backend
    ```

2.  **Create a virtual environment**:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows: .venv\Scripts\activate
    ```

3.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Database Configuration**:
    *   Set up a PostgreSQL database (e.g., using Neon.tech).
    *   Configure connection details in `config/settings.py` (or via environment variables).

5.  **Vector Database Configuration**:
    *   Set up a Qdrant instance (local or hosted).
    *   Configure connection details in `config/settings.py` (or via environment variables).

## Running the Application

```bash
# Ensure virtual environment is activated
uvicorn app.main:app --reload
```

## API Endpoints (Planned)

*   `/query`: Main endpoint for RAG-powered questions.
*   `/index`: Endpoint to trigger content indexing.

## Technologies Used

*   **Web Framework**: FastAPI
*   **Relational Database**: PostgreSQL (via Neon.tech)
*   **Vector Database**: Qdrant
*   **LLM Integration**: (To be determined, e.g., OpenAI, Anthropic, Hugging Face)

## Contributions

Feel free to contribute to the development of this RAG backend. Please refer to the main project's `CONTRIBUTING.md` for guidelines (if available).
