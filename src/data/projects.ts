export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  brief: string;
  problem: string;
  solution: string[];
  results?: string[];
  status?: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "multilingual-nlu",
    title: "Multilingual NLU Pipeline",
    subtitle: "HR Tech Company • 2024-2025",
    tags: ["mBERT", "PyTorch", "Hugging Face", "AWS SageMaker"],
    brief:
      "Redesigned the company's NLU system to support 12+ languages with 97% accuracy.",
    problem:
      "The company's chatbot used Rasa 2.0, which struggled with non-English languages and had accuracy issues. They needed a modern system that could handle 12+ languages while improving overall accuracy.",
    solution: [
      "Replaced Rasa with mBERT-based intent classification",
      "Built training pipeline on AWS SageMaker for scalable model updates",
      "Integrated Hugging Face Transformers + PyTorch for inference",
      "Deployed to production serving millions of candidate interactions",
    ],
    results: [
      "Accuracy: 87% → 97% (11% improvement)",
      "Languages: English-only → 12+ languages supported",
      "Latency: Maintained sub-200ms response times at scale",
    ],
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    color: "#22d3ee",
  },
  {
    id: "vectorfit",
    title: "VectorFit",
    subtitle: "Personal Project • 2025",
    tags: ["LangGraph", "FalkorDB", "FastAPI", "React"],
    brief:
      "Unified health tracking app that shows whether your metrics are trending up or down.",
    problem:
      "Health tracking is fragmented. Diet in one app, workouts in another, sleep in a third. No unified view of whether you're actually improving.",
    solution: [
      'VectorFit unifies all health metrics in one place. Each tracker is a "vector" — the app shows whether each metric is trending up (good) or down (needs attention).',
      "Built with LangGraph for intelligent metric analysis",
      "FalkorDB for graph-based health data relationships",
      "FastAPI backend with React frontend",
      'Natural language queries: "How\'s my fitness this week?"',
    ],
    status: "In development. Demo available.",
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "#a855f7",
  },
  {
    id: "docuchat",
    title: "DocuChat",
    subtitle: "Personal Project • 2025",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React"],
    brief:
      "Upload any PDF. Ask questions in plain English. Get answers with exact citations.",
    problem:
      "Reading long PDFs is painful. You want answers, not hours of scrolling.",
    solution: [
      "Upload any PDF. Ask questions in plain English. Get answers with exact citations.",
      "RAG pipeline with smart chunking and retrieval",
      "Citation tracking — every answer links to the source page",
      "Supports PDFs up to 100 pages",
      "Simple, clean interface",
    ],
    // Replace with your own image
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=600&fit=crop",
    color: "#f97316",
  },
];
