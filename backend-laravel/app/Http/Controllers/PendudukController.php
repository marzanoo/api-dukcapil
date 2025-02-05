<?php

namespace App\Http\Controllers;

use App\Models\Penduduk;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PendudukController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Penduduk::all());
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'nik' => 'required|unique:penduduks,nik',
            'nama' => 'required',
            'alamat' => 'required',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:L,P',
            'pekerjaan' => 'required',
        ]);

        $penduduk = Penduduk::create($request->all());
        return response()->json($penduduk);
    }

    public function show($id): JsonResponse
    {
        $penduduk = Penduduk::findOrFail($id);
        return response()->json($penduduk);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $penduduk = Penduduk::findOrFail($id);
        $penduduk->update($request->all());
        return response()->json($penduduk);
    }

    public function destroy($id): JsonResponse
    {
        $penduduk = Penduduk::findOrFail($id);
        $penduduk->delete();
        return response()->json($penduduk, ['message' => 'Penduduk berhasil dihapus']);
    }
}
