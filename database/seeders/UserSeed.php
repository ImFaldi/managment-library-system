<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
            'role' => 'admin',
            'phone' => '081234567890'
        ]);

        User::create([
            'name' => 'Receptionist',
            'email' => 'res@gmail.com',
            'password' => bcrypt('recepsionist'),
            'role' => 'receptionist',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'BookMember',
            'email' => 'member@gmail.com',
            'password' => bcrypt('member'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Member',
            'email' => 'mem@gmail.com',
            'password' => bcrypt('member'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Agus',
            'email' => 'gus@gmail.com',
            'password' => bcrypt('agus'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Budi',
            'email' => 'bud@gmail.com',
            'password' => bcrypt('budi'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Caca',
            'email' => 'caca@gmail.com',
            'password' => bcrypt('caca'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Dedi',
            'email' => 'ded@gmail.com',
            'password' => bcrypt('dedi'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Eko',
            'email' => 'eko@gmail.com',
            'password' => bcrypt('eko'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);

        User::create([
            'name' => 'Fajar',
            'email' => 'jar@gmail.com',
            'password' => bcrypt('fajar'),
            'role' => 'member',
            'phone' => '081134567890'
        ]);
    }
}
