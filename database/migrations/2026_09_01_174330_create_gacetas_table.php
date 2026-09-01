<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gacetas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('descripcion')->nullable();
            $table->string('archivo');
            $table->boolean('publicado')->default(false);

            $table->foreignId('created_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->unsignedBigInteger('updated_by')->nullable();

            $table->foreign('updated_by')
                ->references('id')
                ->on('users')
                ->nullOnDelete();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gacetas');
    }
};