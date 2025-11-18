import React from "react";
import {
  LayoutGrid,
  Users,
  UserPlus,
  GraduationCap,
  MessageSquare,
  Trophy,
  Lightbulb
} from "lucide-react";
import Link from "next/link";
import "./Sidebar.css";

export default function SidebarNav() {
  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <Link href="#">
              <LayoutGrid className="icon" /> Dashboard
            </Link>
          </li>

          <li>
            <Link href="#">
              <Users className="icon" /> Colaboradores
            </Link>
          </li>

          <li>
            <Link href="#">
              <UserPlus className="icon" /> Novo Colaborador
            </Link>
          </li>

          <li>
            <Link href="#">
              <GraduationCap className="icon" /> Aprendizes/Estagiários
            </Link>
          </li>

          <li>
            <Link href="#">
              <MessageSquare className="icon" /> Feedback
            </Link>
          </li>

          <li>
            <Link href="#">
              <Trophy className="icon" /> Ranking & Bonificação
            </Link>
          </li>

          <li>
            <Link href="#">
              <Lightbulb className="icon" /> Sugestões Recebidas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
