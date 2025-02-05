import { Penduduk } from "@/types/penduduk";

interface TablePendudukProps {
  data: Penduduk[];
}

export default function TablePenduduk({ data }: TablePendudukProps) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">NIK</th>
          <th className="border p-2">Nama</th>
          <th className="border p-2">Alamat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id}>
            <td className="border p-2">{p.nik}</td>
            <td className="border p-2">{p.nama}</td>
            <td className="border p-2">{p.alamat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
