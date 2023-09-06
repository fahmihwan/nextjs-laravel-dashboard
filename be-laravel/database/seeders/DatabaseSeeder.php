<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\Student;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'name' => 'Ahmad Admin',
            'email' => 'ahmad@bukanadmin.po',
            'password' => Hash::make('QwErTy!2#'),
        ]);

        Student::create([
            'student_id' => '16544998',
            'name' => 'Agustian Agus',
            'gender' => 'male',
            'address' => fake()->address,
            'entry_year' => 2016,
        ]);
        Student::create([
            'student_id' => '175324001',
            'name' => 'Budiman Budi',
            'gender' => 'male',
            'address' => fake()->address,
            'entry_year' => 2017,
        ]);
        Student::create([
            'student_id' => '18723811',
            'name' => 'Cantika Caca',
            'gender' => 'female',
            'address' => fake()->address,
            'entry_year' => 2018,
        ]);
        Student::create([
            'student_id' => '19234441',
            'name' => 'Diana Dina',
            'gender' => 'female',
            'address' => fake()->address,
            'entry_year' => 2019,
        ]);
    }
}
