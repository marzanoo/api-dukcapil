"use client";

import { useEffect, useState } from "react";
import DashboardTemplate from "@/components/templates/DashboardTemplate";
import { api } from "@/lib/api";
import { Penduduk } from "@/types/penduduk";

export default function DashboardPage() {
  const [penduduk, setPenduduk] = useState<Penduduk[]>([]);

  useEffect(() => {
    const fetchPenduduk = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token)
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await api.get("/penduduk");
        setPenduduk(response.data);
      } catch (error) {
        console.error("Gagal mengambil data penduduk", error);
      }
    };

    fetchPenduduk();
  }, []);

  return <DashboardTemplate data={penduduk} />;
}
