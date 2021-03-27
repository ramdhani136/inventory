<?php

namespace App\Models\Kategori;

use App\Models\Items\Items;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $table = "kategori";
    protected $guarded = [];
    // use HasFactory;
    public function items()
    {
        return $this->hasMany(Items::class, 'id_kategori', 'id');
    }
}
