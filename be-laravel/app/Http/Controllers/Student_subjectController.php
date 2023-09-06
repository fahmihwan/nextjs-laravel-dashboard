<?php

namespace App\Http\Controllers;

use App\Models\Student_subject;
use Illuminate\Http\Request;

class Student_subjectController extends Controller
{
    public function index()
    {
        $response['status'] = true;
        $response['message'] = 'Get index students success.';
        $response['data']['student_subjects'] = Student_subject::with(['student', 'subject'])->get();

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $student_subject = Student_subject::create([
            'student_id' => $request->student_id,
            'subject_id' => $request->subject_id,
        ]);

        $response['status'] = true;
        $response['message'] = 'Student subject successfully added.';
        $response['data'] = array(
            'student_id' => $student_subject->student_id,
            'name' => $student_subject->subject_id,
        );
        return response()->json($response, 201);
    }

    public function update(Request $request, Student_subject $student_subject)
    {
        $student_subject->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'address' => $request->address,
            'entry_year' => $request->entry_year,
        ]);
        $response['status'] = true;
        $response['message'] = 'Student subject successfully updated.';
        $response['data'] = array(
            'id' => $student_subject->id,
            'student_id' => $student_subject->student_id,
            'name' => $student_subject->subject_id,
        );
        return response()->json($response, 200);
    }

    public function destroy(Request $request, Student_subject $student_subject)
    {
        $student_subject->delete();
        $response['status'] = true;
        $response['message'] = 'Student subject successfully removed.';
        return response()->json($response, 200);
    }
}
