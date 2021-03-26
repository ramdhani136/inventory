<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return
            [
                'id' => $this->id,
                'kode' => $this->kode,
                'item' => $this->item,
                'merk' => $this->merk,
                'tanggal' => $this->tanggal_item,
                'type' => $this->type,
                'sn' => $this->sn,
                'qty' => $this->qty,
                'kondisi' => $this->kondisi,
                'garansi' => $this->garansi,
                'tgl_garansi' => $this->tgl_garansi,
                'keterangan' => $this->keterangan,
                'status' => $this->status,
                'id_kategori' => $this->id_kategori,
                'id_satuan' => $this->id_satuan,
                'id_supplier' => $this->id_supplier,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ];
    }
}
