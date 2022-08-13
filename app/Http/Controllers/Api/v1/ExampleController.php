<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Example;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    /**
     * Return the examples.
     */
    public function index(Request $request)
    {
        return Example::all();
    }

    public function count()
    {
        return Example::count();
    }

    /**
     * Return the specified resource.
     */
    public function show(Example $example)
    {
        return $example;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Example $example)
    {
        // $this->authorize('update', $lesson);
        $request->validate([
            'title' => 'required',
            'lesson' => 'required',
            'content' => 'required',
        ]);

        $example->update($request->only(['title', 'lesson', 'content']));

        return $example;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $this->authorize('store', Lesson::class);
        $request->validate([
            'title' => 'required',
            'lesson' => 'required',
            'content' => 'required',
        ]);
        return Example::create($request->only(['title', 'lesson', 'content']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Example $example)
    {
        // $this->authorize('delete', $post);
        $example->delete();

        return response()->noContent();
    }
}
