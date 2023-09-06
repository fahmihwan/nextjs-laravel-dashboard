<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $response['status'] = true;
        $response['message'] = 'Get index students success.';
        foreach (Student::all() as $student) {
            $response['data']['students'][] = array(
                'id' => $student->id,
                'student_id' => $student->student_id,
                'name' => $student->name,
                'gender' => $student->gender,
                'address' => $student->address,
                'entry_year' => $student->entry_year,
            );
        }
        return response()->json($response, 200);
    }

    public function store(Request $request)
    {

        $student = Student::create([
            'student_id' => $request->student_id,
            'name' => $request->name,
            'gender' => $request->gender,
            'address' => $request->address,
            'entry_year' => $request->entry_year,
        ]);

        $response['status'] = true;
        $response['message'] = 'Student successfully added.';
        $response['data'] = array(
            'id' => $student->id,
            'student_id' => $student->student_id,
            'name' => $student->name,
            'gender' => $student->gender,
            'address' => $student->address,
            'entry_year' => $student->entry_year,
        );
        return response()->json($response, 201);
    }

    public function update(Request $request, Student $student)
    {
        $student->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'address' => $request->address,
            'entry_year' => $request->entry_year,
        ]);
        $response['status'] = true;
        $response['message'] = 'Student successfully updated.';
        $response['data'] = array(
            'id' => $student->id,
            'student_id' => $student->student_id,
            'name' => $student->name,
            'gender' => $student->gender,
            'address' => $student->address,
            'entry_year' => $student->entry_year,
        );
        return response()->json($response, 200);
    }

    public function destroy(Request $request, Student $student)
    {

        $student->delete();
        $response['status'] = true;
        $response['message'] = 'Student successfully removed.';
        return response()->json($response, 200);
    }
}
