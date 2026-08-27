<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('imagenes', function (Blueprint $table) {
            $table->id();
            $table->string('imageable_type');
            $table->unsignedBigInteger('imageable_id');
            $table->string('nombre_original');
            $table->string('archivo');
            $table->string('alt_text')->nullable();
            $table->unsignedInteger('orden')->default(0);

            $table->foreignId('created_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->timestamps();

            $table->index(['imageable_type', 'imageable_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('imagenes');
    }
};