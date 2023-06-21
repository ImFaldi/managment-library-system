<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AboutMe;

class AboutMeSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        AboutMe::create([
            'title' => 'About Me',
            'description' => 'I am a full stack web developer with a passion for creating beautiful, responsive, and functional websites. I have a strong background in both front and back end development, and have experience with a variety of frameworks and languages. I am a quick learner and a team player, and I am always looking to expand my skill set and learn new things.',
            'sub_title' => 'I am a full stack web developer with a passion for creating beautiful, responsive, and functional websites. I have a strong background in both front and back end development, and have experience with a variety of frameworks and languages. I am a quick learner and a team player, and I am always looking to expand my skill set and learn new things.',
            'image' => 'https://i.ibb.co/0jZGZsP/IMG-20210611-071327.jpg',
            'birthday' => '1998-05-11',
            'website' => 'https://www.linkedin.com/in/abdul-muiz-ahmed-0b0b3b1b0/',
            'phone' => '+923000000000',
            'city' => 'Karachi, Pakistan',
            'age' => '23',
            'degree' => 'Bachelor',
            'email' => 'rifaldibpn2@gmailcom',
            'freelance' => 'Available',
        ]);
    }
}
