<?php

namespace Database\Seeders;

use App\Models\Resume;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResumeSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Resume::create([
            'title' => 'Summary',
            'sub_title' => 'Alica Putri',
            'description' => 'I am a student at the State Polytechnic of Malang, majoring in Informatics Engineering. I am a person who is eager to learn new things and is able to work in a team. I am also a person who is able to work under pressure and have good communication skills.',
            'about_me_id' => 1,
            'start_year' => '2018',
            'end_year' => '2021',
            'company' => 'State Polytechnic of Malang',
        ]);

        Resume::create([
            'title' => 'Education',
            'sub_title' => 'State Polytechnic of Malang',
            'description' => 'I am a student at the State Polytechnic of Malang, majoring in Informatics Engineering. I am a person who is eager to learn new things and is able to work in a team. I am also a person who is able to work under pressure and have good communication skills.',
            'about_me_id' => 1,
            'start_year' => '2018',
            'end_year' => '2021',
            'company' => 'State Polytechnic of Malang',
        ]);
        
    }
}
