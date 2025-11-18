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
import "./sidebarcolaborador.css";

export default function SidebarNavColaborador() {
  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        <ul>

          <li>
            <Link href="#">
              <Users className="icon" /> Meu Painel
            </Link>
          </li>

          <li>
            <Link href="#">
              <UserPlus className="icon" /> Meus Feedbacks
            </Link>
          </li>

          <li>
            <Link href="#">
              <GraduationCap className="icon" /> Minhas Sugestões
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
