<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PersonnelController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\WebController;

use App\Http\Controllers\DashboardController;

use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\GacetaController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\GabineteController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\EstadoPlanController;

Route::get('/', [WebController::class, 'index'])->name('home');
Route::get('/planes', [WebController::class, 'planes'])->name('web.planes');

/*
|--------------------------------------------------------------------------
| Sistema
|--------------------------------------------------------------------------
*/

Route::prefix('sys')->group(function () {
    Route::get('/', function () {return redirect('/sys/login');});

    Route::middleware(['auth'])->group(function () {

        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::resource('personnel', PersonnelController::class);
        Route::patch('/personnel/{personnel}/toggle-status', [PersonnelController::class, 'toggleStatus'])->name('personnel.toggle-status');

        Route::resource('positions', PositionController::class);
        Route::patch('/positions/{position}/toggle-status', [PositionController::class, 'toggleStatus'])->name('positions.toggle-status');

        Route::resource('permissions', PermissionController::class);
        Route::resource('roles', RoleController::class);

        Route::resource('users', UserController::class);
        Route::patch('/users/{user}/toggle-status', [UserController::class, 'toggleStatus'])->name('users.toggle-status');

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

        Route::resource('noticias', NoticiaController::class);
        Route::patch('noticias/{noticia}/toggle-status', [NoticiaController::class, 'toggleStatus'])->name('noticias.toggle-status');

        Route::resource('gacetas', GacetaController::class);
        Route::patch('gacetas/{gaceta}/toggle-status', [GacetaController::class, 'toggleStatus'])->name('gacetas.toggle-status');

        Route::resource('eventos', EventoController::class);
        Route::patch('eventos/{evento}/toggle-status', [EventoController::class, 'toggleStatus'])->name('eventos.toggle-status');

        // Route::resource('gabinetes', GabineteController::class);

        Route::resource('planes', PlanController::class)->parameters(['planes' => 'plan']);
        Route::patch('planes/{plan}/toggle-status', [PlanController::class, 'toggleStatus'])->name('planes.toggle-status');
        Route::resource('estados-plan', EstadoPlanController::class)->parameters(['estados-plan' => 'estado_plan']);
        Route::patch('estados-plan/{estado_plan}/toggle-status', [EstadoPlanController::class, 'toggleStatus'])->name('estados-plan.toggle-status');
    });

    require __DIR__.'/auth.php';
    require __DIR__.'/settings.php';
});