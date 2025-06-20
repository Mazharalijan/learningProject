<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function dashboard()
    {
        // Pass settings to the dashboard if needed
        $settings = [
            'admin_panel_name' => Setting::getValue('admin_panel_name', 'Admin Panel'),
            'admin_panel_logo' => Setting::getValue('admin_panel_logo', null),
        ];
        return Inertia::render('Admin/Dashboard', [
            'settings' => $settings,
        ]);
    }

    // List users
    public function users()
    {
        $users = User::select('id', 'name', 'email', 'role', 'status', 'created_at')->orderBy('id')->get();
        $roles = ['admin', 'shopkeeper', 'user'];
        $statuses = ['Active', 'Inactive'];
        return Inertia::render('Admin/Users', [
            'users' => $users,
            'roles' => $roles,
            'statuses' => $statuses,
        ]);
    }

    // Show create user form (API: just return roles and statuses)
    public function createUser()
    {
        $roles = ['admin', 'shopkeeper', 'user'];
        $statuses = ['Active', 'Inactive'];
        return response()->json(['roles' => $roles, 'statuses' => $statuses]);
    }

    // Store new user
    public function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            'role' => 'required|in:admin,shopkeeper,user',
            'status' => 'required|in:Active,Inactive',
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'status' => $request->status,
        ]);
        return redirect()->route('admin.users')->with('success', 'User created successfully.');
    }

    // Show edit user form (API: just return user, roles, statuses)
    public function editUser(User $user)
    {
        $roles = ['admin', 'shopkeeper', 'user'];
        $statuses = ['Active', 'Inactive'];
        return response()->json(['user' => $user, 'roles' => $roles, 'statuses' => $statuses]);
    }

    // Update user
    public function updateUser(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:6|confirmed',
            'role' => 'required|in:admin,shopkeeper,user',
            'status' => 'required|in:Active,Inactive',
        ]);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->status = $request->status;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->save();
        return redirect()->route('admin.users')->with('success', 'User updated successfully.');
    }

    // Delete user
    public function deleteUser(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users')->with('success', 'User deleted successfully.');
    }

    public function settings()
    {
        $settings = [
            'admin_panel_name' => Setting::getValue('admin_panel_name', 'Admin Panel'),
            'admin_panel_logo' => Setting::getValue('admin_panel_logo', null),
        ];
        return Inertia::render('Admin/Settings', [
            'settings' => $settings,
        ]);
    }

    public function updateSettings(Request $request)
    {
        $request->validate([
            'admin_panel_name' => 'required|string|max:255',
            'admin_panel_logo' => 'nullable|image|max:2048',
        ]);

        Setting::setValue('admin_panel_name', $request->admin_panel_name);

        if ($request->hasFile('admin_panel_logo')) {
            $logo = $request->file('admin_panel_logo');
            $path = $logo->store('public/settings');
            $url = Storage::url($path);
            Setting::setValue('admin_panel_logo', $url);
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
} 