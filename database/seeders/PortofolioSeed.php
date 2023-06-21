<?php

namespace Database\Seeders;

use App\Models\Portofolio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortofolioSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Portofolio::create([
            'title' => 'Library Management System',
            'description' => 'Library Management System is a desktop application that can be used to manage library data, such as books, members, and transactions.',
            'image' => 'https://i.ibb.co/0jZGZsP/IMG-20210611-071327.jpg',
            'link' => 'github.com',
            'category_id' => 3,
            'client' => 'Abdul Muiz Ahmed',
        ]);
    }
}
