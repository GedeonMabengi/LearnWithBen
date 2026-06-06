<?php

namespace App\Http\Controllers;

use App\Models\ResourceModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadController extends Controller
{
    /**
     * Download a resource file if authorized.
     */
    public function show(Request $request, ResourceModel $resource): StreamedResponse
    {
        // Authorize using ResourcePolicy view
        Gate::authorize('view', $resource);

        $filePath = $resource->file_path;
        $disk = config('filesystems.default');

        if (!\Illuminate\Support\Facades\Storage::disk($disk)->exists($filePath)) {
            abort(404, 'File not found.');
        }

        return \Illuminate\Support\Facades\Storage::disk($disk)->download(
            $filePath,
            basename($filePath),
            ['Content-Type' => \Illuminate\Support\Facades\Storage::disk($disk)->mimeType($filePath)]
        );
    }
}
