import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  textbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      items: [
        'chapters/introduction-to-physical-ai/introduction-to-physical-ai',
        'chapters/introduction-to-physical-ai/02-physical-ai-vs-traditional-ai',
      ],
    },
    {
      type: 'category',
      label: 'Basics of Humanoid Robotics',
      items: [
        'chapters/basics-of-humanoid-robotics/01-basics-of-humanoid-robotics',
        'chapters/basics-of-humanoid-robotics/02-humanoid-design-principles',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2 Foundations',
      items: [
        'chapters/ros2/ch1-introduction',
        'chapters/ros2/ch2-nodes-topics-services-actions',
        'chapters/ros2/ch3-python-development',
      ],
    },
    {
      type: 'category',
      label: 'Gazebo/Unity Simulation',
      items: [
        'chapters/gazebo-unity/ch4-introduction-to-gazebo',
        'chapters/gazebo-unity/ch5-robot-modeling',
        'chapters/gazebo-unity/ch6-basic-robot-control',
      ],
    },
    {
      type: 'category',
      label: 'NVIDIA Isaac Sim',
      items: [
        'chapters/nvidia-isaac/ch7-introduction-to-isaac-sim',
        'chapters/nvidia-isaac/ch8-advanced-simulation-techniques',
      ],
    },
    {
      type: 'category',
      label: 'AI Robot Brain',
      items: [
        'chapters/ai-robot-brain/01-ai-robot-brain',
        'chapters/ai-robot-brain/02-machine-learning-integration',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twin Simulation',
      items: [
        'chapters/digital-twin-simulation/01-digital-twin-simulation',
        'chapters/digital-twin-simulation/02-gazebo-simulation-techniques',
      ],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action (VLA) Systems',
      items: [
        'chapters/vla/ch9-perception-for-humanoids',
        'chapters/vla/ch10-motion-planning-control',
        'chapters/vla/ch11-human-robot-interaction-ethics',
        'chapters/vla/ch12-emerging-trends',
      ],
    },
  ],
};

export default sidebars;