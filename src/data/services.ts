import { Database, MessageSquare, Plug, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "rag",
    title: "RAG Systems",
    description: "Document Q&A, knowledge bases, semantic search.",
    icon: Database,
  },
  {
    id: "chatbots",
    title: "Chatbots & Agents",
    description: "LangGraph workflows, multi-turn conversations, tool use.",
    icon: MessageSquare,
  },
  {
    id: "llm-integration",
    title: "LLM Integration",
    description: "API integration, prompt engineering, evaluation pipelines.",
    icon: Plug,
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Architecture review, technical strategy, team training.",
    icon: Users,
  },
];
