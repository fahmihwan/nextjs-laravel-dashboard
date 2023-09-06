<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'email'    => 'required|email|min:5|max:191',
            'password' => 'required|string|min:8|max:255',
        ]);

        if ($validation->fails()) {
            $response['status'] = false;
            $response['message'] = 'Validation failed.';
            $response['data'] = $validation->errors();
            return response()->json($response, 422);
        } else {
            if (auth('web')->attempt($request->only('email', 'password'))) {
                $request->session()->regenerate();
                $response['status'] = true;
                $response['message'] = 'Login success.';
                return response()->json($response, 200);
            }
            $response['status'] = false;
            $response['message'] = 'Invalid authentication.';
            return response()->json($response, 400);
        }
    }

    public function me()
    {
        $user = auth('web')->user();

        $response = array(
            'status' => true,
            'message' => 'Get authenticated user success.',
            'data' => array(
                'name' => $user->name,
                'email' => $user->email,
            ),
        );

        return response()->json($response, 200);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $response = array(
            'status' => true,
            'message' => 'Logout success.',
        );

        return response()->json($response, 200);
    }
}
