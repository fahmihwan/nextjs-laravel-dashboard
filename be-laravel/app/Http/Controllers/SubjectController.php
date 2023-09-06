<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index()
    {
        $response['status'] = true;
        $response['message'] = 'Get index subject success.';
        foreach (Subject::all() as $subject) {
            $response['data']['subjects'][] = array(
                'id' => $subject->id,
                'name' => $subject->name,
                'credits' => $subject->credits
            );
        }
        return response()->json($response, 200);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required',
            'credits' => 'required'
        ]);

        $subject = Subject::create($validated);
        $response['status'] = true;
        $response['message'] = 'Subject successfully added.';
        $response['data'] = array(
            'id' => $subject->id,
            'name' => $subject->name,
            'credits' => $subject->credits,
        );
        return response()->json($response, 201);
    }

    public function update(Request $request, Subject $subject)
    {
        $request->validate([
            'name' => 'required',
            'credits' => 'required'
        ]);

        $subject->update([
            'name' => $request->name,
            'credits' => $request->credits
        ]);

        $response['status'] = true;
        $response['message'] = 'Subject successfully added.';
        $response['data'] = array(
            'id' => $subject->id,
            'name' => $subject->name,
            'credits' => $subject->credits,
        );
        return response()->json($response, 200);
    }

    public function destroy(Request $request, $id)
    {
        Subject::destroy($id);
        // $subject->delete();
        $response['status'] = true;
        $response['message'] = 'Subject successfully removed.';
        return response()->json($response, 200);
    }
}
