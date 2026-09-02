<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // PERMISOS BASE
        $permissions = [
            // PERSONNEL
            ['name' => 'personnel.view', 'display_name' => 'Ver Personal'],
            ['name' => 'personnel.create', 'display_name' => 'Crear Personal'],
            ['name' => 'personnel.edit', 'display_name' => 'Editar Personal'],
            ['name' => 'personnel.toggle-status', 'display_name' => 'Activar o Desactivar Personal'],

            // USERS
            ['name' => 'users.view', 'display_name' => 'Ver Usuarios'],
            ['name' => 'users.create', 'display_name' => 'Crear Usuarios'],
            ['name' => 'users.edit', 'display_name' => 'Editar Usuarios'],
            ['name' => 'users.toggle-status', 'display_name' => 'Activar o Desactivar Usuarios'],

            // ROLES
            ['name' => 'roles.view', 'display_name' => 'Ver Roles'],
            ['name' => 'roles.create', 'display_name' => 'Crear Roles'],
            ['name' => 'roles.edit', 'display_name' => 'Editar Roles'],
            ['name' => 'roles.delete', 'display_name' => 'Eliminar Roles'],

            // POSITIONS
            ['name' => 'positions.view', 'display_name' => 'Ver Cargos'],
            ['name' => 'positions.create', 'display_name' => 'Crear Cargos'],
            ['name' => 'positions.edit', 'display_name' => 'Editar Cargos'],
            ['name' => 'positions.delete', 'display_name' => 'Eliminar Cargos'],
            ['name' => 'positions.toggle-status', 'display_name' => 'Activar o Desactivar Cargos'],

            // PERMISSIONS
            ['name' => 'permissions.view', 'display_name' => 'Ver Permisos'],
            ['name' => 'permissions.create', 'display_name' => 'Crear Permisos'],
            ['name' => 'permissions.edit', 'display_name' => 'Editar Permisos'],
            ['name' => 'permissions.delete', 'display_name' => 'Eliminar Permisos'],

    /*------------------------------------------------------------------------------------------------------------------------------------------*/

            // NOTICIAS
            ['name' => 'noticias.view', 'display_name' => 'Ver Noticias'],
            ['name' => 'noticias.create', 'display_name' => 'Crear Noticias'],
            ['name' => 'noticias.edit', 'display_name' => 'Editar Noticias'],
            ['name' => 'noticias.delete', 'display_name' => 'Eliminar Noticias'],
            ['name' => 'noticias.toggle-status', 'display_name' => 'Activar o Desactivar Noticias'],

            // GACETAS
            ['name' => 'gacetas.view', 'display_name' => 'Ver Gacetas'],
            ['name' => 'gacetas.create', 'display_name' => 'Crear Gacetas'],
            ['name' => 'gacetas.edit', 'display_name' => 'Editar Gacetas'],
            ['name' => 'gacetas.delete', 'display_name' => 'Eliminar Gacetas'],
            ['name' => 'gacetas.toggle-status', 'display_name' => 'Activar o Desactivar Gacetas'],

            // EVENTOS
            ['name' => 'eventos.view', 'display_name' => 'Ver Eventos'],
            ['name' => 'eventos.create', 'display_name' => 'Crear Eventos'],
            ['name' => 'eventos.edit', 'display_name' => 'Editar Eventos'],
            ['name' => 'eventos.delete', 'display_name' => 'Eliminar Eventos'],
            ['name' => 'eventos.toggle-status', 'display_name' => 'Activar o Desactivar Eventos'],

            // GABINETES
            ['name' => 'gabinetes.view', 'display_name' => 'Ver Gabinetes'],
            ['name' => 'gabinetes.create', 'display_name' => 'Crear Gabinetes'],
            ['name' => 'gabinetes.edit', 'display_name' => 'Editar Gabinetes'],
            ['name' => 'gabinetes.delete', 'display_name' => 'Eliminar Gabinetes'],
            ['name' => 'gabinetes.toggle-status', 'display_name' => 'Activar o Desactivar Gabinetes'],

            // PLANES
            ['name' => 'planes.view', 'display_name' => 'Ver Planes'],
            ['name' => 'planes.create', 'display_name' => 'Crear Planes'],
            ['name' => 'planes.edit', 'display_name' => 'Editar Planes'],
            ['name' => 'planes.delete', 'display_name' => 'Eliminar Planes'],
            ['name' => 'planes.toggle-status', 'display_name' => 'Publicar o Despublicar Planes'],

            // ESTADOS DE PLAN
            ['name' => 'estados-plan.view', 'display_name' => 'Ver Estados de Plan'],
            ['name' => 'estados-plan.create', 'display_name' => 'Crear Estados de Plan'],
            ['name' => 'estados-plan.edit', 'display_name' => 'Editar Estados de Plan'],
            ['name' => 'estados-plan.delete', 'display_name' => 'Eliminar Estados de Plan'],
            ['name' => 'estados-plan.toggle-status', 'display_name' => 'Activar o Desactivar Estados de Plan'],
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate(
                ['name' => $permission['name']],
                [
                    'display_name' => $permission['display_name'],
                    'guard_name' => 'web',
                ]
            );
        }

        // ROLES
        $superAdmin = Role::firstOrCreate([
            'name' => 'Super Admin',
            'guard_name' => 'web',
        ]);

        // Super Admin tiene todo
        $superAdmin->syncPermissions(Permission::all());
    }
}