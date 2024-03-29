<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LessonsRequest;
use Illuminate\Http\Request;
use App\Http\Resources\Lesson as LessonResource;
use App\Models\Example;
use App\Models\Lesson;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class LessonController extends Controller
{
    /**
     * Return the lessons.
     */
    public function index(Request $request): ResourceCollection
    {
        // return LessonResource::collection(
        //     Lesson::all()->withCount('comments')->latest()
        //         ->paginate(20)
        // );

        return LessonResource::collection(
            Lesson::search($request->input('q'))->withCount('comments')->latest()->paginate($request->input('limit', 20))
        );
    }
    /**
     * return the count
     */
    public function count()
    {
        return Lesson::count();
    }

    /**
     * upload image
     */
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
        ]);

        $originalName = $request->file('image')->getClientOriginalName();
        $imageName = $originalName . time() . '-' . '.'.  $request->image->extension();

        // $request->image->move(public_path('uploads'), $imageName);
        // $url = env('APP_URL') . 'uploads/' . $imageName;
        $path = $request->file('image')->store('images', 's3');
        $url = env('AWS_URL') . $path;

        $response = [
            "success" => 1,
            "file" => [
                "url" => $url
            ]
        ];

        return response($response);

    }

    /**
     * Return the specified resource.
     */
    public function show(Lesson $lesson): LessonResource
    {
        return new LessonResource($lesson);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LessonsRequest $request, Lesson $lesson): LessonResource
    {
        // $this->authorize('update', $lesson);
        $lesson->update($request->only(['title', 'content', 'posted_at', 'author_id', 'course']));

        return new LessonResource($lesson);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LessonsRequest $request): LessonResource
    {
        // $this->authorize('store', Lesson::class);
        return new LessonResource(
            Lesson::create($request->only(['title', 'content', 'posted_at', 'author_id', 'course', 'slug']))
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lesson $lesson)
    {
        // $this->authorize('delete', $post);

        $lesson->delete();

        return response()->noContent();
    }

    /**
     * return all lesson example
     */
    public function examples(Lesson $lesson)
    {
        $examples = $lesson->examples()->get();
        return $examples;
    }
}
