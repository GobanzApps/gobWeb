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

use App\Http\Controllers\GobernacionController;
use App\Http\Controllers\AcercaDeNosotrosController;

Route::get('/', [WebController::class, 'index'])->name('home');
Route::get('/planes', [WebController::class, 'planes'])->name('web.planes');
Route::get('/noticias', [WebController::class, 'noticias'])->name('web.noticias');
Route::get('/noticias/{noticia}', [WebController::class, 'noticia'])->name('web.noticia');
Route::get('/eventos', [WebController::class, 'eventos'])->name('web.eventos');
Route::get('/eventos/{evento}', [WebController::class, 'evento'])->name('web.evento');

// Gobernación
Route::get('/gobernacion', [GobernacionController::class, 'index'])->name('web.gobernacion');
Route::get('/gobernacion/entes-adscritos', [GobernacionController::class, 'entesAdscritos'])->name('web.entes-adscritos');
// Route::get('/gobernacion/gabinetes', [GobernacionController::class, 'gabinetes'])->name('web.gabinetes');
Route::get('/gobernacion/gacetas', [GobernacionController::class, 'gacetas'])->name('web.gacetas');

Route::get('/acerca-de-nosotros/el-estado/historia', [AcercaDeNosotrosController::class, 'historia'])->name('web.acerca.historia');
Route::get('/acerca-de-nosotros/el-estado/mandatos', [AcercaDeNosotrosController::class, 'mandatos'])->name('web.acerca.mandatos');
Route::get('/acerca-de-nosotros/el-estado/geografia', [AcercaDeNosotrosController::class, 'geografia'])->name('web.acerca.geografia');
Route::get('/acerca-de-nosotros/el-estado/efemerides', [AcercaDeNosotrosController::class, 'efemerides'])->name('web.acerca.efemerides');

// Símbolos Patrimoniales
Route::get('/acerca-de-nosotros/simbolos-patrimoniales/bandera', [AcercaDeNosotrosController::class, 'bandera'])->name('web.acerca.bandera');
Route::get('/acerca-de-nosotros/simbolos-patrimoniales/escudo', [AcercaDeNosotrosController::class, 'escudo'])->name('web.acerca.escudo');
Route::get('/acerca-de-nosotros/simbolos-patrimoniales/himno', [AcercaDeNosotrosController::class, 'himno'])->name('web.acerca.himno');

// Naturaleza
Route::get('/acerca-de-nosotros/naturaleza/flora-y-vegetacion', [AcercaDeNosotrosController::class, 'floraYVegetacion'])->name('web.acerca.flora-vegetacion');
Route::get('/acerca-de-nosotros/naturaleza/recursos-minerales', [AcercaDeNosotrosController::class, 'recursosMinerales'])->name('web.acerca.recursos-minerales');
Route::get('/acerca-de-nosotros/naturaleza/lagunas-y-rios', [AcercaDeNosotrosController::class, 'lagunasRios'])->name('web.acerca.lagunas-rios');
Route::get('/acerca-de-nosotros/naturaleza/islas-y-bahias', [AcercaDeNosotrosController::class, 'islasBahias'])->name('web.acerca.islas-bahias');

// Cultura
Route::get('/acerca-de-nosotros/cultura/costumbres-y-tradiciones', [AcercaDeNosotrosController::class, 'costumbresTradiciones'])->name('web.acerca.costumbres-tradiciones');
Route::get('/acerca-de-nosotros/cultura/bailes', [AcercaDeNosotrosController::class, 'bailes'])->name('web.acerca.bailes');
Route::get('/acerca-de-nosotros/cultura/plazas', [AcercaDeNosotrosController::class, 'plazas'])->name('web.acerca.plazas');
Route::get('/acerca-de-nosotros/cultura/sitios-historicos', [AcercaDeNosotrosController::class, 'sitiosHistoricos'])->name('web.acerca.sitios-historicos');

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