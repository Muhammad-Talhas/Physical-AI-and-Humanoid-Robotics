# ADR-005: RAG Content Retrieval Strategy

## Status
Accepted

## Date
2025-12-10

## Context
The RAG (Retrieval-Augmented Generation) system for the Physical AI & Humanoid Robotics Textbook needs to implement an effective strategy for indexing and retrieving textbook content. The approach will impact search relevance, performance, scalability, and maintenance of the knowledge base as content grows.

## Decision
We will implement a single vector index for all textbook content initially, with the option to implement module-separated indexes in future iterations if performance or relevance issues arise.

## Options Considered

### Single Vector Index for All Content
- Pros:
  - Simpler to manage and maintain initially
  - Easier to implement search across the entire textbook
  - Lower operational overhead
  - Consistent search experience across all modules
- Cons:
  - May suffer from context dilution with large content volumes
  - Potential slower retrieval at scale
  - Less precise context retrieval for specific modules
  - Could impact relevance for focused queries

### Module-Separated Indexes
- Pros:
  - More precise context retrieval within specific modules
  - Better performance for module-specific queries
  - Scalability advantages as content grows
  - Allows for module-specific optimization
- Cons:
  - Increased management overhead for multiple indexes
  - More complex query routing logic
  - Potential for missed cross-module references
  - Higher initial implementation complexity

## Consequences
- Positive: Simpler initial implementation and management
- Positive: Unified search experience across all textbook content
- Negative: Potential performance issues as content grows
- Negative: Possible context dilution with broader content base
- Neutral: Allows for future migration to separated indexes if needed

## Alternatives
- Chapter-level indexes: Balance between single and module indexes
- Hierarchical indexing: Multi-level approach for different content granularities
- No vector indexing: Would eliminate the RAG search capabilities entirely

## References
- plan.md: Section "Decisions Needing Documentation" - RAG Retrieval Strategy
- spec.md: Requirements for RAG backend and search functionality