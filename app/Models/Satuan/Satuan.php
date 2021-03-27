<?php

namespace App\Models\Satuan;

use App\Models\Items\Items;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Satuan extends Model
{
    protected $table = "satuan";
    protected $guarded = [];
    use HasFactory;

    public function items()
    {
        return $this->hasMany(Items::class, 'id_satuan', 'satuan');
    }
}
