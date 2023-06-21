<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Skill::create([
            'name' => 'HTML',
            'percentage' => '90',
        ]);

        Skill::create([
            'name' => 'CSS',
            'percentage' => '90',
        ]);

        Skill::create([
            'name' => 'JavaScript',
            'percentage' => '80',
        ]);

        Skill::create([
            'name' => 'PHP',
            'percentage' => '80',
        ]);

        Skill::create([
            'name' => 'Laravel',
            'percentage' => '80',
        ]);

        Skill::create([
            'name' => 'CodeIgniter',
            'percentage' => '80',
        ]);
    }
}
