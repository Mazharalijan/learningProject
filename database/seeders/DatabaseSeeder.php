<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Truncate users table
        User::truncate();

        // 1 Admin
        User::create([
            'name' => 'Admin 1',
            'email' => 'admin1@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        // 10 Shopkeepers
        for ($i = 1; $i <= 10; $i++) {
            User::create([
                'name' => "Shopkeeper $i",
                'email' => "shopkeeper$i@example.com",
                'password' => Hash::make('password'),
                'role' => 'shopkeeper',
            ]);
        }

        // 20 Users
        for ($i = 1; $i <= 20; $i++) {
            User::create([
                'name' => "User $i",
                'email' => "user$i@example.com",
                'password' => Hash::make('password'),
                'role' => 'user',
        ]);
        }
    }
}
