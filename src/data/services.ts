import { Bot, Cpu, Network, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "conversational-ai",
    title: "Conversational AI",
    description: "Agentic LangGraph pipelines, multi-turn dialogue systems, intent recognition, and NLU.",
    icon: Bot,
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-Tuning",
    description: "QLoRA, SFT, multi-task BERT training on AWS SageMaker with custom evaluation frameworks.",
    icon: Cpu,
  },
  {
    id: "graph-rag",
    title: "Graph RAG & Knowledge Graphs",
    description: "Neo4j knowledge graphs, Graph RAG pipelines, multi-hop traversal, and semantic search.",
    icon: Network,
  },
  {
    id: "scientific-ml",
    title: "Scientific ML / PINNs",
    description: "Physics-Informed Neural Networks solving PDEs — Heat, Burgers', Schrödinger equations.",
    icon: FlaskConical,
  },
];
