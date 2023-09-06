<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function get() {
        $user = auth('web')->user();
        $response = array(
            'status' => true,
            'message' => 'Get my profile success.',
            'data' => array(
                'name' => $user->name,
                'email' => $user->email,
            ),
        );
        return response()->json($response, 200);
    }

    public function update(Request $request) {
        $user = auth('web')->user();
        $user->update([
            'name' => $request->name,
        ]);
        $response = array(
            'status' => true,
            'message' => 'My profile successfully updated.',
            'data' => array(
                'name' => $user->name,
                'email' => $user->email,
            ),
        );
        return response()->json($response, 200);
    }

    public function change(Request $request) {
        $user = auth('web')->user();
        $user->update([
            'password' => Hash::make($request->password),
        ]);
        $response = array(
            'status' => true,
            'message' => 'My password successfully changed.',
            'data' => array(
                'name' => $user->name,
                'email' => $user->email,
            ),
        );
        return response()->json($response, 200);
    }
}
