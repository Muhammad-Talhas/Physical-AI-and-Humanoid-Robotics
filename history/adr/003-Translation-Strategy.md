# ADR-003: Translation Strategy for Multilingual Support

## Status
Accepted

## Date
2025-12-10

## Context
The Physical AI & Humanoid Robotics Textbook requires Urdu translation capabilities as part of its accessibility and internationalization features. The approach to translation will impact performance, cost, user experience, and maintenance overhead. The system needs to support real-time translation toggling for the textbook content.

## Decision
We will implement runtime LLM-based translation for Urdu content, with potential for static generation in future iterations.

## Options Considered

### Runtime LLM-based Translation
- Pros:
  - Provides real-time translation of content sections
  - Flexible to handle dynamic content updates
  - Can leverage existing LLM APIs (e.g., Google Cloud Translation)
  - No need to pre-generate multiple language versions
- Cons:
  - Incurs API costs with usage volume
  - Potential latency affecting user experience
  - Quality may vary depending on LLM capabilities
  - Requires network connectivity for translation

### Pre-generated Static Urdu Pages
- Pros:
  - Faster runtime performance (no API calls)
  - Cost-effective at runtime after initial generation
  - Consistent translation quality
  - Works offline
- Cons:
  - Requires content generation pipeline for new/modified content
  - Storage overhead for multiple language versions
  - Updates to source content require regeneration
  - Complex synchronization between language versions

## Consequences
- Positive: Real-time translation capability with minimal storage overhead
- Positive: Can handle dynamic content updates without regeneration
- Negative: Ongoing API costs and potential latency
- Negative: Dependent on external translation service availability
- Neutral: Allows for future optimization toward static generation

## Alternatives
- Local translation models: Reduced API costs but increased complexity and resource usage
- Community translation: Lower cost but quality and maintenance challenges
- No translation: Would eliminate multilingual accessibility features

## References
- plan.md: Section "Decisions Needing Documentation" - Translation Strategy
- spec.md: Functional Requirements for Urdu translation features