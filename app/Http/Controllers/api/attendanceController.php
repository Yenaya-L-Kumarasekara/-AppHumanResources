<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\domain\attendance;
use Illuminate\Http\Request;

class attendanceController extends Controller
{   

    public function index()
    {
        $attendance = attendance::select('name','checkin','checkout')->get();

        return response()->json(
            $attendance
        );
    }

    public function store(Request $request)
    {
        if($request -> isMethod('post')){
            $attendance = $request->input();

            foreach($attendance as $key => $value){
                $attendance = new attendance;
                $attendance->name = $value['name'];
                $attendance->checkin = $value['checkin'];
                $attendance->checkout = $value['checkout'];
                $attendance->save();
            }

            return response()->json([
            'status' => 200,
            'message' => 'attendance Added Successfully',
        ]);
        }
    }
}