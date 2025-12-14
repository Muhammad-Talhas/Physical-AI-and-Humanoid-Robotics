# ADR-004: Simulation Framework Focus for Textbook Content

## Status
Accepted

## Date
2025-12-10

## Context
The Physical AI & Humanoid Robotics Textbook needs to focus on specific simulation frameworks for its hands-on labs and examples. The choice will impact the content's accessibility to students, alignment with industry standards, and the breadth of concepts that can be covered. The textbook must balance between different simulation environments while maintaining educational effectiveness.

## Decision
We will focus primarily on ROS/Gazebo for the simulation examples and labs, with general mentions of other frameworks like Unity/Isaac Sim for broader context.

## Options Considered

### ROS/Gazebo Focused
- Pros:
  - Open-source and widely used in research/academia
  - Strong community support and documentation
  - Aligns with industry standards in robotics
  - Cost-effective (no licensing fees)
  - Extensive educational resources available
- Cons:
  - May have steeper learning curve for beginners
  - Less advanced rendering compared to Unity/Isaac Sim

### Unity/Isaac Sim Focused
- Pros:
  - Advanced rendering and physics simulation
  - Better visualization capabilities
  - Strong integration with NVIDIA tools
  - Good for reinforcement learning environments
- Cons:
  - Potential licensing costs
  - Less common in academic robotics curriculum
  - May have different learning curve

### Balanced Hybrid Approach
- Pros:
  - Broader coverage of simulation techniques
  - Exposure to multiple tools
  - Flexibility for different use cases
- Cons:
  - Increased content complexity
  - May dilute focus on core concepts
  - More difficult to maintain consistency

## Consequences
- Positive: Aligns with open-source educational philosophy
- Positive: Cost-effective approach with no licensing requirements
- Positive: Consistent with academic robotics curriculum standards
- Negative: May limit exposure to advanced visualization tools
- Neutral: Allows for future expansion to other frameworks

## Alternatives
- PyBullet focus: Alternative physics engine with different strengths
- Webots: Another open-source robotics simulator
- No simulation focus: Would eliminate hands-on lab components entirely

## References
- plan.md: Section "Decisions Needing Documentation" - Primary Simulation Frameworks Focus
- spec.md: Requirements for exclusively simulation-based examples