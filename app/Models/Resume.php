<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';

    protected $fillable = [
        'title',
        'description',
        'sub_title',
        'about_me_id',
        'start_year',
        'end_year',
        'company',
    ];
}
