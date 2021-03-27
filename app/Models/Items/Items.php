<?php

namespace App\Models\Items;

use App\Models\Kategori\Kategori;
use App\Models\Satuan\Satuan;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table = "items";
    protected $guarded = [];
    // use HasFactory;

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'id_kategori', 'id');
    }

    public function satuan()
    {
        return $this->belongsTo(Satuan::class, 'id_satuan', 'id');
    }
}
