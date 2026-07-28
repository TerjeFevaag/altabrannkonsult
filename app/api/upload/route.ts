import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          // Wildcarded to image/* so jpg/png/gif/webp all match, plus pdf and a broad
          // fallback for CAD formats (dwg/dxf) — browsers rarely report a consistent
          // MIME type for those, often sending an empty string or octet-stream instead.
          // The file input's accept attribute and the client-side extension check are
          // the actual gatekeepers for file type; this list just needs to not reject them.
          allowedContentTypes: [
            'application/pdf',
            'image/*',
            'application/octet-stream',
            'application/acad',
            'application/x-acad',
            'application/dxf',
            'image/vnd.dwg',
            'image/vnd.dxf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
          maximumSizeInBytes: 20 * 1024 * 1024,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        // No follow-up action needed — the contact form sends the resulting URL itself.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    )
  }
}
