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
    id: "chatbot-cx-agent",
    title: "chatbotCXAgent",
    subtitle: "Phenom People • 2025–Present",
    tags: ["LangGraph", "FastAPI", "vLLM", "AWS SageMaker", "QLoRA", "PostgreSQL", "Redis"],
    brief:
      "Production agentic conversational AI platform with 12 orchestrated LLM nodes handling intent recognition, dialogue management, and response generation at enterprise scale.",
    problem:
      "Enterprise customer workflows demand conversational AI that is accurate, fast, and capable of handling complex multi-turn dialogues. Off-the-shelf chatbot solutions lack the precision and adaptability required for production-grade NLU across diverse enterprise use cases.",
    solution: [
      "Architected a 12-node LangGraph agentic pipeline with dedicated nodes for intent recognition, entity extraction, dialogue management, and natural language generation",
      "Fine-tuned multi-task BERT (ModernBERT) for Intent Classification + NER using differential learning rates, label smoothing, and uncertainty-weighted multi-task loss",
      "QLoRA fine-tuning of Qwen 3.5 models (2B–9B parameters) deployed via vLLM on AWS SageMaker A10G GPUs",
      "Built Graph RAG pipelines and RESTful APIs (FastAPI) integrating conversational AI with PostgreSQL and Redis",
      "Developed AI-driven testing framework in CI/CD pipelines, scaling automated test coverage from 7% to 78%",
    ],
    results: [
      "NLU accuracy: 87% → 97% (multi-task BERT fine-tuning)",
      "Test coverage: 7% → 78% (AI-driven testing framework)",
      "12-node agentic pipeline serving enterprise customer workflows at scale",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    color: "#22d3ee",
  },
  {
    id: "index-notes",
    title: "IndexNotes",
    subtitle: "Personal Project • 2025",
    tags: ["Neo4j", "Ollama", "PyMuPDF", "Python", "Docker", "Graph RAG"],
    brief:
      "Automated pipeline that ingests scientific papers and builds a Neo4j knowledge graph — enabling multi-hop graph traversal and Graph RAG queries for research discovery.",
    problem:
      "Scientific knowledge is locked inside PDFs and disconnected papers. Researchers have no structured way to query relationships between concepts across multiple papers — making literature review slow and discovery difficult.",
    solution: [
      "Automated ingestion pipeline: PDF → local LLM extraction (Ollama) → structured JSON → Neo4j knowledge graph",
      "Entity and relationship extraction using quantized local models via Ollama — no external API required",
      "~40 concepts and 17+ typed relationships extracted across 3 research papers (PINNs, Hamiltonian GNNs, topological materials)",
      "Neo4j schema supports multi-hop graph traversal and Graph RAG queries for research discovery",
      "Containerized with Docker (Neo4j + APOC plugin) for reproducible local deployment",
    ],
    results: [
      "~40 concepts and 17+ typed relationships across 3 research papers",
      "Fully local — no external API keys or cloud costs",
      "Graph RAG-ready schema supporting multi-hop traversal queries",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    color: "#a855f7",
  },
  {
    id: "pinns",
    title: "Physics-Informed Neural Networks",
    subtitle: "Personal Project • 2025",
    tags: ["PyTorch", "Autograd", "L-BFGS", "Latin Hypercube Sampling", "PDE Solving"],
    brief:
      "PINNs implemented from scratch in PyTorch solving three fundamental PDEs — Heat, Burgers', and Schrödinger equations — with results matching published benchmarks.",
    problem:
      "Traditional numerical PDE solvers (FEM, FDM) require fine-grained meshes and struggle with high-dimensional problems. Physics-Informed Neural Networks offer a mesh-free alternative that embeds physical laws directly into the loss function — but most ML engineers lack the physics background to implement them correctly.",
    solution: [
      "Implemented PINNs from scratch in PyTorch using autograd (create_graph, retain_graph) for PDE residual computation",
      "Heat equation: ~3% max error vs analytical solution",
      "Burgers' equation: two-phase Adam + L-BFGS optimization, matching Raissi et al. benchmark results",
      "Schrödinger equation: complex-valued outputs, periodic boundary conditions, final training loss 0.000083",
      "Latin Hypercube collocation sampling, differential loss weighting, and second-order L-BFGS optimization",
    ],
    results: [
      "Heat equation: ~3% max error vs analytical solution",
      "Schrödinger equation: final loss 0.000083",
      "Burgers' equation: matches Raissi et al. published benchmarks",
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    color: "#f97316",
  },
];
