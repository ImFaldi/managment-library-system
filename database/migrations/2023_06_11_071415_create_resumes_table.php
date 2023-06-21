<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('sub_title')->nullable();
            $table->text('description');
            $table->foreignId('about_me_id')->constrained('about_mes')
            ->onDelete('cascade')
            ->onUpdate('cascade')
            ->nullable();
            $table->year('start_year')->nullable();
            $table->year('end_year')->nullable();
            $table->string('company')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
