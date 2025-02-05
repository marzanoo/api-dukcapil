import Navbar from "../organisms/Navbar";
import TablePenduduk from "../organisms/TablePenduduk";
import { Penduduk } from "@/types/penduduk";

interface DashboardTemplateProps {
  data: Penduduk[];
}

export default function DashboardTemplate({ data }: DashboardTemplateProps) {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Data Penduduk</h1>
        <TablePenduduk data={data} />
      </div>
    </div>
  );
}
