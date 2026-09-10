<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('planes', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion_corta', 60);
            $table->text('descripcion');

            $table->string('imagen_portada')->nullable();

            $table->foreignId('estado_id')
                ->constrained('estados_plan')
                ->restrictOnDelete();

            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_estimada_finalizacion')->nullable();
            $table->string('ubicacion')->nullable();
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
        Schema::dropIfExists('planes');
    }
};